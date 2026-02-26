
import {
  jumpHistory,
  currentJump,
  isJumping
} from "$lib/state/jumpStore";

import { CONFIG }
  from "$lib/config/jumpConfig";

import { animateJump }
  from "$lib/animation/jumpAnimator";

import { parabolaY }
  from "$lib/geometry/parabola";

export function doJumpLogic(
  ground:number,
  setJoker:(x:number,y:number)=>void,
  render:()=>void
){
  let jumping:boolean;
  isJumping.subscribe(v=>jumping=v)();

  if(jumping) return;

  let index:number;
  currentJump.subscribe(v=>index=v)();

  const x1 =
    CONFIG.X_OFF +
    index * CONFIG.UNIT;

  const x2 = x1 + CONFIG.UNIT;

  isJumping.set(true);

  animateJump({
    x1,
    x2,
    duration:600,

    onUpdate:(x,p)=>{
      const y =
        parabolaY(
          p,
          ground,
          CONFIG.BOUNCE
        );

      setJoker(x,y);
      render();
    },

    onComplete:()=>{

      jumpHistory.update(h=>[
        ...h,
        {x1,x2}
      ]);

      currentJump.update(v=>v+1);
      isJumping.set(false);

      render();
    }
  });
}
