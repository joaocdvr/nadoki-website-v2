<script>
  import { fade } from 'svelte/transition'
  import {
    animationInDelay,
    animationInDuration,
    animationInEasing,
    animationOutDuration,
    animationOutEasing,
  } from '../utensils/stores.js'

  export let title = ''
  export let path = ''
  export let label = ''
</script>

<nav>
  <div>
    <a on:click href={path} aria-label={label}>
      <svg
        viewBox="0 0 40 24"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true">
        <path
          d="M22.3783 3.021H10V0L0 5.39L10 11V8H22.3783C27.4967 8 31.6467 10.356
          31.6467 13.427C31.6467 16.498 27.4983 19 22.3783
          19H10V24H22.3783C32.1117 24 40 19.266 40 13.427C40 7.588 32.1117 3.021
          22.3783 3.021Z"
        />
      </svg>
    </a>

    <h1
      class="body-bold"
      in:fade={{
        delay: $animationInDelay,
        duration: $animationInDuration,
        easing: $animationInEasing,
      }}
      out:fade={{
        delay: $animationInDelay,
        duration: $animationOutDuration,
        easing: $animationOutEasing,
      }}
    >
      {title}
    </h1>

    <span aria-hidden="true" />
  </div>
</nav>

<style>
  a {
    border: none;
    cursor: pointer;
    padding: 1.5rem;
    fill: var(--dark);
    transition: background-color 300ms ease-in-out, fill 300ms ease-in-out;
  }

  :global(.user-is-tabbing) a:focus {
    fill: var(--light);
    background-color: var(--secondary-color);
  }

  @media (--not-touchscreen) {
    a:hover {
      fill: var(--secondary-color);
    }
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
    background-color: var(--light);
    z-index: 1;
    border-bottom: 0.125rem solid var(--dark);
  }

  div {
    width: 100%;
    max-width: var(--max-width);
    display: flex;
    justify-content: space-between;
  }

  @media (--max-content-width) {
    div {
      transform: translateX(calc(50vw - var(--max-width) / 2));
    }
  }

  h1 {
    font-size: 1.2rem;
    align-self: center;
  }

  @media (--max-content-width) {
    h1 {
      font-size: 1.5rem;
    }
  }

  span {
    width: 5.5rem;
    height: 4.5rem;
    visibility: hidden;
  }
</style>
