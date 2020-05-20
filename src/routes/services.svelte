<script>
  import { onMount } from "svelte";
  import { get } from "svelte/store";
  import { setActivePage, activePage } from "../utensils/stores.js";
  import { resetScrollYPosition } from "../utensils/utils.js";
  import ServicesContent from "../containers/ServicesContent.svelte";

  onMount(() => {
    if (get(activePage) !== "services") {
      setActivePage("services");
    }
    resetScrollYPosition();
  });
</script>

<ServicesContent />
