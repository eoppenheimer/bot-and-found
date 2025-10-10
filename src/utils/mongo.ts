import { ObjectId } from "mongodb";
import { activityMetaModel, collectionCommitModel, collectionMetaModel, IActivityMeta, ICollectionCommit, ICollectionMeta } from "../models";

/** The result returned after each recursion, to motivate the subsequent recursion afterwards. */
type RecurseResult = {
    /** The collection IDs to use for the next recursion. */
    collectionIds: ObjectId[],
    /** The optional activity IDs to fetch immediately. */
    activityIds?: ObjectId[]
}

/**
 * This contains two callbacks. The first callback is to be executed for each collection commit.
 * 
 * The second is optional, and it is executed once the recursion is complete.
*/
type RecurseCallback = {
    /**
     * Execute this function after collecting a list of collection commits.
     * @param commitList The collection IDs to use for the next recursion.
     * @returns The result to be assessed for the next recursion.
     */
    0: (commitList: ICollectionCommit[]) => RecurseResult;
    /**
     * Execute this function after supplying it activity IDs from the prior function.
     * @param metadataList The activity metadata IDs to be assessed in bulk.
     * @returns None. This cannot recurse quickly.
     */
    1?: (metadataList: IActivityMeta[]) => void;
};


/**
 * Performs the recursion to descend into an Amplify Education collection.
 * @param idCollectionMetaEntry The result of our previous iteration.
 * @param callbacks The callback functions to be executed for each iteration. For each entry, `[0]` stores what to do for all the `collectionId`'s you encounter, and `[1]` stores what to do for all `activityId`'s of the `[0]` result.
*/
export async function recurseCollection(idCollectionMetaEntry: ObjectId, callbacks: RecurseCallback[]) {

    await _recurseCollection({
        collectionIds: [idCollectionMetaEntry]
    }, callbacks);

    console.log("✅ Finished recursing", callbacks.length, `iteration${callbacks.length===1?"":"s"} on`, idCollectionMetaEntry);
    return;
}

/**
 * Performs the recursion to descend into a collection.
 * @param previousResult The result of our previous iteration.
 * @param remainingCallbacks The callback functions that have yet to be executed.
*/
async function _recurseCollection(previousResult: RecurseResult, remainingCallbacks: RecurseCallback[]) {
    
    // Base case for the recursion. If there are no IDs to scan, then stop.
    if (previousResult.collectionIds.length === 0 || remainingCallbacks.length === 0) return;
    
    /** Cursor for collection metadata. */
    const metaCursor = await collectionMetaModel.find({_id: {$in: previousResult.collectionIds}});
    /** Metadatas found from the previous result. */
    const metadata: ICollectionMeta[] = [];
    for await (const m of metaCursor) metadata.push(m);

    /** Cursor for collection commit. */
    const commitCursor = await collectionCommitModel.find({_id: {$in: metadata.map(x=>x.commitId)}});
    /** Commits found from the previous result. */
    const commit: ICollectionCommit[] = [];
    for await (const c of commitCursor) commit.push(c);

    /** Callback used for this iteration. */
    const ourCallback = remainingCallbacks[0];
    /** Function used to get our collections. */
    const functionToRunForCollections = ourCallback[0];
    /** Function used to get our activities. */
    const functionToRunForActivities = ourCallback[1];

    /** Executes the current commit result given our callback function. */
    const result = functionToRunForCollections(commit);

    // If a function exists for the activity metadata IDs then perform it.
    if (functionToRunForActivities && result.activityIds) {

        /** Cursor for activity metadata. */
        const activityCursor = await activityMetaModel.find({_id: {$in: result.activityIds}});
        /** Activity metadatas found from the current result. */
        const activityMetadata: IActivityMeta[] = [];
        for await (const m of activityCursor) activityMetadata.push(m);

        // Executes our callback function for just the activity metadata.
        functionToRunForActivities(activityMetadata);
    }

    await _recurseCollection(result, remainingCallbacks.slice(1));
}