<script>
  import { onMount } from "svelte";
  import { handleStudioClick } from "../utensils/stores.js";
  import { resetScrollYPosition } from "../utensils/utils.js";
  import StudioContent from "../containers/StudioContent.svelte";

  onMount(() => {
    handleStudioClick();
    resetScrollYPosition();
  });
</script>

<StudioContent />
