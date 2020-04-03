<script>
  import { focusOnlyWhenNeeded } from "../components/utils.js";
  import { isMenuClicked } from "../components/stores.js";
  import Styles from "../components/Styles.svelte";
  import NavBar from "../components/NavBar.svelte";
  import Header from "../components/Header.svelte";
  import { onMount } from "svelte";

  onMount(() => {
    focusOnlyWhenNeeded();
  });
</script>

<style>
  .menuIsOpened {
    overflow: hidden;
    max-height: 100vh;
  }
</style>

<body class:menuIsOpened={$isMenuClicked}>
  <NavBar />
  <Header />
  <slot />
</body>
