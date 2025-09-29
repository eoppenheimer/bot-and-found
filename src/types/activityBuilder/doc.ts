/**
 * @fileoverview Interface of activities stored in MongoDB.
 * @author {Ezra Oppenheimer}
 */

import {Paragraph} from "./paragraph";

type AuthorTag = "desmos" | "cpm"

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
    degreeModeEnabled?: boolean;
    /** Disable `"%"` → `"% of"` expansion. */
    disablePercentOfExpansion?: boolean;
    /** Adds a four-function calculator students can click at the top of their screen. */
    fourFunctionCalculatorToolEnabled?: boolean;
    /** Adds a graphing calculator students can click at the top of their screen. */
    graphingCalculatorToolEnabled?: boolean;
    /** Adds a scientific calculator students can click at the top of their screen. */
    scientificCalculatorToolEnabled?: boolean;
    /** Permits the students to mix text with their math inputs. */
    mixedTextInput?: boolean;
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

interface License {
    type: "product",
    productId: "im-pilot"
}

interface PaperResource {
    title: string;
    pdf: string;
    doc: string;
    id: string;
    licenses?: License[];
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

interface AmplifyScreenMetadata {
    schemaVersion: string;
    schemaName: "amplify-screen-metadata";
    value: {
        iHaventDoneThisYet: boolean;
    }
}

interface AmplifyActivityMetadata {
    schemaVersion: string;
    schemaName: "amplify-activity-metadata";
    value: {
        lessonType: "assessment";
        assessmentType: "pre-unit" | "interim" | "post-unit";
        assessmentIndex: number;
        assessmentForm: string;
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

export type LicenseAccess = "preview" | "try-it" | null;

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

interface ActivityDoc {
    steps: any[];
    title: string;
    subtitle?: string;
    flags?: Flags;
    lessonNumber?: string;
    learningGoals?: Paragraph;
    lessonPlan?: Paragraph;
    linkedActivities?: LinkedActivity[];
    paperResources?: PaperResource[];
    webResources?: WebResource[];
    vocab?: string[];
    instructionalRoutines?: string[];
    blurb?: Paragraph;
    abTestingExperiments?: ABTestingExperiments;
    isPresentation?: boolean;
    /** URL of the activity thumbnail. */
    thumb?: string;
    thumbId?: string;
    /** There also exists `.standardsAlignment`, so make sure to verify both. */
    standards?: StandardsAlignment[];
    /** There also exists `.standards`, so make sure to verify both. */
    standardsAlignment?: StandardsAlignment[];
    proficiencyNodes?: ProficiencyNode
    lessonStandardsAlignment?: LessonStandardsAlignment;
    screenLicenses?: number[];
    /** Lesson preview email. Unsure of this. */
    lessonPreviewEmailId?: string;
    customMetadata?: CustomMetadata;
    accessibilityNotes?: string;
    modalityRecommendation?: "digital" | "print";
    screenReaderFriendly?: boolean;
    /** Stores a warning if this lesson doesn't work well on iPads. */
    iPadWarning?: string;
    /** The duration this activity lasts. */
    timeEstimate?: number;
    /** Determines if activity is mobile friendly. */
    mobileFriendly?: boolean;
}

export interface ActivityMetadata {
    deleted?: true;
    permissionToShare: boolean | null;
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
    numInstances: number;
    collectionHierarchy?: string[][];
    routedADMId?: string;
    curriculumLocation?: CurriculumLocation;
    collaborators?: string[];
    subjectArea?: "6-12";
}


export interface ActivityCommit extends ActivityDoc {
    version: 0;
}

export interface ActivityConfiguration extends ActivityDoc {
    version: 1;
    _id: string;
    /** Type of activity. For now I'm going to restrict this as `"activitybuilder"`, not sure what else can go here. */
    activity: "activitybuilder"
    /** Was this authored by Team Desmos? */
    teamDesmosAuthored?: boolean;
    /** Is this published? */
    complete?: true;
    /** (ISO 8601) Timestamp when this activity was last edited. */
    edit_ts: string;
    /** (ISO 8601) Timestamp when this activity was published. */
    publishedTimestamp: string;
    licenses: License[];
    authorGroupAccess?: AuthorGroupAccess;
    activityLicenses: License[];
    licenseAccess?: LicenseAccess;
    retailAssetIds?: string[];
    permissionToShare: boolean;
}