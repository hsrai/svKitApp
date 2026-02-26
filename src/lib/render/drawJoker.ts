
export function drawJoker(
  ctx:CanvasRenderingContext2D,
  x:number,
  y:number
){
  ctx.beginPath();
  ctx.arc(x,y-25,15,0,Math.PI*2);
  ctx.fillStyle="#e74c3c";
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(x,y-10);
  ctx.lineTo(x,y+20);
  ctx.stroke();
}
