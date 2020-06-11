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
    musicActiveTab,
    setActiveMusicTab,
    handleMusicTabClick,
    filmActiveTab,
    setActiveFilmTab,
    handleFilmTabClick,
    gameActiveTab,
    setActiveGameTab,
    handleGameTabClick,
    brandingActiveTab,
    setActiveBrandingTab,
    handleBrandingTabClick
  } from "../utensils/stores.js";
  import Header from "../components/Header.svelte";
  import ServicesNav from "../containers/ServicesNav.svelte";
  import Tab from "../components/Tab.svelte";
  import ModalNav from "../components/ModalNav.svelte";
  import Footer from "../components/Footer.svelte";

  onMount(() => {
    const url = new URL(document.location);
    const nameParam = url.searchParams.get("name");
    const typeParam = url.searchParams.get("type");

    if (servicesPages.includes(nameParam)) {
      if (nameParam === "music" && musicTabs.includes(typeParam)) {
        setActiveMusicTab(get(musicActiveTab));
        handleServicesModalClick(nameParam, typeParam);
      } else if (nameParam === "film" && filmTabs.includes(typeParam)) {
        setActiveFilmTab(get(filmActiveTab));
        handleServicesModalClick(nameParam, typeParam);
      } else if (nameParam === "game" && gameTabs.includes(typeParam)) {
        setActiveGameTab(get(gameActiveTab));
        handleServicesModalClick(nameParam, typeParam);
      } else if (nameParam === "branding" && brandingTabs.includes(typeParam)) {
        setActiveBrandingTab(get(brandingActiveTab));
        handleServicesModalClick(nameParam, typeParam);
      } else {
        return;
      }
    }

    window.addEventListener("popstate", function() {
      const url = new URL(document.location);
      const nameParam = url.searchParams.get("name");
      const typeParam = url.searchParams.get("type");

      if (servicesPages.includes(nameParam)) {
        if (nameParam === "music" && musicTabs.includes(typeParam)) {
          setServicesModalActive("music");
          setActiveMusicTab(typeParam);
        } else if (nameParam === "film" && filmTabs.includes(typeParam)) {
          setServicesModalActive("film");
          setActiveFilmTab(typeParam);
        } else if (nameParam === "game" && gameTabs.includes(typeParam)) {
          setServicesModalActive("game");
          setActiveGameTab(typeParam);
        } else if (
          nameParam === "branding" &&
          brandingTabs.includes(typeParam)
        ) {
          setServicesModalActive("branding");
          setActiveBrandingTab(typeParam);
        }
      } else {
        setServicesModalActive("");
        return;
      }
    });
  });

  // Declaration of pages and their tabs
  const servicesPages = ["music", "film", "game", "branding"];

  const musicTabs = [
    "mixing",
    "mastering",
    "recording",
    "editing_restoration",
    "production"
  ];

  const filmTabs = [
    "re-recording_mixing",
    "editing_restoration",
    "sound_design",
    "original_soundtrack"
  ];

  const gameTabs = [
    "sound_design",
    "original_soundtrack",
    "integration",
    "mixing"
  ];

  const brandingTabs = ["sonic_logo", "podcast", "post-production_for_ads"];

  $: isAnyServiceClicked = !!$servicesModalActive;

  $: musicTab = [
    {
      title: "MIXING",
      function: () => handleMusicTabClick("mixing"),
      variable: $musicActiveTab === "mixing"
    },
    {
      title: "MASTERING",
      function: () => handleMusicTabClick("mastering"),
      variable: $musicActiveTab === "mastering"
    },
    {
      title: "RECORDING",
      function: () => handleMusicTabClick("recording"),
      variable: $musicActiveTab === "recording"
    },
    {
      title: "EDITING | RESTORATION",
      function: () => handleMusicTabClick("editing_restoration"),
      variable: $musicActiveTab === "editing_restoration"
    },
    {
      title: "PRODUCTION",
      function: () => handleMusicTabClick("production"),
      variable: $musicActiveTab === "production"
    }
  ];

  $: filmTab = [
    {
      title: "RE-RECORDING MIXING",
      function: () => handleFilmTabClick("re-recording_mixing"),
      variable: $filmActiveTab === "re-recording_mixing"
    },
    {
      title: "EDITING | RESTORATION",
      function: () => handleFilmTabClick("editing_restoration"),
      variable: $filmActiveTab === "editing_restoration"
    },
    {
      title: "SOUND DESIGN",
      function: () => handleFilmTabClick("sound_design"),
      variable: $filmActiveTab === "sound_design"
    },
    {
      title: "ORIGINAL SOUNDTRACK",
      function: () => handleFilmTabClick("original_soundtrack"),
      variable: $filmActiveTab === "original_soundtrack"
    }
  ];

  $: gameTab = [
    {
      title: "SOUND DESIGN",
      function: () => handleGameTabClick("sound_design"),
      variable: $gameActiveTab === "sound_design"
    },
    {
      title: "ORIGINAL SOUNDTRACK",
      function: () => handleGameTabClick("original_soundtrack"),
      variable: $gameActiveTab === "original_soundtrack"
    },
    {
      title: "INTEGRATION",
      function: () => handleGameTabClick("integration"),
      variable: $gameActiveTab === "integration"
    },
    {
      title: "MIXING",
      function: () => handleGameTabClick("mixing"),
      variable: $gameActiveTab === "mixing"
    }
  ];

  $: brandingTab = [
    {
      title: "SONIC LOGO",
      function: () => handleBrandingTabClick("sonic_logo"),
      variable: $brandingActiveTab === "sonic_logo"
    },
    {
      title: "PODCAST",
      function: () => handleBrandingTabClick("podcast"),
      variable: $brandingActiveTab === "podcast"
    },
    {
      title: "POST-PRODUCTION FOR ADS",
      function: () => handleBrandingTabClick("post-production_for_ads"),
      variable: $brandingActiveTab === "post-production_for_ads"
    }
  ];
