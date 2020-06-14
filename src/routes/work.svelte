<script>
  import { onMount } from "svelte";
  import { get } from "svelte/store";
  import { setActivePage, activePage } from "../utensils/stores.js";
  import WorkContent from "../containers/WorkContent.svelte";

  onMount(() => {
    if (get(activePage) !== "work") {
      setActivePage("work");
    }
  });
</script>

<WorkContent />
