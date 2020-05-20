<script>
  import { onMount } from "svelte";
  import { get } from "svelte/store";
  import { setActivePage, activePage } from "../utensils/stores.js";
  import { resetScrollYPosition } from "../utensils/utils.js";
  import StudioContent from "../containers/StudioContent.svelte";

  onMount(() => {
    if (get(activePage) !== "studio") {
      setActivePage("studio");
    }
    resetScrollYPosition();
  });
</script>

<StudioContent />
