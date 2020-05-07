<script>
  import { onMount } from "svelte";
  import { handleEquipmentClick } from "../utensils/stores.js";
  import Header from "../components/Header.svelte";
  import EquipmentContent from "../containers/EquipmentContent.svelte";
  import Footer from "../components/Footer.svelte";

  onMount(() => {
    handleEquipmentClick();
  });
</script>

<Header />
<EquipmentContent />
<Footer />
