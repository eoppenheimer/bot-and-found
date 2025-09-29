/**
 * @fileoverview Interface of activities for POST requests.
 * @author {Ezra Oppenheimer}
 */

import {Paragraph} from "./paragraph";
import {PolypadState} from "./polypad";
import {GraphState} from "@desmodder/graph-state";

/** Activity identifier received after creating a new activity. */
export interface CreateActivityResponse {
    /** 24 character identifier of the created activity. */
    customId: string;
}

/** Payload used when creating activites. */
export interface CreateActivityPayload {
    /** Metadata, particularly the ability to share this activity. */
    meta: CreateActivityMeta;
    /** Documentation, such as the title or stylization. */
    doc: CreateActivityDoc;
}

/** Meta section of creating payloads. */
interface CreateActivityMeta {
    /** Can we share this activity? (public or private) */
    permissionToShare: boolean;
}

interface CreateActivityDoc {
    /** Title of the create activity. */
    title: string;
    /** Optional description of created activity. */
    blurb?: string;
    /** Stylization theme. */
    themeId: "default" | "early_elementary" | "k5";
    /** Is this an mCLASS assessment? */
    mCLASSFieldStudy?: boolean;
    /** Is there only a next button? This restricts forward navigation. */
    nextOnlyNavigation?: boolean;
}

/** Container for requesting activity. */
export interface RequestedActivity {
    /** The published activity configuration. */
    customLesson: ActivityPublished;
    /** Yeah no idea. */
    lessonStandardDescriptions?: {
        "CCSS": object,
        "TEKS": object,
        "NY": object
    }
    noindex: boolean;
}

/** Interface of a Desmos Activity, published for all to see.
 * 
 * I am using Amplify Education reserved properties here. */
export interface ActivityDefault {
    /** 24 character identifier for this activity. */
    _id: string;
    /** Version number. Ensure to always set this to `0` when POSTing. */
    version: number;
    /** Where this activity originates from. */
    ancestors?: Ancestor[];
    /** Type of activity. For now I'm going to restrict this as `"activitybuilder"`, not sure what else can go here. */
    activity: "activitybuilder";
    /** Collaborators of this activity. List of 24 character identifiers. */
    collaborators?: string[];
    /** Is this activity complete? Not sure exactly but ok. */
    complete: true;
    /** (ISO 8601) Timestamp when this activity was last edited. */
    edit_ts: string;
    /** Stylization theme. */
    themeId: "default" | "early_elementary" | "k5" | "late_elementary";
    /** Unsure of this. */
    licenses: any[];
    /** Unsure of this. */
    screenLicenses: any[];
    /** Can we share this activity? (public or private) */
    permissionToShare: boolean;
    /** (ISO 8601) Timestamp when this activity was published. */
    publishedTimestamp: string;
    /** Title of this activity. */
    title: string;
    /** User of this activity. */
    user: User;
    /** Author of this activity */
    author: User;
    /** 24 character identifier of the most recent commit. */
    commitId: string;
    /** Slides of the activity. */
    steps: Step[];
    /** Summary description of the activity. */
    blurb?: object;
    /** Identifier of the thumbnail. */
    thumbId?: string;
    /** URL to the image thumbnail of the activity. */
    thumb?: string;
    /** Is this an mCLASS assessment? */
    mCLASSFieldStudy?: boolean;
    /** Is there only a next button? This restricts forward navigation. */
    nextOnlyNavigation?: boolean;
    /** Flags to configure the flow of activities. Offers some abilities. */
    flags?: Flags;
    /** Unsure of this. */
    standardsAlignment?: any[];
    /** This is the Desmos Curriculum proprietary licensing. */
    activityLicenses?: {type: string, productId: string}[]
    /** License access. */
    licenseAccess?: string;
    /** Custom metadata. */
    customMetadata?: CustomMetadata;
    /** Standards. Unsure. */
    standards?: any[];
    /** Proficiency nodes. Unsure. */
    proficiencyNodes?: object;
    /** Author groups. This is important for permissions, feel free to fill later. */
    authorGroupAccess?: object;
    retailAssetIds?: any[];
    voiceKey?: string;
    disableFallbackAudio?: boolean;
    spam?: boolean;
    spamConfidenceLevel?: string;
    
    // I'm now starting to add stuff. This can all be fleshed out at a later date.
    screenLicenseAccess?: "licensed" | null;
    activityRetailAssetIds?: any[];
    screenRetailAssetIds?: any[];
    grades?: any[];
}

/** Flags to configure the flow of activities. Offers some abilities. */
export interface Flags {
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
}

/** Published activities may include a `draftAuthor` and `draftTitle`. Such properties *do not* appear in drafts. */
export interface ActivityPublished extends ActivityDefault {
    /** The user who authored the latest draft. Requires `draftTitle`. */
    draftAuthor?: User;
    /** The title of the latest draft. Requires `draftAuthor`. */
    draftTitle?: string;
    
}


