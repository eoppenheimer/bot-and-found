import { GoogleSpreadsheetImportService } from "./GoogleSpreadsheetImportService";
import { NotionImportService } from "./NotionImportService";
import { MCLASSImportService } from "./MCLASSImportService";




export class DatabaseManagementService {
    
    private googleSpreadsheetParser = new GoogleSpreadsheetImportService();
    private notionParser = new NotionImportService();
    private mCLASSParser = new MCLASSImportService();

    /** This scans for any Google Spreadsheet files and commits them to the database. */
    updateGoogleSpreadsheets() {
        const folderPaths = this.googleSpreadsheetParser.getSpreadsheetPaths();
        this.googleSpreadsheetParser.writeToDB(folderPaths);
    }

    /** This scans for any Notion files and commits them to the database. */
    updateNotion() {
        this.notionParser.writeBoostDevelopmentBoardToDB();
        this.notionParser.writeMCLASSItemsDatabaseToDB();
    }

    updateMCLASS() {
        this.mCLASSParser.run();
    }


}