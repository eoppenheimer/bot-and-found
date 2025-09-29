import { ObjectId, Document } from "mongodb";
import { MongoModel } from "./Model";

interface StandardsAlignment {
    id: string;
    name: string;
    description: string;
    stateId: number,
    standardId: string;
    category: string;
}

interface UserReference {
    id: ObjectId;
}

interface IABItemMeta extends Document {
    _id: ObjectId;
    createdBy: UserReference;
    draftUpdatedBy: UserReference;
    publishedBy: UserReference;
    commitId: ObjectId;
    createdAt: Date;
    draftUpdatedAt: Date;
    publishedAt: Date;
    standardsAlignment?: StandardsAlignment[];
}


class ABItemMetaModel extends MongoModel<IABItemMeta> {}

export const abItemMetaModel = new ABItemMetaModel("abItemMeta");