/** This represents a draft, which shows more features than `ActivityPublished`. */
export interface ActivityDraft extends ActivityDefault {
    /** Lesson number. */
    lessonNumber?: string;
    /** Activity subtitle. */
    subtitle?: string;
    /** Determines if activity is mobile friendly. */
    mobileFriendly?: boolean;
    /** The duration this activity lasts. */
    timeEstimate?: number;
    /** Standard alignments. This is a pretty expansive list of keywords that is beyond me. */
    lessonStandardsAlignment?: LessonStandardsAlignment;
    /** Lesson preview email. Unsure of this. */
    lessonPreviewEmailId?: string;
    /** Stores a warning if this lesson doesn't work well on iPads. */
    iPadWarning?: string;
    /** Store keywords here. */
    keywords?: string[];
    /** No idea. Follows the same structure as `lessonPlan`. */
    learningGoals?: object;
    /** No idea. Follows the same structure as `learningGoals` */
    lessonPlan?: object;
    /** Store vocabulary words here. */
    vocab?: string[];
}

/** Some template for more metadata in activites. */
export interface LessonStandardsAlignment {
    /** Unsure of this. */
    addressing?: {standardSet: string, id: string}[];
    /** Unsure of this. */
    assessing?: {standardSet: string, id: string}[];
    /** Unsure of this. */
    buildingOn?: {standardSet: string, id: string}[];
    /** Unsure of this. */
    buildingTowards?: {standardSet: string, id: string}[];
}

/** Stores the custom metadata for this activity. */
export interface CustomMetadata {
    /** Amplify reserved metadata for this activity. */
    amplify: CustomMetadataAmplify;
}

/** Amplify reserved metadata for this activity. */
export interface CustomMetadataAmplify {
    /** A list of UUIDs containing their metadata. These are screen IDs. */
    screen: {[uuid: string]: CustomMetadataAmplifyScreen | null};
    /** Unsure what this stores. */
    component: object;
}

export interface CustomMetadataAmplifyScreen {
    schemaVersion: string;
    schemaName: string;
    value: {
        isPowerUp: boolean;
        isUpNextItem: boolean;
        /** These contain the standards used by this screen, such as: `"CCSS.MATH.CONTENT.K.NBT.A.1"` */
        standardsAddressing: string[];
        proficiencyNode: any[];
        secondarySkill?: any[];
    }
}

/** Stores a single user's ID, accompanied by their display name. */
export interface User {
    /** 24 character identifier for this user. */
    id: string;
    /** Display name for this user. Example: "Ezra Oppenheimer". */
    displayName: string;
}

/** Stores a single user's ID, accompanied by their display name. */
export interface Ancestor {
    /** 24 character identifier of the ancestor activity. */
    _id: string;
    /** Author of this ancestor. */
    user: User;
}

/** Sections to divide activites into categories. */
export type SectionKeys = "im-pilot-warmup" | "im-pilot-activity" | "im-pilot-synthesis" | "activity-section-summary" | "im-pilot-cooldown" | "im-pilot-exit-ticket" | "activity-section-center";

/** The layout of a single screen. */
export interface Step {
    /** Type of screen. This is always `"two-column"` from my findings, even for fullscreen graphs. */
    type: "two-column";
    /** 24 character identifier of this screen. */
    id: string;
    /** Unsure of this. */
    teacherTips: object;
    /** Begins a new section at this screen. */
    beginNewSection?: SectionKeys;
    /** 1/5 layers of descent into the slide. */
    root: Root;
    /** Title of this screen. */
    title?: string;
    /** Alignment of screen. This is always `"default"` from my findings. */
    alignment?: "default";
    /** Computation Layer for this screen. */
    script?: string;
    /** The history of this specific screen. */
    provenance?: Provenance | null;
    /** This size of the left column.
     * - `"one-third"` means the left column is ⅓ of the screen width
     * - `"two-third"` means the left column is ⅔ of the screen width
     * - `"default"` or `undefined` means both columns are ½ of the screen width. */
    columnWidth?: "one-third" | "two-third" | "default";
    /** The CL identifier of this screen. */
    alias?: string;
    /** Feedback annotations for this screen. */
    feedback?: Feedback[];
    /** Background of this screen. */
    background?: BackgroundSolid | BackgroundGradient | null;
    /** Standards of this screen. */
    standards?: any[];
    /** Proficiency nodes of this screen. */
    proficiencyNodes?: any[];
    /** The source of this reference item (assuming it is a reference). */
    sourceItem?: SourceItem;
}

export interface SourceItem {
    itemMetaId: string;
    itemCommitId: string;
    stepIdMapping: {
        oldId: string;
        newId: string;
        componentIdMappings: {
            oldId: string;
            newId: string;
        }[]
    };
    itemType: "reference"
  }

