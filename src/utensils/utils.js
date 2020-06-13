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
  return;
}

// Function that listens and updates mobile vh
export function updateVHVariable() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  return;
}

// Functions that save/restore/rest scroll Y position
export function saveScrollYPosition() {
  scrollYPosition.set(window.scrollY);
  return;
}

export function restoreScrollYPosition() {
  const currentYPosition = get(scrollYPosition);
  setTimeout(() => window.scroll(0, currentYPosition), 0);
  scrollYPosition.set(0);
  return;
}

export function resetScrollYPosition() {
  setTimeout(() => window.scroll(0, 0), 0);
  scrollYPosition.set(0);
  return;
}

// Function that animates SVGs
const mapping = {};

export function handleSVGAnimation(name, page, param, goalParam) {
  if (goalParam && mapping[goalParam]) {
    return;
  }

  mapping[goalParam] = true;

  const svg = document.getElementById(name);
  const warp = new Warp(svg);

  warp.interpolate(20);
  warp.transform(([x, y]) => [x, y, y]);

  let offset = 0;

  function animate() {
    if (get(activePage) === page) {
      const url = new URL(document.location);
      const pageParam = url.searchParams.get(param);
      if (pageParam === goalParam) {
        warp.transform(([x, y, oy]) => [
          x,
          oy + 4 * Math.sin(x / 12 + offset),
          oy,
        ]);
        offset += 0.02;
        setTimeout(() => requestAnimationFrame(animate), 1000 / 30);
      } else {
        mapping[goalParam] = false;
        return;
      }
    } else {
      mapping[goalParam] = false;
      return;
    }
  }
  setTimeout(() => animate(), 0);
  return;
}
