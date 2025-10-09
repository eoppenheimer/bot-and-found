import fs from "fs";
import path from "path";
import { notionBPLDevelopmentBoardModel, INotionBPLDevelopmentBoardModel, INotionMCLASSItemsDatabaseModel, notionMCLASSItemsDatabaseModel } from "../../models";
import { parseCSV } from "../../utils/node";

const {DATABASE_PATH} = process.env;
if (!DATABASE_PATH) throw Error("Missing DATABASE_PATH from env file.");

const notionFolder = path.join(DATABASE_PATH!, "notion");


export class NotionImportService {

    /** Finds all the BPL Development Board Notion download and saves it to the database. */
    async writeBoostDevelopmentBoardToDB() {

        const fileName = "BPL Development Board 14b354bdaeeb80019d9cea380e1e5a11_all.csv";
        const filePath = path.join(notionFolder, fileName);

        const stats = fs.statSync(filePath);
        if (!stats.isFile()) throw Error(`Failed to locate file at ${filePath}`);

        const data = await parseCSV<Omit<INotionBPLDevelopmentBoardModel, "id"> & {id?: INotionBPLDevelopmentBoardModel["id"]}>(filePath);

        const runtimeResult = {
            changes: 0,
            overwrites: 0,
            added: 0,
        };

        for (const entry of data) {

            if (!/^G[K1-8]\.U\d\.SU\d\.L\d\d$/.test(entry.Name)) {
                console.log(/Skipping title/, [entry.Name]);
                continue;
            };
            
            entry.id = entry.Name;

            const alreadyExists = notionBPLDevelopmentBoardModel.exists(entry.id);

            if (alreadyExists) runtimeResult.overwrites++;
            else runtimeResult.added++; 
            
            const result = notionBPLDevelopmentBoardModel.overwrite(entry as INotionBPLDevelopmentBoardModel);

            runtimeResult.changes++;
        }

        console.log("Read from", JSON.stringify(filePath), "successfully.", runtimeResult);
        
    }

    /** Finds all the BPL Development Board Notion download and saves it to the database. */
    async writeMCLASSItemsDatabaseToDB() {

        const fileName = "mCLASS Math Items Database 5e4c2f9686e244cd86cfa9c7dee32d60_all.csv";
        const filePath = path.join(notionFolder, fileName);

        const stats = fs.statSync(filePath);
        if (!stats.isFile()) throw Error(`Failed to locate file at ${filePath}`);

        const data = await parseCSV<Omit<INotionMCLASSItemsDatabaseModel, "id"> & {id?: INotionMCLASSItemsDatabaseModel["id"]}>(filePath);

        const runtimeResult = {
            changes: 0,
            overwrites: 0,
            added: 0,
        };

        for (const entry of data) {

            if (!entry["Item ID"]) {
                console.log(/Skipping ID/, [entry["Item ID"]]);
                continue;
            };
            
            entry.id = entry["Item ID"];

            const alreadyExists = notionMCLASSItemsDatabaseModel.exists(entry.id);

            if (alreadyExists) runtimeResult.overwrites++;
            else runtimeResult.added++; 
            
            const result = notionMCLASSItemsDatabaseModel.overwrite(entry as INotionMCLASSItemsDatabaseModel);

            runtimeResult.changes++;
        }
        
        console.log("Read from", JSON.stringify(filePath), "successfully.", runtimeResult);
    }

}