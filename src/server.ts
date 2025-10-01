import app from "./app";
import dotenv from "dotenv";
import fs from "fs/promises";
import promptSync from "prompt-sync";
import {mongoConnection, ObjectId, sqliteConnection} from "./config";
import { activityConfigModel, abItemCommitModel, abItemMetaModel, activityCommitModel, activityMetaModel, collectionCommitModel, collectionMetaModel } from "./models";
dotenv.config();


const prompt = promptSync();

const PORT = process.env.PORT || 8080;



app.listen(PORT, async () => {
    console.log(`Server is running on http://localhost:${PORT}`);

    //sqliteConnection.createActivity("65f1f34d235403ee0c6c7deb", "65f1f34d235403ee0c6c7deb", new Date(Date.now()), {hello: 4, nope: true});

    const myId = new ObjectId("65f1f34d235403ee0c6c7dec");
    const myId2 = new ObjectId("65f1f34d235403ee0c6c7deb");

    //const result = sqliteConnection.createActivity(myId.id, myId.id, new Date(Date.now()), {hello: 4, nope: true});

    try {
        activityConfigModel.create({
            id: myId.id,
            commitId: myId.id,
            timestamp: new Date(Date.now()),
            config: {howdy: 4, nope: false},
        });
    }

    catch (err) {
        console.error(err);
    }


    //console.log(activityConfigModel.findById(myId.id));

    for (const hi of activityConfigModel.findAllById([myId.id,myId2.id])) {
        console.log(hi);
    }

    
    //console.log(sqliteConnection.getActivityById(myId.id));
    
    return;
    const SIZE = 1;

    let i = 0;
    const collected: any[] = [];
    for await (const metadata of await abItemMetaModel.find({})) {
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

        const commit = await abItemCommitModel.findOne({_id: commitId});
        if (!commit) {
            console.log(/fucked up, continuing/);
            continue;
        }

        if (!(commit.steps.length > 0 && commit.steps[0].root.linearlayout.components.length > 0)) {
            console.log(/skipping/);
            continue;
        }

        if (i % SIZE === 0) {

            await fs.writeFile("./dist/metadata.ts", `import { IABItemMeta } from "../src/models/mongodb/abItemMeta";
const x = ${JSON.stringify(metadata,undefined,4)} satisfies IABItemMeta;`);

            await fs.writeFile("./dist/commit.ts", `import { IABItemCommit } from "../src/models/mongodb/abItemCommits";
const x = ${JSON.stringify(commit,undefined,4)} satisfies IABItemCommit;`);

            await fs.writeFile("./dist/getActivityConfiguration.ts", `import { ActivityConfiguration } from "../src/types";
const x = {} satisfies ActivityConfiguration;`);
            
            prompt(`${metadata._id} Wrote to file! Press Enter to proceed.`);
            collected.length = 0;
        }

    }
});

setInterval(()=>{
    console.log("Refreshing database...");
}, 1000 * 60 * 60); // every 1hr check if you need to refresh the database.
