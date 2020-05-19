<script>
  import { onMount } from "svelte";
  import { scrollYPosition } from "../utensils/stores.js";
  import { resetScrollYPosition } from "../utensils/utils.js";
  import Footer from "../components/Footer.svelte";

  onMount(() => {
    resetScrollYPosition();
  });
</script>

<div style="transform: translateY({$scrollYPosition * -1}px)">
  <Footer />
  <p class="body-regular">body-regular 1rem</p>
  <p class="body-bold">body-bold 1rem</p>
  <p class="body-extra">body-extra 1rem</p>
  <p class="body-italic">body-italic 1rem</p>
  <p class="body-mono">body-mono 1rem</p>
</div>
