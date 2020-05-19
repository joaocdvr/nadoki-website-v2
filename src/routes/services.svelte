<script>
  import { onMount } from "svelte";
  import { handleServicesClick } from "../utensils/stores.js";
  import { resetScrollYPosition } from "../utensils/utils.js";
  import ServicesContent from "../containers/ServicesContent.svelte";

  onMount(() => {
    handleServicesClick();
    resetScrollYPosition();
  });
</script>

<ServicesContent />
