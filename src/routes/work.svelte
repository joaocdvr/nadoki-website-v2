<script>
  import { onMount } from "svelte";
  import { get } from "svelte/store";
  import { setActivePage, activePage } from "../utensils/stores.js";
  import { updateVHVariable } from "../utensils/utils.js";
  import WorkContent from "../containers/WorkContent.svelte";

  onMount(() => {
    updateVHVariable();
    if (get(activePage) !== "work") {
      setActivePage("work");
    }
  });
</script>

<WorkContent />
