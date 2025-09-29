/**
 * @fileoverview Interface of activities stored in MongoDB.
 * @author {Ezra Oppenheimer}
 */

import {Paragraph} from "./paragraph";
import { Step } from "./step";

interface NOT_BUILT_YET {EzraHasNotBuiltThisYet?: 0};

/** Stores a single user's ID, accompanied by their display name. */
export interface User {
    /** 24 character identifier for this user. */
    id: string;
    /** Display name for this user. Example: "Ezra Oppenheimer". */
    displayName?: string;
}

/** Stores a single user's ID, accompanied by their display name. */
export interface Ancestor {
    /** 24 character identifier of the ancestor activity. */
    _id: string;
    /** Author of this ancestor. */
    user: User;
}

type AuthorTag = "desmos" | "cpm"

interface Settings {
    degreeModeEnabled?: boolean | null;
    nextOnlyNavigation?: boolean | null;
}

interface SourceItemsRollup {
    itemMetaId: string;
    itemCommitId: string;
    stepId: string;
    itemType?: "reference";
}

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
export interface StandardsAlignment {
    id: number;
    name: string;
    description?: string;
    stateId?: number;
    legacyStandardSet?: "TEKS" | "CCSS" | "NY";
    standardId?: string | number;
    category: "buildingOn" | "addressing" | "assessing" | "buildingToward";
}

interface Flags {
    /** Use degrees instead of radians. */
    degreeModeEnabled?: boolean | null;
    /** Disable `"%"` → `"% of"` expansion. */
    disablePercentOfExpansion?: boolean | null;
    /** Adds a four-function calculator students can click at the top of their screen. */
    fourFunctionCalculatorToolEnabled?: boolean | null;
    /** Adds a graphing calculator students can click at the top of their screen. */
    graphingCalculatorToolEnabled?: boolean | null;
    /** Adds a scientific calculator students can click at the top of their screen. */
    scientificCalculatorToolEnabled?: boolean | null;
    /** Permits the students to mix text with their math inputs. */
    mixedTextInput?: boolean | null;
}

interface ResourceGroup {
    type: "supplemental-activities";
    resources: {
        type: "alp-resource-section-divider" | "alp-resource-text-only" | "alp-resource-activity-link";
        id: string;
        heading?: Paragraph;
        description?: Paragraph;
        headerTag?: "support" | "strengthen" | "stretch";
        resourceDescription?: Paragraph;
        activityId?: string;
        collectionIds?: string[];
    }[];
}

interface ProficiencyNode {
    activity?: number[];
    rollup: number[];
}

interface LinkedActivity {
    title: string;
    activityId: string;
    collectionIds: string[]
}

interface TranslatedLanguagePaperResource {
    title: string;
    pdf: string;
    doc: string;
}

export interface License {
    type: "product",
    productId: "im-pilot"
}

interface BynderPDF {
    url: string;
    type: "bynder";
}

interface StudentEdition {
    title: string;
    pdf: BynderPDF | string;
}

interface PaperResource {
    title: string;
    pdf: BynderPDF | string;
    doc: string;
    id: string;
    licenses?: License[];
    inheritEntitlementInfo?: boolean;
    translatedLanguages?: Record<string, TranslatedLanguagePaperResource>;
}

interface WebResource {
    title: string;
    link: string;
    id: string;
}

interface ABTestingExperiments {
    mostPopularStepId: string;
    sampleDashboardLink: string;
}

interface Standard {
    standardSet: string;
    id: string;
}

interface LessonStandardsAlignment {
    buildingOn: Standard[];
    addressing: Standard[];
    buildingTowards: Standard[];
    assessing: Standard[];
}

interface AmplifyComponentMetadata {
    schemaVersion: string;
    schemaName: "amplify-component-metadata";
    value: {
        potentialScore: number;
        proficiencyNode: string[];
        standardsAssessing: string[];

    }
}

