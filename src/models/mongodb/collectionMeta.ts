import { ObjectId, Document } from "mongodb";
import { MongoModel } from "./Model";
import { AuthorGroupAccess } from "./activityMeta";

interface MongoTimestamp {
    t: number;
    i: number;
}

type Grade = "K" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12";

type Product = "Amplify Desmos Math" | "Desmos Math" | "mCLASS DIBELS 8" | "mCLASS Lectura" | "CKLA" | "ELD" | "Caminos" | "ELA" | "mCLASS Intervention" | "Boost Math" | "mCLASS Math" | "Reading 6-8" | "Science Elementary" | "Science Middle School" | "Amplify CKLA" | "Amplify ELA" | "Boost Reading" | "SoR PD" | "Boost Close Reading" | "Amplify Caminos" | "Amplify Science";

interface UserReference {
    id: ObjectId;
}

export interface ICollectionMeta extends Document {
    _id: ObjectId;
    user: UserReference;
    sharing: "shared-link" | "private" | "book" | "featured";
    _ts?: {
        $timestamp: MongoTimestamp;
    };
    edit_ts?: Date;
    commitId: ObjectId;
    pinnedNumber: number;
    deleted?: boolean;
    authorGroupAccess?: AuthorGroupAccess | null;
    isTeamDesmosAuthored?: true;
    editionId?: ObjectId;
    collaborators?: string[];
    isShownInSidebar?: boolean;
    spamConfidenceLevel?: "low" | "not-spam" | "unknown";
    spam?: boolean;
    markedSpamOn?: Date;
    isReviewedNotSpam?: boolean;
    isUnreleased?: boolean;
    grades?: Grade[] | null;
    retailAssetEntryPointId?: ObjectId;
    retailAssetEntryPointSubjects?: ("Math" | "Literacy")[]
    isCPM?: true;
    product?: null | Product | Product[];
    parentCollectionMetaId?: ObjectId;
    rootCollectionMetaId?: ObjectId;
    type?: "unit" | "set" | "course" | "landing-page";
    retailAssetIds?: string[]
    isRestricted?: boolean;
}


class CollectionMetaModel extends MongoModel<ICollectionMeta> {}

export const collectionMetaModel = new CollectionMetaModel("collectionMeta");


