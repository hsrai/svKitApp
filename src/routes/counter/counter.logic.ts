import { writable } from 'svelte/store';

export const count = writable(0);

export function increment() {
  count.update(v => v + 1);
}

export function decrement() {
  count.update(v => v - 1);
}
