<script>
  import { onMount } from "svelte";
  import { get } from "svelte/store";
  import {
    scrollYPosition,
    setActivePage,
    activePage
  } from "../utensils/stores.js";
  import { resetScrollYPosition } from "../utensils/utils.js";
  import Footer from "../components/Footer.svelte";

  onMount(() => {
    if (get(activePage) !== "") {
      setActivePage("");
    }
    resetScrollYPosition();
  });
</script>

<style>
  div {
    margin-top: 4.5rem;
  }
</style>

<div style="transform: translateY({$scrollYPosition * -1}px)">
  <Footer />
</div>
