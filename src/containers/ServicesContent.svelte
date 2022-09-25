<script>
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition'
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
    threeDAudioActiveTab,
    setActiveThreeDAudioTab,
    handleThreeDAudioTabClick,
    brandingActiveTab,
    setActiveBrandingTab,
    handleBrandingTabClick,
  } from '../utensils/stores.js'
  import Header from '../components/Header.svelte'
  import ServicesNav from '../containers/ServicesNav.svelte'
  import Tab from '../components/Tab.svelte'
  import ModalNav from '../components/ModalNav.svelte'
  import Footer from '../components/Footer.svelte'

  onMount(() => {
    const url = new URL(document.location)
    const nameParam = url.searchParams.get('name')
    const typeParam = url.searchParams.get('type')

    if (servicesPages.includes(nameParam)) {
      if (nameParam === 'music' && musicTabs.includes(typeParam)) {
        setActiveMusicTab(typeParam)
        handleServicesModalClick(nameParam, typeParam)
      } else if (nameParam === 'film' && filmTabs.includes(typeParam)) {
        setActiveFilmTab(typeParam)
        handleServicesModalClick(nameParam, typeParam)
      } else if (
        nameParam === '3d-audio' &&
        threeDAudioTabs.includes(typeParam)
      ) {
        setActiveThreeDAudioTab(typeParam)
        handleServicesModalClick(nameParam, typeParam)
      } else if (nameParam === 'branding' && brandingTabs.includes(typeParam)) {
        setActiveBrandingTab(typeParam)
        handleServicesModalClick(nameParam, typeParam)
      }
    }

    window.addEventListener('popstate', function () {
      const url = new URL(document.location)
      const nameParam = url.searchParams.get('name')
      const typeParam = url.searchParams.get('type')

      if (servicesPages.includes(nameParam)) {
        if (nameParam === 'music' && musicTabs.includes(typeParam)) {
          setServicesModalActive('music')
          setActiveMusicTab(typeParam)
        } else if (nameParam === 'film' && filmTabs.includes(typeParam)) {
          setServicesModalActive('film')
          setActiveFilmTab(typeParam)
        } else if (
          nameParam === '3d-audio' &&
          threeDAudioTabs.includes(typeParam)
        ) {
          setServicesModalActive('3d-audio')
          setActiveThreeDAudioTab(typeParam)
        } else if (
          nameParam === 'branding' &&
          brandingTabs.includes(typeParam)
        ) {
          setServicesModalActive('branding')
          setActiveBrandingTab(typeParam)
        }
      } else {
        setServicesModalActive('')
      }
      return
    })
  })

  // Declaration of pages and their tabs
  const servicesPages = ['music', 'film', '3d-audio', 'branding']

  const musicTabs = [
    'mixing',
    'mastering',
    'recording',
    'editing_restoration',
    'production',
    'consultation',
  ]

  const filmTabs = [
    're-recording_mixing',
    'editing_restoration',
    'sound_design',
    'original_soundtrack',
  ]

  const threeDAudioTabs = [
    'immersive_sound_design',
    '3d_recording',
    'post-production',
    'consultation',
  ]

  const brandingTabs = ['sonic_logo', 'podcast', 'post-production_for_ads']

  $: isAnyServiceClicked = !!$servicesModalActive

  $: musicTab = [
    {
      title: 'MIXING',
      function: () => handleMusicTabClick('mixing'),
      variable: $musicActiveTab === 'mixing',
      path: '/services?name=music&type=mixing',
    },
    {
      title: 'MASTERING',
      function: () => handleMusicTabClick('mastering'),
      variable: $musicActiveTab === 'mastering',
      path: '/services?name=music&type=mastering',
    },
    {
      title: 'RECORDING',
      function: () => handleMusicTabClick('recording'),
      variable: $musicActiveTab === 'recording',
      path: '/services?name=music&type=recording',
    },
    {
      title: 'EDITING | RESTORATION',
      function: () => handleMusicTabClick('editing_restoration'),
      variable: $musicActiveTab === 'editing_restoration',
      path: '/services?name=music&type=editing_restoration',
    },
    {
      title: 'PRODUCTION',
      function: () => handleMusicTabClick('production'),
      variable: $musicActiveTab === 'production',
      path: '/services?name=music&type=production',
    },
    {
      title: 'CONSULTATION',
      function: () => handleMusicTabClick('consultation'),
      variable: $musicActiveTab === 'consultation',
      path: '/services?name=music&type=consultation',
    },
  ]

  $: filmTab = [
    {
      title: 'RE-RECORDING MIXING',
      function: () => handleFilmTabClick('re-recording_mixing'),
      variable: $filmActiveTab === 're-recording_mixing',
      path: '/services?name=film&type=re-recording_mixing',
    },
    {
      title: 'EDITING | RESTORATION',
      function: () => handleFilmTabClick('editing_restoration'),
      variable: $filmActiveTab === 'editing_restoration',
      path: '/services?name=film&type=editing_restoration',
    },
    {
      title: 'SOUND DESIGN',
      function: () => handleFilmTabClick('sound_design'),
      variable: $filmActiveTab === 'sound_design',
      path: '/services?name=film&type=sound_design',
    },
    {
      title: 'ORIGINAL SOUNDTRACK',
      function: () => handleFilmTabClick('original_soundtrack'),
      variable: $filmActiveTab === 'original_soundtrack',
      path: '/services?name=film&type=original_soundtrack',
    },
  ]

  $: threeDAudioTab = [
    {
      title: 'IMMERSIVE SOUND DESIGN',
      function: () => handleThreeDAudioTabClick('immersive_sound_design'),
      variable: $threeDAudioActiveTab === 'immersive_sound_design',
      path: '/services?name=3d_audio&type=immersive_sound_design',
    },
    {
      title: '3D RECORDING',
      function: () => handleThreeDAudioTabClick('3d_recording'),
      variable: $threeDAudioActiveTab === '3d_recording',
      path: '/services?name=3d_audio&type=3d_recording',
    },
    {
      title: 'POST PRODUCTION',
      function: () => handleThreeDAudioTabClick('post_production'),
      variable: $threeDAudioActiveTab === 'post_production',
      path: '/services?name=3d_audio&type=post_production',
    },
    {
      title: 'CONSULTATION',
      function: () => handleThreeDAudioTabClick('consultation'),
      variable: $threeDAudioActiveTab === 'consultation',
      path: '/services?name=3d_audio&type=consultation',
    },
  ]

  $: brandingTab = [
    {
      title: 'SONIC LOGO',
      function: () => handleBrandingTabClick('sonic_logo'),
      variable: $brandingActiveTab === 'sonic_logo',
      path: '/services?name=branding&type=sonic_logo',
    },
    {
      title: 'PODCAST',
      function: () => handleBrandingTabClick('podcast'),
      variable: $brandingActiveTab === 'podcast',
      path: '/services?name=branding&type=podcast',
    },
    {
      title: 'POST-PRODUCTION FOR ADS',
      function: () => handleBrandingTabClick('post-production_for_ads'),
      variable: $brandingActiveTab === 'post-production_for_ads',
      path: '/services?name=branding&type=post-production_for_ads',
    },
  ]

  function handleBackClick(event, callback) {
    event.preventDefault()
    callback
  }
