
import { drawGroundLine } from "../geometry/groundLine";
import { drawRulerScale } from "../geometry/rulerScale";
import { drawPencil } from "../geometry/drawPencil";

export function renderStage(
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  jokerX: number,
  jokerY: number,
  history: { x1:number; x2:number }[],
  live?: { x1:number; x2:number; progress:number }
) {
  ctx.clearRect(0,0,canvas.width,canvas.height);

  const ground = canvas.height - 80;

  // Ground + Scale
  drawGroundLine(ctx, canvas.width, ground);
  drawRulerScale(ctx, canvas.width, ground, 80);

  // Past arcs
  history.forEach(j => {
    drawArc(ctx, j.x1, j.x2, ground, 60);
  });

  // Live arc trace
  if (live) {
    const xMid =
      live.x1 +
      (live.x2 - live.x1) * live.progress;

    drawArc(ctx, live.x1, xMid, ground, 60);
  }

  // Joker
  ctx.beginPath();
  ctx.arc(jokerX, jokerY - 25, 15, 0, Math.PI*2);
  ctx.fillStyle = "#e74c3c";
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(jokerX, jokerY - 10);
  ctx.lineTo(jokerX, jokerY + 20);
  ctx.stroke();

  // Pencil at landing
  drawPencil(ctx, jokerX, ground);
}

function drawArc(
  ctx: CanvasRenderingContext2D,
  x1:number,
  x2:number,
  ground:number,
  bounce:number
){
  const mid = (x1+x2)/2;
  const peak = ground - bounce;

  ctx.beginPath();
  ctx.moveTo(x1, ground);
  ctx.quadraticCurveTo(mid, peak, x2, ground);
  ctx.strokeStyle = "#e67e22";
  ctx.lineWidth = 3;
  ctx.stroke();
}
