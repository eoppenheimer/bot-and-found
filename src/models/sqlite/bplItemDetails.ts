import { SQLiteModel, _CheckIfSatisfiesBindings } from "./Model";

export interface IBPLItemDetailModel {
    id: string;
    timestampSnapshot: Date;
    idGoogleSpreadsheet: string;
    urlGoogleSpreadsheet: string;
    milestone: string;
    grade: number;
    unit: number;
    subunit: number;
    lesson: number;
    title: string;
    standardsBuildingOn: string[];
    standardsAddressing: string[];
    goalTeacherFacing?: string;
    goalStudentFacing: string;
    introVT: string;
    criticalItems?: [number, number];
    interventionBeginVT?: string;
    interventionEndVT?: string;
    /** Precusor lesson code. @example "K.3.1.05" */
    precusorLesson?: string;
    precursorItems?: [number, number, number, number];
    postInterventionItems?: [number, number];
    celebrationVT: string;
}

const bindings = {
    id: [String, true],
    timestampSnapshot: [Date, true],
    idGoogleSpreadsheet: [String, true],
    urlGoogleSpreadsheet: [String, true],
    milestone: [String, true],
    grade: [Number, true],
    unit: [Number, true],
    subunit: [Number, true],
    lesson: [Number, true],
    title: [String, true],
    standardsBuildingOn: [Object, true],
    standardsAddressing: [Object, true],
    goalTeacherFacing: [String, false],
    goalStudentFacing: [String, true],
    introVT: [String, true],
    criticalItems: [Object, false],
    interventionBeginVT: [String, false],
    interventionEndVT: [String, false],
    precusorLesson: [String, false],
    precursorItems: [Object, false],
    postInterventionItems: [Object, false],
    celebrationVT: [String, true],
}  satisfies _CheckIfSatisfiesBindings;


class BPLItemDetailModel extends SQLiteModel<IBPLItemDetailModel> {}

export const bplItemDetailModel = new BPLItemDetailModel("bplItemDetails", bindings);
