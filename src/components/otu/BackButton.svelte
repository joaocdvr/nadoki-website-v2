<script>
  import { setWorkModalActive } from "../../utensils/stores.js";

  function resetWorkModalActive() {
    const newUrl = `${window.location.pathname}`;
    window.history.pushState("", "", newUrl);
    setWorkModalActive("");
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

  svg {
    width: 2.5rem;
    height: 1.5rem;
  }
</style>

<button on:click={() => resetWorkModalActive()} aria-label="Back">
  <svg
    viewBox="0 0 40 24"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22.3783 3.021H10V0L0 5.39L10 11V8H22.3783C27.4967 8 31.6467 10.356
      31.6467 13.427C31.6467 16.498 27.4983 19 22.3783 19H10V24H22.3783C32.1117
      24 40 19.266 40 13.427C40 7.588 32.1117 3.021 22.3783 3.021Z" />
  </svg>
</button>
