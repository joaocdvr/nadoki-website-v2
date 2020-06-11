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

export function toggleIsMenuClicked() {
  isMenuClicked.update((n) => !n);
}

// Scroll handling
export const scrollYPosition = writable(0);

// Page handling
export const activePage = writable("");

export function setActivePage(name) {
  activePage.set(name);
}

// Equipment page tab handling
export const equipmentActiveTab = writable("");

export function setActiveEquipmentTab(name) {
  equipmentActiveTab.set(name);
}

export function handleEquipmentTabClick(name) {
  if (name !== undefined) {
    const newUrl = `${window.location.pathname}?type=${name}`;
    window.history.pushState("", "", newUrl);
    setActiveEquipmentTab(name);
  }
}

// Services page tab handling
// Music submenu
// TODO - minify
export const isMusicFirstClicked = writable(true);
export const isMusicSecondClicked = writable(false);
export const isMusicThirdClicked = writable(false);
export const isMusicFourthClicked = writable(false);
export const isMusicFifthClicked = writable(false);

export function handleMusicFirstSubmenuClick() {
  isMusicFirstClicked.set(true);
  isMusicSecondClicked.set(false);
  isMusicThirdClicked.set(false);
  isMusicFourthClicked.set(false);
  isMusicFifthClicked.set(false);
}

export function handleMusicSecondSubmenuClick() {
  isMusicFirstClicked.set(false);
  isMusicSecondClicked.set(true);
  isMusicThirdClicked.set(false);
  isMusicFourthClicked.set(false);
  isMusicFifthClicked.set(false);
}

export function handleMusicThirdSubmenuClick() {
  isMusicFirstClicked.set(false);
  isMusicSecondClicked.set(false);
  isMusicThirdClicked.set(true);
  isMusicFourthClicked.set(false);
  isMusicFifthClicked.set(false);
}

export function handleMusicFourthSubmenuClick() {
  isMusicFirstClicked.set(false);
  isMusicSecondClicked.set(false);
  isMusicThirdClicked.set(false);
  isMusicFourthClicked.set(true);
  isMusicFifthClicked.set(false);
}

export function handleMusicFifthSubmenuClick() {
  isMusicFirstClicked.set(false);
  isMusicSecondClicked.set(false);
  isMusicThirdClicked.set(false);
  isMusicFourthClicked.set(false);
  isMusicFifthClicked.set(true);
}
// Film submenu
// TODO - minify
export const isFilmFirstClicked = writable(true);
export const isFilmSecondClicked = writable(false);
export const isFilmThirdClicked = writable(false);
export const isFilmFourthClicked = writable(false);

export function handleFilmFirstSubmenuClick() {
  isFilmFirstClicked.set(true);
  isFilmSecondClicked.set(false);
  isFilmThirdClicked.set(false);
  isFilmFourthClicked.set(false);
}

export function handleFilmSecondSubmenuClick() {
  isFilmFirstClicked.set(false);
  isFilmSecondClicked.set(true);
  isFilmThirdClicked.set(false);
  isFilmFourthClicked.set(false);
}

export function handleFilmThirdSubmenuClick() {
  isFilmFirstClicked.set(false);
  isFilmSecondClicked.set(false);
  isFilmThirdClicked.set(true);
  isFilmFourthClicked.set(false);
}

export function handleFilmFourthSubmenuClick() {
  isFilmFirstClicked.set(false);
  isFilmSecondClicked.set(false);
  isFilmThirdClicked.set(false);
  isFilmFourthClicked.set(true);
}

export function handleFilmFifthSubmenuClick() {
  isFilmFirstClicked.set(false);
  isFilmSecondClicked.set(false);
  isFilmThirdClicked.set(false);
  isFilmFourthClicked.set(false);
}

// Game submenu
// TODO - minify
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
// TODO - minify
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
export const aboutUsActiveItem = writable("");

export function setAboutUsActiveItem(name) {
  aboutUsActiveItem.set(name);
}

export function handleAboutUsItemClick(name) {
  const newUrl = `${window.location.pathname}?name=${name}`;
  window.history.pushState("", "", newUrl);
  setAboutUsActiveItem(name);
}

// Work modal pages handling
export const workModalActive = writable("");

export function setWorkModalActive(name) {
  workModalActive.set(name);
  if (name !== "") {
    document.body.classList.add("body-is-not-visible");
  } else {
    document.body.classList.remove("body-is-not-visible");
  }
}

export function handleWorkModalClick(name) {
  if (name !== undefined) {
    const newUrl = `${window.location.pathname}?project=${name}`;
    window.history.pushState("", "", newUrl);
    setWorkModalActive(name);
  }
}

export function resetWorkModalActive() {
  const newUrl = `${window.location.pathname}`;
  window.history.pushState("", "", newUrl);
  setWorkModalActive("");
}

// Services modal pages handling
export const servicesModalActive = writable("");

export function setServicesModalActive(name) {
  servicesModalActive.set(name);
  if (name !== "") {
    document.body.classList.add("body-is-not-visible");
  } else {
    document.body.classList.remove("body-is-not-visible");
  }
}

export function handleServicesModalClick(name) {
  if (name !== undefined) {
    const newUrl = `${window.location.pathname}?name=${name}`;
    window.history.pushState("", "", newUrl);
    setServicesModalActive(name);
  }
}

export function resetServicesModalActive() {
  const newUrl = `${window.location.pathname}`;
  window.history.pushState("", "", newUrl);
  setServicesModalActive("");
}
