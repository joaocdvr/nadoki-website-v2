<script>
  import Header from "../components/Header.svelte";
  import { handleStudioClick } from "../components/stores.js";
  import { onMount } from "svelte";

  onMount(() => {
    handleStudioClick();
  });
</script>

<style>

</style>

<Header />
<h1>Studio</h1>
