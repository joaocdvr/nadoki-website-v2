<script>
  import Header from "../components/Header.svelte";
  import { handleAboutUsClick } from "../components/stores.js";
  import { onMount } from "svelte";

  onMount(() => {
    handleAboutUsClick();
  });
</script>

<style>

</style>

<Header />