export interface AmplifyScreenMetadata {
    schemaVersion: string;
    schemaName: "amplify-screen-metadata";
    value: {
        isPowerUp?: boolean;
        isUpNextItem?: boolean;
        standardsAddressing?: string[];
        proficiencyNode?: string[];
    }
}

interface AmplifyActivityMetadata {
    schemaVersion: string;
    schemaName: "amplify-activity-metadata";
    value: {
        lessonType: "assessment" | "lessonPractice";
        assessmentType: "pre-unit" | "interim" | "post-unit" | null;
        assessmentIndex: number | null;
        assessmentForm: string | null;
        standardsBuildingOn: string[];
        standardsBuildingTowards: string[];
        proficiencyNode: string[];
    }
}


interface AmplifyMetadata {
    activity?: AmplifyActivityMetadata;
    screen?: Record<string, AmplifyScreenMetadata | null>
    component?: Record<string, AmplifyComponentMetadata | null>;
}

interface CustomMetadata {
    amplify: AmplifyMetadata;
}

export type LicenseAccess = "licensed" | "preview" | "try-it" | "unreleased" | null;

export interface AuthorGroupAccess {
    "adm-sandbox"?: true;
    "caminos"?: true;
    "math-core-k-5"?: true;
    "math-core-6-12"?: true;
    "math-desmos-6-a1"?: true;
    "math-supplemental"?: true;
    "ela-k-5"?: true;
    "ela-6-12"?: true;
    "math-assessment"?: true;
    "free-content"?: true;
    "free-content-amplify"?: true;
    "science-core-k-5"?: true;
    "pd-design"?: true;
}

/** 
 * This defines the content of an Amplify activity.
 * You primarily will find this using `activityCommits` on MongoDB, but it will also get attached to the Activity Builder itself.
*/
interface ActivityDoc {
    steps: Step[];
    title: string;
    subtitle?: string;
    flags?: Flags;
    lessonNumber?: string;
    learningGoals?: Paragraph;
    lessonPlan?: Paragraph;
    linkedActivities?: LinkedActivity[];
    linkedCollections?: NOT_BUILT_YET[]; 
    activityResources?: NOT_BUILT_YET[];
    studentEdition?: StudentEdition;
    paperResources?: PaperResource[];
    resourceGroups?: ResourceGroup[];
    webResources?: WebResource[];
    category?: "lesson";
    vocab?: string[];
    instructionalRoutines?: string[];
    blurb?: Paragraph | string;
    abTestingExperiments?: ABTestingExperiments;
    isPresentation?: boolean;
    /** URL of the activity thumbnail. */
    thumb?: string;
    thumbId?: string;
    /** There also exists `.standardsAlignment`, so make sure to verify both. */
    standards?: StandardsAlignment[];
    /** There also exists `.standards`, so make sure to verify both. */
    standardsAlignment?: StandardsAlignment[] | null;
    proficiencyNodes?: ProficiencyNode
    lessonStandardsAlignment?: LessonStandardsAlignment;
    screenLicenses?: number[];
    /** Lesson preview email. Unsure of this. */
    lessonPreviewEmailId?: string;
    customMetadata?: CustomMetadata | null;
    accessibilityNotes?: string;
    modalityRecommendation?: "digital" | "print" | "digitalHS";
    /** The explanation as to why our `modalityRecommendation` was chosen. */
    modalityExplanation?: string;
    screenReaderFriendly?: boolean;
    /** Stores a warning if this lesson doesn't work well on iPads. */
    iPadWarning?: string;
    /** The duration this activity lasts. */
    timeEstimate?: number;
    /** Determines if activity is mobile friendly. */
    mobileFriendly?: boolean;
    /** What grades does this belong to? */
    grades?: Grade[];
    /** Which voice was used for this lesson? */
    voiceKey?: "Boost Math";
    /** Present on items. */
    metaId?: string;
    /** Which settings does this activity use? */
    settings: Settings;
    /** Which theme is this activity using? */
    themeId?: "default" | "early_elementary" | "late_elementary" | "k5";
}

