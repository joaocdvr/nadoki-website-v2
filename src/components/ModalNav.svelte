<script>
  export let title = "";
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

  button:hover,
  :global(.user-is-tabbing) button:focus {
    fill: var(--light);
    background-color: var(--secondary-color);
  }

  svg {
    width: 2.5rem;
    height: 1.5rem;
  }

  nav {
    position: sticky;
    top: 0;
    left: 0;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    background-color: var(--light);
    z-index: 3;
    border-bottom: 0.125rem solid var(--dark);
  }

  h1 {
    font-size: 1.5rem;
    align-self: center;
  }

  span {
    width: 5.5rem;
    height: 4.5rem;
    visibility: hidden;
  }
</style>

<nav>
  <button on:click aria-label="Back">
    <svg
      viewBox="0 0 40 24"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22.3783 3.021H10V0L0 5.39L10 11V8H22.3783C27.4967 8 31.6467 10.356
        31.6467 13.427C31.6467 16.498 27.4983 19 22.3783
        19H10V24H22.3783C32.1117 24 40 19.266 40 13.427C40 7.588 32.1117 3.021
        22.3783 3.021Z" />
    </svg>
  </button>
  <h1 class="body-bold">{title}</h1>
  <span />
</nav>
