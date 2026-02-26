/**
 * Returns peak Y position for hybrid arc
 */

export function getBezierPeak(
  groundY: number,
  bounce: number
): number {
  return groundY - bounce;
}
