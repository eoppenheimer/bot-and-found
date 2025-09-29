/**
 * @fileoverview This is sampled from the official source code of Polypad.
 * @borrows polypad/src/interfaces.ts
 * @author {Mathigon}
 */

export type GridOptions = "none"|"square2-grid"|"square-dots"|"square-grid"|"tri-dots"|"tri-grid"|"tri2-dots"|"tri2-grid";
export type LabelType = "fraction"|"percentage"|"decimal"|"degree"|"hidden"|"above"|"below"|"number"|"modular"|"text"|"color"|"all";
export interface CableData {
  fromPort?: string;
  toPort?: string;
  toTileId: string;
}
export type Sound = "synth"|"piano"|"marimba"|"bass"|"aguitar"|"violin"|"cello"|
  "eguitar"|"cowbell"|"kick"|"snare"|"tom-high"|"tom-low"|"hihat-open"|
  "hihat-closed"|"crash"|"cow"|"bark"|"clap"|"shaker"|"ride"|"woodblock"|"duck"|
  "honk"|"boing";
export type Scale = "major"|"minor"|"blues"|"chromatic"|"pentatonic"|"none";

export type TileName = 
  "algebra"|
  "axes"|
  "balance"|
  "log-bar"|
  "slider"|
  "token"|
  "action-button"|
  "chess-board"|
  "chess-piece"|
  "clock"|
  "currency"|
  "logic-gate"|
  "logic-speaker"|
  "logic-metronome"|
  "logic-button"|
  "logic-switch"|
  "logic-bulb"|
  "logic-display"|
  "piano"|
  "song"|
  "fraction-bar"|
  "fraction-circle"|
  "aperiodic-hat"|
  "circle"|
  "custom-polygon"|
  "egg"|
  "fractal"|
  "garden"|
  "kolam"|
  "penrose"|
  "polyomino"|
  "polygon"|
  "polyhedron"|
  "rectangle"|
  "reg-polygon"|
  "tangram"|
  "tantrix"|
  "ruler"|
  "protractor"|
  "set-triangle"|
  "compass"|
  "abacus"|
  "bucket"|
  "decimal-grid"|
  "dot-machine"|
  "dot"|
  "number-bar"|
  "number-card"|
  "number-cube"|
  "number-dot"|
  "number-frame"|
  "number-grid"|
  "multi-jump"|
  "number-line"|
  "number-tile"|
  "prime-disk"|
  "ten-frame"|
  "ten-frame-counter"|
  "categorizer"|
  "equation"|
  "geo"|
  "group"|
  "image"|
  "operation-card"|
  "question-blank"|
  "text"|
  "card"|
  "coin"|
  "dice"|
  "domino"|
  "polyhedral-dice"|
  "random"|
  "spinner"|
  "custom-spinner"|
  "box-whisker"|
  "chart"|
  "pie-chart"|
  "table";
