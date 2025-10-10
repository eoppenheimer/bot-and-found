import fs from "fs/promises";
import path from "path";
import { IActivityMeta, ICollectionCommit, ICollectionMeta, activityMetaModel, collectionCommitModel, collectionMetaModel } from "../../models";
import { ObjectId } from "mongodb";
import { RangeInt, recurseCollection } from "../../utils";

type Grade = RangeInt<0,8>;





export interface BoostRoot {
    collectionId: ObjectId;
    grades: BoostGrade[];
}

interface BoostGrade {
    grade: Grade;
    collectionId: ObjectId;
    units: BoostUnit[];
}

interface BoostUnit {
    unit: number;
    collectionId: ObjectId;
    activites: BoostActivity[];
}

interface BoostActivity {
    activityId: ObjectId;
    commitId?: ObjectId;
    title: string;
    doc?: any;
}





/** Converts a string to a grade value from 0 to 8. */
function convertToGrade(gradeString: string) {
    const grade = gradeString === "K" ? 0 : parseInt(gradeString) as Grade;
    if (0 <= grade && grade <= 8) return grade;
    throw Error(`Failed to convert grade ${JSON.stringify(gradeString)}. Expected only K8.`);
}

export class BoostImportService {

    async getBoostMasterCollection() {

        const {AMPLIFY_COLLECTION_BOOST_PERSONALIZED_LEARNING_MASTER} = process.env;
        if (!AMPLIFY_COLLECTION_BOOST_PERSONALIZED_LEARNING_MASTER) throw Error("Missing AMPLIFY_COLLECTION_BOOST_PERSONALIZED_LEARNING_MASTER from env file.");

        const _id = new ObjectId(AMPLIFY_COLLECTION_BOOST_PERSONALIZED_LEARNING_MASTER);

        /** List of each grade ID. */
        const listGrades: ObjectGrade[] = [];
        type ObjectGrade = {collectionId: ObjectId, units: {id: ObjectId, objUnit?: ObjectUnit}[], gradeNumber?: Grade};
        
        /** List of each unit ID. */
        type ObjectUnit = {collectionId: ObjectId, activities: {id: ObjectId, objActivity?: ObjectActivity}[], unitNumber?: number};

        /** List of each activity ID. */
        type ObjectActivity = {activityId: ObjectId, commitId: ObjectId; subunitNumber?: number, lessonNumber?: number};

        

        await recurseCollection(_id, [

            // Depth 1: sBPL [Master] Entry.
            [commitList => {

                /** The next collection IDs to iterate upon depth 2. */
                const collectionIds: ObjectId[] = [];
                
                for (const commit of commitList) {

                    const {metaId, title} = commit;

                    if (title !== "sBPL [Master]") throw Error(`Collection ${metaId}: Expected collection named "sBPL [Master]", but found ${JSON.stringify(commit.title)} instead.`);

                    // For each child of this collection:
                    for (const item of commit.items) {

                        // Grab the child collection.
                        if (item.type === "subcollection") {
                            collectionIds.push(item.collectionId);
                            listGrades.push({collectionId: item.collectionId, units: []});
                        }

                        // Verify there are no activities or dividers.
                        else if (item.type === "collection-activity") throw Error(`Collection ${metaId}: Found an activity ${item.activityId}. There shouldn't exist any activities nor dividers here.`);
                        else if (item.type === "collection-section-divider") throw Error(`Collection ${metaId}: Found a divider. There shouldn't exist any dividers nor activities here.`);

                    }

                    // Log the title.
                    console.log(1, title);

                    // Verify the collection length.
                    if (collectionIds.length !== 10) throw Error(`Collection ${metaId}: Expected 10 collections, but found ${collectionIds.length} instead. ${collectionIds.toString()}`);
                }

                return {collectionIds};
            }],

            // Depth 2: Grade K8 [BPL] Collection
            [commitList => {

                /** The next collection IDs to iterate upon depth 3. */
                const collectionIds: ObjectId[] = [];

                for (const commit of commitList) {
                    
                    const {metaId, title} = commit;

                    if (title === "Stater Screens & Activities") continue;

                    /** Gets the match of the grade title. */
                    const regex = /^Grade ([K1-8]) \[BPL\]$/;
                    const match = title.match(regex);
                    if (!match) throw Error(`Collection ${metaId}: Expected to match ${regex}, but instead provided ${JSON.stringify(title)}.`);
                    /** Grade of this collection. */
                    const grade = convertToGrade(match[1]);

                    /** Attach this to the parent entry. */
                    const parent = listGrades.find(x=>x.collectionId.equals(metaId));
                    if (!parent) throw Error(`Collection ${metaId}: Critically failed to grab parent ID.`);
                    parent.gradeNumber = grade;
                    
                    // For each child of this collection:
                    for (const item of commit.items) {

                        // Grab the child collection.
                        if (item.type === "subcollection") {
                            collectionIds.push(item.collectionId);
                            parent.units.push({id: item.collectionId});
                        }

                        // Verify there are no activities or dividers.
                        else if (item.type === "collection-activity") throw Error(`Collection ${metaId}: Found an activity ${item.activityId}. There shouldn't exist any activities nor dividers here.`);
                        else if (item.type === "collection-section-divider") throw Error(`Collection ${metaId}: Found a divider. There shouldn't exist any dividers nor activities here.`);

                    }

                    console.log(2, title);
                }

                return {collectionIds};
            }],

            // Depth 3: Grade K8.1 [BPL] Collection
            [commitList => {

                /** The next collection IDs to iterate upon depth 4. */
                const collectionIds: ObjectId[] = [];
                /** The final activity IDs to retrieve. */
                const activityIds: ObjectId[] = [];

                for (const commit of commitList) {

                    const {metaId, title} = commit;

                    /** Gets the match of the grade title. */
                    const regex = /^Grade ([K1-8])\.(\d) \[BPL\]$/;
                    const match = title.match(regex);
                    if (!match) throw Error(`Collection ${metaId}: Expected to match ${regex}, but instead provided ${JSON.stringify(title)}.`);
                    /** Unit of this collection. */
                    const unit = parseInt(match[2]);

                    /** Attach this to the parent entry. */
                    const parent = listGrades.flatMap(x=>x.units).find(x=>x.id.equals(metaId));
                    if (!parent) throw Error(`Collection ${metaId}: Critically failed to grab parent ID.`);
                    parent.objUnit = {collectionId: metaId, unitNumber: unit, activities: []};

                    // For each child of this collection:
                    for (const item of commit.items) {

                        // Grab the child activity.
                        if (item.type === "collection-activity") {
                            activityIds.push(item.activityId);
                            parent.objUnit.activities.push({id: item.activityId});
                        }

                        // Verify there are no subcollections or dividers.
                        else if (item.type === "subcollection") throw Error(`Collection ${metaId}: Found a subcollection ${item.collectionId}. There shouldn't exist any subcollections nor dividers here.`);
                        else if (item.type === "collection-section-divider") throw Error(`Collection ${metaId}: Found a divider. There shouldn't exist any dividers nor subcollections here.`);
                    }

                    console.log(3, commit.title);
                }

                return {collectionIds,activityIds};
            },
            metadataList => {
                for (const metadata of metadataList) {

                    const metaId = metadata._id;
                    const {commitId} = metadata;

                    if (!commitId) throw Error(`Collection ${metaId}: Critically failed to grab commitId.`);

                    /** Attach this to the parent entry. */
                    const parent = listGrades.flatMap(x=>x.units).flatMap(x=>x.objUnit).flatMap(x=>x?.activities).find(x=>x?.id.equals(metaId));
                    if (!parent) throw Error(`Collection ${metaId}: Critically failed to grab parent ID.`);
                    
                    parent.objActivity = {activityId: metaId, commitId};
                }
                
            }]
        ]);

        for (const grade of listGrades) {
            for (const a of grade.units) {
                if (!a.objUnit) continue;
                const unit = a.objUnit;
                for (const b of unit.activities) {
                    if (!b.objActivity) continue;
                    const activity = b.objActivity;
                    
                    console.log(grade.gradeNumber, unit.unitNumber, activity);
                }
            }
        }
    }
}
