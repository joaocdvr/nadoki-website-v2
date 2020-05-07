<script>
  import { onMount } from "svelte";
  import { focusOnlyWhenNeeded } from "../utensils/utils.js";
  import { isMenuClicked } from "../utensils/stores.js";
  import Styles from "../utensils/Styles.svelte";
  import NavBar from "../containers/NavBar.svelte";

  onMount(() => {
    focusOnlyWhenNeeded();
  });
</script>

<style>
  /* Scrollbar hiding */
  .menuIsOpened {
    overflow: hidden;
    max-height: 100vh;
  }
</style>

<div class:menuIsOpened={$isMenuClicked}>
  <NavBar />
  <slot />
</div>
