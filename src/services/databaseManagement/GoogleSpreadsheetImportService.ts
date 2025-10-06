import fs from "fs";
import path from "path";
import { generateHash } from "../../utils";
import { googleSpreadsheetModel, IGoogleSpreadsheetModel } from "../../models";
import { GoogleSpreadsheet } from "../../types";

const {DATABASE_PATH} = process.env;
if (!DATABASE_PATH) throw Error("Missing DATABASE_PATH from env file.");

const spreadsheetFolder = path.join(DATABASE_PATH!, "googleSpreadsheets");

export class GoogleSpreadsheetImportService {

    /**
     * Finds all of the Google spreadsheet directories that have been saved locally.
     * 
     * In the future I would like this work remotely, where it uses a spreadsheet key to grab these.
    */
    getSpreadsheetPaths() {
        const folderNames = fs.readdirSync(spreadsheetFolder);
        
        const folderPaths: string[] = [];
        for (const folderName of folderNames) {
            const databasePath = path.join(spreadsheetFolder, folderName);

            const stats = fs.statSync(databasePath);

            if (stats.isDirectory()) folderPaths.push(databasePath);
        }
        return folderPaths;
    }

    async writeToDB(folderPaths: string[]) {
        
        for (const folderPath of folderPaths) {

            /** Which category does this database belong to? */
            const category = path.basename(folderPath);

            const fileNames = fs.readdirSync(folderPath).filter(x => x.endsWith(".json"));

            for (const fileName of fileNames) {
                const filePath = path.join(folderPath, fileName);

                const contents = fs.readFileSync(filePath, "utf8");

                let parsed: undefined | object = undefined;

                try {
                    parsed = JSON.parse(contents) as object;
                }
                catch(error) {
                    console.error(`Failed to parse JSON at ${fileName}`, error);
                    continue;
                }

                if ("sheets" in parsed &&
                "title" in parsed && "spreadsheetId" in parsed && "range" in parsed && "snapshot_ts" in parsed && "gid" in parsed &&
                typeof parsed.title === "string" && typeof parsed.spreadsheetId === "string" && typeof parsed.range === "string" && typeof parsed.snapshot_ts === "string" && typeof parsed.gid === "string"
                ) {
                
                    
                    if (category === "bplDetails") { /* empty */ }
                    else if (category === "bplReferences") { /* empty */ }
                    else throw Error(`UNEXPECTED SPREADSHEET CATEGORY USED: ${category}`);
                    
                    const id = generateHash(parsed.spreadsheetId, parsed.gid);

                    const entry: IGoogleSpreadsheetModel = {
                        id: id,
                        idSpreadsheet: parsed.spreadsheetId,
                        title: parsed.title,
                        timestampSnapshot: new Date(parsed.snapshot_ts),
                        categories: [category],
                        range: parsed.range,
                        gid: parsed.gid,
                        sheets: parsed.sheets as GoogleSpreadsheet
                    };

                    const alreadyExists = googleSpreadsheetModel.exists(id);

                    const verb = alreadyExists ? "Overwrote" : "Created";
                    
                    const result = googleSpreadsheetModel.overwrite(entry);

                    console.log(verb, "from", JSON.stringify(filePath), "successfully.", result);
                
                }
                else {
                    console.error(`Provided bad JSON at ${filePath}`);
                }
            }
        }
    }
}