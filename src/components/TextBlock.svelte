<script>
  import { fade } from "svelte/transition";

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

<div>
  <p class="body-regular" in:fade>
    {@html content}
  </p>
</div>
