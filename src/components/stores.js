import { writable } from "svelte/store";

export const isMenuClicked = writable(false);
export const isHomepageClicked = writable(false);
export const isServicesClicked = writable(false);
export const isStudioClicked = writable(false);
export const isWorkClicked = writable(false);
export const isEquipmentClicked = writable(false);
export const isAboutUsClicked = writable(false);

export const animationDuration = 400;

export function handleMenuClick() {
  isMenuClicked.update(n => !n);
}
