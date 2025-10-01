import { SQLiteModel, _CheckIfSatisfiesBindings, Blob } from "./Model";

interface IActivityConfigModel {
    id: Blob;
    commitId: Blob;
    timestamp: Date;
    config: object;
}

const activityConfigBindings = {
    id: [Buffer, true],
    commitId: [Buffer, true],
    timestamp: [Date, false],
    config: [Object, true]
}  satisfies _CheckIfSatisfiesBindings;


class ActivityConfigModel extends SQLiteModel<IActivityConfigModel> {}

export const activityConfigModel = new ActivityConfigModel("activityConfigs", activityConfigBindings);
