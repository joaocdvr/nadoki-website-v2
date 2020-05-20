<script>
  import { onMount } from "svelte";
  import { get } from "svelte/store";
  import { setActivePage, activePage } from "../utensils/stores.js";
  import { resetScrollYPosition } from "../utensils/utils.js";
  import EquipmentContent from "../containers/EquipmentContent.svelte";

  onMount(() => {
    if (get(activePage) !== "equipment") {
      setActivePage("equipment");
    }
    resetScrollYPosition();
  });
</script>

<EquipmentContent />
