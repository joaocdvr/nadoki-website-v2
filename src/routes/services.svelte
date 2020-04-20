<script>
  import Header from "../components/Header.svelte";
  import ServicesNav from "../components/ServicesNav.svelte";
  import Tab from "../components/Tab.svelte";
  import Footer from "../components/Footer.svelte";
  import {
    handleServicesClick,
    isMusicClicked,
    isFilmClicked,
    isGameClicked,
    isBrandingClicked,
    isAnyServiceClicked
  } from "../components/stores.js";
  import { onMount } from "svelte";

  onMount(() => {
    handleServicesClick();
  });

  $: musicTab = [
    {
      title: "Music 1"
    },
    {
      title: "Music 2"
    }
  ];

  $: filmTab = [
    {
      title: "Film 1"
    },
    {
      title: "Film 2"
    }
  ];

  $: gameTab = [
    {
      title: "Game 1"
    },
    {
      title: "Game 2"
    }
  ];

  $: brandingTab = [
    {
      title: "Branding 1"
    },
    {
      title: "Branding 2"
    }
  ];
</script>

<Header />
<ServicesNav />
{#if $isMusicClicked}
  <Tab tab={musicTab} />
{/if}
{#if $isFilmClicked}
  <Tab tab={filmTab} />
{/if}
{#if $isGameClicked}
  <Tab tab={gameTab} />
{/if}
{#if $isBrandingClicked}
  <Tab tab={brandingTab} />
{/if}
{#if !$isAnyServiceClicked}
  <Footer />
{/if}
