<script>
  import { fade } from "svelte/transition";
  import {
    animationInDelay,
    animationInDuration,
    animationInEasing,
    animationOutDuration,
    animationOutEasing
  } from "../utensils/stores.js";
  import WorkNav from "./WorkNav.svelte";
</script>

<style>
  .media-wrapper {
    padding: 56.25% 0 0 0;
    position: relative;
  }

  .content-wrapper {
    padding: 1.5rem 1.5rem 2.5rem 1.5rem;
  }

  .credits-wrapper {
    background: var(--main-color);
    padding: 1.5rem 1.5rem 2.5rem 1.5rem;
  }
</style>

<div
  in:fade={{ duration: $animationInDuration, easing: $animationInEasing }}
  out:fade={{ delay: $animationInDelay, duration: $animationOutDuration, easing: $animationOutEasing }}>
  <WorkNav />
  <div class="media-wrapper">
    <slot name="media" />
  </div>

  <div class="content-wrapper">
    <h2 class="body-extra">
      <slot name="title" />
    </h2>

    <p class="body-regular">
      <slot name="year" />
    </p>

    <slot name="tag" />

    <p class="body-regular">
      <slot name="description" />
    </p>

    <p class="body-regular">
      <slot name="quote" />
    </p>
  </div>

  <div class="credits-wrapper">
    <p class="body-regular">
      <slot name="credits" />
    </p>
  </div>
</div>
