<script>
  import { onMount } from "svelte";
  import {
    handleAboutUsClick,
    setAboutUsActiveItem,
    aboutUsActiveItem
  } from "../utensils/stores.js";
  import { resetScrollYPosition } from "../utensils/utils.js";
  import AboutUsContent from "../containers/AboutUsContent.svelte";

  onMount(() => {
    handleAboutUsClick();
    resetScrollYPosition();
  });
</script>

<AboutUsContent />