</script>

<div
  class="content-wrapper"
  style="transform: translateY({$scrollYPosition * -1}px)"
>
  <Header variant="services" />
  <ServicesNav />
  <Footer />
</div>

<div
  in:fade={{
    delay: $animationInDelay,
    duration: $animationInDuration,
    easing: $animationInEasing,
  }}
  out:fade={{ duration: $animationOutDuration, easing: $animationOutEasing }}
  class="modal-wrapper"
  id="services-modal"
  class:modal-is-visible={isAnyServiceClicked}
>
  {#if $servicesModalActive === 'music'}
    <ModalNav
      on:click={(event) => handleBackClick(event, resetServicesModalActive())}
      path="/services"
      label="Back to services"
      title="Services"
    />
    <Header variant="music" delay={$animationInDelay} />
    <main>
      <Tab variant="services" tab={musicTab} delay={$animationInDelay} />
      <div class="tab-content">
        {#if $musicActiveTab === 'mixing'}
          <div
            in:fade={{
              delay: $animationInDelay,
              duration: $animationInDuration,
              easing: $animationInEasing,
            }}
            out:fade={{
              duration: $animationOutDuration,
              easing: $animationOutEasing,
            }}
          >
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
                    rel="noopener"
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
                  labeled multitrack, separated track by track. Be sure to send
                  them in the highest quality possible according to your
                  session, preferably 44.1kHz or 88.2 kHz sample rate and 24 or
                  32 bit depth.
                </p>

                <p class="body-regular">
                  Please make sure to send us the correct version of the tracks.
                  Tracks that are handed in later will be charged according to
                  the pricelist.
                </p>
              </li>

              <li>
                <p class="body-bold">Pricing</p>
                <p class="body-regular reach-out">
                  <a
                    target="_blank"
                    rel="noopener"
                    href="mailto:info@nadoki.com"> Reach out </a>
                  for a quote.
                </p>
              </li>
            </ul>
          </div>
        {:else if $musicActiveTab === 'mastering'}
          <div
            in:fade={{
              delay: $animationInDelay,
              duration: $animationInDuration,
              easing: $animationInEasing,
            }}
            out:fade={{
              duration: $animationOutDuration,
              easing: $animationOutEasing,
            }}
          >
            <ul>
              <li>
                <h2 class="body-bold">Mastering</h2>

                <p class="body-regular">
                  With our hybrid setup, we make your song streaming-ready, as
                  well as vinyl-cut ready.
                </p>

                <p class="body-regular">
                  You can either
                  <a
                    target="_blank"
                    rel="noopener"
                    href="https://www.dropbox.com/request/ttUKNPYx0K9DedUX5ONk"
                    aria-label="Nadoki's dropbox file delivery folder">
                    send us
                  </a>
                  your tracks or bring the files to an attended session with us.
                  If you have any mastering references, feel free to also send them.
                </p>
              </li>

              <li>
                <p class="body-bold">Delivery Requirements</p>
                <p class="body-regular">
                  In order to deliver the best product possible, send us your
                  mixdown in the highest quality according to your session,
                  preferably 44.1kHz or 88.2 kHz sample rate and 32 bit depth
                  (or 24bit if you’re using Logic).
                </p>

                <p class="body-regular">
                  Please make sure to send us the correct version of the
                  mixdown. Tracks that are handed in later will be charged
                  accordingly.
                </p>

                <p class="body-regular">
                  If a DDP export is desired, please make sure to include the
                  catalogue number, track listing, the ISRC code (optional) and
                  CD Text (optional).
                </p>
              </li>

              <li>
                <p class="body-bold">Pricing</p>
                <p class="body-regular reach-out">
                  <a
                    target="_blank"
                    rel="noopener"
                    href="mailto:info@nadoki.com"> Reach out </a>
                  for a quote.
                </p>
              </li>
            </ul>
          </div>
        {:else if $musicActiveTab === 'recording'}
          <div
            in:fade={{
              delay: $animationInDelay,
              duration: $animationInDuration,
              easing: $animationInEasing,
            }}
            out:fade={{
              duration: $animationOutDuration,
              easing: $animationOutEasing,
            }}
          >
            <ul>
              <li>
                <h2 class="body-bold">Recording</h2>

                <p class="body-regular">
                  We have two different recording spaces that you can choose
                  from:
                  <br />
                  — Studio 10: our tracking booth for vocals and overdub recordings.
                  It is the perfect space for small-scaled projects.
                  <br />
                  — The Lab: a flexible live tracking room that is perfect for a
                  full band, orchestra, or choir recording.
                  <br />
                  <a
                    on:click={() =>
                      document.body.classList.remove('body-is-not-visible')}
                    href="/studio"
                    aria-label="Studio"> Learn more </a>
                  about these rooms.
                </p>

                <p class="body-regular">
                  A selection of industry-standard microphones from brands like
                  Neumann, Shure, and AKG are available to use. If desired,
                  other microphones are available upon request.
                  <a
                    on:click={() =>
                      document.body.classList.remove('body-is-not-visible')}
                    href="/equipment"
                    aria-label="Equipment"> Check out our gear. </a>
                </p>
              </li>

              <li>
                <p class="body-bold">Pricing</p>
                <p class="body-regular reach-out">
                  <a
                    target="_blank"
                    rel="noopener"
                    href="mailto:info@nadoki.com"> Reach out </a>
                  for a quote.
                </p>
              </li>
            </ul>
          </div>
        {:else if $musicActiveTab === 'editing_restoration'}
          <div
            in:fade={{
              delay: $animationInDelay,
              duration: $animationInDuration,
              easing: $animationInEasing,
            }}
            out:fade={{
              duration: $animationOutDuration,
              easing: $animationOutEasing,
            }}
          >
            <ul>
              <li>
                <h2 class="body-bold">Editing</h2>

                <p class="body-regular">
                  We offer music editing services, including timing and
                  pitching, for monophonic or polyphonic instruments.
                </p>

                <h2 class="body-bold">Restoration</h2>

                <p class="body-regular">
                  Using every tool at our disposal, we clean, fix, and restore
                  your audio recordings. Common issues we solve: pops, clicks,
                  hum, hiss, crackle, among other noises and artifacts. We also
                  remove clippings from audio files.
                </p>
              </li>

              <li>
                <p class="body-bold">Delivery Requirements</p>
                <p class="body-regular">
                  In order to deliver the best product possible, send us your
                  mixdown in the highest quality according to your session,
                  preferably 44.1kHz or 88.2 kHz sample rate and 32 bit depth
                  (or 24bit if you’re using Logic).
                </p>
              </li>

              <li>
                <p class="body-bold">Pricing</p>
                <p class="body-regular">
                  You can
                  <a
                    target="_blank"
                    rel="noopener"
                    href="https://www.dropbox.com/request/ttUKNPYx0K9DedUX5ONk"
                    aria-label="Nadoki's dropbox file delivery folder">
                    send us
                  </a>
                  the audio files to get a price estimate. Please make sure your
                  files follow our requirements.
                </p>
              </li>
            </ul>
          </div>
        {:else if $musicActiveTab === 'production'}
          <div
            in:fade={{
              delay: $animationInDelay,
              duration: $animationInDuration,
              easing: $animationInEasing,
            }}
            out:fade={{
              duration: $animationOutDuration,
              easing: $animationOutEasing,
            }}
          >
            <ul>
              <li>
                <h2 class="body-bold">Production</h2>

                <p class="body-regular">
                  We offer music production services for the genres of
                  hip-hop/trap, pop, and electronic music.
                </p>

                <p class="body-regular">
                  Using the endless possibilities of an in-the-box approach,
                  alongside live instruments, synthesizers, and studio
                  musicians, anything is possible. We are open to collaborations
                  as well.
                </p>
              </li>

              <li>
                <p class="body-bold">Pricing</p>
                <p class="body-regular">
                  Project based.
                  <a
                    target="_blank"
                    rel="noopener"
                    href="mailto:info@nadoki.com"> Get in touch. </a>
                </p>
              </li>
            </ul>
          </div>
        {:else if $musicActiveTab === 'consultation'}
          <div
            in:fade={{
              delay: $animationInDelay,
              duration: $animationInDuration,
              easing: $animationInEasing,
            }}
            out:fade={{
              duration: $animationOutDuration,
              easing: $animationOutEasing,
            }}
          >
            <ul>
              <li>
                <h2 class="body-bold">Consultation</h2>

                <p class="body-regular">
                  If you're a bit lost and just need a push in the right
                  direction, we also offer feedback on your music project.
                </p>
              </li>

              <li>
                <p class="body-bold">Pricing</p>
                <p class="body-regular reach-out">
                  <a
                    target="_blank"
                    rel="noopener"
                    href="mailto:info@nadoki.com"> Reach out </a>
                  for a quote.
                </p>
              </li>
            </ul>
          </div>
        {/if}
      </div>
    </main>
  {:else if $servicesModalActive === 'film'}
    <ModalNav
      on:click={(event) => handleBackClick(event, resetServicesModalActive())}
      path="/services"
      label="Back to services"
      title="Services"
    />
    <Header variant="film" delay={$animationInDelay} />
    <main>
      <Tab variant="services" tab={filmTab} delay={$animationInDelay} />
      <div class="tab-content">
        {#if $filmActiveTab === 're-recording_mixing'}
          <div
            in:fade={{
              delay: $animationInDelay,
              duration: $animationInDuration,
              easing: $animationInEasing,
            }}
            out:fade={{
              duration: $animationOutDuration,
              easing: $animationOutEasing,
            }}
          >
            <ul>
              <li>
                <h2 class="body-bold">Re-recording Mixing</h2>

                <p class="body-regular">
                  We mix the audio of your film production to enhance your
                  project's storytelling without distracting from it. We balance
                  all dialog, ADR, sound effects, music, atmospheres, and
                  foleys.
                </p>

                <p class="body-regular">
                  We offer both stereo and 5.1 surround mixing.
                </p>
              </li>

              <li>
                <p class="body-bold">Delivery Requirements</p>
                <p class="body-regular">
                  In order to deliver the best product possible, send us your
                  audio files in the highest quality according to your session,
                  preferably 48kHz or 96kHz sample rate and 24 or 32 bit depth.
                  Please export them as an OMF.
                </p>
              </li>

              <li>
                <p class="body-bold">Pricing</p>
                <p class="body-regular">
                  Project based. You can
                  <a
                    target="_blank"
                    rel="noopener"
                    href="mailto:info@nadoki.com"> send us </a>
                  a render of the video project along with the audio files to get
                  a price estimate. Please make sure your files follow our requirements.
                </p>
              </li>
            </ul>
          </div>
        {:else if $filmActiveTab === 'editing_restoration'}
          <div
            in:fade={{
              delay: $animationInDelay,
              duration: $animationInDuration,
              easing: $animationInEasing,
            }}
            out:fade={{
              duration: $animationOutDuration,
              easing: $animationOutEasing,
            }}
          >
            <ul>
              <li>
                <h2 class="body-bold">Editing</h2>

                <p class="body-regular">
                  We offer dialogue, music and sound effects editing for your
                  production.
                </p>

                <h2 class="body-bold">Restoration</h2>

                <p class="body-regular">
                  Using every tool at our disposal, we clean, fix, and restore
                  your audio recordings. Common issues we solve: pops, clicks,
                  hum, hiss, crackle, among other noises and artifacts. We also
                  remove clippings from audio files.
                </p>
              </li>

              <li>
                <p class="body-bold">Delivery Requirements</p>
                <p class="body-regular">
                  In order to deliver the best product possible, send us your
                  audio files in the highest quality according to your session,
                  preferably 48kHz or 96kHz sample rate and 24 or 32 bit depth.
                </p>

                <p class="body-regular">
                  If applicable, please attach your OMF and make sure to include
                  all audio files to the export.
                </p>
              </li>

              <li>
                <p class="body-bold">Pricing</p>
                <p class="body-regular">
                  You can
                  <a
                    target="_blank"
                    rel="noopener"
                    href="https://www.dropbox.com/request/ttUKNPYx0K9DedUX5ONk"
                    aria-label="Nadoki's dropbox file delivery folder">
                    send us
                  </a>
                  the audio files to get a price estimate. Please make sure your
                  files follow our requirements.
                </p>
              </li>
            </ul>
          </div>
        {:else if $filmActiveTab === 'sound_design'}
          <div
            in:fade={{
              delay: $animationInDelay,
              duration: $animationInDuration,
              easing: $animationInEasing,
            }}
            out:fade={{
              duration: $animationOutDuration,
              easing: $animationOutEasing,
            }}
          >
            <ul>
              <li>
                <h2 class="body-bold">Sound Design</h2>
                <p class="body-regular">
                  We create the sound design of your film production to enhance
                  your story to its full potential. Using high-quality industry
                  standard samples and foley recording techniques, we are able
                  to deliver the sound your production needs.
                </p>
              </li>

              <li>
                <p class="body-bold">Pricing</p>
                <p class="body-regular">
                  <a
                    target="_blank"
                    rel="noopener"
                    href="mailto:info@nadoki.com"> Send us an email </a>
                  with the scope of the project. Please include duration, references,
                  and description for a price estimate.
                </p>
              </li>
            </ul>
          </div>
        {:else if $filmActiveTab === 'original_soundtrack'}
          <div
            in:fade={{
              delay: $animationInDelay,
              duration: $animationInDuration,
              easing: $animationInEasing,
            }}
            out:fade={{
              duration: $animationOutDuration,
              easing: $animationOutEasing,
            }}
          >
            <ul>
              <li>
                <h2 class="body-bold">Original Soundtrack</h2>

                <p class="body-regular">
                  We compose and produce a tailored music score to accompany
                  your film production. Using our hybrid setup, in-the-box
                  tools, live instruments, and synthesizers, we create music
                  that fits your movie.
                </p>
              </li>

              <li>
                <p class="body-bold">Pricing</p>
                <p class="body-regular">
                  <a
                    target="_blank"
                    rel="noopener"
                    href="mailto:info@nadoki.com"> Send us an email </a>
                  with the scope of the project, including duration, references,
                  and description for a price estimate.
                </p>
              </li>
            </ul>
          </div>
        {/if}
      </div>
    </main>
  {:else if $servicesModalActive === '3d-audio'}
    <ModalNav
      on:click={(event) => handleBackClick(event, resetServicesModalActive())}
      path="/services"
      label="Back to services"
      title="Services"
    />
    <Header variant="3d-audio" delay={$animationInDelay} />
    <main>
      <Tab variant="services" tab={threeDAudioTab} delay={$animationInDelay} />
      <div class="tab-content">
        {#if $threeDAudioActiveTab === 'immersive_sound_design'}
          <div
            in:fade={{
              delay: $animationInDelay,
              duration: $animationInDuration,
              easing: $animationInEasing,
            }}
            out:fade={{
              duration: $animationOutDuration,
              easing: $animationOutEasing,
            }}
          >
            <ul>
              <li>
                <h2 class="body-bold">Immersive Sound Design</h2>

                <p class="body-regular">
                  Extended Reality is the fastest-growing field in technology
                  and consumer experience. The possibility to immerse your
                  viewer not only visually, but also sonically in a new
                  environment allows a deeper engagement.
                </p>

                <p class="body-regular">
                  From Virtual Reality (VR), Augmented Reality (AR), Mixed
                  Reality (MR), to now the Metaverse, virtual interactions have
                  become the new norm. Consequently, the 3D audio possibilities
                  in Binaural audio and multi-output systems, are responsible
                  for sealing the immersion in this experience utilizing Dolby
                  Atmos, FB 360, DearVR, and others.
                </p>

                <p class="body-regular">
                  We create 3D audio for your extended reality projects,
                  audiobooks, music, short film, and audio plays to enhance the
                  immersion of your viewer in the environment you desire. From
                  sound design to recording, mixing and integration, we shape
                  the sound your project needs.
                </p>
              </li>

              <li>
                <p class="body-bold">Pricing</p>
                <p class="body-regular">
                  <a
                    target="_blank"
                    rel="noopener"
                    href="mailto:info@nadoki.com"> Send us an email </a>
                  with the scope of the project. Please include a description of
                  the project, an approximation of how many sound effects you need,
                  and references for a price estimate.
                </p>
              </li>
            </ul>
          </div>
        {:else if $threeDAudioActiveTab === '3d_recording'}
          <div
            in:fade={{
              delay: $animationInDelay,
              duration: $animationInDuration,
              easing: $animationInEasing,
            }}
            out:fade={{
              duration: $animationOutDuration,
              easing: $animationOutEasing,
            }}
          >
            <ul>
              <li>
                <h2 class="body-bold">3D Recording</h2>

                <p class="body-regular">
                  We record for your immersive projects such as audiobooks,
                  audio plays, music, short film, extended reality (VR, AR, and
                  MR), and others.
                </p>

                <p class="body-regular">
                  We have two different recording spaces that you can choose
                  from:
                  <br />
                  — Studio 10: our tracking booth for vocals and overdub recordings.
                  It is the perfect space for small-scaled projects.
                  <br />
                  — The Lab: a flexible live tracking room that is perfect for a
                  full band, orchestra, or choir recording.
                  <br />
                  <a
                    on:click={() =>
                      document.body.classList.remove('body-is-not-visible')}
                    href="/studio"
                    aria-label="Studio"> Learn more </a>
                  about these rooms. Remote recordings are also available.
                </p>

                <p class="body-regular">
                  A selection of industry-standard microphones from brands like
                  Neumann, Shure, and AKG are available to use. If desired,
                  other microphones are available upon request.
                  <a
                    on:click={() =>
                      document.body.classList.remove('body-is-not-visible')}
                    href="/equipment"
                    aria-label="Equipment"> Check out our gear. </a>
                </p>
              </li>

              <li>
                <p class="body-bold">Pricing</p>
                <p class="body-regular">
                  <a
                    target="_blank"
                    rel="noopener"
                    href="mailto:info@nadoki.com"> Send us an email </a>
                  with the scope of the project. Please include a description of
                  the project, an approximation of how many songs you plan to have,
                  and references for a price estimate.
                </p>
              </li>
            </ul>
          </div>
        {:else if $threeDAudioActiveTab === 'post_production'}
          <div
            in:fade={{
              delay: $animationInDelay,
              duration: $animationInDuration,
              easing: $animationInEasing,
            }}
            out:fade={{
              duration: $animationOutDuration,
              easing: $animationOutEasing,
            }}
          >
            <ul>
              <li>
                <h2 class="body-bold">Post-Production</h2>

                <p class="body-regular">
                  We offer post-production solutions such as mixing, mastering,
                  audio repair, and restoration utilizing the latest
                  industry-standard tools for your extended reality (VR, AR, and
                  MR), audiobooks, music, short film, and audio plays.
                </p>

                <p class="body-regular">
                  Combining creativity and technology, we can accurately
                  position your sounds, simulate any environment, and immerse
                  through the experience that will place the listener within
                  your story.
                </p>
              </li>

              <li>
                <p class="body-bold">Pricing</p>
                <p class="body-regular">
                  <a
                    target="_blank"
                    rel="noopener"
                    href="mailto:info@nadoki.com"> Send us an email </a>
                  with the scope of the project. Please include a description of
                  the project, an approximation of how many files need to be implemented,
                  and references for a price estimate.
                </p>
              </li>
            </ul>
          </div>
        {:else if $threeDAudioActiveTab === 'consultation'}
          <div
            in:fade={{
              delay: $animationInDelay,
              duration: $animationInDuration,
              easing: $animationInEasing,
            }}
            out:fade={{
              duration: $animationOutDuration,
              easing: $animationOutEasing,
            }}
          >
            <ul>
              <li>
                <h2 class="body-bold">Consultation</h2>

                <p class="body-regular">
                  If you're a bit lost and just need a push in the right
                  direction, we also offer feedback and consultation on your 3D
                  audio project.
                </p>
              </li>

              <li>
                <p class="body-bold">Pricing</p>
                <p class="body-regular">
                  <a
                    target="_blank"
                    rel="noopener"
                    href="mailto:info@nadoki.com"> Send us an email </a>
                  with the scope of the project. Please include a description of
                  the project, approximation of how many different sounds (be it
                  music or sound effects) there are in the game, and references for
                  a price estimate.
                </p>
              </li>
            </ul>
          </div>
        {/if}
      </div>
    </main>
  {:else if $servicesModalActive === 'branding'}
    <ModalNav
      on:click={(event) => handleBackClick(event, resetServicesModalActive())}
      path="/services"
      label="Back to services"
      title="Services"
    />
    <Header variant="branding" delay={$animationInDelay} />
    <main>
      <Tab variant="services" tab={brandingTab} delay={$animationInDelay} />
      <div class="tab-content">
        {#if $brandingActiveTab === 'sonic_logo'}
          <div
            in:fade={{
              delay: $animationInDelay,
              duration: $animationInDuration,
              easing: $animationInEasing,
            }}
            out:fade={{
              duration: $animationOutDuration,
              easing: $animationOutEasing,
            }}
          >
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
                  customized for your company to best translate your energy,
                  message, and experience to your clients.
                </p>
              </li>

              <li>
                <p class="body-bold">Pricing</p>
                <p class="body-regular">
                  <a
                    target="_blank"
                    rel="noopener"
                    href="mailto:info@nadoki.com"> Email us </a>
                  to talk about your project so we can get to a price estimate.
                </p>
              </li>
            </ul>
          </div>
        {:else if $brandingActiveTab === 'podcast'}
          <div
            in:fade={{
              delay: $animationInDelay,
              duration: $animationInDuration,
              easing: $animationInEasing,
            }}
            out:fade={{
              duration: $animationOutDuration,
              easing: $animationOutEasing,
            }}
          >
            <ul>
              <li>
                <h2 class="body-bold">Podcast</h2>

                <p class="body-regular">
                  Podcasts are the fastest-growing media content for brands
                  nowadays to best connect with their customers at a personal
                  level. They can be a key tool in your digital marketing
                  strategy to increase customer reach and participation with
                  your brand.
                </p>

                <p class="body-regular">
                  We offer podcast directing, recording, editing and
                  finalization for your business.
                </p>
              </li>

              <li>
                <p class="body-bold">Pricing</p>
                <p class="body-regular">
                  <a
                    target="_blank"
                    rel="noopener"
                    href="mailto:info@nadoki.com"> Email us </a>
                  to talk about your project so we can get to a price estimate.
                </p>
              </li>
            </ul>
          </div>
        {:else if $brandingActiveTab === 'post-production_for_ads'}
          <div
            in:fade={{
              delay: $animationInDelay,
              duration: $animationInDuration,
              easing: $animationInEasing,
            }}
            out:fade={{
              duration: $animationOutDuration,
              easing: $animationOutEasing,
            }}
          >
            <ul>
              <li>
                <h2 class="body-bold">Post-Production for Ads</h2>

                <p class="body-regular">
                  Advertisements are around us every day. From radio to TV spots
                  and now even online streaming spots, the sounds in ads are
                  more important now than ever.
                </p>

                <p class="body-regular">
                  We offer audio post-production for your advertisements. Our
                  services include ADR recording, editing, restoration, sound
                  designing, mixing, and finalizing. We make your ad ready to be
                  heard anywhere.
                </p>
              </li>

              <li>
                <p class="body-bold">Pricing</p>
                <p class="body-regular">
                  <a
                    target="_blank"
                    rel="noopener"
                    href="mailto:info@nadoki.com"> Email us </a>
                  to talk about your project so we can get to a price estimate.
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
    transition: left 300ms ease-in-out;
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

  .body-small + .body-regular,
  .no-description + .body-regular {
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
