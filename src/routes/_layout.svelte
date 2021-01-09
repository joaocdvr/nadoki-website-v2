<script>
  import { onMount } from 'svelte'
  import { isMenuClicked } from '../utensils/stores.js'
  import {
    focusOnlyWhenNeeded,
    resetScrollYPosition,
  } from '../utensils/utils.js'
  import Styles from '../utensils/Styles.svelte'
  import NavBar from '../containers/NavBar.svelte'

  onMount(() => {
    focusOnlyWhenNeeded()
    setTimeout(() => resetScrollYPosition(), 300)
  })
</script>

<div class:menu-is-open={$isMenuClicked}>
  <NavBar />
  <slot />
</div>

<style>
  /* Hides scrollbar */
  .menu-is-open {
    overflow: hidden;
    max-height: 100vh;
  }
</style>
