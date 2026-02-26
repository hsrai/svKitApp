
export function drawPencil(
  ctx: CanvasRenderingContext2D,
  x: number,
  ground: number
) {
  const height = 60;

  // Body
  ctx.fillStyle = "#f1c40f";
  ctx.fillRect(x - 4, ground - height, 8, height);

  // Tip
  ctx.beginPath();
  ctx.moveTo(x - 6, ground - height);
  ctx.lineTo(x + 6, ground - height);
  ctx.lineTo(x, ground - height - 10);
  ctx.closePath();

  ctx.fillStyle = "#d35400";
  ctx.fill();
}