export interface BackgroundSolid {
    type: "solid-color"
    /** Color hex for this background, or string. */
    color: string;
}


export interface BackgroundGradient {
    type: "gradient";
    /** String of this gradient. Eg. `"linear-gradient(#F6F0C3, #D3F1F0)"`*/
    value: string;
}

interface FeedbackDefault {
    /** 24 character identifier of this feedback. */
    id: string;
    /** The name of this feedback. */
    name: string;
    /** DO NOT USE THIS FOR READING. The text contents of this feedback, stored as a stringified JSON.
     * 
     * If you parse this, it will be structured as `ContentStart` from the `./src/globals/interface/paragraph.ts` file. */
    doc: string;
    /** USE ME FOR READING!!!!
     * 
     * The text contents of this feedback. This is stored within `.doc` in some way, unsure how specifically. */
    text?: string;
    /** The CL tokens that are affected by feedback. */
    annotations: Annotation[];
    /** @deprecated Here are the timestamps in milliseconds of each word. This is should be as long as `audioText`. */
    wordTimestamps?: number[];
    /** Is the VT piece the solution? */
    isSolution?: boolean | null,
}

interface FeedbackStatic extends FeedbackDefault {
    /** What kind of feedback is this? */
    type: "static";
    /** @deprecated The audio URL of this static feedback piece. */
    audioUrl?: string;
    /** @deprecated The audio text of this feedback. This should be equal to `.text` otherwise it will flag an error. */
    audioText?: string;
    /** @deprecated The actor/actress of this recording. */
    audioVoice?: FeedbackStaticAudio["audioVoice"];
    /** USE ME FOR INDIVIDUAL ANALYSIS! Stores the each actors used in the feedback. */
    audio: FeedbackStaticAudio[];
}

interface FeedbackStaticAudio {
    /** The audio URL of this static feedback piece. */
    audioUrl: string;
    /** The audio text of this feedback. This should be equal to `.text` otherwise it will flag an error. */
    audioText: string;
    /** The actor/actress of this recording. */
    audioVoice: "Gigi" | "Hayden" | "Astrid";
    /** Here are the timestamps in milliseconds of each word. This is should be as long as `audioText`. */
    wordTimestamps: number[];
}

interface FeedbackDynamic extends FeedbackDefault {
    /** What kind of feedback is this? */
    type: "dynamic";
    /** The dynamic path for this feedback piece. There seems to be some sort of query authentication tokens going on here.  */
    audioUrl: string;
    /** Fallback to this feedback name if not defined. */
    fallbackFeedbackName?: string,
}

export type Feedback = FeedbackStatic | FeedbackDynamic;

/** A single annotation mark. */
export interface Annotation {
    /** 24 character identifier of this annotation. */
    id: string;
    /** The CL identifier of this annotation.
     * @example "lassoDigit1"*/
    name: string;
    /** Audio timestamp in miliseconds. */
    audioTimestamp: number | null;
    /** The token position of this annotation. */
    position: number;
    /** How much to delay this annotation piece. */
    playbackOffset: number | null;
    /** Is "Hide after animation" checked for this annotation? */
    isTransient: boolean;
    /** The legacy text content for this annotation. Used for older annotations. */
    labelText?: string;
    /** What is the font size of this annotation? */
    labelTextSize?: "small" | "medium" | "large";
    /** The version of Virtual Tutor this is using. @example "v2" */
    version?: string;
    /** What are the contents of this annotation? This is `ContentStart` but stringified. */
    labelDoc?: string;
}

/** Tips that appear at the bottom of the slide. */
export interface TeacherTips {
    /** Sample responses of students. */
    "sample-responses"?: Paragraph;
    /** Assistance for students on how to use the activity. */
    "student-support"?: Paragraph;
    /** Assistance for teachers on how to use this activity. */
    "teacher-moves"?: Paragraph;
}

/** 
* Rich text to display in the Activity Builder.
*/



/** History of a particular slide. */
export interface Provenance {
    ancestors: ProvenanceAncestor[];
    copiedFrom: ProvenanceAncestor;
    copyCount: number;
}

export interface ProvenanceAncestor {
    /** 24 character identifier of the slide. */
    stepId: string;
    /** 24 character identifier of the commit identifier. */
    commitId: string;
    /** 24 character identifier for this activity. */
    activityId: string;
    /** (ISO 8601) Timestamp when this activity was edited. */
    activityEditTime: string;
}

/** 1/5 layers of descent into the slide. */
export interface Root {
    /** 2/5 layer of descent into the slide. */
    linearlayout: LinearLayout1;
}

