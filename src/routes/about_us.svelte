<script>
  import { onMount } from "svelte";
  import { handleAboutUsClick } from "../utensils/stores.js";
  import Header from "../components/Header.svelte";
  import AboutUsNav from "../containers/AboutUsNav.svelte";
  import AboutUsContent from "../containers/AboutUsContent.svelte";

  onMount(() => {
    handleAboutUsClick();
  });
</script>

<Header />
<AboutUsNav />
<AboutUsContent />
