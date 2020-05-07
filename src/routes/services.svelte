<script>
  import { onMount } from "svelte";
  import { handleServicesClick } from "../components/stores.js";
  import Header from "../components/Header.svelte";
  import ServicesNav from "../components/ServicesNav.svelte";
  import ServicesContent from "../components/ServicesContent.svelte";

  onMount(() => {
    handleServicesClick();
  });
</script>

<Header />
<ServicesNav />
<ServicesContent />
