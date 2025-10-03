import { GoogleSpreadsheetImportService } from "./GoogleSpreadsheetImportService";




export class DatabaseManagementService {
    
    private googleSpreadsheetParser = new GoogleSpreadsheetImportService();
    //private csvParser = new CsvParser();
    //private validator = new DataValidator();
    //private bulkInserter = new BulkInserter();

    /** This scans for any spreadsheet files and uploads them to the database. */
    updateGoogleSpreadsheets() {
        this.googleSpreadsheetParser.findSpreadsheetNames();
    }

    async getAllUsers(): Promise<IUser[]> {
        return await this.userModel.find(); // Inherited method
    }

    async getUserById(id: string): Promise<IUser | null> {
        return await this.userModel.findById(id); // Inherited method
    }

    async getUserByEmail(email: string): Promise<IUser | null> {
        return await this.userModel.findByEmail(email); // Custom method
    }
}