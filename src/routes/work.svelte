<script>
  import { onMount } from "svelte";
  import { handleWorkClick } from "../utensils/stores.js";
  import Header from "../components/Header.svelte";
  import WorkContent from "../containers/WorkContent.svelte";
  import Footer from "../components/Footer.svelte";

  onMount(() => {
    handleWorkClick();
  });
</script>

<Header />
<WorkContent />
<Footer />
