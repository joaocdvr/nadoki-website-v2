<script>
  import Header from "../components/Header.svelte";
  import { handleEquipmentClick } from "../components/stores.js";
  import { onMount } from "svelte";

  onMount(() => {
    handleEquipmentClick();
  });
</script>

<style>

</style>

<Header />
