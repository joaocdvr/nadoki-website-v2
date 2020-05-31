// Imports
import { get } from "svelte/store";
import Warp from "warpjs";
import { scrollYPosition, activePage } from "./stores.js";

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

// Function that animates SVGs
export function handleSVGAnimation(name, page) {
  const svg = document.getElementById(name);
  const warp = new Warp(svg);

  warp.interpolate(8);
  warp.transform(([x, y]) => [x, y, y]);

  let offset = 0;
  function animate() {
    if (get(activePage) === page) {
      warp.transform(([x, y, oy]) => [
        x,
        oy + 8 * Math.sin(x / 12 + offset),
        oy,
      ]);
      offset += 0.2;
      setTimeout(() => requestAnimationFrame(animate), 1000 / 30);
    } else {
      return;
    }
  }
  setTimeout(() => animate(), 0);
}
