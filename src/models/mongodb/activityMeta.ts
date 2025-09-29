import { ObjectId, Document, Timestamp } from "mongodb";
import { MongoModel } from "./Model";
import { ActivityMetadata, AuthorGroupAccess, LicenseAccess } from "../../types";

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

interface License {
    type: "product";
    productId: "im-pilot";
}

type AuthorTag = "desmos" | "cpm"

interface CurriculumLocation {
    index: {
        bookId: string;
        unitId: string;
    },
    full: {
        bookId: string;
        lessonNumber: number | null;
        unitId: string;
        unitImId: string;
        lessonId: string;
        lessonPart: string;
    }
}

export interface IActivityMeta extends ActivityMetadata, Document {
    _id: ObjectId;
    user: UserReference;
    ancestors?: Ancestor[];
    _ts?: Timestamp;
    deleted?: true;
    authorTags?: AuthorTag[]
    commitId?: ObjectId;
    edit_ts?: Date;
    markedSpamOn?: Date;
    parentActivityCommitId?: ObjectId;
    parentActivityMetaId?: ObjectId;
    rootActivityMetaId?: ObjectId;
}

class ActivityMetaModel extends MongoModel<IActivityMeta> {}

export const activityMetaModel = new ActivityMetaModel("activityMeta");


