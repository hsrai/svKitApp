/* -----------------------------------------
   GEOMETRY DOMAIN TYPES
----------------------------------------- */

export interface Point {
  x: number;
  y: number;
}

export interface JumpArcInput {
  x1: number;
  x2: number;
  groundY: number;
  height: number;
}

export interface SampleOptions {
  resolution?: number; // px distance
}

export type Trace = Point[];
