<script>
  import { isMenuClicked, handleMenuClick } from "./stores.js";
</script>

<style>
  button {
    border: none;
    cursor: pointer;
    padding: 1.5rem;
  }

  button:focus {
    outline: none;
  }

  :global(.user-is-tabbing) button:focus {
    background-color: var(--main-color);
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  /* Menu icon */
  .left-rect-menu {
    fill: var(--black);
    width: 0.3rem;
    height: 1.5rem;
    transition: 300ms ease-in-out;
    transition-delay: 0;
  }

  .middle-rect-menu {
    fill: var(--black);
    width: 0.3rem;
    height: 1.5rem;
    transform: translateX(0.6rem);
    opacity: 1;
    transition: 300ms ease-in-out;
    transition-delay: 0;
  }

  .right-rect-menu {
    fill: var(--black);
    width: 0.3rem;
    height: 1.5rem;
    transform: translateX(1.2rem);
    transition: 300ms ease-in-out;
    transition-delay: 0;
  }

  /* Menu icon hover animation */
  button:hover .left-rect-menu {
    height: 0.5rem;
  }

  button:hover .middle-rect-menu {
    height: 1rem;
  }

  /* Menu cross */
  .left-rect-cross {
    fill: var(--white);
    height: 1.820625rem;
    transform-origin: top right;
    transform: rotate(45deg) translate(1.35rem, 0.15rem);
  }

  .middle-rect-cross {
    opacity: 0;
  }

  .right-rect-cross {
    fill: var(--white);
    height: 1.820625rem;
    transform-origin: top left;
    transform: rotate(-45deg) translate(-0.15rem, 0.15rem);
  }

  /* Menu cross hover animation */
  button:hover .left-rect-cross {
    height: 1.820625rem;
    width: 0.45rem;
    transform: rotate(45deg) translate(1.275rem, 0.15rem);
  }

  button:hover .right-rect-cross {
    width: 0.45rem;
    transform: rotate(-45deg) translate(-0.225rem, 0.15rem);
  }
</style>

<button
  on:click={handleMenuClick}
  aria-label="Toggle Menu Page"
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
