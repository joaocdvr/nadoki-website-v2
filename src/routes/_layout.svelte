<script>
  import { onMount } from "svelte";
  import { focusOnlyWhenNeeded } from "../components/utils.js";
  import { isMenuClicked } from "../components/stores.js";
  import Styles from "../components/Styles.svelte";
  import NavBar from "../components/NavBar.svelte";

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
