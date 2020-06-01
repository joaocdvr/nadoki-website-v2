<script>
  import { onMount, afterUpdate } from "svelte";
  import { get } from "svelte/store";
  import { fade } from "svelte/transition";
  import {
    scrollYPosition,
    animationInDelay,
    animationInDuration,
    animationInEasing,
    animationOutDuration,
    animationOutEasing,
    servicesModalActive,
    setServicesModalActive,
    handleServicesModalClick,
    resetServicesModalActive,
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
  } from "../utensils/stores.js";
  import Header from "../components/Header.svelte";
  import ServicesNav from "../containers/ServicesNav.svelte";
  import Tab from "../components/Tab.svelte";
  import ModalNav from "../components/ModalNav.svelte";
  import Footer from "../components/Footer.svelte";

  onMount(() => {
    const url = new URL(document.location);
    const projectParam = url.searchParams.get("name");

    if (servicesSubpages.includes(projectParam)) {
      handleServicesModalClick(projectParam);
    }

    window.addEventListener("popstate", function() {
      const url = new URL(document.location);
      const nameParam = url.searchParams.get("name");
      if (servicesSubpages.includes(nameParam)) {
        setServicesModalActive(nameParam);
      } else {
        setServicesModalActive("");
      }
    });
  });

  const servicesSubpages = ["music", "film", "game", "branding"];

  $: isAnyServiceClicked = !!$servicesModalActive;

  $: musicTab = [
    {
      title: "MIXING",
      function: handleMusicFirstSubmenuClick,
      variable: $isMusicFirstClicked
    },
    {
      title: "MASTERING",
      function: handleMusicSecondSubmenuClick,
      variable: $isMusicSecondClicked
    },
    {
      title: "RECORDING",
      function: handleMusicThirdSubmenuClick,
      variable: $isMusicThirdClicked
    },
    {
      title: "EDITING",
      function: handleMusicFourthSubmenuClick,
      variable: $isMusicFourthClicked
    },
    {
      title: "RESTORATION",
      function: handleMusicFifthSubmenuClick,
      variable: $isMusicFifthClicked
    },
    {
      title: "PRODUCTION",
      function: handleMusicSixthSubmenuClick,
      variable: $isMusicSixthClicked
    }
  ];

  $: filmTab = [
    {
      title: "RE-RECORDING MIXING",
      function: handleFilmFirstSubmenuClick,
      variable: $isFilmFirstClicked
    },
    {
      title: "EDITING",
      function: handleFilmSecondSubmenuClick,
      variable: $isFilmSecondClicked
    },
    {
      title: "RESTORATION",
      function: handleFilmThirdSubmenuClick,
      variable: $isFilmThirdClicked
    },
    {
      title: "SOUND DESIGN",
      function: handleFilmFourthSubmenuClick,
      variable: $isFilmFourthClicked
    },
    {
      title: "ORIGINAL SOUNDTRACK",
      function: handleFilmFifthSubmenuClick,
      variable: $isFilmFifthClicked
    }
  ];

  $: gameTab = [
    {
      title: "SOUND DESIGN",
      function: handleGameFirstSubmenuClick,
      variable: $isGameFirstClicked
    },
    {
      title: "ORIGINAL SOUNDTRACK",
      function: handleGameSecondSubmenuClick,
      variable: $isGameSecondClicked
    },
    {
      title: "INTEGRATION",
      function: handleGameThirdSubmenuClick,
      variable: $isGameThirdClicked
    },
    {
      title: "MIXING",
      function: handleGameFourthSubmenuClick,
      variable: $isGameFourthClicked
    }
  ];

  $: brandingTab = [
    {
      title: "SONIC LOGO",
      function: handleBrandingFirstSubmenuClick,
      variable: $isBrandingFirstClicked
    },
    {
      title: "PODCAST",
      function: handleBrandingSecondSubmenuClick,
      variable: $isBrandingSecondClicked
    },
    {
      title: "POST-PRODUCTION FOR ADS",
      function: handleBrandingThirdSubmenuClick,
      variable: $isBrandingThirdClicked
    }
  ];
</script>

<style>
  .content-wrapper {
    margin-top: 4.5rem;
    background-color: var(--main-color);
  }

  .content-wrapper-not-visible {
    display: none;
  }

  .modal-wrapper {
    position: fixed;
    top: 0;
    left: 100vw;
    background-color: var(--main-color);
    max-height: 100vh;
    overflow-y: auto;
    z-index: 2;
    backface-visibility: hidden;
    transition: left 300ms ease-in-out;
  }

  .modal-is-visible {
    left: 0;
  }

  @media (--max-content-width) {
    main {
      display: flex;
      height: calc(100vh - 12.5rem);
    }
  }

  .tab-content {
    padding: 1.5rem 1.5rem 2.5rem 1.5rem;
    height: fit-content;
    width: 100%;
    transition: height 300ms ease-in-out;
  }

  @media (--max-content-width) {
    .tab-content {
      padding: 3rem 3rem 5rem 3rem;
      height: calc(100vh - 12.5rem);
      overflow-y: scroll;
    }

    .tab-content p {
      font-size: 2rem;
    }
  }
