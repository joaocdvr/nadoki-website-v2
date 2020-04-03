import { writable } from "svelte/store";

export const isMenuClicked = writable(false);

export function handleMenuClick() {
  isMenuClicked.update(n => !n);
}
