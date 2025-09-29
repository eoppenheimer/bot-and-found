import { ObjectId, Document, Timestamp } from "mongodb";
import { MongoModel } from "./Model";
import { ActivityCommit } from "../../types";

type TEMP_STRING = string;

export interface IActivityCommit {
    _id: ObjectId | TEMP_STRING;
    doc: ActivityCommit;
    edit_ts: Date | TEMP_STRING;
    metaId: ObjectId | TEMP_STRING;
    userId: string;
    translatedLanguages?: Record<string, ObjectId | TEMP_STRING>;
}

class ActivityCommitModel extends MongoModel<IActivityCommit> {}

export const activityCommitModel = new ActivityCommitModel("activityCommits");


