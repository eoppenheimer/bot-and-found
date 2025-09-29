import { ObjectId, Document, Timestamp } from "mongodb";
import { MongoModel } from "./Model";
import { AuthorGroupAccess, StandardsAlignment, ActivityMetadata } from "../../types";

interface UserReference {
    id: ObjectId;
}

export interface IABItemMeta {
    _id: ObjectId;
    _ts?: Timestamp;
    createdBy: UserReference;
    draftUpdatedBy: UserReference | string[];
    publishedBy: UserReference;
    commitId: ObjectId;
    createdAt: Date;
    draftUpdatedAt: Date;
    publishedAt: Date;
    authorGroupAccess?: AuthorGroupAccess | null;
    standardsAlignment?: StandardsAlignment[] | null;
    isReleased?: boolean;
    itemType?: "reference";
    referenceItemID?: string;
    deleted?: boolean;
    copiedFromActivityId?: ObjectId;
}


class ABItemMetaModel extends MongoModel<IABItemMeta> {}

export const abItemMetaModel = new ABItemMetaModel("abItemMeta");


