import { ObjectId, Document, Timestamp } from "mongodb";
import { MongoModel } from "./Model";
import { AuthorGroupAccess, StandardsAlignment } from "../../types";


interface UserReference {
    id: ObjectId;
}

type Grade = "K" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12";

export interface IABItemMeta extends Document {
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
    copiedFromActivityId?: ObjectId;
    deleted?: boolean;
    grades?: Grade[];
    topics?: string[];
    itemType?: "reference";
    referenceItemID?: string;
}


class ABItemMetaModel extends MongoModel<IABItemMeta> {}

export const abItemMetaModel = new ABItemMetaModel("abItemMeta");


