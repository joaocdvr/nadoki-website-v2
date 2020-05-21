// Imports
import { get } from "svelte/store";
import { scrollYPosition } from "./stores.js";

// Function that identifies if the user is navigating with a mouse or tab
export function focusOnlyWhenNeeded() {
  function handleFirstTab(e) {
    if (e.keyCode === 9) {
      //9 is the keycode for the Tab key //
      document.body.classList.add("user-is-tabbing");

      window.removeEventListener("keydown", handleFirstTab);
      window.addEventListener("mousedown", handleMouseDownOnce);
    }
  }

  function handleMouseDownOnce() {
    document.body.classList.remove("user-is-tabbing");

    window.removeEventListener("mousedown", handleMouseDownOnce);
    window.addEventListener("keydown", handleFirstTab);
  }

  window.addEventListener("keydown", handleFirstTab);
}

// Functions that save/restore/rest scroll Y position
export function saveScrollYPosition() {
  scrollYPosition.set(window.scrollY);
}

export function restoreScrollYPosition() {
  const currentYPosition = get(scrollYPosition);
  setTimeout(() => window.scroll(0, currentYPosition), 0);
  scrollYPosition.set(0);
}

export function resetScrollYPosition() {
  setTimeout(() => window.scroll(0, 0), 0);
  scrollYPosition.set(0);
}
