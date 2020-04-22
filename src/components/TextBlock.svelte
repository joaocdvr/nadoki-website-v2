<script>
  import { fade } from "svelte/transition";
  import { quadIn, quadOut } from "svelte/easing";

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
  in:fade={{ delay: 300, duration: 300, easing: quadIn }}
  out:fade={{ duration: 200, easing: quadOut }}>
  <p class="body-regular">
    {@html content}
  </p>
</div>
