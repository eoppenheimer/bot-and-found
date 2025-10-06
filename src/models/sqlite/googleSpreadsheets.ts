import { SQLiteModel, _CheckIfSatisfiesBindings } from "./Model";
import { GoogleSpreadsheet } from "../../types";

export interface IGoogleSpreadsheetModel {
    id: Uint8Array;
    idSpreadsheet: string;
    gid: string;
    range: string;
    categories: string[];
    timestampSnapshot: Date;
    title: string;
    sheets: GoogleSpreadsheet;
}

const bindings = {
    id: [Buffer, true],
    idSpreadsheet: [String, true],
    gid: [String, true],
    range: [String, true],
    categories: [Object, true],
    timestampSnapshot: [Date, true],
    title: [String, true],
    sheets: [Object, true]
}  satisfies _CheckIfSatisfiesBindings;


class GoogleSpreadsheetModel extends SQLiteModel<IGoogleSpreadsheetModel> {}

export const googleSpreadsheetModel = new GoogleSpreadsheetModel("googleSpreadsheets", bindings);