</style>

<div
  class="content-wrapper"
  class:content-wrapper-not-visible={isAnyServiceClicked}
  style="transform: translateY({$scrollYPosition * -1}px)">
  <Header variant="services" />
  <ServicesNav />
  <Footer />
</div>

<div
  in:fade={{ delay: $animationInDelay, duration: $animationInDuration, easing: $animationInEasing }}
  out:fade={{ delay: $animationInDelay, duration: $animationOutDuration, easing: $animationOutEasing }}
  class="modal-wrapper"
  class:modal-is-visible={isAnyServiceClicked}>
  <ModalNav on:click={() => resetServicesModalActive()} title="Services" />

  {#if $servicesModalActive === 'music'}
    <Header variant="music" delay={$animationInDelay} />
    <main>
      <Tab variant="services" tab={musicTab} delay={$animationInDelay} />
      <div class="tab-content">
        {#if $isMusicFirstClicked}
          <p class="body-regular">
            Nadoki offers mixing using our analog/digital hybrid setup, we have
            the tools and ears to achieve the sound that you deserve.
            <br />
            <br />
            The basic price includes three stereo exports: wav 24-bit, wav
            16-bit, and FLAC. If other formats are desired, we also offer
            add-ons, such as surround, binaural and 3D audio, as well as other
            file formats.
            <br />
            <br />
            You can either send us the tracks to be mixed (make sure it’s
            according to our delivery specs) or bring the files to an attended
            session with us (check add-on options). If you have any mix
            references, feel free to also send them to us.
          </p>
        {:else if $isMusicSecondClicked}
          <p class="body-regular">
            Nadoki offers digital and/or vinyl mastering of a track, EP or LP.
            With our hybrid setup, we can make your song streaming-ready, as
            well as vinyl-cut ready!
            <br />
            <br />
            The basic price includes three format exports: wav 24-bit, wav
            16-bit, and FLAC. If other formats are desired, we also offer
            add-ons.
            <br />
            <br />
            You can either send us the tracks to be mastered (make sure it’s
            according to our delivery requirements) or bring the files to an
            attended session with us (check add-on options). If you have any
            master references, feel free to also send them to us.
          </p>
        {:else if $isMusicThirdClicked}
          <p class="body-regular">
            Nadoki is proud to offer two recording spaces that you can choose
            from:
            <br />
            — Studio 10 is the perfect space for overdub recordings, solo
            instruments, and small ensembles.
            <br />
            — The Lab is a flexible 60 sqm live tracking room that is perfect
            for a large-size band, orchestra or choir recording.
            <br />
            <br />
            A selection of industry-standard microphones from brands like
            Neumann, Shure, and AKG are available to use. And if desired, other
            microphones are available upon request.
            <a href="/equipment" aria-label="Equipment page">Check our gear</a>
          </p>
        {:else if $isMusicFourthClicked}
          <p class="body-regular">
            Nadoki offers music editing services, including timing or pitching,
            for monophonic or polyphonic instruments.
            <br />
            <br />
            Please make sure your files are according to our requirements.
          </p>
        {:else if $isMusicFifthClicked}
          <p class="body-regular">
            Nadoki offers audio restoration services to clean, fix and restore
            your audio recordings. We can remove pops, clicks, hum, hiss,
            crackle, and many other noises and artifacts, as well as remove
            clipping of an audio file.
            <br />
            <br />
            Please make sure your files are according to our requirements.
          </p>
        {:else if $isMusicSixthClicked}
          <p class="body-regular">
            Nadoki offers music production services in the genres of
            hip-hop/trap, pop, and electronic music. Using the endless
            possibilities of an in-the-box approach, together with live
            instruments available in our setup and studio musicians, anything is
            possible.
          </p>
        {/if}
      </div>
    </main>
  {:else if $servicesModalActive === 'film'}
    <Header variant="film" delay={$animationInDelay} />
    <main>
      <Tab variant="services" tab={filmTab} delay={$animationInDelay} />
      <div class="tab-content">
        {#if $isFilmFirstClicked}
          <p class="body-regular">
            Nadoki offers to mix the sound for your production balancing all
            dialog, ADR, sound effects, music, atmospheres and foleys so that it
            enhances the work’s storytelling without distracting from it.
            <br />
            <br />
            We offer both stereo and 5.1 surround mixing. For other formats,
            please get in touch.
          </p>
        {:else if $isFilmSecondClicked}
          <p class="body-regular">
            Nadoki offers dialogue, music and sound effect editing for your
            production.
          </p>
        {:else if $isFilmThirdClicked}
          <p class="body-regular">
            Nadoki offers audio restoration services to clean, fix and restore
            your audio recordings. We can remove pops, clicks, hum, hiss,
            crackle, and many other noises, as well as remove clipping of an
            audio file.
            <br />
            <br />
            Please make sure your files are according to our requirements.
          </p>
        {:else if $isFilmFourthClicked}
          <p class="body-regular">
            Sound has an important role in storytelling in a film production -
            it allows the creation of atmospheres, emotion and it sets the tone
            of a movie.
            <br />
            <br />
            Nadoki offers to sound design your film production to enhance your
            story to its full potential. Using high-quality industry standard
            samples and foley recording techniques, we can create the sound your
            production needs.
          </p>
        {:else if $isFilmFifthClicked}
          <p class="body-regular">
            Nadoki can compose a tailored music score to accompany your film
            production. Using our hybrid setup, we have in-the-box tools, as
            well as, analog instruments to create the sound that fits your
            production.
          </p>
        {/if}
      </div>
    </main>
  {:else if $servicesModalActive === 'game'}
    <Header variant="game" delay={$animationInDelay} />
    <main>
      <Tab variant="services" tab={gameTab} delay={$animationInDelay} />
      <div class="tab-content">
        {#if $isGameFirstClicked}
          <p class="body-regular">
            The multiplicity and variety of possibilities in sound composition
            in a game not only allow the creation of atmospheres and emotions,
            but also sets the tone of it.
            <br />
            <br />
            Nadoki offers to sound design your game to enhance your story to its
            full potential. Using high-quality industry-standard samples and
            foley recording techniques, we can create the sound your production
            needs.
          </p>
        {:else if $isGameSecondClicked}
          <p class="body-regular">
            Nadoki offers to compose tailored music scores to accompany your
            game. With the unlimited possibilities of the in-the-box approach,
            together with the analog instruments available in our array of
            sounds, we can translate your game’s message into music.
          </p>
        {:else if $isGameThirdClicked}
          <p class="body-regular">
            The accuracy of sound integration to the environment of a game has
            an important role in the immersion of the player. For the finest
            interaction, precision in each moment of scene is crucial and making
            sure that all audio assets (music, ambience, dialogue, and sound
            effects) load smoothly, trigger correctly, and playback in the
            highest quality at minimal processing power is key.
            <br />
            <br />
            Nadoki offers to integrate the sound of your game utilizing FMOD,
            Unreal Engine and Unity.
          </p>
        {:else if $isGameFourthClicked}
          <p class="body-regular">
            Nadoki offers mixing services for the sound of your game balancing
            all dialog, ADR, sound effects, music, atmospheres and foleys for
            the best immersion of the player.
            <br />
            <br />
            We offer both stereo and 5.1 surround mixing. For other formats,
            please get in touch.
          </p>
        {/if}
      </div>
    </main>
  {:else if $servicesModalActive === 'branding'}
    <Header variant="branding" delay={$animationInDelay} />
    <main>
      <Tab variant="services" tab={brandingTab} delay={$animationInDelay} />
      <div class="tab-content">
        {#if $isBrandingFirstClicked}
          <p class="body-regular">
            There’s more to branding than what meets the eye. While strong
            visuals are key, it’s also important to communicate your story and
            create your sonic identity for your brand.
            <br />
            <br />
            After a talk to understand the story and personality of your brand,
            we will analyze to find your voice, and create a sonic logo
            customized for your company, to best translate your energy, message,
            and experience to your clients.
          </p>
        {:else if $isBrandingSecondClicked}
          <p class="body-regular">
            The fastest-growing media content for brands is used nowadays by
            several businesses to best connect with their customers at a
            personal level. Podcasts can be a key tool in the digital marketing
            strategy of your company to keep your clients connected to your
            brand and increase the reach and your participation with your
            community.
            <br />
            <br />
            We offer podcast directing, recording, editing and finalization for
            your business.
          </p>
        {:else if $isBrandingThirdClicked}
          <p class="body-regular">
            Advertisements are around us every day. From radio spots to TV spots
            and now online streaming spots, it’s the most common advertising
            media.
            <br />
            <br />
            Nadoki offers audio post-production for your advertisements. Our
            services include ADR recording, editing, restoration, sound
            designing, mixing, and finalizing. We can make your ad ready to be
            heard anywhere.
          </p>
        {/if}
      </div>
    </main>
  {/if}

  <Footer delay={$animationInDelay} />
</div>
