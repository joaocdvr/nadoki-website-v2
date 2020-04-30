<script>
  import Header from "../components/Header.svelte";
  import AboutUsNav from "../components/AboutUsNav.svelte";
  import { handleAboutUsClick } from "../components/stores.js";
  import { onMount } from "svelte";

  onMount(() => {
    handleAboutUsClick();
  });
</script>

<Header />
<AboutUsNav />
