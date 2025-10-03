import { ActivityConfiguration } from "../../types";
import { IActivityCommit } from "../mongodb/activityCommits";
import { IActivityMeta } from "../mongodb/activityMeta";
import { SQLiteModel, _CheckIfSatisfiesBindings, Blob } from "./Model";

interface IActivityModel {
    id: Blob;
    idCommit: Blob;
    timestamp: Date;
    categories: string[];
    metaSnapshot: IActivityMeta;
    commitSnapshot: IActivityCommit
}

const activityBindings = {
    id: [Buffer, true],
    idCommit: [Buffer, true],
    timestamp: [Date, true],
    categories: [Object, true],
    metaSnapshot: [Object, true],
    commitSnapshot: [Object, true]
}  satisfies _CheckIfSatisfiesBindings;


class ActivityModel extends SQLiteModel<IActivityModel> {}

export const activityModel = new ActivityModel("activities", activityBindings);
