<script>
  import { onMount } from "svelte";
  import { get } from "svelte/store";
  import { setActivePage, activePage } from "../utensils/stores.js";
  import ServicesContent from "../containers/ServicesContent.svelte";

  onMount(() => {
    if (get(activePage) !== "services") {
      setActivePage("services");
    }
  });
</script>

<ServicesContent />
