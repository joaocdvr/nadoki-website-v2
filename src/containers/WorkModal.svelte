<script>
  import { fade } from "svelte/transition";
  import {
    animationInDelay,
    animationInDuration,
    animationInEasing,
    animationOutDuration,
    animationOutEasing,
    itemActive
  } from "../utensils/stores.js";
  import WorkNav from "./WorkNav.svelte";
</script>

<style>
  .wrapper {
    overflow-y: scroll;
  }

  .media-wrapper {
    padding: 56.25% 0 0 0;
    position: relative;
  }

  .content-wrapper {
    padding: 1.5rem;
  }
</style>

<div
  in:fade={{ delay: $animationInDelay, duration: $animationInDuration, easing: $animationInEasing }}
  out:fade={{ delay: $animationInDelay, duration: $animationOutDuration, easing: $animationOutEasing }}>
  <WorkNav />
  <div class="wrapper">
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
    </div>
  </div>
</div>