/** 
 * This defines the metadata of an Amplify activity.
 * You primarily will find this using `activityMeta` on MongoDB, but it will also get attached to the Activity Builder itself.
*/
export interface ActivityMetadata {
    deleted?: boolean;
    permissionToShare?: boolean | null;
    licenses?: License[];
    activityLicenses?: License[];
    licenseAccess?: LicenseAccess;
    activityRetailAssetIds?: string[];
    authorTags?: AuthorTag[]
    teamDesmosAuthored?: boolean;
    authorGroupAccess?: AuthorGroupAccess | null;
    editionId?: string;
    spam?: boolean;
    subject?: string;
    searchable?: boolean;
    isReviewedNotSpam?: boolean;
    retailAssetIds?: string[];
    screenLicenseAccess?: LicenseAccess | null;
    sourceItemsRollup?: SourceItemsRollup[];
    spamConfidenceLevel?: string;
    numInstances?: number;
    collectionHierarchy?: string[][];
    routedADMId?: string;
    curriculumLocation?: CurriculumLocation;
    collaborators?: string[];
    subjectArea?: "6-12";
}

type Grade = "K" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12";


/** This is the interface of an activity's commit on MongoDB. */
export interface ActivityCommit extends ActivityDoc {
    /** This was retrieved from the Mongo commits database. */
    version?: 0;
}

/** 
 * This is the interface of of the output of `getActivityConfiguration()` on the Activity Builder.
 * 
 * Be *extremely* cognizant when modifying. You probably need to modify `ActivityMetadata` instead!!
*/
export interface ActivityConfiguration extends ActivityDoc, ActivityMetadata {
    /** This was retrieved from inside the Activity Builder. */
    version: 1;
    _id: string;
    /** Type of activity. For now I'm going to restrict this as `"activitybuilder"`, not sure what else can go here. */
    activity: "activitybuilder"
    /** Was this authored by Team Desmos? */
    teamDesmosAuthored?: boolean;
    /** The title of this activity. Does not exist on Item Bank as far as I can tell. */
    draftTitle?: string;
    /** Is this published? */
    complete?: true;
    /** (ISO 8601) Timestamp when this activity was last edited. */
    edit_ts: string;
    /** (ISO 8601) Timestamp when this activity was published. */
    publishedTimestamp?: string;
    /** Ancestors of this activity. */
    ancestors?: Ancestor[];
    /** User of this activity. */
    user: User;
    /** Commit ID for this version. */
    commitId: string;
    /** Translated languages. */
    translatedLanguages?: Record<string, string>;
    /** @deprecated USED IN ITEM BANK!! Description. */
    description?: Paragraph | null;
    /** @deprecated USED IN ITEM BANK!! (ISO 8601) Timestamp when this activity was updated. */
    updatedAt?: string;
    /** @deprecated USED IN ITEM BANK!! User that updated this. */
    updatedBy?: User;
    /** @deprecated USED IN ITEM BANK!! (ISO 8601) Timestamp when this activity was created. */
    createdAt?: string;
    /** @deprecated USED IN ITEM BANK!! User that created this item. */
    createdBy?: User;
    /** @deprecated USED IN ITEM BANK!! User that published this item. */
    publishedBy?: User;
    /** @deprecated USED IN ITEM BANK!! (ISO 8601) Timestamp when this activity was published. */
    publishedAt?: string;
    /** @deprecated I think you need to go in `.settings` instead for this... */
    nextOnlyNavigation?: boolean | null;
}

// Utility type to get overlapping keys between two types
type OverlappingKeys<T, U> = keyof T & keyof U;

// Utility type that causes a compile error if there are overlaps
type AssertNoOverlap<T, U> = OverlappingKeys<T, U> extends never 
  ? never 
  : true;

/** Usage - this will cause a TypeScript error if there are overlaps */
const checkIfThereAreAnyOverlaps: never = true as AssertNoOverlap<ActivityDoc, ActivityMetadata>;
if (!checkIfThereAreAnyOverlaps) console.log("OVERLAP DETECTED");