</script>

<style>
  a {
    color: var(--dark);
    display: inline-block;
    transition: background-color 300ms ease-in-out, color 300ms ease-in-out;
  }

  :global(.user-is-tabbing) a:focus {
    color: var(--light);
    background-color: var(--secondary-color);
  }

  @media (--not-touchscreen) {
    a:hover {
      color: var(--secondary-color);
    }
  }

  .content-wrapper {
    margin-top: 4.5rem;
    background-color: var(--main-color);
  }

  .modal-wrapper {
    position: fixed;
    top: 0;
    left: 100vw;
    background-color: var(--main-color);
    height: 100vh;
    overflow-y: auto;
    z-index: 2;
    backface-visibility: hidden;
    transition: left 300ms ease-in-out;
    backface-visibility: hidden;
  }

  .modal-is-visible {
    left: 0;
  }

  @media (--max-content-width) {
    main {
      display: flex;
    }
  }

  .tab-content {
    padding: 1.5rem 1.5rem 2.5rem 1.5rem;
    min-height: calc(100vh - 14.5rem);
    width: 100%;
    transition: height 300ms ease-in-out;
  }

  @media (--max-content-width) {
    .tab-content {
      padding: 3rem 3rem 5rem 3rem;
    }
  }

  h2 {
    display: none;
  }

  p + p,
  p + h2 {
    margin-top: 1.5rem;
  }

  .body-bold + .body-regular {
    margin-top: 0.5rem;
  }

  .body-regular + .body-small {
    margin-top: 0;
  }

  .body-small + .body-regular {
    margin-top: 0.5rem;
  }

  .body-regular + .reach-out,
  .body-small + .reach-out {
    margin-top: 1.5rem;
  }

  @media (--max-content-width) {
    h2 {
      display: block;
    }

    p + p,
    p + h2 {
      margin-top: 3rem;
    }

    .body-regular + .reach-out,
    .body-small + .reach-out {
      margin-top: 3rem;
    }

    .body-regular,
    .body-bold {
      font-size: 1.875rem;
    }
  }

  ul li {
    margin-bottom: 2.5rem;
  }

  ul li:last-child {
    margin-bottom: 0;
  }

  li + li {
    border-top: 0.125rem solid var(--dark);
    padding-top: 2.5rem;
  }

  @media (--max-content-width) {
    ul li {
      margin-bottom: 3.5rem;
    }

    li + li {
      padding-top: 3.5rem;
    }
  }
