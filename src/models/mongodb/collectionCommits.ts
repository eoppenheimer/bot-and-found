import { ObjectId, Document, Timestamp } from "mongodb";
import { MongoModel } from "./Model";
import { Paragraph } from "../../types";

interface UserReference {
    id: ObjectId;
}

interface BookData {
    unitNumber: string;
    daysLabel: string;
    collectionType?: "unit" | "domain";
    sortKey?: string;
    abbreviation?: string;
}

interface HeaderURL {
    url: string;
    type: "bynder";
}

interface ItemSubcollection {
    type: "subcollection";
    collectionId: ObjectId;
}

interface ItemCollectionActivity {
    type: "collection-activity";
    activityId: ObjectId;
}

interface ItemCollectionSectionDivider {
    type: "collection-section-divider";
    heading: Paragraph;
    description?: Paragraph;
    id: string;
}

type Item = ItemCollectionSectionDivider | ItemCollectionActivity | ItemSubcollection;

export interface ICollectionCommit extends Document {
    _id: ObjectId;
    user?: UserReference;
    _ts?: Timestamp;
    color: "blue" | "teal" | "orange" | "purple" | "coral" | "pink" | "green";
    description: Partial<Paragraph>;
    metaId: ObjectId;
    sharing: "shared-link" | "private" | "book" | "featured";
    title: string;
    items: Item[];
    seed?: number;
    language?: string;
    bookData?: BookData;
    translatedLanguages?: Record<string, string>;
    editionId?: ObjectId;
    parentCollectionCommitId?: ObjectId;
    headerUrl?: HeaderURL;
    headerAltText?: string;
    type?: "grade";
    deleted?: boolean;
    useAllActitiesInThumb?: boolean;
}

class CollectionCommitModel extends MongoModel<ICollectionCommit> {}

export const collectionCommitModel = new CollectionCommitModel("collectionCommits");


