/**
 * @fileoverview Interface of Polypad components.
 * @author {Mathigon}
 */

import { CableData, GridOptions, LabelType, Scale, Sound, TileName } from "./polypadAuthentic";

/** Object structure of a Polypad component. */
export interface PolypadState {
  /** Options of the Polypad state. */
  options: PolypadOptions;
  /** Strokes that exist in the canvas. */
  strokes?: any;
  /**
   * Tile identifiers that exist in this canvas.
   * 
   * @pattern ^[a-z0-9]{10}$
  */
  tiles: PolypadId;
  /** Version number. */
  version: number;
}

/**
 * Interface representing the Polypad options.
 * @interface
 */
export interface PolypadOptions {
  /** id of the toolbar. */
  toolbar?: string;
  /** id of the settings. */
  settings?: string;
  /** id of the sidebar. */
  sidebar?: string;
  /** id of the actionbar. */
  actionbar?: string;

  /** Options for the grid. */
  grid?: GridOptions;
  /** Background color. */
  background?: string;
  /** Flag to disable copy-paste functionality. */
  noCopyPaste?: boolean;
  /** Flag to disable undo-redo functionality. */
  noUndoRedo?: boolean;
  /** Flag to disable pinch-pan navigation. */
  noPinchPan?: boolean;
  /** Flag to disable deleting. */
  noDeleting?: boolean;
  /** Flag to disable erasing tiles. */
  noEraseTiles?: boolean;
  /** Flag to disable pen options. */
  noPenOptions?: boolean;
  /** Flag to disable sound effects. */
  noAudio?: boolean;
  /** Flag to disable sonification tools. */
  noMusic?: boolean;
  /** Flag to disable rotation. */
  noRotating?: boolean;
  /** Flag to disable snapping. */
  noSnapping?: boolean;
  /** Flag for large UI. */
  largeUI?: boolean;
  /** Specifies the canvas type */
  canvas?: "infinite"|"notebook"|"fixed";
  /** Specifies the horizontal (X-axis) size of the canvas */
  canvasX?: number;
  /** Specifies the vertical (Y-axis) size of the canvas */
  canvasY?: number;

  /** Weights of the tiles in balance scale. */
  tileWeights?: string;
  /** Size of the X dimension in algebra grid. */
  algebraXSize?: number;
  /** Size of the Y dimension in algebra grid. */
  algebraYSize?: number;
  /** Flag to use alternative colors. */
  altColors?: boolean;
  /** Flag to merge the tiles. */
  mergeTiles?: boolean;
  /** Flag for high contrast mode. */
  highContrast?: boolean;
  /** Flag for hand drawn mode. */
  handdrawn?: boolean;

  // here are ones that i found myself
  /** Flag to evaluate equations. */
  evalEquations?: boolean;
  /** User interface presets. */
  uiPreset: "custom";
}

export interface PolypadId {
  /**
   * 10 character random identifier for this tile.
   * 
   * @pattern ^[a-z]{10}$ 
  */
  [key: string]: TileData;
}



export interface TileData {
  name: TileName;
  x?: number;
  y?: number;
  rot?: number;
  /** @pattern ^#[\w]{3,8}$ */
  color?: string;
  /** @pattern ^#[\w]{3,8}$ */
  backColor?: string;
  isFlipped?: boolean;
  layer?: "front"|"normal"|"back";
  zIndex?: number;
  /** @maxLength 200 */
  altText?: string;
  status?: "locked"|"fixed"|"hidden"|"generator";
  hideHandles?: boolean;
  labels?: LabelType;
  cables?: CableData[] | null;

  sound?: Sound;
  volume?: number;
  tempo?: number;
  musicScale?: Scale;
  animation?: "vertices"|"perimeter"|"area"|"angles";  // For Polygon tiles
  note?: number;  // Default is 0, which is played as note 72
  modGain?: number;
  modFreq?: number;
  [other: string]: any;
}