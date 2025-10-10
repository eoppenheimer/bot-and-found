import app from "./app";
import dotenv from "dotenv";
import fs from "fs/promises";
import promptSync from "prompt-sync";
import {mongoConnection, ObjectId, sqliteConnection} from "./config";
import { activityModel } from "./models";
import { DatabaseManagementService } from "./services";
dotenv.config();


const prompt = promptSync();

const PORT = process.env.PORT || 8080;

const d = new DatabaseManagementService();

//d.updateNotion();
//d.updateMCLASS();
d.updateBoost();
app.listen(PORT, async () => {
    //mongoConnection.connect();
    sqliteConnection.getDb();
    return;
    console.log(`Server is running on http://localhost:${PORT}`);


    console.time("begin");

    //const x = activityModel.deleteMany();

    
    for (const entry of activityModel.findAll(["commitSnapshot"])) {
    
        const activity = entry.commitSnapshot.doc;

        for (const step of activity.steps) {
            for (const a of step.root.linearlayout.components) {
                for (const b of a.linearlayout.components) {
                    const text = b["exhibit/text"];
                    if (text) {
                        //if (!text.text) continue;
                        //console.log(text.text);
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
