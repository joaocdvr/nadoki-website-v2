import { writable } from "svelte/store";

export const isMenuClicked = writable(false);
export const isServicesClicked = writable(false);
export const isStudioClicked = writable(false);
export const isWorkClicked = writable(false);
export const isEquipmentClicked = writable(false);
export const isAboutUsClicked = writable(false);

export function handleMenuClick() {
  isMenuClicked.update((n) => !n);
}

export function handleServicesClick() {
  isServicesClicked.set(true);
  isStudioClicked.set(false);
  isWorkClicked.set(false);
  isEquipmentClicked.set(false);
  isAboutUsClicked.set(false);
}

export function handleStudioClick() {
  isServicesClicked.set(false);
  isStudioClicked.set(true);
  isWorkClicked.set(false);
  isEquipmentClicked.set(false);
  isAboutUsClicked.set(false);
}

export function handleWorkClick() {
  isServicesClicked.set(false);
  isStudioClicked.set(false);
  isWorkClicked.set(true);
  isEquipmentClicked.set(false);
  isAboutUsClicked.set(false);
}

export function handleEquipmentClick() {
  isServicesClicked.set(false);
  isStudioClicked.set(false);
  isWorkClicked.set(false);
  isEquipmentClicked.set(true);
  isAboutUsClicked.set(false);
}

export function handleAboutUsClick() {
  isServicesClicked.set(false);
  isStudioClicked.set(false);
  isWorkClicked.set(false);
  isEquipmentClicked.set(false);
  isAboutUsClicked.set(true);
}
