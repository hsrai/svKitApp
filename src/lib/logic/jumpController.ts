import { animateJump }
  from "$lib/animation/jumpAnimator";

import { CONFIG }
  from "$lib/config/jumpConfig";

import {
  currentJump,
  jumpHistory,
  isJumping
} from "$lib/state/jumpStore";

import { get } from "svelte/store";

/* ---------------------------------- */
/* SINGLE STEP JUMP CONTROLLER        */
/* ---------------------------------- */

export function stepJump(
  speed: number,
  onUpdate: (x:number,y:number)=>void,
  onComplete: ()=>void
) {

  if (get(isJumping)) return;

  const jumpIndex =
    get(currentJump);

  const x1 =
    CONFIG.X_OFF +
    jumpIndex * CONFIG.UNIT;

  const x2 =
    CONFIG.X_OFF +
    (jumpIndex + 1) * CONFIG.UNIT;

  isJumping.set(true);

  animateJump(
    x1,
    x2,
    speed,
    onUpdate,
    () => {

      jumpHistory.update(h => [
        ...h,
        { x1, x2 }
      ]);

      currentJump.update(n => n + 1);

      isJumping.set(false);

      onComplete();
    }
  );
}
