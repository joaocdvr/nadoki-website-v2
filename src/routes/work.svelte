<script>
  import Header from "../components/Header.svelte";
  import { handleWorkClick } from "../components/stores.js";
  import { onMount } from "svelte";

  onMount(() => {
    handleWorkClick();
  });
</script>

<style>

</style>

<Header />
