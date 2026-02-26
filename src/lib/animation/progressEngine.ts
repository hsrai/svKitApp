/**
 * Enterprise Progress Engine
 * --------------------------
 * Converts time → normalized progress (0 → 1)
 * Speed controlled
 * Frame safe
 */

export interface ProgressOptions {
  duration: number;     // ms
  onUpdate: (p: number) => void;
  onComplete?: () => void;
}

export function runProgress({
  duration,
  onUpdate,
  onComplete
}: ProgressOptions) {

  const start = performance.now();

  function frame(now: number) {

    let p = (now - start) / duration;

    // Clamp boundaries
    if (p > 1) p = 1;
    if (p < 0) p = 0;

    onUpdate(p);

    if (p < 1) {
      requestAnimationFrame(frame);
    } else {
      onComplete?.();
    }
  }

  requestAnimationFrame(frame);
}
