<script>
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  import { handleStudioClick } from "../components/stores.js";
  import { onMount } from "svelte";

  onMount(() => {
    handleStudioClick();
  });
</script>

<style>

</style>

<Header />
<Footer />
