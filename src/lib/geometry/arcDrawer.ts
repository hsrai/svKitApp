import { CONFIG } from "$lib/config/jumpConfig";

export function drawArc(
  ctx: CanvasRenderingContext2D,
  x1: number,
  x2: number,
  ground: number
) {
  const mid = (x1 + x2) / 2;
  const peak = ground - CONFIG.BOUNCE;

  ctx.beginPath();
  ctx.moveTo(x1, ground);

  ctx.quadraticCurveTo(
    mid,
    peak,
    x2,
    ground
  );

  ctx.strokeStyle = "#e67e22";
  ctx.lineWidth = 3;
  ctx.stroke();
}
