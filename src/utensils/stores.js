import { writable, readable } from "svelte/store";
import { quadInOut } from "svelte/easing";

// Animation timers and easing
export const animationInDelay = readable(300);
export const animationInDuration = readable(300);
export const animationInEasing = readable(quadInOut);

export const animationOutDuration = readable(100);
export const animationOutEasing = readable(quadInOut);

// Menu handling
export const isMenuClicked = writable(false);

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
export const isEquipmentHardwareClicked = writable(true);
export const isEquipmentSoftwareClicked = writable(false);

export function handleHardwareSubmenuClick() {
  isEquipmentHardwareClicked.set(true);
  isEquipmentSoftwareClicked.set(false);
}

export function handleSoftwareSubmenuClick() {
  isEquipmentHardwareClicked.set(false);
  isEquipmentSoftwareClicked.set(true);
}

// Services page nav handling
export const isMusicClicked = writable(false);
export const isFilmClicked = writable(false);
export const isGameClicked = writable(false);
export const isBrandingClicked = writable(false);
export const isAnyServiceClicked = writable(false);

export function handleMusicClick() {
  isMusicClicked.set(true);
  isFilmClicked.set(false);
  isGameClicked.set(false);
  isBrandingClicked.set(false);
  isAnyServiceClicked.set(true);
}

export function handleFilmClick() {
  isMusicClicked.set(false);
  isFilmClicked.set(true);
  isGameClicked.set(false);
  isBrandingClicked.set(false);
  isAnyServiceClicked.set(true);
}

export function handleGameClick() {
  isMusicClicked.set(false);
  isFilmClicked.set(false);
  isGameClicked.set(true);
  isBrandingClicked.set(false);
  isAnyServiceClicked.set(true);
}

export function handleBrandingClick() {
  isMusicClicked.set(false);
  isFilmClicked.set(false);
  isGameClicked.set(false);
  isBrandingClicked.set(true);
  isAnyServiceClicked.set(true);
}

// Services page tab handling

// Music submenu
export const isMusicFirstClicked = writable(true);
export const isMusicSecondClicked = writable(false);
export const isMusicThirdClicked = writable(false);
export const isMusicFourthClicked = writable(false);
export const isMusicFifthClicked = writable(false);
export const isMusicSixthClicked = writable(false);

export function handleMusicFirstSubmenuClick() {
  isMusicFirstClicked.set(true);
  isMusicSecondClicked.set(false);
  isMusicThirdClicked.set(false);
  isMusicFourthClicked.set(false);
  isMusicFifthClicked.set(false);
  isMusicSixthClicked.set(false);
}

export function handleMusicSecondSubmenuClick() {
  isMusicFirstClicked.set(false);
  isMusicSecondClicked.set(true);
  isMusicThirdClicked.set(false);
  isMusicFourthClicked.set(false);
  isMusicFifthClicked.set(false);
  isMusicSixthClicked.set(false);
}

export function handleMusicThirdSubmenuClick() {
  isMusicFirstClicked.set(false);
  isMusicSecondClicked.set(false);
  isMusicThirdClicked.set(true);
  isMusicFourthClicked.set(false);
  isMusicFifthClicked.set(false);
  isMusicSixthClicked.set(false);
}

export function handleMusicFourthSubmenuClick() {
  isMusicFirstClicked.set(false);
  isMusicSecondClicked.set(false);
  isMusicThirdClicked.set(false);
  isMusicFourthClicked.set(true);
  isMusicFifthClicked.set(false);
  isMusicSixthClicked.set(false);
}

export function handleMusicFifthSubmenuClick() {
  isMusicFirstClicked.set(false);
  isMusicSecondClicked.set(false);
  isMusicThirdClicked.set(false);
  isMusicFourthClicked.set(false);
  isMusicFifthClicked.set(true);
  isMusicSixthClicked.set(false);
}

export function handleMusicSixthSubmenuClick() {
  isMusicFirstClicked.set(false);
  isMusicSecondClicked.set(false);
  isMusicThirdClicked.set(false);
  isMusicFourthClicked.set(false);
  isMusicFifthClicked.set(false);
  isMusicSixthClicked.set(true);
}
// Film submenu
export const isFilmFirstClicked = writable(true);
export const isFilmSecondClicked = writable(false);
export const isFilmThirdClicked = writable(false);
export const isFilmFourthClicked = writable(false);
export const isFilmFifthClicked = writable(false);

export function handleFilmFirstSubmenuClick() {
  isFilmFirstClicked.set(true);
  isFilmSecondClicked.set(false);
  isFilmThirdClicked.set(false);
  isFilmFourthClicked.set(false);
  isFilmFifthClicked.set(false);
}

export function handleFilmSecondSubmenuClick() {
  isFilmFirstClicked.set(false);
  isFilmSecondClicked.set(true);
  isFilmThirdClicked.set(false);
  isFilmFourthClicked.set(false);
  isFilmFifthClicked.set(false);
}

export function handleFilmThirdSubmenuClick() {
  isFilmFirstClicked.set(false);
  isFilmSecondClicked.set(false);
  isFilmThirdClicked.set(true);
  isFilmFourthClicked.set(false);
  isFilmFifthClicked.set(false);
}

export function handleFilmFourthSubmenuClick() {
  isFilmFirstClicked.set(false);
  isFilmSecondClicked.set(false);
  isFilmThirdClicked.set(false);
  isFilmFourthClicked.set(true);
  isFilmFifthClicked.set(false);
}

export function handleFilmFifthSubmenuClick() {
  isFilmFirstClicked.set(false);
  isFilmSecondClicked.set(false);
  isFilmThirdClicked.set(false);
  isFilmFourthClicked.set(false);
  isFilmFifthClicked.set(true);
}

// Game submenu
export const isGameFirstClicked = writable(true);
export const isGameSecondClicked = writable(false);
export const isGameThirdClicked = writable(false);
export const isGameFourthClicked = writable(false);

export function handleGameFirstSubmenuClick() {
  isGameFirstClicked.set(true);
  isGameSecondClicked.set(false);
  isGameThirdClicked.set(false);
  isGameFourthClicked.set(false);
}

export function handleGameSecondSubmenuClick() {
  isGameFirstClicked.set(false);
  isGameSecondClicked.set(true);
  isGameThirdClicked.set(false);
  isGameFourthClicked.set(false);
}

export function handleGameThirdSubmenuClick() {
  isGameFirstClicked.set(false);
  isGameSecondClicked.set(false);
  isGameThirdClicked.set(true);
  isGameFourthClicked.set(false);
}

export function handleGameFourthSubmenuClick() {
  isGameFirstClicked.set(false);
  isGameSecondClicked.set(false);
  isGameThirdClicked.set(false);
  isGameFourthClicked.set(true);
}

// Branding submenu
export const isBrandingFirstClicked = writable(true);
export const isBrandingSecondClicked = writable(false);
export const isBrandingThirdClicked = writable(false);

export function handleBrandingFirstSubmenuClick() {
  isBrandingFirstClicked.set(true);
  isBrandingSecondClicked.set(false);
  isBrandingThirdClicked.set(false);
}

export function handleBrandingSecondSubmenuClick() {
  isBrandingFirstClicked.set(false);
  isBrandingSecondClicked.set(true);
  isBrandingThirdClicked.set(false);
}

export function handleBrandingThirdSubmenuClick() {
  isBrandingFirstClicked.set(false);
  isBrandingSecondClicked.set(false);
  isBrandingThirdClicked.set(true);
}

// About us page handling
export const itemActive = writable("");

export function setItemActive(name) {
  itemActive.set(name);
}