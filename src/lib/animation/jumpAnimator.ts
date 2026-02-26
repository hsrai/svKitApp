
export function animateJump({
 x1,x2,duration,
 onUpdate,onComplete
}:any){

 const start=performance.now();

 function frame(t:number){

   const p=Math.min(
     (t-start)/duration,
     1
   );

   const x=x1+(x2-x1)*p;

   onUpdate(x,p);

   if(p<1)
     requestAnimationFrame(frame);
   else
     onComplete();
 }

 requestAnimationFrame(frame);
}
