<script>
  import { onMount } from "svelte";
  import { get } from "svelte/store";
  import { setActivePage, activePage } from "../utensils/stores.js";
  import { resetScrollYPosition } from "../utensils/utils.js";
  import AboutUsContent from "../containers/AboutUsContent.svelte";

  onMount(() => {
    if (get(activePage) !== "about_us") {
      setActivePage("about_us");
    }
    resetScrollYPosition();
  });
</script>

<AboutUsContent />
