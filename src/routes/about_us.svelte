<script>
  import { onMount } from "svelte";
  import { get } from "svelte/store";
  import { setActivePage, activePage } from "../utensils/stores.js";
  import { updateVHVariable } from "../utensils/utils.js";
  import AboutUsContent from "../containers/AboutUsContent.svelte";

  onMount(() => {
    updateVHVariable();
    if (get(activePage) !== "about_us") {
      setActivePage("about_us");
    }
  });
</script>

<AboutUsContent />
