<script>
  import { get } from 'svelte/store'
  import { isMenuClicked, toggleIsMenuClicked } from '../../utensils/stores.js'
  import {
    saveScrollYPosition,
    restoreScrollYPosition,
  } from '../../utensils/utils.js'

  function handleMenuClick() {
    if (get(isMenuClicked) === false) {
      saveScrollYPosition()
    } else {
      restoreScrollYPosition()
    }
    toggleIsMenuClicked()
    return
  }
</script>

<button
  on:click={handleMenuClick}
  aria-label="Toggle main menu"
  aria-pressed={$isMenuClicked}>
  <svg
    viewbox="0 0 24 24"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true">
    <rect
      height="24"
      width="4.8"
      x="0"
      y="0"
      class:left-rect-cross={$isMenuClicked}
      class="left-rect-menu"
    />
    <rect
      height="24"
      width="4.8"
      x="9.6"
      y="0"
      class:middle-rect-cross={$isMenuClicked}
      class="middle-rect-menu"
    />
    <rect
      height="24"
      width="4.8"
      x="19.2"
      y="0"
      class:right-rect-cross={$isMenuClicked}
      class="right-rect-menu"
    />
  </svg>
</button>

<style>
  button {
    border: none;
    cursor: pointer;
    padding: 1.5rem;
    fill: var(--dark);
    transition: background-color 300ms ease-in-out;
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
    transition: 300ms ease-in-out;
    transform: scale(1, 1);
  }

  .middle-rect-menu {
    opacity: 1;
    transition: 300ms ease-in-out;
    transform: scale(1, 1);
  }

  .right-rect-menu {
    transition: 300ms ease-in-out;
    transform: scale(1, 1);
  }

  /* Menu icon hover animation */
  @media (--not-touchscreen) {
    button:hover .left-rect-menu {
      transform: scale(1, 0.33);
    }

    button:hover .middle-rect-menu {
      transform: scale(1, 0.66);
    }
  }

  /* Menu cross state */
  .left-rect-cross {
    fill: var(--light);
    transform-origin: top left;
    transform: translate(85%, 0%) rotate(45deg) scale(1, 1.21375);
  }

  .middle-rect-cross {
    opacity: 0;
  }

  .right-rect-cross {
    fill: var(--light);
    transform-origin: top right;
    transform: translate(-85%, 0%) rotate(-45deg) scale(1, 1.21375);
  }

  /* Menu cross state hover animation */
  @media (--not-touchscreen) {
    button:hover .left-rect-cross {
      fill: var(--secondary-color);
      transform: translate(82.5%, -2.5%) rotate(45deg) scale(1.5, 1.21375);
    }

    button:hover .right-rect-cross {
      fill: var(--secondary-color);
      transform: translate(-82.5%, -2.5%) rotate(-45deg) scale(1.5, 1.21375);
    }
  }
</style>
