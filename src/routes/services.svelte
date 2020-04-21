<script>
  import Header from "../components/Header.svelte";
  import ServicesNav from "../components/ServicesNav.svelte";
  import Tab from "../components/Tab.svelte";
  import TextBlock from "../components/TextBlock.svelte";
  import Footer from "../components/Footer.svelte";
  import {
    handleServicesClick,
    isMusicClicked,
    isFilmClicked,
    isGameClicked,
    isBrandingClicked,
    isAnyServiceClicked,
    isMusicFirstClicked,
    handleMusicFirstSubmenuClick,
    isMusicSecondClicked,
    handleMusicSecondSubmenuClick,
    isMusicThirdClicked,
    handleMusicThirdSubmenuClick,
    isMusicFourthClicked,
    handleMusicFourthSubmenuClick,
    isMusicFifthClicked,
    handleMusicFifthSubmenuClick,
    isMusicSixthClicked,
    handleMusicSixthSubmenuClick,
    isFilmFirstClicked,
    handleFilmFirstSubmenuClick,
    isFilmSecondClicked,
    handleFilmSecondSubmenuClick,
    isFilmThirdClicked,
    handleFilmThirdSubmenuClick,
    isFilmFourthClicked,
    handleFilmFourthSubmenuClick,
    isFilmFifthClicked,
    handleFilmFifthSubmenuClick,
    isGameFirstClicked,
    handleGameFirstSubmenuClick,
    isGameSecondClicked,
    handleGameSecondSubmenuClick,
    isGameThirdClicked,
    handleGameThirdSubmenuClick,
    isGameFourthClicked,
    handleGameFourthSubmenuClick,
    isBrandingFirstClicked,
    handleBrandingFirstSubmenuClick,
    isBrandingSecondClicked,
    handleBrandingSecondSubmenuClick,
    isBrandingThirdClicked,
    handleBrandingThirdSubmenuClick
  } from "../components/stores.js";
  import { onMount } from "svelte";

  onMount(() => {
    handleServicesClick();
  });

  $: musicTab = [
    {
      title: "Mixing",
      function: handleMusicFirstSubmenuClick,
      variable: $isMusicFirstClicked,
      content:
        "Nadoki offers mixing using our analog/digital hybrid setup, we have the tools and ears to achieve the sound that you deserve.<br><br>The basic price includes three stereo exports: wav 24-bit, wav 16-bit, and FLAC. If other formats are desired, we also offer add-ons, such as surround, binaural and 3D audio, as well as other file formats.<br><br>You can either send us the tracks to be mixed (make sure it’s according to our delivery specs) or bring the files to an attended session with us (check add-on options). If you have any mix references, feel free to also send them to us."
    },
    {
      title: "Mastering",
      function: handleMusicSecondSubmenuClick,
      variable: $isMusicSecondClicked,
      content:
        "Nadoki offers digital and/or vinyl mastering of a track, EP or LP. With our hybrid setup, we can make your song streaming-ready, as well as vinyl-cut ready!<br><br>The basic price includes three format exports: wav 24-bit, wav 16-bit, and FLAC. If other formats are desired, we also offer add-ons.<br><br>You can either send us the tracks to be mastered (make sure it’s according to our delivery requirements) or bring the files to an attended session with us (check add-on options). If you have any master references, feel free to also send them to us."
    },
    {
      title: "Recording",
      function: handleMusicThirdSubmenuClick,
      variable: $isMusicThirdClicked,
      content:
        "Nadoki is proud to offer two recording spaces that you can choose from:<br>— Studio 10 is the perfect space for overdub recordings, solo instruments, and small ensembles.<br>— The Lab is a flexible 60 sqm live tracking room that is perfect for a large-size band, orchestra or choir recording.<br><br>A selection of industry-standard microphones from brands like Neumann, Shure, and AKG are available to use. And if desired, other microphones are available upon request. <a href='/equipment' aria-label='Equipment page'>Check our gear<a>"
    },
    {
      title: "Editing",
      function: handleMusicFourthSubmenuClick,
      variable: $isMusicFourthClicked,
      content:
        "Nadoki offers music editing services, including timing or pitching, for monophonic or polyphonic instruments.<br><br>Please make sure your files are according to our requirements."
    },
    {
      title: "Restoration",
      function: handleMusicFifthSubmenuClick,
      variable: $isMusicFifthClicked,
      content:
        "Nadoki offers audio restoration services to clean, fix and restore your audio recordings. We can remove pops, clicks, hum, hiss, crackle, and many other noises and artifacts, as well as remove clipping of an audio file.<br><br>Please make sure your files are according to our requirements."
    },
    {
      title: "Production",
      function: handleMusicSixthSubmenuClick,
      variable: $isMusicSixthClicked,
      content:
        "Nadoki offers music production services in the genres of hip-hop/trap, pop, and electronic music. Using the endless possibilities of an in-the-box approach, together with live instruments available in our setup and studio musicians, anything is possible."
    }
  ];

  $: filmTab = [
    {
      title: "Re-recording mixing",
      function: handleFilmFirstSubmenuClick,
      variable: $isFilmFirstClicked
    },
    {
      title: "Editing",
      function: handleFilmSecondSubmenuClick,
      variable: $isFilmSecondClicked
    },
    {
      title: "Restoration",
      function: handleFilmThirdSubmenuClick,
      variable: $isFilmThirdClicked
    },
    {
      title: "Sound Design",
      function: handleFilmFourthSubmenuClick,
      variable: $isFilmFourthClicked
    },
    {
      title: "Original Soundtrack",
      function: handleFilmFifthSubmenuClick,
      variable: $isFilmFifthClicked
    }
  ];

  $: gameTab = [
    {
      title: "Sound Design",
      function: handleGameFirstSubmenuClick,
      variable: $isGameFirstClicked
    },
    {
      title: "Original Soundtrack",
      function: handleGameSecondSubmenuClick,
      variable: $isGameSecondClicked
    },
    {
      title: "Integration",
      function: handleGameThirdSubmenuClick,
      variable: $isGameThirdClicked
    },
    {
      title: "Mixing",
      function: handleGameFourthSubmenuClick,
      variable: $isGameFourthClicked
    }
  ];

  $: brandingTab = [
    {
      title: "Sonic Logo",
      function: handleBrandingFirstSubmenuClick,
      variable: $isBrandingFirstClicked
    },
    {
      title: "Podcast",
      function: handleBrandingSecondSubmenuClick,
      variable: $isBrandingSecondClicked
    },
    {
      title: "Post-production for Ads",
      function: handleBrandingThirdSubmenuClick,
      variable: $isBrandingThirdClicked
    }
  ];
</script>

<Header />
<ServicesNav />
{#if $isMusicClicked}
  <Tab tab={musicTab} />
  {#if $isMusicFirstClicked}
    <TextBlock content={musicTab[0].content} />
  {:else if $isMusicSecondClicked}
    <TextBlock content={musicTab[1].content} />
  {:else if $isMusicThirdClicked}
    <TextBlock content={musicTab[2].content} />
  {:else if $isMusicFourthClicked}
    <TextBlock content={musicTab[3].content} />
  {:else if $isMusicFifthClicked}
    <TextBlock content={musicTab[4].content} />
  {:else if $isMusicSixthClicked}
    <TextBlock content={musicTab[5].content} />
  {/if}
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
