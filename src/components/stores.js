import { writable, get } from "svelte/store";

// Menu handling
export const isMenuClicked = writable(false);

export function handleMenuClick() {
  isMenuClicked.update((n) => !n);
}

// Page handling
export const isServicesClicked = writable(false);
export const isStudioClicked = writable(false);
export const isWorkClicked = writable(false);
export const isEquipmentClicked = writable(false);
export const isAboutUsClicked = writable(false);

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

// Equipment page tab handling
export const isHardwareClicked = writable(true);
export const isSoftwareClicked = writable(false);

export function handleHardwareClick() {
  isHardwareClicked.set(true);
  isSoftwareClicked.set(false);
}

export function handleSoftwareClick() {
  isHardwareClicked.set(false);
  isSoftwareClicked.set(true);
}

// Services page nav handling
export const isMusicClicked = writable(false);
export const isFilmClicked = writable(false);
export const isGameClicked = writable(false);
export const isBrandingClicked = writable(false);
export const isAnyServiceClicked = writable(false);

export function handleMusicClick() {
  let clicked = get(isMusicClicked);
  if (clicked === true) {
    isMusicClicked.set(false);
    isAnyServiceClicked.set(false);
  } else {
    isMusicClicked.set(true);
    isFilmClicked.set(false);
    isGameClicked.set(false);
    isBrandingClicked.set(false);
    isAnyServiceClicked.set(true);
  }
}

export function handleFilmClick() {
  let clicked = get(isFilmClicked);
  if (clicked === true) {
    isFilmClicked.set(false);
    isAnyServiceClicked.set(false);
  } else {
    isMusicClicked.set(false);
    isFilmClicked.set(true);
    isGameClicked.set(false);
    isBrandingClicked.set(false);
    isAnyServiceClicked.set(true);
  }
}

export function handleGameClick() {
  let clicked = get(isGameClicked);
  if (clicked === true) {
    isGameClicked.set(false);
    isAnyServiceClicked.set(false);
  } else {
    isMusicClicked.set(false);
    isFilmClicked.set(false);
    isGameClicked.set(true);
    isBrandingClicked.set(false);
    isAnyServiceClicked.set(true);
  }
}

export function handleBrandingClick() {
  let clicked = get(isBrandingClicked);
  if (clicked === true) {
    isBrandingClicked.set(false);
    isAnyServiceClicked.set(false);
  } else {
    isMusicClicked.set(false);
    isFilmClicked.set(false);
    isGameClicked.set(false);
    isBrandingClicked.set(true);
    isAnyServiceClicked.set(true);
  }
}
