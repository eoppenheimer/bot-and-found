import { sqliteConnection } from "../../config";
import { SQLiteModel, BindType, BindSatisfies } from "./Model";

type Blob = Uint8Array<ArrayBufferLike>;


interface IActivityConfigModel {
    id: number;
    commitId: number;
    timestamp: Date;
    config: boolean;
}


class ActivityConfigModel extends SQLiteModel<IActivityConfigModel> {}

export const activityConfigModel = new ActivityConfigModel("activityConfigs", {
    id: Buffer,
    commitId: Buffer,
    timestamp: Date,
    config: Object
} satisfies BindSatisfies);

