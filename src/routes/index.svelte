<script>
  import { onMount } from "svelte";
  import { get } from "svelte/store";
  import {
    scrollYPosition,
    setActivePage,
    activePage
  } from "../utensils/stores.js";
  import { resetScrollYPosition } from "../utensils/utils.js";
  import Footer from "../components/Footer.svelte";

  onMount(() => {
    if (get(activePage) !== "") {
      setActivePage("");
    }
    resetScrollYPosition();
  });
</script>

<style>
  div {
    margin-top: 4.5rem;
  }

  .content-wrapper {
    position: relative;
    height: calc(100vh - 4.5rem);
    overflow: hidden;
    padding: 1.5rem;
  }

  .image-wrapper {
    max-width: 100%;
    max-height: 100%;
  }

  img {
    position: absolute;
    height: 100%;
    max-width: none;
    z-index: -1;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    animation-name: img-animation;
    animation-duration: 4s;
    animation-iteration-count: infinite;
  }

  @keyframes img-animation {
    0% {
      height: 100%;
    }
    50% {
      height: 105%;
    }
    100% {
      height: 100%;
    }
  }

  h2 {
    margin-top: 5rem;
  }
</style>

<div style="transform: translateY({$scrollYPosition * -1}px)">
  <div class="content-wrapper">
    <h2 class="homepage">
      <span style="font-size: 2rem;">NADOKI</span>
      IS
      <br />
      A BERLIN BASED
      <br />
      MUSIC STUDIO
    </h2>
    <div class="image-wrapper">
      <img src="textures/homepage.png" alt="Background texture" />
    </div>
  </div>
  <Footer />
</div>
