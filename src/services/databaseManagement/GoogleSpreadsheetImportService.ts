import fs from "fs/promises";
import path from "path";
import dotenv from "dotenv";
dotenv.config();

const {DATABASE_PATH} = process.env;
if (!DATABASE_PATH) throw Error("Missing DATABASE_PATH.");

export class GoogleSpreadsheetImportService {

    
    /**
     * Finds all of the Google spreadsheets that have been saved locally.
     * 
     * In the future I would like this work remotely, where it uses a spreadsheet key to grab these. */
    async findSpreadsheetNames() {
        
        const spreadsheetFolder = path.join(DATABASE_PATH!, "googleSpreadsheets");

        const x = await fs.readdir(spreadsheetFolder);
        console.log(x);
    }

    async importFromCsv(filePath: string): Promise<void> {
    // All your CSV scanning logic here
        const csvData = await this.parseCsvFile(filePath);
        const validatedData = await this.validateCsvData(csvData);
        await this.insertBulkData(validatedData);
    }

    private async parseCsvFile(filePath: string) {
    // CSV parsing logic
    }

    private async validateCsvData(data: any[]) {
    // Validation logic
    }

    private async insertBulkData(data: any[]) {
    // Bulk insert logic
    }
}