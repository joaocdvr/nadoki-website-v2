<script>
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  import { handleEquipmentClick } from "../components/stores.js";
  import { onMount } from "svelte";

  onMount(() => {
    handleEquipmentClick();
  });
</script>

<style>

</style>

<Header />
<Footer />
