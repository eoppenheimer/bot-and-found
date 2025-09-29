import app from "./app";
import dotenv from "dotenv";
import fs from "fs/promises";
import promptSync from "prompt-sync";
import {mongoConnection, ObjectId} from "./config";
import { abItemMetaModel, activityMetaModel, collectionCommitModel, collectionMetaModel } from "./models";
dotenv.config();


const prompt = promptSync();

const PORT = process.env.PORT || 8080;

app.listen(PORT, async () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    

    const SIZE = 1000;

    let i = 0;
    const collected: any[] = [];
    for await (const hello of await collectionCommitModel.find({})) {
        i++;

        collected.push(hello);

        if (i % SIZE === 0) {

            const output = `import { ICollectionCommit } from "./collectionCommits";\nconst x = ${JSON.stringify(collected,undefined,4)} satisfies ICollectionCommit[];`;

            await fs.writeFile("./src/models/mongodb/test.ts", output);
            prompt("Wrote to file! Press Enter to proceed.");
            collected.length = 0;
        }

    }
});

setInterval(()=>{
    console.log("Refreshing database...");
}, 1000 * 60 * 60); // every 1hr check if you need to refresh the database.
