<script>
  import { onMount } from "svelte";
  import { handleWorkClick } from "../utensils/stores.js";
  import { resetScrollYPosition } from "../utensils/utils.js";
  import WorkContent from "../containers/WorkContent.svelte";

  onMount(() => {
    handleWorkClick();
    resetScrollYPosition();
  });
</script>

<WorkContent />
