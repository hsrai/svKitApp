
export function drawRuler(
 ctx:CanvasRenderingContext2D,
 width:number,
 height:number,
 unit:number,
 start:number,
 max:number
){
 const y = height-90;

 ctx.fillStyle="#FACC15";
 ctx.fillRect(40,y,unit*(max-start+1),60);

 ctx.strokeRect(
   40,y,
   unit*(max-start+1),
   60
 );

 for(let i=0;i<=max-start;i++){
   const x=40+i*unit;

   ctx.beginPath();
   ctx.moveTo(x,y);
   ctx.lineTo(x,y+60);
   ctx.stroke();

   ctx.fillText(
     String(start+i),
     x+5,
     y+75
   );
 }
}
