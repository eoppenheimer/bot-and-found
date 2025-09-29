import { ObjectId, Document, Timestamp } from "mongodb";
import { MongoModel } from "./Model";
import { ActivityCommit, AuthorGroupAccess, Paragraph, Step } from "../../types";

interface User {
    id: ObjectId;
}

export interface IABItemCommit extends Omit<ActivityCommit, "metaId"> {
    _id: ObjectId;
    steps: Step[];
    updatedAt: Date;
    metaId: ObjectId;
    description?: Paragraph | string;
    title: string;
    updatedBy: User;
    authorGroupAccess?: AuthorGroupAccess | null;
}

class ABItemCommitModel extends MongoModel<IABItemCommit> {}

export const abItemCommitModel = new ABItemCommitModel("abItemCommits");
