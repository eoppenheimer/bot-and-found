import { ObjectId, Document } from "mongodb";
import { MongoModel } from "./Model";

interface MongoTimestamp {
    t: number;
    i: number;
}

interface UserReference {
    id: string;
    displayName?: string;
}

interface Ancestor {
    _id: ObjectId;
    user: UserReference;
    licenses?: License[];
    licenseAccess?: "preview" | null
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

interface AuthorGroupAccess {
    "adm-sandbox"?: true;
    "math-core-k-5"?: true;
    "math-core-6-12"?: true;
    "math-desmos-6-a1"?: true;
    "ela-k-5"?: true;
    "math-assessment"?: true;
    "free-content"?: true;
}

interface SourceItemsRollup {
    itemMetaId: string;
    itemCommitId: string;
    stepId: string;
    itemType?: "reference";
}

export interface IActivityMeta {
    _id: ObjectId;
    user: UserReference;
    ancestors?: Ancestor[];
    _ts?: {
        $timestamp: MongoTimestamp;
    };
    deleted?: true;
    permissionToShare: boolean | null;
    licenses?: License[];
    activityLicenses?: License[];
    licenseAccess?: string;
    activityRetailAssetIds?: string[];
    authorTags?: AuthorTag[]
    teamDesmosAuthored?: boolean;
    commitId?: ObjectId;
    edit_ts?: Date;
    publishedTimestamp?: Date;
    authorGroupAccess?: AuthorGroupAccess | null;
    editionId?: string;
    spam?: boolean;
    markedSpamOn?: Date;
    subject?: string;
    searchable?: boolean;
    isReviewedNotSpam?: boolean;
    retailAssetIds?: string[];
    screenLicenseAccess?: string | null;
    sourceItemsRollup?: SourceItemsRollup[];
    spamConfidenceLevel?: string;
    numInstances: number;
    collectionHierarchy?: string[][];
    routedADMId?: string;
    curriculumLocation?: CurriculumLocation;
    parentActivityCommitId?: ObjectId;
    parentActivityMetaId?: ObjectId;
    rootActivityMetaId?: ObjectId;
    collaborators?: string[];
    subjectArea?: "6-12";
}

class ActivityMetaModel extends MongoModel<IActivityMeta> {}

export const activityMetaModel = new ActivityMetaModel("activityMeta");


