<script>
  import { onMount } from "svelte";
  import { get } from "svelte/store";
  import { setActivePage, activePage } from "../utensils/stores.js";
  import { updateVHVariable } from "../utensils/utils.js";
  import EquipmentContent from "../containers/EquipmentContent.svelte";

  onMount(() => {
    updateVHVariable();
    if (get(activePage) !== "equipment") {
      setActivePage("equipment");
    }
  });
</script>

<EquipmentContent />
