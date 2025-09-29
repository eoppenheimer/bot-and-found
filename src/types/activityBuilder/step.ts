/**
 * @fileoverview Interface of activities for POST requests.
 * @author {Ezra Oppenheimer}
 */

import { StandardsAlignment } from "./doc";
import { Paragraph } from "./paragraph";
import { PolypadState } from "./polypad";
import { GraphState } from "@desmodder/graph-state";

/** Sections to divide activites into categories. */
export type SectionKeys = "im-pilot-warmup" | "im-pilot-activity" | "im-pilot-synthesis" | "activity-section-summary" | "im-pilot-cooldown" | "im-pilot-exit-ticket" | "activity-section-center" | "im-pilot-show-what-you-know";

type CalculatorState = object | undefined | null | GraphState;

/** The layout of a single screen. */
export interface Step {
    /** Type of screen. This is always `"two-column"` from my findings, even for fullscreen graphs. */
    type: "two-column";
    /** 24 character identifier of this screen. */
    id: string;
    /** Tips for the teacher to use on this screen. */
    teacherTips: TeacherTips;
    /** Begins a new section at this screen. */
    beginNewSection?: SectionKeys | null;
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
    standards?: StandardsAlignment[];
    /** Proficiency nodes of this screen. */
    proficiencyNodes?: ProficiencyNode[];
    /** The source of this reference item (assuming it is a reference). */
    sourceItem?: SourceItem;
    /** The data of this section. */
    sectionData?: SectionData;
    /** The student edition starting page. */
    studentEditionStartingPage?: number;
    /** Not really sure what this does... */
    advancedLayout?: boolean;
}

interface SectionData {
    estimatedSectionTime: number;
}


interface ProficiencyNode {
    name: string;
    proficiencyNodeId: number;
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
    itemType?: "reference"
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
    "sample-responses"?: Paragraph | string | null;
    /** Assistance for students on how to use the activity. */
    "student-support"?: Paragraph | string | null;
    /** Assistance for teachers on how to use this activity. */
    "teacher-moves"?: Paragraph | string | null;
    /** Rubric on the lesson. */
    "rubric"?: Paragraph | string | null;
}

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
    /** Student survey. */
    "student-survey"?: DefaultComponent;
    /** Card sort. */
    "cardsort"?: CardSortComponent;
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
    img?: string | null;
    /** A new afterthought feature to prevent sinks from overwriting GC components. */
    legacyActionsOverrideSinks?: boolean;
    /** Is this component hidden from the dashboard? */
    hideFromDashboard?: boolean;
    /** Unsure. */
    swappedComponentData?: any;
    /** Standards of this component. */
    standards?: StandardsAlignment[];
    /** Proficiency nodes of this component. */
    proficiencyNodes?: ProficiencyNode[];
}

/** Desmos graph component. */
export interface GraphComponent extends DefaultComponent {
    exhibitMode: boolean;
    calculatorState?: CalculatorState;
    aspectRatio?: "4:3" | "16:9";
    hideBorder?: boolean;
    hideResponsesFromDashboard?: boolean;
    whiteBackground?: boolean;
    showBackground?: boolean;
}


export interface InputMathComponent extends DefaultComponent {
    showPeerResponses: boolean;
    explainResponse?: boolean;
    showMathHelperLink?: boolean;
}

export interface InputTextComponent extends DefaultComponent {
    showPeerResponses: boolean;
    shouldShowUploadImageButton?: boolean;
    shouldShowUploadAudioButton?: boolean;
    shouldShowTypeMathButton?: boolean;
}

interface MultipleChoiceKey {
    choiceIds: Record<string, boolean>;
}

export interface MultipleChoiceComponent extends DefaultComponent {
    answerKey?: MultipleChoiceKey | null;
    choices: object;
    choiceLayout?: "buttons" | "list" | "segment" | "grid" | null;
    choiceIds: string[];
    multipleChoiceType: "simple" | "multi";
    showExplanation?: boolean;
    showPeerResponses: boolean;
    randomizeChoices?: boolean;
    enforceOptionSelected?: boolean;
    showExplainAtEndOfLayout?: boolean;
}

export interface ImageComponent extends DefaultComponent {
    alt: string;
    allowFullscreen?: boolean;
    showBorder?: boolean;
}

export interface NoteComponent extends DefaultComponent {
    text: string;
    background?: {type: "sticky" | "blue" | "taped" | "blank"};
    doc?: string;
    noteType?: "note";
    readTextAloudMeta?: {
        audioUrl: string;
        sourceText: string;
        voice?: "Gigi" | "Hayden" | "Astrid";
    }
}

export interface OrderedListComponent extends DefaultComponent {
    items: object;
    itemIds: string[];
    topString?: string;
    bottomString?: string;
}

export interface VideoComponent extends DefaultComponent {
    videoDescription: string;
    videoConfig: object;
}

type SketchComponentBackground =  {
    type: "image";
    img: string;
} | {
    type: "graph";
    id?: string;
    img?: string;
} | {
    type: "blank";
}

export interface SketchComponent extends DefaultComponent {
    version?: number;
    background: SketchComponentBackground;
    enabledTools?: {
        points: boolean;
        line: boolean;
        pencil: boolean;
        math: boolean;
        text: boolean;
    } | null;
    isColorPickerEnabled?: boolean;
    isClearEnabled?: boolean;
    aspectRatio?: string;
    calculatorState?: CalculatorState;
    whiteBackground?: boolean;
}

export interface TableComponent extends DefaultComponent {
    rowIds: string[];
    rows: object;
    cells: object;
    columnTypes: any;
    fullyEditable: boolean;
    canAddRows: boolean;
    columnHeaders?: boolean;
    rowHeaders?: boolean;
    hideResponsesFromDashboard?: boolean;
    showMathHelperLink?: boolean;
    tableLayout?: "vertical";
}

export interface ButtonComponent extends DefaultComponent {
    label?: string | null;
    resetOnNavigation?: boolean;
}



interface CardSortAnswerGroup {
    id: string;
    cardIds: string[];
    x: number;
    y: number;
    collapsed?: boolean;
}

interface CardSortAnswerKey {
    groupIds: string[];
    groups: Record<string, CardSortAnswerGroup>;
}

interface CardSortSingleDefault {
    size: "default" | "large";
}

interface CardSortSingleImage extends CardSortSingleDefault {
    type: "image";
    img?: string;
    alt?: string;
}

interface CardSortSingleText extends CardSortSingleDefault {
    type: "text";
    text?: string;
    doc?: string;
}

interface CardSortSingleGraph extends CardSortSingleDefault {
    type: "graph";
    calculatorState?: CalculatorState;
    img?: string;
    alt?: string;
}

interface CardSortSingleCategory extends CardSortSingleDefault {
    type: "category";
    /** Use English color, lowercased. */
    color: string;
    doc?: string;
}

type CardSortSingle = CardSortSingleImage | CardSortSingleText | CardSortSingleGraph | CardSortSingleCategory;

export interface CardSortComponent extends DefaultComponent {
    cards: Record<string, CardSortSingle>
    cardIds: string[];
    answerKey?: CardSortAnswerKey;
}

export interface PolypadComponent extends DefaultComponent {
    isManipulative: boolean;
    polypadState: PolypadState;
    thumbnailImg: string;
}