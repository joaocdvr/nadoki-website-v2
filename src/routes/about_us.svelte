<script>
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  import { handleAboutUsClick } from "../components/stores.js";
  import { onMount } from "svelte";

  onMount(() => {
    handleAboutUsClick();
  });
</script>

<Header />
<Footer />
