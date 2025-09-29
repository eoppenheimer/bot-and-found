import app from "./app";
import dotenv from "dotenv";
import fs from "fs/promises";
import promptSync from "prompt-sync";
import {mongoConnection, ObjectId} from "./config";
import { abItemMetaModel, activityCommitModel, activityMetaModel, collectionCommitModel, collectionMetaModel } from "./models";
dotenv.config();


const prompt = promptSync();

const PORT = process.env.PORT || 8080;

app.listen(PORT, async () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    

    const SIZE = 1;

    let i = 0;
    const collected: any[] = [];
    for await (const metadata of await activityMetaModel.find({})) {
        i++;

        const {commitId} = metadata;

        if (!commitId) {
            console.log(/fucked up, continuing/);
            continue;
        }

        const commit = await activityCommitModel.findOne({_id: commitId});

        if (i % SIZE === 0) {

            const output = `import { IActivityCommit } from "../src/models/mongodb/activityCommits";\nconst x = ${JSON.stringify(collected,undefined,4)} satisfies IActivityCommit[];`;

            await fs.writeFile("./dist/test.ts", output);

            await fs.writeFile("./dist/test.ts", output);
            prompt("Wrote to file! Press Enter to proceed.");
            collected.length = 0;
        }

    }
});

setInterval(()=>{
    console.log("Refreshing database...");
}, 1000 * 60 * 60); // every 1hr check if you need to refresh the database.
