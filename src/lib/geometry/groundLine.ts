
export function drawGroundLine(
  ctx: CanvasRenderingContext2D,
  width: number,
  ground: number
) {
  ctx.strokeStyle = "#000";
  ctx.lineWidth = 2;

  ctx.beginPath();
  ctx.moveTo(0, ground);
  ctx.lineTo(width, ground);
  ctx.stroke();
}
