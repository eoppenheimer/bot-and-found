import { IActivityMeta, IActivityModel, ICollectionCommit, ICollectionMeta, activityCommitModel, activityMetaModel, activityModel, collectionCommitModel, collectionMetaModel } from "../../models";
import { ObjectId } from "mongodb";
import { RangeInt, recurseCollection, areUint8ArraysEqual } from "../../utils";

type Grade = RangeInt<0,8>;

const REGEX_TITLE = /^G([K1-8])\.U(\d+)\.SU?(\d+)\.L(\d+) (?:\(s?BPL\)|\[s?BPL\])$/;




export interface BoostGrade {
    gradeNumber?: Grade;
    collectionId: ObjectId;
    units: BoostUnit[];
}

interface BoostUnit {
    unitNumber?: number;
    collectionId: ObjectId;
    activities: BoostActivity[];
}

interface BoostActivity {
    subunitNumber?: number;
    lessonNumber?: number;
    activityId: ObjectId;
    commitId?: ObjectId;
    metadata?: IActivityMeta;
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
        const listGrades: BoostGrade[] = [];

        // Perform each of these steps as we descend along 
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
                            parent.units.push({collectionId: item.collectionId, activities: []});
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
                    const parent = listGrades.flatMap(x=>x.units).find(x=>x.collectionId.equals(metaId));
                    if (!parent) throw Error(`Collection ${metaId}: Critically failed to grab parent ID.`);
                    parent.unitNumber = unit;

                    // For each child of this collection:
                    for (const item of commit.items) {

                        // Grab the child activity.
                        if (item.type === "collection-activity") {
                            activityIds.push(item.activityId);
                            parent.activities.push({activityId: item.activityId});
                        }

                        // Verify there are no subcollections or dividers.
                        else if (item.type === "subcollection") throw Error(`Collection ${metaId}: Found a subcollection ${item.collectionId}. There shouldn't exist any subcollections nor dividers here.`);
                        else if (item.type === "collection-section-divider") throw Error(`Collection ${metaId}: Found a divider. There shouldn't exist any dividers nor subcollections here.`);
                    }

                    console.log(3, commit.title);
                }

                console.log(/Searchng/, activityIds.length, /activities./);
                return {collectionIds, activityIds};
            },

            // Grab the metadata of the activities collected.
            metadataList => {
                console.log(/Received/, metadataList.length, /activities./);
                for (const metadata of metadataList) {

                    const metaId = metadata._id;
                    const {commitId} = metadata;

                    if (!commitId) throw Error(`Collection ${metaId}: Critically failed to grab commitId.`);

                    /** Attach this to the parent entry. */
                    const parent = listGrades.flatMap(x=>x.units).flatMap(x=>x.activities).find(x=>x.activityId.equals(metaId));
                    if (!parent) throw Error(`Collection ${metaId}: Critically failed to grab parent ID.`);
                    
                    parent.commitId = commitId;
                    parent.metadata = metadata;
                }
                
            }]
        ]);
        

        // The collections are now collected!
        // Now let's sanitize everything once and for all!
        for (const grade of listGrades) {
            if (grade.gradeNumber === undefined) {
                console.log(/grade/, grade.collectionId, /skipped, no gradeNumber/);
                continue;
            }
            for (const unit of grade.units) {
                if (unit.unitNumber === undefined) {
                    console.log(/grade/, grade.gradeNumber, unit.collectionId, /skipped, no unitNumber/);
                    continue;
                }
                for (const activity of unit.activities) {
                    const {activityId, commitId, metadata} = activity;
                    if (commitId === undefined || metadata === undefined) {
                        console.log(/grade/, grade.gradeNumber, /unit/, unit.unitNumber, activity.activityId, /skipped, no commitId/);
                        continue;
                    }

                    /** Does this model already exist in our local database? If so, retrieve its commit ID. */
                    let model = activityModel.findOne(activityId.id);

                    
                    // Does this model either not exist, or does it require to be updated?
                    if (!model || !areUint8ArraysEqual(commitId.id, model.idCommit)) {
                        const action = model ? "Updating" : "Downloading";
                        console.log("⏳", action, [activityId.toHexString()]);

                        /** Download the latest version. */
                        const commit = await activityCommitModel.findOne({_id: commitId});

                        // If there exists no commit, something has gone terribly wrong that I'd like to halt everything.
                        if (!commit) throw Error(`Activity ${activityId}: Failed to fetch its commit ${commitId}. This is fatal enough to investigate how this slipped through.`);

                        const activityData = {
                            id: activityId.id,
                            idCommit: commitId.id,
                            timestampSnapshot: commit.edit_ts,
                            categories: ["bplMasterCollection"],
                            metaSnapshot: metadata,
                            commitSnapshot: commit
                        } satisfies IActivityModel;

                        if (model) activityModel.overwrite(activityData);
                        else activityModel.create(activityData);

                        model = activityData;
                    }
                    else {
                        // Skipping, this already exists.
                    }

                    const {title} = model.commitSnapshot.doc;
                    const match = title.match(REGEX_TITLE);

                    if (!match) {
                        console.log(/grade/, grade.gradeNumber, /unit/, unit.unitNumber, activity.activityId, /bad match/, title);
                        continue;
                    }
                    
                    const parsed = match.map(x=>parseInt(x));

                    const _convertedGrade = convertToGrade(match[1]);
                    console.log(_convertedGrade, parsed[2], parsed[3], parsed[4], title);                    

                    if (grade.gradeNumber !== _convertedGrade || unit.unitNumber !== parsed[2]) {
                        throw Error(`Collection ${_id}: Found lesson placed in wrong folder. Expected G${grade.gradeNumber}.U${unit.unitNumber} but got G${_convertedGrade}.U${parsed[2]} instead.`);
                    }

                    const positionCollection = unit.activities.indexOf(activity);
                    
                }
            }
        }

        console.log("Done!");
    }
}
