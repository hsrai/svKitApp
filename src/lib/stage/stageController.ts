import { CONFIG }
  from "$lib/config/jumpConfig";

import { doJumpLogic }
  from "$lib/logic/doJump";

import type { StageState }
  from "./stageState";

export function initStageState(
  canvas: HTMLCanvasElement
): StageState {

  const ground =
    canvas.height - CONFIG.GROUND_Y;

  return {
    jokerX: CONFIG.X_OFF,
    jokerY: ground,
    ground
  };
}

export function updateJoker(
  state: StageState,
  x:number,
  y:number
) {
  state.jokerX = x;
  state.jokerY = y;
}

export function triggerJump(
  state: StageState,
  render: ()=>void
) {
  doJumpLogic(
    state.ground,
    (x,y)=>updateJoker(state,x,y),
    render
  );
}
