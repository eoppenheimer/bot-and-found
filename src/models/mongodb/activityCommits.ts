import { ObjectId, Document, Timestamp } from "mongodb";
import { MongoModel } from "./Model";
import { ActivityCommit } from "../../types";

export interface IActivityCommit {
    _id: ObjectId;
    doc: ActivityCommit;
    edit_ts: Date;
    metaId: ObjectId;
    userId: string;
    editionId?: ObjectId;
    discarded?: boolean;
    translatedLanguages?: Record<string, ObjectId>;
}

class ActivityCommitModel extends MongoModel<IActivityCommit> {}

export const activityCommitModel = new ActivityCommitModel("activityCommits");


