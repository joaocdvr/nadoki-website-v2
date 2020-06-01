<script>
  import { fade } from "svelte/transition";
  import {
    animationInDelay,
    animationInDuration,
    animationInEasing,
    animationOutDuration,
    animationOutEasing
  } from "../utensils/stores.js";
  export let button = {};
</script>

<style>
  a {
    text-decoration: none;
    text-align: center;
    color: var(--main-color);
    background-color: var(--dark);
    transition: background-color 300ms ease-in-out, color 300ms ease-in-out;
  }

  a:active,
  a:visited,
  a:focus {
    outline: none;
  }

  a:hover,
  :global(.user-is-tabbing) a:focus {
    background-color: var(--secondary-color);
    color: var(--light);
    outline: none;
  }

  div {
    display: flex;
    justify-content: center;
    padding: 2.5rem 0;
  }

  p {
    padding: 0.5rem 1.5rem;
  }
</style>

<div
  in:fade={{ delay: $animationInDelay, duration: $animationInDuration, easing: $animationInEasing }}
  out:fade={{ duration: $animationOutDuration, easing: $animationOutEasing }}>
  <a
    class="body-bold"
    href={button.href}
    aria-label={button.label}
    target="_blank">
    <span>
      <p>{button.text}</p>
    </span>
  </a>
</div>
