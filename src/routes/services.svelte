<script>
  import Header from "../components/Header.svelte";
  import ServicesNav from "../components/ServicesNav.svelte";
  import ServicesContent from "../components/ServicesContent.svelte";
  import { handleServicesClick } from "../components/stores.js";
  import { onMount } from "svelte";

  onMount(() => {
    handleServicesClick();
  });
</script>

<Header />
<ServicesNav />
<ServicesContent />
