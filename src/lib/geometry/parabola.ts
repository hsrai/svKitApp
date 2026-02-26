
export function parabolaY(
  progress:number,
  ground:number,
  bounce:number
){
  const h =
    2*bounce*
    progress*
    (1-progress);

  return ground - h;
}
