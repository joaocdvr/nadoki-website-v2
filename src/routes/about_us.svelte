<script>
  import Header from "../components/Header.svelte";
  import AboutUsNav from "../components/AboutUsNav.svelte";
  import AboutUsContent from "../components/AboutUsContent.svelte";
  import { handleAboutUsClick } from "../components/stores.js";
  import { onMount } from "svelte";

  onMount(() => {
    handleAboutUsClick();
    window.onpopstate = function(event) {
      console.log(event.state);
    };
  });
</script>

<Header />
<AboutUsNav />
<AboutUsContent />
