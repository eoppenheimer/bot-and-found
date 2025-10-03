import app from "./app";
import dotenv from "dotenv";
import fs from "fs/promises";
import promptSync from "prompt-sync";
import {mongoConnection, ObjectId, sqliteConnection} from "./config";
import { activityModel, abItemCommitModel, abItemMetaModel, activityCommitModel, activityMetaModel, collectionCommitModel, collectionMetaModel } from "./models";
dotenv.config();


const prompt = promptSync();

const PORT = process.env.PORT || 8080;


app.listen(PORT, async () => {
    console.log(`Server is running on http://localhost:${PORT}`);

    let i = 0;
    for await (const metadata of await activityMetaModel.find({})) {
        break;
        i++;

        if (metadata.deleted) {
            console.log(/deleted/);
            continue;
        };

        const {commitId} = metadata;
        if (!commitId) {
            console.log(/fucked up, continuing/);
            continue;
        }

        const commit = await activityCommitModel.findOne({_id: commitId});
        if (!commit) {
            console.log(/fucked up, continuing/);
            continue;
        }


        try {
            
            activityModel.create({
                id: metadata._id.id,
                idCommit: commitId.id,
                timestamp: commit.edit_ts,
                categories: ["hello"],
                metaSnapshot: metadata,
                commitSnapshot: commit
            });
        }
        catch (err) {
            console.log("failed to create", metadata._id.id, `${err}`);
        }


        console.log(metadata._id);
        if (i > 25) break;
    }

    const ids = [];
    const blobs = ids.map(x => (new ObjectId(x)).id);

    console.time("begin");

    
    for (const entry of activityModel.find(blobs)) {
    //for (const entry of activityModel.find(blobs, ["id", "idCommit", "timestamp", "categories"])) {
        
        continue;
        const activity = entry.commitSnapshot.doc;

        for (const step of activity.steps) {
            for (const a of step.root.linearlayout.components) {
                for (const b of a.linearlayout.components) {
                    const text = b["exhibit/text"];
                    if (text) {
                        if (!text.text) continue;
                        console.log(text.text);
                    }
                }
            }
        }
        if (!entry) continue;

    }
    console.timeEnd("begin");
    /*
    console.time("commitId");
    for (const entry of activityConfigModel.findPropertyById("commitId",blobs)) {
        if (!entry) continue;

        
        console.log(entry);
    }
    console.timeEnd("commitId");*/

    console.log("done!");
});

setInterval(()=>{
    console.log("Refreshing database...");
}, 1000 * 60 * 60); // every 1hr check if you need to refresh the database.
