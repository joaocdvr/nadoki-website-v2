<script>
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  import { handleServicesClick } from "../components/stores.js";
  import { onMount } from "svelte";

  onMount(() => {
    handleServicesClick();
  });
</script>

<style>

</style>

<Header />
<Footer />
