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
    fill: var(--black);
    transition: fill 400ms ease-in;
    transition-delay: 300ms;
  }

  .isWhite {
    fill: var(--white);
    transition: fill 10ms ease-out;
    transition-delay: 0;
  }

  rect {
    width: 4.8px;
    height: 24px;
    transition: 0.2s ease-in-out;
  }

  rect:nth-child(2) {
    x: 9.6px;
  }

  rect:nth-child(3) {
    x: 19.2px;
  }

  button:hover rect {
    transition: 0.2s ease-in, out;
  }

  button:hover rect:nth-child(1) {
    height: 8px;
  }

  button:hover rect:nth-child(2) {
    height: 16px;
  }
</style>

<button
  on:click={handleMenuClick}
  aria-label="Toggle Menu Page"
  aria-pressed={$isMenuClicked}>
  <svg
    class:isWhite={$isMenuClicked}
    viewbox="0 0 24 24"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg">
    >
    <rect />
    <rect />
    <rect />
  </svg>
</button>
