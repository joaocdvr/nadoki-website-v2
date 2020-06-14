<script>
  import { onMount, afterUpdate } from "svelte";
  import { isMenuClicked } from "../utensils/stores.js";
  import {
    focusOnlyWhenNeeded,
    resetScrollYPosition
  } from "../utensils/utils.js";
  import Styles from "../utensils/Styles.svelte";
  import NavBar from "../containers/NavBar.svelte";

  onMount(() => {
    focusOnlyWhenNeeded();
    setTimeout(() => resetScrollYPosition(), 300);
  });
</script>

<style>
  /* Hides scrollbar */
  .menu-is-open {
    overflow: hidden;
    min-height: calc(var(--vh, 1vh) * 100);
    height: 100%;
    max-height: 100vh;
  }
</style>

<div class:menu-is-open={$isMenuClicked}>
  <NavBar />
  <slot />
</div>
