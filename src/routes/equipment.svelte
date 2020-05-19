<script>
  import { onMount } from "svelte";
  import { handleEquipmentClick } from "../utensils/stores.js";
  import { resetScrollYPosition } from "../utensils/utils.js";
  import EquipmentContent from "../containers/EquipmentContent.svelte";

  onMount(() => {
    handleEquipmentClick();
    resetScrollYPosition();
  });
</script>

<EquipmentContent />
