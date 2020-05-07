<script>
  import { onMount } from "svelte";
  import { handleStudioClick } from "../utensils/stores.js";
  import Header from "../components/Header.svelte";
  import StudioContent from "../containers/StudioContent.svelte";
  import Footer from "../components/Footer.svelte";

  onMount(() => {
    handleStudioClick();
  });
</script>

<Header />
<StudioContent />
<Footer />
