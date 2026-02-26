
import { writable } from "svelte/store";

export const jumpStore = writable({
  rulerMax: 15,
  start: 6,
  pencilLen: 5,
  speed: 5,
  currentJump: 0,
  isJumping: false
});
