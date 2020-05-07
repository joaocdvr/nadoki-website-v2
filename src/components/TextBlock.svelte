<script>
  import { fade } from "svelte/transition";
  import {
    animationInDelay,
    animationInDuration,
    animationInEasing,
    animationOutDuration,
    animationOutEasing
  } from "../utensils/stores.js";

  export let content;
</script>

<style>
  div {
    padding: 1.5rem 1.5rem 2.5rem 1.5rem;
    height: fit-content;
    width: 100vw;
    max-width: 100%;
    transition: height 500ms ease-in-out;
  }
</style>

<div
  in:fade={{ delay: $animationInDelay, duration: $animationInDuration, easing: $animationInEasing }}
  out:fade={{ duration: $animationOutDuration, easing: $animationOutEasing }}>
  <p class="body-regular">
    {@html content}
  </p>
</div>
