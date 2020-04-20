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
      title: "Mixing"
    },
    {
      title: "Mastering"
    },
    {
      title: "Recording"
    },
    {
      title: "Editing"
    },
    {
      title: "Restoration"
    },
    {
      title: "Production"
    }
  ];

  $: filmTab = [
    {
      title: "Mixing"
    },
    {
      title: "Mastering"
    },
    {
      title: "Editing"
    },
    {
      title: "Sound Design/Foley"
    },
    {
      title: "Original Soundtrack"
    }
  ];

  $: gameTab = [
    {
      title: "Mixing"
    },
    {
      title: "Sound Design"
    },
    {
      title: "Original Soundtrack"
    },
    {
      title: "Integration"
    }
  ];

  $: brandingTab = [
    {
      title: "Sound Logo"
    },
    {
      title: "Podcast"
    },
    {
      title: "Advertisement"
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
