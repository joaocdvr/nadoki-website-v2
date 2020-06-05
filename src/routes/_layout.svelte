<script>
  import { onMount, afterUpdate } from "svelte";
  import {
    focusOnlyWhenNeeded,
    resetScrollYPosition,
    updateVHVariable
  } from "../utensils/utils.js";
  import { isMenuClicked } from "../utensils/stores.js";
  import Styles from "../utensils/Styles.svelte";
  import NavBar from "../containers/NavBar.svelte";

  onMount(() => {
    focusOnlyWhenNeeded();
    updateVHVariable();
    setTimeout(() => resetScrollYPosition(), 300);
  });

  afterUpdate(() => {
    updateVHVariable();
  });
</script>

<style>
  /* Hides scrollbar */
  .menu-is-open {
    overflow: hidden;
    max-height: 100vh;
  }
</style>

<div class:menu-is-open={$isMenuClicked}>
  <NavBar />
  <slot />
</div>
