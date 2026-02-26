
<script lang="ts">
 import { onMount } from "svelte";

 import { CONFIG }
   from "$lib/config/jumpConfig";

 import { jumpStore }
   from "$lib/state/jumpStore";

 import { animateJump }
   from "$lib/animation/jumpAnimator";

 import { parabolaY }
   from "$lib/geometry/parabola";

 import { drawArc }
   from "$lib/canvas/traceRenderer";

 import { drawRuler }
   from "$lib/geometry/rulerScale";

 import { drawPencil }
   from "$lib/geometry/pencil";

 let canvas:HTMLCanvasElement;
 let ctx:CanvasRenderingContext2D;

 let jokerX=0;
 let jokerY=0;

 let history:any[]=[];

 onMount(()=>{

  ctx=canvas.getContext("2d")!;
  canvas.width=900;
  canvas.height=420;

  jokerX=CONFIG.X_OFF;
  jokerY=canvas.height-CONFIG.GROUND_Y;

  render();
 });

 function handleJump(){

  const s=$jumpStore;

  if(s.currentJump>=s.pencilLen)
    return;

  const unit=CONFIG.UNIT;

  const x1=
    CONFIG.X_OFF +
    s.currentJump*unit;

  const x2=x1+unit;

  animateJump({

    x1,x2,
    duration:(11-s.speed)*120,

    onUpdate:(x,p)=>{

      jokerX=x;

      jokerY=parabolaY(
        p,
        canvas.height-CONFIG.GROUND_Y,
        CONFIG.BOUNCE
      );

      render();
    },

    onComplete:()=>{

      history.push({x1,x2});
      s.currentJump++;
      render();
    }
  });
 }

 function render(){

  ctx.clearRect(
    0,0,
    canvas.width,
    canvas.height
  );

  const ground=
    canvas.height-CONFIG.GROUND_Y;

  drawRuler(
    ctx,
    canvas.width,
    canvas.height,
    CONFIG.UNIT,
    $jumpStore.start,
    $jumpStore.rulerMax
  );

  drawPencil(
    ctx,
    CONFIG.X_OFF,
    ground-40,
    $jumpStore.pencilLen,
    CONFIG.UNIT
  );

  history.forEach(j=>
    drawArc(
      ctx,
      j.x1,
      j.x2,
      ground,
      CONFIG.BOUNCE
    )
  );

  ctx.beginPath();
  ctx.arc(
    jokerX,
    jokerY-25,
    15,
    0,
    Math.PI*2
  );
  ctx.fill();
 }
</script>

<div class="relative h-[420px] bg-gray-100 rounded-2xl shadow">
 <canvas bind:this={canvas}
         class="absolute inset-0"></canvas>

 <button
   on:click={handleJump}
   class="absolute bottom-4 right-4
          bg-green-600 text-white
          px-6 py-3 rounded-xl shadow">
   JUMP!
 </button>
</div>
