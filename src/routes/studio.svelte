<script>
  import { onMount } from "svelte";
  import { get } from "svelte/store";
  import { setActivePage, activePage } from "../utensils/stores.js";
  import StudioContent from "../containers/StudioContent.svelte";

  onMount(() => {
    if (get(activePage) !== "studio") {
      setActivePage("studio");
    }
  });
</script>

<StudioContent />
