<script>
  import Header from "../components/Header.svelte";
  import { handleServicesClick } from "../components/stores.js";
  import { onMount } from "svelte";

  onMount(() => {
    handleServicesClick();
  });
</script>

<style>

</style>

<Header />
<h1>Services</h1>
