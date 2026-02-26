import type { Point } from './types';

/* -----------------------------------------
   BOUNDARY UTILITIES
----------------------------------------- */

export function clampToGround(
  p: Point,
  groundY: number
): Point {

  if (p.y > groundY) {
    return { x: p.x, y: groundY };
  }

  return p;
}

export function clampWithinX(
  p: Point,
  x1: number,
  x2: number
): Point {

  if (p.x < x1) return { ...p, x: x1 };
  if (p.x > x2) return { ...p, x: x2 };

  return p;
}
