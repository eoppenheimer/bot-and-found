import { IActivityMeta, IActivityCommit } from "../mongodb";
import { SQLiteModel, _CheckIfSatisfiesBindings } from "./Model";

export interface IActivityModel {
    id: Uint8Array;
    idCommit: Uint8Array;
    timestampSnapshot: Date;
    categories: ("bplMasterCollection")[];
    metaSnapshot: IActivityMeta;
    commitSnapshot: IActivityCommit;
}

const bindings = {
    id: [Buffer, true],
    idCommit: [Buffer, true],
    timestampSnapshot: [Date, true],
    categories: [Object, true],
    metaSnapshot: [Object, true],
    commitSnapshot: [Object, true]
}  satisfies _CheckIfSatisfiesBindings;


class ActivityModel extends SQLiteModel<IActivityModel> {}

export const activityModel = new ActivityModel("activities", bindings);
