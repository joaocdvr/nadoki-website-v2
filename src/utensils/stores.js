import { get } from "svelte/store";
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

export function handleServicesModalClick(name, type) {
  if (name !== null && type !== null) {
    setServicesModalActive(name);

    const currentUrl = document.location.href;
    const newUrl = `${window.location.pathname}?name=${name}&type=${type}`;

    if (currentUrl !== newUrl) {
      window.history.pushState("", "", newUrl);
    }
  }
}

export function resetServicesModalActive() {
  const newUrl = `${window.location.pathname}`;
  window.history.pushState("", "", newUrl);
  setServicesModalActive("");
}

// Services page tab handling
// Music submenu
export const musicActiveTab = writable("mixing");

export function setActiveMusicTab(name) {
  musicActiveTab.set(name);
}

export function handleMusicTabClick(name) {
  if (name !== null) {
    const newUrl = `${window.location.pathname}?name=music&type=${name}`;

    window.history.pushState("", "", newUrl);
    setActiveMusicTab(name);
  }
}

// Film submenu
export const filmActiveTab = writable("re-recording_mixing");

export function setActiveFilmTab(name) {
  filmActiveTab.set(name);
}

export function handleFilmTabClick(name) {
  if (name !== null) {
    const newUrl = `${window.location.pathname}?name=film&type=${name}`;

    window.history.pushState("", "", newUrl);
    setActiveFilmTab(name);
  }
}

// Game submenu
export const gameActiveTab = writable("sound_design");

export function setActiveGameTab(name) {
  gameActiveTab.set(name);
}

export function handleGameTabClick(name) {
  if (name !== null) {
    const newUrl = `${window.location.pathname}?name=game&type=${name}`;

    window.history.pushState("", "", newUrl);
    setActiveGameTab(name);
  }
}

// Branding submenu
export const brandingActiveTab = writable("sonic_logo");

export function setActiveBrandingTab(name) {
  brandingActiveTab.set(name);
}

export function handleBrandingTabClick(name) {
  if (name !== null) {
    const newUrl = `${window.location.pathname}?name=branding&type=${name}`;

    window.history.pushState("", "", newUrl);
    setActiveBrandingTab(name);
  }
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
  if (name !== null) {
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

// Equipment page tab handling
export const equipmentActiveTab = writable("");

export function setActiveEquipmentTab(name) {
  equipmentActiveTab.set(name);
}

export function handleEquipmentTabClick(name) {
  if (name !== null) {
    const newUrl = `${window.location.pathname}?type=${name}`;
    window.history.pushState("", "", newUrl);
    setActiveEquipmentTab(name);
  }
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
