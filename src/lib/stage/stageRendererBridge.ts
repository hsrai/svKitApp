import { renderStage }
  from "$lib/render/renderStage";

import type { StageState }
  from "./stageState";

export function renderBridge(
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  state: StageState,
  history: {x1:number;x2:number}[]
) {
  renderStage(
    ctx,
    canvas,
    state.jokerX,
    state.jokerY,
    history
  );
}
