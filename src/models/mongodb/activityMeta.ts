import { ObjectId, Document, Timestamp } from "mongodb";
import { MongoModel } from "./Model";
import { ActivityMetadata, License, LicenseAccess } from "../../types";

interface UserReference {
    id: string;
    displayName?: string;
}

interface Ancestor {
    _id: ObjectId;
    user: UserReference;
    licenses?: License[];
    licenseAccess?: LicenseAccess;
}

export interface IActivityMeta extends ActivityMetadata, Document {
    _id: ObjectId;
    user: UserReference;
    ancestors?: Ancestor[];
    _ts?: Timestamp;
    commitId?: ObjectId;
    edit_ts?: Date;
    markedSpamOn?: Date;
    parentActivityCommitId?: ObjectId;
    parentActivityMetaId?: ObjectId;
    rootActivityMetaId?: ObjectId;
}

class ActivityMetaModel extends MongoModel<IActivityMeta> {}

export const activityMetaModel = new ActivityMetaModel("activityMeta");