</style>

<div
  class="content-wrapper"
  style="transform: translateY({$scrollYPosition * -1}px)">
  <Header variant="services" />
  <ServicesNav />
  <Footer />
</div>

<div
  in:fade={{ delay: $animationInDelay, duration: $animationInDuration, easing: $animationInEasing }}
  out:fade={{ duration: $animationOutDuration, easing: $animationOutEasing }}
  class="modal-wrapper"
  class:modal-is-visible={isAnyServiceClicked}>

  {#if $servicesModalActive === 'music'}
    <ModalNav on:click={() => resetServicesModalActive()} title="Services" />
    <Header variant="music" delay={$animationInDelay} />
    <main>
      <Tab variant="services" tab={musicTab} delay={$animationInDelay} />
      <div class="tab-content">
        {#if $musicActiveTab === 'mixing'}
          <div
            in:fade={{ delay: $animationInDelay, duration: $animationInDuration, easing: $animationInEasing }}
            out:fade={{ duration: $animationOutDuration, easing: $animationOutEasing }}>
            <ul>
              <li>
                <h2 class="body-bold">Mixing</h2>

                <p class="body-regular">
                  Using our analog/digital hybrid setup, we have the tools and
                  ears to achieve the sound that you deserve.
                </p>

                <p class="body-regular">
                  You can either
                  <a
                    target="_blank"
                    href="https://www.dropbox.com/request/ttUKNPYx0K9DedUX5ONk"
                    aria-label="Nadoki's dropbox file delivery folder">
                    send us
                  </a>
                  your tracks or bring the files to an attended session with us.
                  If you have any mix references, feel free to also send them.
                </p>
              </li>

              <li>
                <p class="body-bold">Delivery Requirements</p>
                <p class="body-regular">
                  In order to deliver the best product possible, send us your
                  labeled multitrack files separated and in the highest quality
                  possible according to your session, preferably 44.1kHz or 88.2
                  kHz sample rate and 24 or 32 bit depth.
                </p>

                <p class="body-regular">
                  Please make sure to send us the correct version of the tracks.
                  Tracks that are being handed in later, will be charged
                  accordingly.
                </p>
              </li>

              <li>
                <p class="body-bold">Pricing</p>
                <p class="body-regular">
                  — Starting at &rArr; 250 EUR per track
                </p>
                <p class="body-small">
                  Includes three stereo exports: wav 24-bit, wav 16-bit, and
                  FLAC. Up to two revisions included as well.
                </p>
                <p class="body-regular">— Multitrack export &rArr; +35 EUR</p>
                <p class="body-small">
                  We can export in whatever way is more useful to you.
                </p>
                <p class="body-regular">— Tape finalization &rArr; +35 EUR</p>
                <p class="body-small">
                  We will process the final mix with tape machine.
                </p>
                <p class="body-regular">
                  — Editing/Restoration &rArr; +35 EUR per hour
                </p>
                <p class="body-small">
                  If your recording is noisy or/and you have pitch/timing
                  issues, we can fix it.
                </p>
                <p class="body-regular">
                  — Other format exports &rArr; +10 EUR per export
                </p>
                <p class="body-regular reach-out">
                  <a target="_blank" href="mailto:info@nadoki.com">Reach out</a>
                  for a more precise quote.
                </p>
              </li>
            </ul>
          </div>
        {:else if $musicActiveTab === 'mastering'}
          <div
            in:fade={{ delay: $animationInDelay, duration: $animationInDuration, easing: $animationInEasing }}
            out:fade={{ duration: $animationOutDuration, easing: $animationOutEasing }}>
            <ul>
              <li>
                <h2 class="body-bold">Mastering</h2>

                <p class="body-regular">
                  With our hybrid setup, we can make your song streaming-ready,
                  as well as vinyl-cut ready!
                </p>

                <p class="body-regular">
                  You can either
                  <a
                    target="_blank"
                    href="https://www.dropbox.com/request/ttUKNPYx0K9DedUX5ONk"
                    aria-label="Nadoki's dropbox file delivery folder">
                    send us
                  </a>
                  your tracks or bring the files to an attended session with us.
                  If you have any mastering references, feel free to also send
                  them.
                </p>
              </li>

              <li>
                <p class="body-bold">Delivery Requirements</p>
                <p class="body-regular">
                  In order to deliver the best product possible, send us your
                  mixdown in the highest quality possible according to your
                  session, preferably 44.1kHz or 88.2 kHz sample rate and 32 bit
                  depth (or 24bit if you’re using Logic).
                </p>

                <p class="body-regular">
                  Please make sure to send us the correct version of the
                  mixdown. Tracks that are being handed in later, will be
                  charged accordingly.
                </p>

                <p class="body-regular">
                  If a DDP export is desired, please make sure to include the
                  Catalogue number, track listing, the ISRC code (optional) and
                  CD Text (optional).
                </p>
              </li>

              <li>
                <p class="body-bold">Pricing</p>
                <p class="body-regular">
                  — Starting at &rArr; 60 EUR per track
                </p>
                <p class="body-small">
                  Includes three stereo exports: wav 24-bit, wav 16-bit, and
                  FLAC. Up to two revisions included as well.
                </p>
                <p class="body-regular">— Stem mastering &rArr; +70 EUR</p>
                <p class="body-small">
                  This gives us more options since we can process each
                  individual stem differently.
                </p>
                <p class="body-regular">— Tape finalization &rArr; +35 EUR</p>
                <p class="body-small">
                  We will process the final mix with tape machine.
                </p>
                <p class="body-regular">— DDP Export &rArr; +50 EUR</p>
                <p class="body-small">
                  We will need the Catalogue number, track listing, the ISRC
                  code (optional) and CD Text (optional).
                </p>
                <p class="body-regular">— Mastered for iTunes &rArr; +10 EUR</p>
                <p class="body-regular reach-out">
                  <a target="_blank" href="mailto:info@nadoki.com">Reach out</a>
                  for a more precise quote.
                </p>
              </li>
            </ul>
          </div>
        {:else if $musicActiveTab === 'recording'}
          <div
            in:fade={{ delay: $animationInDelay, duration: $animationInDuration, easing: $animationInEasing }}
            out:fade={{ duration: $animationOutDuration, easing: $animationOutEasing }}>
            <ul>
              <li>
                <h2 class="body-bold">Recording</h2>

                <p class="body-regular">
                  We have two very different recording spaces that you can
                  choose from:
                  <br />
                  — Studio 10: our tracking booth for vocals and overdubs
                  recordings. It is the perfect space for small-scaled projects.
                  <br />
                  — The Lab: a flexible live tracking room that is perfect for a
                  full band, orchestra, or choir recording.
                  <br />
                  <a
                    on:click={() => document.body.classList.remove('body-is-not-visible')}
                    href="/studio"
                    aria-label="Studio page">
                    Learn more
                  </a>
                  about these rooms.
                </p>

                <p class="body-regular">
                  A selection of industry-standard microphones from brands like
                  Neumann, Shure, and AKG are available to use. And if desired,
                  other microphones are available upon request.
                  <a
                    on:click={() => document.body.classList.remove('body-is-not-visible')}
                    href="/equipment"
                    aria-label="Equipment page">
                    Check our gear.
                  </a>
                </p>
              </li>

              <li>
                <p class="body-bold">Pricing</p>
                <p class="body-regular">— Starting at &rArr; 200 EUR</p>
                <p class="body-small">
                  Includes our control room, where a vocalist or single
                  instrument can be recorded, along with engineer and equipment.
                </p>
                <p class="body-regular">— Studio 10 &rArr; +100 EUR</p>
                <p class="body-small">
                  Grants access to the Studio 10, perfect for overdub
                  recordings.
                </p>
                <p class="body-regular">— The Lab &rArr; +200 EUR</p>
                <p class="body-small">
                  Grants access to The Lab, perfect for bigger projects like
                  recording a full live band.
                </p>
                <p class="body-regular reach-out">
                  <a target="_blank" href="mailto:info@nadoki.com">Reach out</a>
                  for a more precise quote.
                </p>
              </li>
            </ul>
          </div>
        {:else if $musicActiveTab === 'editing_restoration'}
          <div
            in:fade={{ delay: $animationInDelay, duration: $animationInDuration, easing: $animationInEasing }}
            out:fade={{ duration: $animationOutDuration, easing: $animationOutEasing }}>
            <ul>
              <li>
                <h2 class="body-bold">Editing</h2>

                <p class="body-regular">
                  We offer music editing services, including timing or pitching,
                  for monophonic or polyphonic instruments.
                </p>

                <h2 class="body-bold">Restoration</h2>

                <p class="body-regular">
                  Using every tool at our disposal, we can clean, fix and
                  restore your audio recordings. Some of the most common issues
                  we take care of are pops, clicks, hum, hiss, crackle, among
                  other noises and artifacts, as well as the removal of clipping
                  of an audio file.
                </p>
              </li>

              <li>
                <p class="body-bold">Delivery Requirements</p>
                <p class="body-regular">
                  In order to deliver the best product possible, send us your
                  audio files in the highest quality possible according to your
                  session, preferably 44.1kHz or 88.2 kHz sample rate and 32 bit
                  depth (or 24bit if you’re using Logic).
                </p>

                <p class="body-regular">
                  If applicable, please attach your OMF and make sure to include
                  all audio files to the export.
                </p>
              </li>

              <li>
                <p class="body-bold">Pricing</p>
                <p class="body-regular">
                  Hourly based. You can
                  <a
                    target="_blank"
                    href="https://www.dropbox.com/request/ttUKNPYx0K9DedUX5ONk"
                    aria-label="Nadoki's dropbox file delivery folder">
                    send us
                  </a>
                  the audio files to get a price estimate. Please make sure your
                  files are according to our requirements.
                </p>
              </li>
            </ul>
          </div>
        {:else if $musicActiveTab === 'production'}
          <div
            in:fade={{ delay: $animationInDelay, duration: $animationInDuration, easing: $animationInEasing }}
            out:fade={{ duration: $animationOutDuration, easing: $animationOutEasing }}>
            <ul>
              <li>
                <h2 class="body-bold">Production</h2>

                <p class="body-regular">
                  We offer music production services in the genres of
                  hip-hop/trap, pop, and electronic music.
                </p>

                <p class="body-regular">
                  Using the endless possibilities of an in-the-box approach,
                  together with live instruments available in our setup and
                  studio musicians, anything is possible. We are open to
                  collaborations as well.
                </p>
              </li>

              <li>
                <p class="body-bold">Pricing</p>
                <p class="body-regular">
                  Project based.
                  <a target="_blank" href="mailto:info@nadoki.com">
                    Get in touch.
                  </a>
                </p>
              </li>
            </ul>
          </div>
        {/if}
      </div>
    </main>
  {:else if $servicesModalActive === 'film'}
    <ModalNav on:click={() => resetServicesModalActive()} title="Services" />
    <Header variant="film" delay={$animationInDelay} />
    <main>
      <Tab variant="services" tab={filmTab} delay={$animationInDelay} />
      <div class="tab-content">
        {#if $filmActiveTab === 're-recording_mixing'}
          <div
            in:fade={{ delay: $animationInDelay, duration: $animationInDuration, easing: $animationInEasing }}
            out:fade={{ duration: $animationOutDuration, easing: $animationOutEasing }}>
            <ul>
              <li>
                <h2 class="body-bold">Re-recording Mixing</h2>

                <p class="body-regular">
                  We can mix the audio of your film production, meaning:
                  balancing all dialog, ADR, sound effects, music, atmospheres
                  and foleys so that it enhances the project’s storytelling
                  without distracting from it.
                </p>

                <p class="body-regular">
                  We offer both stereo and 5.1 surround mixing. If you're
                  interested in other formats
                  <a target="_blank" href="mailto:info@nadoki.com">
                    get in touch.
                  </a>
                </p>
              </li>

              <li>
                <p class="body-bold">Delivery Requirements</p>
                <p class="body-regular">
                  In order to deliver the best product possible, send us your
                  audio files in the highest quality possible according to your
                  session, preferably 48kHz or 96kHz sample rate and 24 or 32
                  bit depth. Please export them as an OMF.
                </p>
              </li>

              <li>
                <p class="body-bold">Pricing</p>
                <p class="body-regular">
                  Project based. You can
                  <a target="_blank" href="mailto:info@nadoki.com">send us</a>
                  a render of the video project together with the audio files to
                  get a price estimate. Please make sure they are according to
                  our requirements.
                </p>
              </li>
            </ul>
          </div>
        {:else if $filmActiveTab === 'editing_restoration'}
          <div
            in:fade={{ delay: $animationInDelay, duration: $animationInDuration, easing: $animationInEasing }}
            out:fade={{ duration: $animationOutDuration, easing: $animationOutEasing }}>
            <ul>
              <li>
                <h2 class="body-bold">Editing</h2>

                <p class="body-regular">
                  We offer dialogue, music and sound effects editing for your
                  production.
                </p>

                <h2 class="body-bold">Restoration</h2>

                <p class="body-regular">
                  We can also clean, fix and restore your audio recordings.
                  Anything from removing pops, clicks, hum, hiss, crackle, among
                  other noises, to restoring clipped samples from your audio
                  files.
                </p>
              </li>

              <li>
                <p class="body-bold">Delivery Requirements</p>
                <p class="body-regular">
                  In order to deliver the best product possible, send us your
                  audio files in the highest quality possible according to your
                  session, preferably 48kHz or 96kHz sample rate and 24 or 32
                  bit depth.
                </p>

                <p class="body-regular">
                  If applicable, please attach your OMF and make sure to include
                  all audio files to the export.
                </p>
              </li>

              <li>
                <p class="body-bold">Pricing</p>
                <p class="body-regular">
                  The pricing for this service is hourly based. You can
                  <a
                    target="_blank"
                    href="https://www.dropbox.com/request/ttUKNPYx0K9DedUX5ONk"
                    aria-label="Nadoki's dropbox file delivery folder">
                    send us
                  </a>
                  the audio files to get a price estimate. Please make sure they
                  are according to our requirements.
                </p>
              </li>
            </ul>
          </div>
        {:else if $filmActiveTab === 'sound_design'}
          <div
            in:fade={{ delay: $animationInDelay, duration: $animationInDuration, easing: $animationInEasing }}
            out:fade={{ duration: $animationOutDuration, easing: $animationOutEasing }}>
            <ul>
              <li>
                <h2 class="body-bold">Sound Design</h2>

                <p class="body-regular">
                  Sound has an important role in storytelling in a film
                  production - it allows the creation of atmospheres, emotion
                  and it sets the tone of a movie.
                </p>

                <p class="body-regular">
                  We can create the sound design of your film production to
                  enhance your story to its full potential. Using high-quality
                  industry standard samples and foley recording techniques, we
                  are able to deliver the sound your production needs.
                </p>
              </li>

              <li>
                <p class="body-bold">Pricing</p>
                <p class="body-regular">
                  <a target="_blank" href="mailto:info@nadoki.com">
                    Send us an email
                  </a>
                  with the scope of the project, including duration, references,
                  and description for a price estimate.
                </p>
              </li>
            </ul>
          </div>
        {:else if $filmActiveTab === 'original_soundtrack'}
          <div
            in:fade={{ delay: $animationInDelay, duration: $animationInDuration, easing: $animationInEasing }}
            out:fade={{ duration: $animationOutDuration, easing: $animationOutEasing }}>
            <ul>
              <li>
                <h2 class="body-bold">Original Soundtrack</h2>

                <p class="body-regular">
                  We can compose a tailored music score to accompany your film
                  production. Using our hybrid setup, in-the-box tools, as well
                  as, analog instruments to create the sound that fits your
                  movie.
                </p>
              </li>

              <li>
                <p class="body-bold">Pricing</p>
                <p class="body-regular">
                  <a target="_blank" href="mailto:info@nadoki.com">
                    Send us an email
                  </a>
                  with the scope of the project, including duration, references,
                  and description for a price estimate.
                </p>
              </li>
            </ul>
          </div>
        {/if}
      </div>
    </main>
  {:else if $servicesModalActive === 'game'}
    <ModalNav on:click={() => resetServicesModalActive()} title="Services" />
    <Header variant="game" delay={$animationInDelay} />
    <main>
      <Tab variant="services" tab={gameTab} delay={$animationInDelay} />
      <div class="tab-content">
        {#if $gameActiveTab === 'sound_design'}
          <div
            in:fade={{ delay: $animationInDelay, duration: $animationInDuration, easing: $animationInEasing }}
            out:fade={{ duration: $animationOutDuration, easing: $animationOutEasing }}>
            <ul>
              <li>
                <h2 class="body-bold">Sound Design</h2>

                <p class="body-regular">
                  The multiplicity and variety of possibilities in sound
                  composition in a game not only allow the creation of
                  atmospheres and emotions, but also sets the tone of it.
                </p>

                <p class="body-regular">
                  We can create the sound design of your game to enhance your
                  story to its full potential. Using high-quality
                  industry-standard samples and foley recording techniques, we
                  can create the sound your project needs.
                </p>
              </li>

              <li>
                <p class="body-bold">Pricing</p>
                <p class="body-regular">
                  <a target="_blank" href="mailto:info@nadoki.com">
                    Send us an email
                  </a>
                  with the scope of the project, including an approximation of
                  how many sound effects you need, references, and description
                  for a price estimate.
                </p>
              </li>
            </ul>
          </div>
        {:else if $gameActiveTab === 'original_soundtrack'}
          <div
            in:fade={{ delay: $animationInDelay, duration: $animationInDuration, easing: $animationInEasing }}
            out:fade={{ duration: $animationOutDuration, easing: $animationOutEasing }}>
            <ul>
              <li>
                <h2 class="body-bold">Original Soundtrack</h2>

                <p class="body-regular">
                  We can compose tailored music to enrich your game. With the
                  unlimited possibilities of the in-the-box approach, together
                  with analog instruments, we can translate your game’s message
                  into music.
                </p>
              </li>

              <li>
                <p class="body-bold">Pricing</p>
                <p class="body-regular">
                  <a target="_blank" href="mailto:info@nadoki.com">
                    Send us an email
                  </a>
                  with the scope of the project, including how many songs do you
                  plan to have, references, and description for a price
                  estimate.
                </p>
              </li>
            </ul>
          </div>
        {:else if $gameActiveTab === 'integration'}
          <div
            in:fade={{ delay: $animationInDelay, duration: $animationInDuration, easing: $animationInEasing }}
            out:fade={{ duration: $animationOutDuration, easing: $animationOutEasing }}>
            <ul>
              <li>
                <h2 class="body-bold">Integration</h2>

                <p class="body-regular">
                  The accuracy of sound integration to the environment of a game
                  has an important role in the immersion of the player. For the
                  finest interaction, precision in each moment of gameplay is
                  crucial and making sure that all audio assets (music,
                  ambience, dialogue, and sound effects) load smoothly, trigger
                  correctly, and playback in the highest quality at minimal
                  processing power is key.
                </p>

                <p class="body-regular">
                  We use FMOD together with either Unreal Engine or Unity to
                  integrate both music and sound effects into game projects. In
                  case you have a proprietary engine
                  <a target="_blank" href="mailto:info@nadoki.com">
                    get in touch.
                  </a>
                </p>
              </li>

              <li>
                <p class="body-bold">Pricing</p>
                <p class="body-regular">
                  <a target="_blank" href="mailto:info@nadoki.com">
                    Send us an email
                  </a>
                  with the scope of the project, including an approximation of
                  how many audio files you have to be implemented, references,
                  and description for a price estimate.
                </p>
              </li>
            </ul>
          </div>
        {:else if $gameActiveTab === 'mixing'}
          <div
            in:fade={{ delay: $animationInDelay, duration: $animationInDuration, easing: $animationInEasing }}
            out:fade={{ duration: $animationOutDuration, easing: $animationOutEasing }}>
            <ul>
              <li>
                <h2 class="body-bold">Mixing</h2>

                <p class="body-regular">
                  Nadoki offers mixing services for the sound of your game
                  balancing all dialog, ADR, sound effects, music, atmospheres
                  and foleys for the best immersion of the player.
                </p>

                <p class="body-regular">
                  We offer both stereo and 5.1 surround mixing. For other
                  formats, please
                  <a target="_blank" href="mailto:info@nadoki.com">
                    get in touch.
                  </a>
                </p>
              </li>

              <li>
                <p class="body-bold">Pricing</p>
                <p class="body-regular">
                  <a target="_blank" href="mailto:info@nadoki.com">
                    Send us an email
                  </a>
                  with the scope of the project, including an approximation of
                  how many different sounds (be it music or sound effects) there
                  are in the game, references, and description for a price
                  estimate.
                </p>
              </li>
            </ul>
          </div>
        {/if}
      </div>
    </main>
  {:else if $servicesModalActive === 'branding'}
    <ModalNav on:click={() => resetServicesModalActive()} title="Services" />
    <Header variant="branding" delay={$animationInDelay} />
    <main>
      <Tab variant="services" tab={brandingTab} delay={$animationInDelay} />
      <div class="tab-content">
        {#if $brandingActiveTab === 'sonic_logo'}
          <div
            in:fade={{ delay: $animationInDelay, duration: $animationInDuration, easing: $animationInEasing }}
            out:fade={{ duration: $animationOutDuration, easing: $animationOutEasing }}>
            <ul>
              <li>
                <h2 class="body-bold">Sonic Logo</h2>

                <p class="body-regular">
                  There’s more to branding than what meets the eye. While strong
                  visuals are key, it’s also important to communicate your story
                  and create a sonic identity for your brand.
                </p>

                <p class="body-regular">
                  After a talk to understand the story and personality of your
                  brand, we will find your voice, and create a sonic logo
                  customized for your company, to best translate your energy,
                  message, and experience to your clients.
                </p>
              </li>

              <li>
                <p class="body-bold">Pricing</p>
                <p class="body-regular">
                  <a target="_blank" href="mailto:info@nadoki.com">
                    Send us an email
                  </a>
                  for us to discuss possibilities and eventually come up to a
                  price estimate.
                </p>
              </li>
            </ul>
          </div>
        {:else if $brandingActiveTab === 'podcast'}
          <div
            in:fade={{ delay: $animationInDelay, duration: $animationInDuration, easing: $animationInEasing }}
            out:fade={{ duration: $animationOutDuration, easing: $animationOutEasing }}>
            <ul>
              <li>
                <h2 class="body-bold">Podcast</h2>

                <p class="body-regular">
                  The fastest-growing media content for brands is used nowadays
                  by several businesses to best connect with their customers at
                  a personal level. Podcasts can be a key tool in the digital
                  marketing strategy of your company to keep your clients
                  connected to your brand and increase the reach and your
                  participation with your community.
                </p>

                <p class="body-regular">
                  We offer podcast directing, recording, editing and
                  finalization for your business.
                </p>
              </li>

              <li>
                <p class="body-bold">Pricing</p>
                <p class="body-regular">
                  <a target="_blank" href="mailto:info@nadoki.com">
                    Send us an email
                  </a>
                  with the scope of the project, including duration, references,
                  and description for a price estimate.
                </p>
              </li>
            </ul>
          </div>
        {:else if $brandingActiveTab === 'post-production_for_ads'}
          <div
            in:fade={{ delay: $animationInDelay, duration: $animationInDuration, easing: $animationInEasing }}
            out:fade={{ duration: $animationOutDuration, easing: $animationOutEasing }}>
            <ul>
              <li>
                <h2 class="body-bold">Post-Production for Ads</h2>

                <p class="body-regular">
                  Advertisements are around us every day. From radio spots to TV
                  spots and now online streaming spots, it’s the most common
                  advertising media.
                </p>

                <p class="body-regular">
                  We offer audio post-production for your advertisements. Our
                  services include ADR recording, editing, restoration, sound
                  designing, mixing, and finalizing. We can make your ad ready
                  to be heard anywhere.
                </p>
              </li>

              <li>
                <p class="body-bold">Pricing</p>
                <p class="body-regular">
                  <a target="_blank" href="mailto:info@nadoki.com">
                    Send us an email
                  </a>
                  with the scope of the project, including duration, references,
                  and description for a price estimate.
                </p>
              </li>
            </ul>
          </div>
        {/if}
      </div>
    </main>
  {/if}

  <Footer delay={$animationInDelay} />
</div>
