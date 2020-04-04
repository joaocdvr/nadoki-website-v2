<script>
  import { isMenuClicked, handleMenuClick } from "./stores.js";
</script>

<style>
  :global(.user-is-tabbing) button:focus {
    background-color: var(--main-color);
  }

  button:focus {
    outline: none;
  }

  button {
    border: none;
    cursor: pointer;
    padding: 24px;
  }

  svg {
    width: 24px;
    height: 24px;
  }

  /* Menu icon */
  .left-rect-menu {
    fill: var(--black);
    width: 4.8px;
    height: 24px;
    transition: 300ms ease-in-out;
    transition-delay: 0;
  }

  .middle-rect-menu {
    fill: var(--black);
    width: 4.8px;
    height: 24px;
    transform: translateX(9.6px);
    opacity: 1;
    transition: 300ms ease-in-out;
    transition-delay: 0;
  }

  .right-rect-menu {
    fill: var(--black);
    width: 4.8px;
    height: 24px;
    transform: translateX(19.2px);
    transition: 300ms ease-in-out;
    transition-delay: 0;
  }

  /* Menu icon hover animation */
  button:hover .left-rect-menu {
    height: 8px;
  }

  button:hover .middle-rect-menu {
    height: 16px;
  }

  /* Menu cross */
  .left-rect-cross {
    fill: var(--white);
    height: 29.13px;
    transform-origin: top right;
    transform: rotate(45deg) translate(21.6px, 2.4px);
  }

  .middle-rect-cross {
    opacity: 0;
  }

  .right-rect-cross {
    fill: var(--white);
    height: 29.13px;
    transform-origin: top left;
    transform: rotate(-45deg) translate(-2.4px, 2.4px);
  }

  /* Menu cross hover animation */
  button:hover .left-rect-cross {
    height: 29.13px;
    width: 7.2px;
    transform: rotate(45deg) translate(20.4px, 2.4px);
  }

  button:hover .right-rect-cross {
    width: 7.2px;
    transform: rotate(-45deg) translate(-3.6px, 2.4px);
  }
</style>

<button
  on:click={handleMenuClick}
  aria-label="Toggle Menu Page"
  aria-pressed={$isMenuClicked}>
  <svg
    viewbox="0 0 24 24"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg">
    >
    <rect class:middle-rect-cross={$isMenuClicked} class="middle-rect-menu" />
    <rect class:left-rect-cross={$isMenuClicked} class="left-rect-menu" />
    <rect class:right-rect-cross={$isMenuClicked} class="right-rect-menu" />
  </svg>
</button>
