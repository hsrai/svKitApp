import type {
  Point,
  JumpArcInput,
  Trace
} from './types';

import { getParabolicPoint }
  from './parabola';

import {
  clampToGround,
  clampWithinX
} from './bounds';

/* -----------------------------------------
   TRACE SAMPLER
----------------------------------------- */

export function sampleParabolaTrace(
  input: JumpArcInput,
  resolution = 2
): Trace {

  const steps =
    Math.ceil(
      Math.abs(input.x2 - input.x1) /
      resolution
    );

  const trace: Trace = [];

  for (let i = 0; i <= steps; i++) {

    const progress =
      i / steps;

    let p =
      getParabolicPoint(
        progress,
        input
      );

    p =
      clampToGround(
        p,
        input.groundY
      );

    p =
      clampWithinX(
        p,
        input.x1,
        input.x2
      );

    trace.push({
      x: Math.round(p.x),
      y: Math.round(p.y)
    });
  }

  return trace;
}
