<script>
  import { onMount } from "svelte";
  import { handleServicesClick } from "../utensils/stores.js";
  import Header from "../components/Header.svelte";
  import ServicesNav from "../containers/ServicesNav.svelte";
  import ServicesContent from "../containers/ServicesContent.svelte";

  onMount(() => {
    handleServicesClick();
  });
</script>

<Header />
<ServicesNav />
<ServicesContent />
