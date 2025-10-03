import { SQLiteModel, _CheckIfSatisfiesBindings } from "./Model";
import { GoogleSpreadsheet } from "../../types";

export interface IGoogleSpreadsheetModel {
    id: string;
    timestampSnapshot: Date;
    categories: string[];
    range: string;
    gid: string;
    sheets: [GoogleSpreadsheet, true];
}

const bindings = {
    id: [String, true],
    timestampSnapshot: [Date, true],
    categories: [Object, true],
    range: [String, true],
    gid: [String, true],
    sheets: [Object, true]
}  satisfies _CheckIfSatisfiesBindings;


class GoogleSpreadsheetModel extends SQLiteModel<IGoogleSpreadsheetModel> {}

export const googleSpreadsheetModel = new GoogleSpreadsheetModel("googleSpreadsheets", bindings);
