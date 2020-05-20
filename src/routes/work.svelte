<script>
  import { onMount } from "svelte";
  import { get } from "svelte/store";
  import { setActivePage, activePage } from "../utensils/stores.js";
  import { resetScrollYPosition } from "../utensils/utils.js";
  import WorkContent from "../containers/WorkContent.svelte";

  onMount(() => {
    if (get(activePage) !== "work") {
      setActivePage("work");
    }
    resetScrollYPosition();
  });
</script>

<WorkContent />
