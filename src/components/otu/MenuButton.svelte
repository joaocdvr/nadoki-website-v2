<script>
  import { get } from "svelte/store";
  import { isMenuClicked, toggleIsMenuClicked } from "../../utensils/stores.js";
  import {
    saveScrollYPosition,
    restoreScrollYPosition
  } from "../../utensils/utils.js";

  function handleMenuClick() {
    if (get(isMenuClicked) === false) {
      saveScrollYPosition();
    } else {
      restoreScrollYPosition();
    }
    toggleIsMenuClicked();
  }
</script>

<style>
  button {
    border: none;
    cursor: pointer;
    padding: 1.5rem;
    fill: var(--dark);
    transition: background-color 300ms ease-in-out;
  }

  button:focus {
    outline: none;
  }

  :global(.user-is-tabbing) button:focus {
    fill: var(--light);
    background-color: var(--secondary-color);
  }

  @media (--not-touchscreen) {
    button:hover {
      fill: var(--secondary-color);
    }
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  /* Menu icon */
  .left-rect-menu {
    width: 0.3rem;
    height: 1.5rem;
    transition: 300ms ease-in-out;
  }

  .middle-rect-menu {
    width: 0.3rem;
    height: 1.5rem;
    transform: translateX(0.6rem);
    opacity: 1;
    transition: 300ms ease-in-out;
  }

  .right-rect-menu {
    width: 0.3rem;
    height: 1.5rem;
    transform: translateX(1.2rem);
    transition: 300ms ease-in-out;
  }

  /* Menu icon hover animation */
  @media (--not-touchscreen) {
    button:hover .left-rect-menu {
      height: 0.5rem;
    }

    button:hover .middle-rect-menu {
      height: 1rem;
    }
  }
  /* Menu cross */
  .left-rect-cross {
    fill: var(--light);
    height: 1.820625rem;
    transform-origin: top right;
    transform: rotate(45deg) translate(1.35rem, 0.15rem);
  }

  .middle-rect-cross {
    opacity: 0;
  }

  .right-rect-cross {
    fill: var(--light);
    height: 1.820625rem;
    transform-origin: top left;
    transform: rotate(-45deg) translate(-0.15rem, 0.15rem);
  }

  /* Menu cross hover animation */
  @media (--not-touchscreen) {
    button:hover .left-rect-cross {
      fill: var(--secondary-color);
      height: 1.820625rem;
      width: 0.45rem;
      transform: rotate(45deg) translate(1.275rem, 0.15rem);
    }

    button:hover .right-rect-cross {
      fill: var(--secondary-color);
      width: 0.45rem;
      transform: rotate(-45deg) translate(-0.225rem, 0.15rem);
    }
  }
</style>

<button
  on:click={handleMenuClick}
  aria-label="Toggle main menu"
  aria-pressed={$isMenuClicked}>
  <svg
    viewbox="0 0 1.5rem 1.5rem"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg">
    >
    <rect class:middle-rect-cross={$isMenuClicked} class="middle-rect-menu" />
    <rect class:left-rect-cross={$isMenuClicked} class="left-rect-menu" />
    <rect class:right-rect-cross={$isMenuClicked} class="right-rect-menu" />
  </svg>
</button>
