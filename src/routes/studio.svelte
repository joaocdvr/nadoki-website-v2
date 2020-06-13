<script>
  import { onMount } from "svelte";
  import { get } from "svelte/store";
  import { setActivePage, activePage } from "../utensils/stores.js";
  import { updateVHVariable } from "../utensils/utils.js";
  import StudioContent from "../containers/StudioContent.svelte";

  onMount(() => {
    updateVHVariable();
    if (get(activePage) !== "studio") {
      setActivePage("studio");
    }
  });
</script>

<StudioContent />
