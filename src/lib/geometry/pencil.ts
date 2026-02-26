
export function drawPencil(
 ctx:CanvasRenderingContext2D,
 x:number,
 y:number,
 length:number,
 unit:number
){
 const w=length*unit;

 ctx.fillStyle="#F59E0B";
 ctx.fillRect(x,y,w,20);

 ctx.fillStyle="#FB7185";
 ctx.fillRect(x,y,12,20);

 ctx.fillStyle="#2563EB";
 ctx.fillRect(x+10,y,w-40,20);

 ctx.fillStyle="#D97706";
 ctx.beginPath();
 ctx.moveTo(x+w,y);
 ctx.lineTo(x+w+15,y+10);
 ctx.lineTo(x+w,y+20);
 ctx.fill();
}