/** 2/5 layer of descent into the slide. */
export interface LinearLayout1 {
    /** Type of linear layout. Always `"columns"`, even on single column graphs. */
    mainType: "columns";
    /** 
     * 3/5 layers of descent into the slide.
     * 
     * This one is actually responsible for the columns. Use `0` or `1` to index.
    */
    components: LinearLayout2[];
}

/** 3/5 layers of descent into the slide. */
export interface LinearLayout2 {
    /** 4/5 layers of descent into the slide. */
    linearlayout: LinearLayout3;
}

/** 4/5 layers of descent into the slide. */
export interface LinearLayout3 {
    /** Type of linear layout. Always `"rows"`. */
    mainType: "rows";
    /**
     * 5/5 layers of descent into the slide.
     * 
     * List of components to grab. Index with a number.
    */
    components: Component[];
}

/** Stores each component separately. */
export interface Component {
    /** Desmos graph. */
    "input/graph"?: GraphComponent;
    /** Math input. */
    "input/expression"?: InputMathComponent;
    /** Text input. */
    "input/text"?: InputTextComponent;
    /** Multiple choice input. */
    "multiple-choice"?: MultipleChoiceComponent;
    /** Image. */
    "exhibit/image"?: ImageComponent;
    /** Note. */
    "exhibit/text"?: NoteComponent;
    /** Ordered list. */
    "reorder"?: OrderedListComponent;
    /** Video. */
    "video"?: VideoComponent;
    /** Sketch input. */
    "sketch"?: SketchComponent;
    /** Table. */
    "table"?: TableComponent;
    /** Button input. */
    "action-button"?: ButtonComponent;
    /** Polypad canvas. */
    "polypad"?: PolypadComponent;
}

/** Types of components that can be used. */
export type ComponentKey = keyof Component;

/** Types of components that can be outputted. */
export type ComponentType = Exclude<Component[keyof Component], undefined>;

/** Default component that is extend. */
export interface DefaultComponent {
    /** Computation Layer alias. */
    alias?: string | null;
    /** Computation Layer script. */
    script?: string | null;
    /** 24 character identifier for this component. */
    id: string;
    /** Image URL of the thumbnail for this component. */
    img?: string;
    /** A new afterthought feature to prevent sinks from overwriting GC components. */
    legacyActionsOverrideSinks?: boolean;
    /** Is this component hidden from the dashboard? */
    hideFromDashboard?: true;
    /** Unsure. */
    swappedComponentData?: any;
    /** Standards of this component. */
    standards?: any;
}

/** Desmos graph component. */
export interface GraphComponent extends DefaultComponent {
    exhibitMode: boolean;
    calculatorState: GraphState | undefined | null;
    aspectRatio?: "4:3" | "16:9";
    hideBorder?: true;
    hideResponsesFromDashboard?: boolean;
    whiteBackground?: boolean;
}


export interface InputMathComponent extends DefaultComponent {
    showPeerResponses: boolean;
    explainResponse: boolean;
}

export interface InputTextComponent extends DefaultComponent {
    showPeerResponses: boolean;
}

export interface MultipleChoiceComponent extends DefaultComponent {
    answerKey?: object;
    choices: object;
    choiceLayout?: "buttons" | "list";
    choiceIds: string[];
    multipleChoiceType: "simple" | "multi";
    showExplanation: boolean;
    showPeerResponses: boolean;
    randomizeChoices: boolean;
}

export interface ImageComponent extends DefaultComponent {
    alt: string;
    img?: string;
}

export interface NoteComponent extends DefaultComponent {
    text: string;
    background?: {type: "sticky" | "blue" | "taped" | "blank"};
    doc?: string;
    noteType?: "note";
}

export interface OrderedListComponent extends DefaultComponent {
    items: object;
    itemIds: string[];
}

export interface VideoComponent extends DefaultComponent {
    videoDescription: string;
    videoConfig: object;
}

export interface SketchComponent extends DefaultComponent {
    version: number;
    background: {type: string};
    enabledTools: {
        points: boolean;
        line: boolean;
        pencil: boolean;
        math: boolean;
        text: boolean;
    } | null;
    isColorPickerEnabled?: boolean;
    isClearEnabled?: boolean;
    aspectRatio?: string;
    calculatorState: GraphState;
    whiteBackground?: boolean;
}

export interface TableComponent extends DefaultComponent {
    rowIds: string[];
    rows: object;
    cells: object;
    columnTypes: any;
    fullyEditable: boolean;
    canAddRows: boolean;
    columnHeaders: boolean;
    rowHeaders: boolean;
    hideResponsesFromDashboard?: true;
}

export interface ButtonComponent extends DefaultComponent {
    label: string | null;
    resetOnNavigation: boolean;
}

export interface PolypadComponent extends DefaultComponent {
    isManipulative: boolean;
    polypadState: PolypadState;
    thumbnailImg: string;
}
