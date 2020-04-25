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

// Function that handles the toggling of the list component
export function handleListToggle(closedList, openList) {
  closedList = closedList.map((list) => {
    if (list === openList) {
      return {
        name: list.name,
        content: list.content,
        open: !list.open,
      };
    }
    return list;
  });
}

// Funtion that handles menu click
import { isMenuClicked } from "./stores.js";

export function handleMenuClick() {
  isMenuClicked.update((n) => !n);
}
