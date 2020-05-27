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
  a {
    color: var(--dark);
    display: inline-block;
    transition: background-color 300ms ease-in-out, color 300ms ease-in-out;
  }

  a:active,
  a:visited,
  a:focus {
    outline: none;
  }

  :global(.user-is-tabbing) a:focus {
    color: var(--light);
    background-color: var(--secondary-color);
  }

  div {
    margin-top: 4.5rem;
  }

  .content-wrapper {
    position: relative;
    min-height: calc(100vh - 4.5rem);
    overflow: hidden;
    padding: 1.5rem;
  }

  .image-wrapper {
    width: 100%;
    height: 100%;
  }

  img {
    position: absolute;
    min-height: 100%;
    min-width: 100%;
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
      min-width: 100%;
      height: 100%;
    }
    50% {
      min-width: 102.5%;
      height: 102.5%;
    }
    100% {
      min-width: 100%;
      height: 100%;
    }
  }

  h2 {
    margin-top: 5rem;
  }

  p {
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

    <p class="body-bold">
      We provide a wide-range of
      <a href="/services" aria-label="Services page" underlined>services</a>
      for all your multimedia needs. Check out our past
      <a href="/work" aria-label="Work page" underlined>work</a>
      , our state of the art
      <a href="/studio" aria-label="Studio page" underlined>studio</a>
      and
      <a href="/equipment" aria-label="Equipment page" underlined>equipment</a>
      or read more
      <a href="/about_us" aria-label="About Us page" underlined>about us</a>
      .
    </p>
    <div class="image-wrapper">
      <img src="textures/homepage.png" alt="Background texture" />
    </div>
  </div>
  <Footer />
</div>
