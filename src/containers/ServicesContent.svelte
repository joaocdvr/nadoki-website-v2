<script>
  import {
    scrollYPosition,
    isMusicClicked,
    isFilmClicked,
    isGameClicked,
    isBrandingClicked,
    isMusicFirstClicked,
    isAnyServiceClicked,
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
  } from "../utensils/stores.js";
  import Header from "../components/Header.svelte";
  import ServicesNav from "../containers/ServicesNav.svelte";
  import Tab from "../components/Tab.svelte";
  import TextBlock from "../components/TextBlock.svelte";
  import Footer from "../components/Footer.svelte";
  import WorkNav from "../containers/WorkNav.svelte";

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
      variable: $isFilmFirstClicked,
      content:
        "Nadoki offers to mix the sound for your production balancing all dialog, ADR, sound effects, music, atmospheres and foleys so that it enhances the work’s storytelling without distracting from it.<br><br>We offer both stereo and 5.1 surround mixing. For other formats, please get in touch."
    },
    {
      title: "Editing",
      function: handleFilmSecondSubmenuClick,
      variable: $isFilmSecondClicked,
      content:
        "Nadoki offers dialogue, music and sound effect editing for your production."
    },
    {
      title: "Restoration",
      function: handleFilmThirdSubmenuClick,
      variable: $isFilmThirdClicked,
      content:
        "Nadoki offers audio restoration services to clean, fix and restore your audio recordings. We can remove pops, clicks, hum, hiss, crackle, and many other noises, as well as remove clipping of an audio file.<br><br>Please make sure your files are according to our requirements."
    },
    {
      title: "Sound Design",
      function: handleFilmFourthSubmenuClick,
      variable: $isFilmFourthClicked,
      content:
        "Sound has an important role in storytelling in a film production - it allows the creation of atmospheres, emotion and it sets the tone of a movie.<br><br>Nadoki offers to sound design your film production to enhance your story to its full potential. Using high-quality industry standard samples and foley recording techniques, we can create the sound your production needs."
    },
    {
      title: "Original Soundtrack",
      function: handleFilmFifthSubmenuClick,
      variable: $isFilmFifthClicked,
      content:
        "Nadoki can compose a tailored music score to accompany your film production. Using our hybrid setup, we have in-the-box tools, as well as, analog instruments to create the sound that fits your production."
    }
  ];

  $: gameTab = [
    {
      title: "Sound Design",
      function: handleGameFirstSubmenuClick,
      variable: $isGameFirstClicked,
      content:
        "The multiplicity and variety of possibilities in sound composition in a game not only allow the creation of atmospheres and emotions, but also sets the tone of it.<br><br>Nadoki offers to sound design your game to enhance your story to its full potential. Using high-quality industry-standard samples and foley recording techniques, we can create the sound your production needs."
    },
    {
      title: "Original Soundtrack",
      function: handleGameSecondSubmenuClick,
      variable: $isGameSecondClicked,
      content:
        "Nadoki offers to compose tailored music scores to accompany your game. With the unlimited possibilities of the in-the-box approach, together with the analog instruments available in our array of sounds, we can translate your game’s message into music."
    },
    {
      title: "Integration",
      function: handleGameThirdSubmenuClick,
      variable: $isGameThirdClicked,
      content:
        "The accuracy of sound integration to the environment of a game has an important role in the immersion of the player. For the finest interaction, precision in each moment of scene is crucial and making sure that all audio assets (music, ambience, dialogue, and sound effects) load smoothly, trigger correctly, and playback in the highest quality at minimal processing power is key.<br><br>Nadoki offers to integrate the sound of your game utilizing FMOD, Unreal Engine and Unity."
    },
    {
      title: "Mixing",
      function: handleGameFourthSubmenuClick,
      variable: $isGameFourthClicked,
      content:
        "Nadoki offers mixing services for the sound of your game balancing all dialog, ADR, sound effects, music, atmospheres and foleys for the best immersion of the player.<br><br>We offer both stereo and 5.1 surround mixing. For other formats, please get in touch."
    }
  ];

  $: brandingTab = [
    {
      title: "Sonic Logo",
      function: handleBrandingFirstSubmenuClick,
      variable: $isBrandingFirstClicked,
      content:
        "There’s more to branding than what meets the eye. While strong visuals are key, it’s also important to communicate your story and create your sonic identity for your brand.<br><br>After a talk to understand the story and personality of your brand, we will analyze to find your voice, and create a sonic logo customized for your company, to best translate your energy, message, and experience to your clients."
    },
    {
      title: "Podcast",
      function: handleBrandingSecondSubmenuClick,
      variable: $isBrandingSecondClicked,
      content:
        "The fastest-growing media content for brands is used nowadays by several businesses to best connect with their customers at a personal level. Podcasts can be a key tool in the digital marketing strategy of your company to keep your clients connected to your brand and increase the reach and your participation with your community.<br><br>We offer podcast directing, recording, editing and finalization for your business."
    },
    {
      title: "Post-production for Ads",
      function: handleBrandingThirdSubmenuClick,
      variable: $isBrandingThirdClicked,
      content:
        "Advertisements are around us every day. From radio spots to TV spots and now online streaming spots, it’s the most common advertising media.<br><br>Nadoki offers audio post-production for your advertisements. Our services include ADR recording, editing, restoration, sound designing, mixing, and finalizing. We can make your ad ready to be heard anywhere."
    }
  ];
</script>

<style>
  .modal-wrapper {
    position: fixed;
    top: 0;
    left: 100vw;
    background-color: var(--light);
    max-height: 100vh;
    overflow-y: auto;
    z-index: 2;
    backface-visibility: hidden;
    transition: left 300ms ease-in-out;
  }

  .modal-is-visible {
    left: 0;
  }
</style>

<div style="transform: translateY({$scrollYPosition * -1}px)">
  <Header variant="services" />
  <ServicesNav />
  <Footer />
</div>

<div class="modal-wrapper" class:modal-is-visible={$isAnyServiceClicked}>
  <WorkNav />

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
  {:else if $isFilmClicked}
    <Tab tab={filmTab} />
    {#if $isFilmFirstClicked}
      <TextBlock content={filmTab[0].content} />
    {:else if $isFilmSecondClicked}
      <TextBlock content={filmTab[1].content} />
    {:else if $isFilmThirdClicked}
      <TextBlock content={filmTab[2].content} />
    {:else if $isFilmFourthClicked}
      <TextBlock content={filmTab[3].content} />
    {:else if $isFilmFifthClicked}
      <TextBlock content={filmTab[4].content} />
    {/if}
  {:else if $isGameClicked}
    <Tab tab={gameTab} />
    {#if $isGameFirstClicked}
      <TextBlock content={gameTab[0].content} />
    {:else if $isGameSecondClicked}
      <TextBlock content={gameTab[1].content} />
    {:else if $isGameThirdClicked}
      <TextBlock content={gameTab[2].content} />
    {:else if $isGameFourthClicked}
      <TextBlock content={gameTab[3].content} />
    {/if}
  {:else if $isBrandingClicked}
    <Tab tab={brandingTab} />
    {#if $isBrandingFirstClicked}
      <TextBlock content={brandingTab[0].content} />
    {:else if $isBrandingSecondClicked}
      <TextBlock content={brandingTab[1].content} />
    {:else if $isBrandingThirdClicked}
      <TextBlock content={brandingTab[2].content} />
    {/if}
  {/if}

  <Footer />
</div>
