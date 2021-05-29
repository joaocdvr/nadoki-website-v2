<script>
  import { onMount } from 'svelte'
  import {
    scrollYPosition,
    workModalActive,
    setWorkModalActive,
    handleWorkModalClick,
  } from '../utensils/stores.js'
  import Header from '../components/Header.svelte'
  import Card from '../components/Card.svelte'
  import WorkModal from '../components/WorkModal.svelte'
  import Tag from '../components/Tag.svelte'
  import Footer from '../components/Footer.svelte'

  onMount(() => {
    const url = new URL(document.location)
    const projectParam = url.searchParams.get('project')

    if (workSubpages.includes(projectParam)) {
      handleWorkModalClick(projectParam)
    }

    window.addEventListener('popstate', function () {
      const url = new URL(document.location)
      const projectParam = url.searchParams.get('project')
      if (workSubpages.includes(projectParam)) {
        setWorkModalActive(projectParam)
      } else {
        setWorkModalActive('')
      }
      return
    })
  })

  const workSubpages = [
    /* 
    Every time there's a new "works" entry, it's desired url string must be added manually to this array.
    
    This array is used by the popstate event listener to check if the url project parameter includes any of these strings.
    If it doesn't, no modal will be activated. This means that the user will be able to continue scrolling on the "Works" page.

    Let's look at an example: www.nadoki.com/work?project=example 
    Since this array (workSubpages) doesn't include an "example" string, 
    the example url (in practice) would behave as if it didn't have the project parameter (www.nadoki.com/work) 
    */
    'the-prey',
    'genesys',
    'not-your-type',
    'curvas-peligrosas',
    'new-era',
    'close-my-eyes',
    'london',
    'nina',
    'inxtro',
    'unity-part-two',
    'yum-yum',
    'tequilla-and-lime',
    'va-01',
    'non-citizens',
    'unity-live',
    'holiday-special',
    'cosmic-minivan',
    'leon-gurvitch',
    'perle',
    'desolator',
    'pharlight',
    'sin-thetik',
    'ovoo',
    'bold-gestures',
    'ambrosia',
    'we-gotta-live-together',
    'glitter-against-terfs',
    'above-it-all',
    'parda',
    'love-hurts',
    'der-hauptbahnhof',
    'ertrinken',
  ]

  $: isAnyWorkModalActive = !!$workModalActive

  let workCards = [
    // Every time there's a new "works" entry, it's data must be added manually to this array.
    {
      url: 'the-prey',
      ratio: '100%',
      src: 'work/the-prey-720.jpg',
      srcset:
        'work/the-prey-480.jpg 480w, work/the-prey-720.jpg 720w, work/the-prey-1080.jpg 1080w',
      alt: "The Prey's artwork",
      title: 'The Prey',
      content: `Mind Against remix of Monolink's single "The Prey".`,
      tags: 'Mix, Master',
      path: '/work?project=the-prey',
    },
    {
      url: 'genesys',
      ratio: '100%',
      src: 'work/genesys-720.jpg',
      srcset:
        'work/genesys-480.jpg 480w, work/genesys-720.jpg 720w, work/genesys-1080.jpg 1080w',
      alt: "Genesys' artwork",
      title: 'Genesys',
      content: "Anyma's debut album.",
      tags: 'Mix, Master',
      path: '/work?project=genesys',
    },
    {
      url: 'not-your-type',
      ratio: '100%',
      src: 'work/not-your-type-720.jpg',
      srcset:
        'work/not-your-type-480.jpg 480w, work/not-your-type-720.jpg 720w, work/not-your-type-1080.jpg 1080w',
      alt: 'Not Your Type artwork',
      title: 'Not Your Type',
      content: "Sunmoon's third single.",
      tags: 'Master',
      path: '/work?project=not-your-type',
    },
    {
      url: 'curvas-peligrosas',
      ratio: '100%',
      src: 'work/curvas-peligrosas-720.jpg',
      srcset:
        'work/curvas-peligrosas-480.jpg 480w, work/curvas-peligrosas-720.jpg 720w, work/curvas-peligrosas-1080.jpg 1080w',
      alt: `Curvas Peligrosas' artwork`,
      title: 'Curvas Peligrosas',
      content: "Seleminga's second EP.",
      tags: 'Mix, Master',
      path: '/work?project=curvas-peligrosas',
    },
    {
      url: 'new-era',
      ratio: '100%',
      src: 'work/new-era-720.jpg',
      srcset:
        'work/new-era-480.jpg 480w, work/new-era-720.jpg 720w, work/new-era-1080.jpg 1080w',
      alt: `New Era's artwork`,
      title: 'New Era',
      content: 'Stephan Jolk & Yotto first collaborative EP.',
      tags: 'Master',
      path: '/work?project=new-era',
    },
    {
      url: 'close-my-eyes',
      ratio: '100%',
      src: 'work/close-my-eyes-720.jpg',
      srcset:
        'work/close-my-eyes-480.jpg 480w, work/close-my-eyes-720.jpg 720w, work/close-my-eyes-1080.jpg 1080w',
      alt: `Close My Eyes' artwork`,
      title: 'Close My Eyes',
      content: "Sunmoon's second single.",
      tags: 'Master',
      path: '/work?project=close-my-eyes',
    },
    {
      url: 'london',
      ratio: '100%',
      src: 'work/london-720.jpg',
      srcset:
        'work/london-480.jpg 480w, work/london-720.jpg 720w, work/london-1080.jpg 1080w',
      alt: `London's artwork`,
      title: 'London',
      content: `Giana Brotherz remix of John Johnson's "London".`,
      tags: 'Stem Master',
      path: '/work?project=london',
    },
    {
      url: 'nina',
      ratio: '100%',
      src: 'work/nina-720.jpg',
      srcset:
        'work/nina-480.jpg 480w, work/nina-720.jpg 720w, work/nina-1080.jpg 1080w',
      alt: `Niña's artwork`,
      title: 'Niña',
      content: "Seleminga's single.",
      tags: 'Mix, Master',
      path: '/work?project=nina',
    },
    {
      url: 'inxtro',
      ratio: '100%',
      src: 'work/inxtro-720.jpg',
      srcset:
        'work/inxtro-480.jpg 480w, work/inxtro-720.jpg 720w, work/inxtro-1080.jpg 1080w',
      alt: `Inxtro's artwork`,
      title: 'Inxtro',
      content:
        "Plastikman's soundtrack for the Prada Fall/Winter 2021 Womanswear Collection runway show.",
      tags: 'Master',
      path: '/work?project=inxtro',
    },
    {
      url: 'unity-part-two',
      ratio: '100%',
      src: 'work/unity-part-two-720.jpg',
      srcset:
        'work/unity-part-two-480.jpg 480w, work/unity-part-two-720.jpg 720w, work/unity-part-two-1080.jpg 1080w',
      alt: `Unity Part 2's artwork`,
      title: 'Unity PT. 2',
      content: `Second part of Afterlife's "Unity" compilation.`,
      tags: 'Master',
      path: '/work?project=unity-part-two',
    },
    {
      url: 'yum-yum',
      ratio: '100%',
      src: 'work/yum-yum-720.jpg',
      srcset:
        'work/yum-yum-480.jpg 480w, work/yum-yum-720.jpg 720w, work/yum-yum-1080.jpg 1080w',
      alt: `Yum Yum's artwork`,
      title: 'YUM YUM',
      content: `Copycattz remix of Laura Blue's debut single "Yum Yum".`,
      tags: 'Master',
      path: '/work?project=yum-yum',
    },
    {
      url: 'tequilla-and-lime',
      ratio: '100%',
      src: 'work/tequilla-and-lime-720.jpg',
      srcset:
        'work/tequilla-and-lime-480.jpg 480w, work/tequilla-and-lime-720.jpg 720w, work/tequilla-and-lime-1080.jpg 1080w',
      alt: `Tequilla & Lime's artwork`,
      title: 'Tequilla & Lime',
      content: "Sunmoon's debut single.",
      tags: 'Master',
      path: '/work?project=tequilla-and-lime',
    },
    {
      url: 'va-01',
      ratio: '100%',
      src: 'work/va-01-720.jpg',
      srcset:
        'work/va-01-480.jpg 480w, work/va-01-720.jpg 720w, work/va-01-1080.jpg 1080w',
      alt: `Various Artists Volume I's artwork`,
      title: 'Various Artists Volume I',
      content: 'First compilation of the Gothenburg-based collective STRECK.',
      tags: 'Master',
      path: '/work?project=va-01',
    },
    {
      url: 'non-citizens',
      ratio: '100%',
      src: 'work/non-citizens-720.jpg',
      srcset:
        'work/non-citizens-480.jpg 480w, work/non-citizens-720.jpg 720w, work/non-citizens-1080.jpg 1080w',
      alt: "Frame from the Jordi Garcia Rodriguez's 'Non-Citizens' documentary",
      title: 'Non-Citizens',
      content:
        "Jordi Garcia Rodriguez's documentary about the Central African refugee crisis.",
      tags: 'Mix, Master',
      path: '/work?project=holiday-special',
    },
    {
      url: 'unity-live',
      ratio: '100%',
      src: 'work/unity-live-720.jpg',
      srcset:
        'work/unity-live-480.jpg 480w, work/unity-live-720.jpg 720w, work/unity-live-1080.jpg 1080w',
      alt: "Unity Live's artwork",
      title: 'Unity Live',
      content: "Afterlife's livestream series.",
      tags: 'Audio Engineering',
      path: '/work?project=unity-live',
    },
    {
      url: 'holiday-special',
      ratio: '100%',
      src: 'work/holiday-special-720.jpg',
      srcset:
        'work/holiday-special-480.jpg 480w, work/holiday-special-720.jpg 720w, work/holiday-special-1080.jpg 1080w',
      alt: "'Holyday Special's artwork",
      title: 'Holiday Special',
      content:
        "Charm's fundraising online event for her gender affirmation surgery fund.",
      tags: 'Sound',
      path: '/work?project=holiday-special',
    },
    {
      url: 'cosmic-minivan',
      ratio: '100%',
      src: 'work/cosmic-minivan-720.jpg',
      srcset:
        'work/cosmic-minivan-480.jpg 480w, work/cosmic-minivan-720.jpg 720w, work/cosmic-minivan-1080.jpg 1080w',
      alt: "'Cosmic Minivan's artwork",
      title: 'Cosmic Minivan',
      content: "Princess Century's single released on Paper Bag Records.",
      tags: 'Mix, Master',
      path: '/work?project=cosmic-minivan',
    },
    {
      url: 'leon-gurvitch',
      ratio: '100%',
      src: 'work/leon-gurvitch-720.jpg',
      srcset:
        'work/leon-gurvitch-480.jpg 480w, work/leon-gurvitch-720.jpg 720w, work/leon-gurvitch-1080.jpg 1080w',
      alt: "Frame from the Jordi Garcia Rodriguez's 'Leon Gurvitch' short film",
      title: 'Leon Gurvitch',
      content: "Jordi Garcia Rodriguez's short film about Leon Gurvitch.",
      tags: 'Mix, Master',
      path: '/work?project=leon-gurvitch',
    },
    {
      url: 'perle',
      ratio: '100%',
      src: 'work/perle-720.jpg',
      srcset:
        'work/perle-480.jpg 480w, work/perle-720.jpg 720w, work/perle-1080.jpg 1080w',
      alt: "'Perle's artwork",
      title: 'Perle',
      content:
        "Seleminga's first fragment of her next EP called Curvas Peligrosas.",
      tags: 'Mix, Master',
      path: '/work?project=perle',
    },
    {
      url: 'desolator',
      ratio: '100%',
      src: 'work/desolator-720.jpg',
      srcset:
        'work/desolator-480.jpg 480w, work/desolator-720.jpg 720w, work/desolator-1080.jpg 1080w',
      alt: "'Desolator's artwork",
      title: 'Desolator',
      content: "Karlo Wanny's second EP released on Us & Them Records.",
      tags: 'Master',
      path: '/work?project=desolator',
    },
    {
      url: 'pharlight',
      ratio: '100%',
      src: 'work/pharlight-720.jpg',
      srcset:
        'work/pharlight-480.jpg 480w, work/pharlight-720.jpg 720w, work/pharlight-1080.jpg 1080w',
      alt: "'Pharlight' artwork made by Maik Siemer",
      title: 'Pharlight',
      content:
        "Vocal-based granular instrument developed by the team behind STRAYLIGHT for Native Instrument's Komplete.",
      tags: 'Sample Production',
      path: '/work?project=pharlight',
    },
    {
      url: 'sin-thetik',
      ratio: '100%',
      src: 'work/sin-thetik-720.jpg',
      srcset:
        'work/sin-thetik-480.jpg 480w, work/sin-thetik-720.jpg 720w, work/sin-thetik-1080.jpg 1080w',
      alt: "Frame from Prada's Spring /Summer 2021 Womenswear YouTube video",
      title: 'Sin Thetik',
      content:
        "Richie Hawtin's original soundtrack for Prada's Spring /Summer 2021 Womenswear.",
      tags: 'Master',
      path: '/work?project=sin-thetik',
    },
    {
      url: 'ovoo',
      ratio: '100%',
      src: 'work/ovoo-720.jpg',
      srcset:
        'work/ovoo-480.jpg 480w, work/ovoo-720.jpg 720w, work/ovoo-1080.jpg 1080w',
      alt: "'Ovoo' project artwork",
      title: 'Ovoo',
      content:
        '360º visual project by Ali M. Demirel in collaboration with Arts Council of Mongolia and TodaysArt.',
      tags: 'Sountrack',
      path: '/work?project=ovoo',
    },
    {
      url: 'bold-gestures',
      ratio: '100%',
      src: 'work/bold-gestures-720.jpg',
      srcset:
        'work/bold-gestures-480.jpg 480w, work/bold-gestures-720.jpg 720w, work/bold-gestures-1080.jpg 1080w',
      alt: "'Bold Gestures' podcast cover art",
      title: 'Bold Gestures',
      content:
        'A podcast where three friends attempt to make sense of this bizarro world and the people who live in it.',
      tags: 'Post-Production',
      path: '/work?project=bold-gestures',
    },
    {
      url: 'ambrosia',
      ratio: '100%',
      src: 'work/ambrosia-720.jpg',
      srcset:
        'work/ambrosia-480.jpg 480w, work/ambrosia-720.jpg 720w, work/ambrosia-1080.jpg 1080w',
      alt: "'Ambrosia' album cover art",
      title: 'Ambrosia',
      content: "SOEL's debut album on ORACOLO Records. ",
      tags: 'Master',
      path: '/work?project=ambrosia',
    },
    {
      url: 'we-gotta-live-together',
      ratio: '100%',
      src: 'work/we-gotta-live-together-720.jpg',
      srcset:
        'work/we-gotta-live-together-480.jpg 480w, work/we-gotta-live-together-720.jpg 720w, work/we-gotta-live-together-1080.jpg 1080w',
      alt: "'We Gotta Live Together' album cover art",
      title: 'We Gotta Live Together',
      content: "DJ FLAT's debut single.",
      tags: 'Master',
      path: '/work?project=we-gotta-live-together',
    },
    {
      url: 'glitter-against-terfs',
      ratio: '100%',
      src: 'work/glitter-against-terfs-720.jpg',
      srcset:
        'work/glitter-against-terfs-480.jpg 480w, work/glitter-against-terfs-720.jpg 720w, work/glitter-against-terfs-1080.jpg 1080w',
      alt: "'Glitter Against Terfs' EP cover art",
      title: 'Glitter Against Terfs',
      content: "Lazy Rosario's fourth EP.",
      tags: 'Master',
      path: '/work?project=glitter-against-terfs',
    },
    {
      url: 'above-it-all',
      ratio: '100%',
      src: 'work/above-it-all-720.jpg',
      srcset:
        'work/above-it-all-480.jpg 480w, work/above-it-all-720.jpg 720w, work/above-it-all-1080.jpg 1080w',
      alt: "'Above It ALL' album cover art",
      title: 'Above It All',
      content:
        'Mind Against contribution for Unity — a symbol of togetherness curated by Tale Of Us.',
      tags: 'Master',
      path: '/work?project=above-it-all',
    },
    {
      url: 'parda',
      ratio: 'calc(1414 / 1000 * 100%)',
      src: 'work/parda-720.jpg',
      srcset:
        'work/parda-480.jpg 480w, work/parda-720.jpg 720w, work/parda-1080.jpg 1080w',
      alt: "'Parda' documentary cover art",
      title: 'Parda',
      content: 'A Brazilian documentary, directed by Tai Linhares.',
      tags: '5.1 Mix',
      path: '/work?project=parda',
    },
    {
      url: 'love-hurts',
      ratio: '100%',
      src: 'work/love-hurts-720.jpg',
      srcset:
        'work/love-hurts-480.jpg 480w, work/love-hurts-720.jpg 720w, work/love-hurts-1080.jpg 1080w',
      alt: "'Love Hurts' single cover art",
      title: 'Love Hurts',
      content: "Osaka88's debut single.",
      tags: 'Mix, Master',
      path: '/work?project=love-hurts',
    },
    {
      url: 'der-hauptbahnhof',
      ratio: 'calc(1415 / 1000 * 100%)',
      src: 'work/der-hauptbahnhof-720.jpg',
      srcset:
        'work/der-hauptbahnhof-480.jpg 480w, work/der-hauptbahnhof-720.jpg 720w, work/der-hauptbahnhof-1080.jpg 1080w',
      alt: "'Der Hauptbanhof' documentary cover art",
      title: 'Der Hauptbanhnof',
      content:
        'A documentary written, directed and filmed by Jordi Garcia Rodriguez.',
      tags: 'Sound Design, Post-Production',
      path: '/work?project=der-hauptbahnhof',
    },
    {
      url: 'ertrinken',
      ratio: 'calc(563 / 1000 * 100%)',
      src: 'work/ertrinken-720.jpg',
      srcset:
        'work/ertrinken-480.jpg 480w, work/ertrinken-720.jpg 720w, work/ertrinken-1080.jpg 1080w',
      alt: "Frame from 'Ertrinken' short film",
      title: 'Ertrinken',
      content:
        'A short story directed by Pedro Harres and produced by Cléo Campe.',
      tags: 'Sound Design',
      path: '/work?project=ertrinken',
    },
  ]
</script>

<div
  class="content-wrapper"
  style="transform: translateY({$scrollYPosition * -1}px)"
>
  <Header variant="work" />
  <Card cards={workCards} variant="work" />
  <Footer />
</div>

<div class="modal-wrapper" class:modal-is-visible={isAnyWorkModalActive}>
  <!-- 
  Every time there's a new "works" entry:
    1. Swap the #if statement to an :else if;
    1. Create a new #if statement with the new "works" entry url string previously added to the workSubpages array;
    3. Copy any other :else if content to start already with the basic modal data structure;
    4. Edit it to display the information related to the new entry;
    5. Check a modal that already implemented the media platform (Spotify/Vimeo/YouTube) you intend to use and copy its styling.
  -->
  {#if $workModalActive === 'the-prey'}
    <WorkModal>
      <iframe
        slot="media"
        title="Monolink - The Prey (Mind Against Remix)"
        src="https://www.youtube.com/embed/JTvAz780wq4"
        class="youtube-iframe"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope;
    picture-in-picture"
        allowfullscreen
      />

      <h2 slot="title" class="body-extra">THE PREY</h2>

      <p slot="year" class="body-bold">2021</p>

      <div slot="tag">
        <Tag tags="Mix, Master" />
      </div>

      <p slot="description" class="body-regular description">
        Mind Against’s remix of The Prey comes off the back of Monolink’s hugely
        successful recent livestream event, where Steffen was joined by close
        friends and special guests Shawna, Armen Miran, and O/Y for an extra
        special four-hour virtual concert, live from his home studio in Berlin.
      </p>

      <p slot="quote" class="body-regular quote">
        <span class="body-extra" style="text-transform: uppercase;">
          "Mind Against’s remix of Monolink’s The Prey sees Italian brothers
        </span>
        <br />
        <br />
        and globally sought-after production duo Alessandro and Federico Fognini
        transform Steffen Linck’s beautiful melancholic cut into an altogether different
        beast, exploring a dynamic dance floor-oriented interpretation of Monolink’s
        reflective, down-tempo masterpiece."
        <br />
        <br />
        <span class="body-bold">Groove Cartel</span>
      </p>

      <p slot="credits" class="body-regular">
        Original by
        <span class="body-bold">Monolink</span>
        <br />
        Remixed by
        <span class="body-bold">Mind Against</span>
        <br />
        Mix & Master
        <span class="body-bold">Nadoki Studios</span>
        <br />
        <br />
        <a
          target="_blank"
          rel="noopener"
          class="body-bold"
          href="/about_us?name=elia"> Elia Bertolaso </a>
        +
        <a
          target="_blank"
          rel="noopener"
          class="body-bold"
          href="/about_us?name=julia"> Julia Borelli </a>
        was responsible for this project.
      </p>
    </WorkModal>
  {:else if $workModalActive === 'genesys'}
    <WorkModal>
      <h2 slot="title" class="body-extra">GENESYS</h2>

      <p slot="year" class="body-bold">2021</p>

      <div slot="tag">
        <Tag tags="Mix, Master" />
      </div>

      <p slot="description" class="body-regular description">
        Tale Of Us member Matteo Milleri launches pioneering musical concept
        Anyma. Matteo Milleri, who makes up one half of the duo Tale Of Us, is
        venturing into the next step of his career with an innovative new
        concept called Anyma.
        <br />
        <br />
        What exactly is Anyma, you ask? Anyma is a live music project which blends
        computer-generated environments with with real-life aspects, blurring the
        line between what is digital and what is real. This will all be achievable
        through state of the art technology, production and design, and not only
        is Anyma a concept but will also be an alias for Matteo to release music
        on. He explains:
      </p>

      <p slot="quote" class="body-regular quote">
        <span class="body-extra" style="text-transform: uppercase;">
          "Anyma is my creative self-expression, blending music, art and
          immersive realities
        </span>
        <br />
        <br />
        to explore the next phase in the realm of consciousness. Physical and digital
        creations merge to become a singular enlightening field of experience: Genesys"
        <br />
        <br />
        <span class="body-bold">Matteo Milleri</span>
      </p>

      <p slot="credits" class="body-regular">
        Music by
        <span class="body-bold">Anyma</span>
        <br />
        Mix & Master
        <span class="body-bold">Nadoki Studios</span>
        <br />
        Visuals by
        <span class="body-bold">Builder's Club and Plusyes</span>
        <br />
        <br />
        <br />
        <a
          target="_blank"
          rel="noopener"
          class="body-bold"
          href="/about_us?name=elia"> Elia Bertolaso </a>
        +
        <a
          target="_blank"
          rel="noopener"
          class="body-bold"
          href="/about_us?name=julia"> Julia Borelli </a>
        were responsible for this project.
      </p>
    </WorkModal>
  {:else if $workModalActive === 'not-your-type'}
    <WorkModal>
      <iframe
        slot="media"
        title="'Not Your Type' by Sunmoon"
        src="https://open.spotify.com/embed/track/53DCpHFCGzaIyaxZCnqXyA"
        class="spotify-track-iframe"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
      />

      <h2 slot="title" class="body-extra">NOT YOUR TYPE</h2>

      <p slot="year" class="body-bold">2021</p>

      <div slot="tag">
        <Tag tags="Master" />
      </div>

      <p slot="description" class="body-regular description">
        Sunmoon's third single.
      </p>

      <p slot="credits" class="body-regular">
        Produced by
        <span class="body-bold">Sunmoon</span>
        <br />
        Vocals by
        <span class="body-bold">Sine</span>
        <br />
        Master
        <span class="body-bold">Nadoki Studios</span>
        <br />
        Released on
        <span class="body-bold">Vybrant</span>
        <br />
        <br />
        <a
          target="_blank"
          rel="noopener"
          class="body-bold"
          href="/about_us?name=julia"> Julia Borelli </a>
        was responsible for this project.
      </p>
    </WorkModal>
  {:else if $workModalActive === 'curvas-peligrosas'}
    <WorkModal>
      <iframe
        slot="media"
        title="'Curvas Peligrosas' by Seleminga"
        src="https://open.spotify.com/embed/album/4fC6hSYFlNnFAnuTEjDi5q"
        class="spotify-album-iframe"
        height="240"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
      />

      <h2 slot="title" class="body-extra">CURVAS PELIGROSAS</h2>

      <p slot="year" class="body-bold">2021</p>

      <div slot="tag">
        <Tag tags="Mix, Master" />
      </div>

      <p slot="description" class="body-regular description">
        Seleminga is introducing this new project with a pamphlet against street
        harassment. Based on her own experience, she is merging diverse
        testimonies into one story denunciating the aggressor.
      </p>

      <p slot="credits" class="body-regular">
        Music by
        <span class="body-bold">Seleminga</span>
        <br />
        Mix & Master
        <span class="body-bold">Nadoki Studios</span>
        <br />
        Artwork by
        <span class="body-bold">Synopsies</span>
        <br />
        <br />
        <br />
        <a
          target="_blank"
          rel="noopener"
          class="body-bold"
          href="/about_us?name=julia"> Julia Borelli </a>
        was responsible for this project.
      </p>
    </WorkModal>
  {:else if $workModalActive === 'new-era'}
    <WorkModal>
      <iframe
        slot="media"
        title="'New Era' EP by Yotto & Stephan Jolk"
        src="https://open.spotify.com/embed/album/49LqNtUITrajPTnpwyC8tA"
        class="spotify-album-iframe"
        height="152"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
      />

      <h2 slot="title" class="body-extra">NEW ERA</h2>

      <p slot="year" class="body-bold">2021</p>

      <div slot="tag">
        <Tag tags="Master" />
      </div>

      <p slot="description" class="body-regular description">
        With distinctive but synergic sounds, both artists are renowned for
        their ability to imbue their music with rich musicality and captivating
        rhythms. On 'New Era’ we are invited to join an odyssey into the
        infinite field of consciousness.
        <br /><br />
        The title track has the typical Yotto rippling rhythm that gallops along
        while drawing you into its orbit, whereas a melodramatic signature Stephan
        Jolk riff infiltrates your heart centre. On the flip ‘Only One’ takes a more
        unassuming approach, the sombre tones complemented by the main melody which
        is melancholic, but at the same time uplifting. Dance music with pure soul
        at its core.
      </p>

      <p slot="credits" class="body-regular">
        Produced by
        <span class="body-bold">Yotto + Stephan Jolk</span>
        <br />
        Released on
        <span class="body-bold">Afterlife</span>
        <br />
        Master
        <span class="body-bold">Nadoki Studios</span>
        <br />
        <br />
        <a
          target="_blank"
          rel="noopener"
          class="body-bold"
          href="/about_us?name=elia"> Elia Bertolaso </a>
        +
        <a
          target="_blank"
          rel="noopener"
          class="body-bold"
          href="/about_us?name=julia"> Julia Borelli </a>
        were responsible for this project.
      </p>
    </WorkModal>
  {:else if $workModalActive === 'close-my-eyes'}
    <WorkModal>
      <iframe
        slot="media"
        title="'Close My Eyes' by Sunmoon"
        src="https://open.spotify.com/embed/track/4NfAu7GSDDumt9rQr2vEUZ"
        class="spotify-track-iframe"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
      />

      <h2 slot="title" class="body-extra">CLOSE MY EYES</h2>

      <p slot="year" class="body-bold">2021</p>

      <div slot="tag">
        <Tag tags="Master" />
      </div>

      <p slot="description" class="body-regular description">
        Sunmoon's second single.
      </p>

      <p slot="credits" class="body-regular">
        Produced by
        <span class="body-bold">Sunmoon</span>
        <br />
        Vocals by
        <span class="body-bold">Sine</span>
        <br />
        Master
        <span class="body-bold">Nadoki Studios</span>
        <br />
        Released on
        <span class="body-bold">Vybrant</span>
        <br />
        <br />
        <a
          target="_blank"
          rel="noopener"
          class="body-bold"
          href="/about_us?name=julia"> Julia Borelli </a>
        was responsible for this project.
      </p>
    </WorkModal>
  {:else if $workModalActive === 'london'}
    <WorkModal>
      <iframe
        slot="media"
        title="'London' remix by the Giana Brotherz"
        src="https://open.spotify.com/embed/track/0DFnifjOEoLu21jsaWucHq"
        class="spotify-track-iframe"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
      />

      <h2 slot="title" class="body-extra">LONDON</h2>

      <p slot="year" class="body-bold">2021</p>

      <div slot="tag">
        <Tag tags="Stem Master" />
      </div>

      <p slot="description" class="body-regular description">
        Berlin based DnB sensation Giana Brotherz closes out the release in
        style with his outstanding rendition of 'London'. In recent years Giana
        Brotherz has been famed for his revisions and he's worked that magic
        once again for a compelling interpretation of this classic.
      </p>

      <p slot="credits" class="body-regular">
        Original by
        <span class="body-bold">John Johnson</span>
        <br />
        Remixed by
        <span class="body-bold">Giana Brotherz</span>
        <br />
        Stem Master
        <span class="body-bold">Nadoki Studios</span>
        <br />
        Released on
        <span class="body-bold">Iconyc</span>
        <br />
        <br />
        <a
          target="_blank"
          rel="noopener"
          class="body-bold"
          href="/about_us?name=julia"> Julia Borelli </a>
        was responsible for this project.
      </p>
    </WorkModal>
  {:else if $workModalActive === 'nina'}
    <WorkModal>
      <iframe
        slot="media"
        title="'Niña' by Seleminga"
        src="https://open.spotify.com/embed/track/4gI3kTtsxftTB4mBOX133P"
        class="spotify-track-iframe"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
      />

      <h2 slot="title" class="body-extra">NIÑA</h2>

      <p slot="year" class="body-bold">2021</p>

      <div slot="tag">
        <Tag tags="Mix, Master" />
      </div>

      <p slot="description" class="body-regular description">
        With its dark but yet melodic vibe, it is embodying an urgent need of
        freedom by dancing. The original song is "I can’t see nobody" »" from
        the Bee Gees. It is describing a lonely walk, in the city, with a vision
        blurred by too intense feelings. Around this base, an organic texture
        made out of drums and experimental sounds that are digging in our
        darkest fantasy. Like two contrary forces, meeting in the middle as an
        explosion, your mind and body will constantly be shaken while listening
        to it.
      </p>

      <p slot="credits" class="body-regular">
        Music by
        <span class="body-bold">Seleminga</span>
        <br />
        Mix & Master
        <span class="body-bold">Nadoki Studios</span>
        <br />
        Artwork by
        <span class="body-bold">Mert Akbal</span>
        <br />
        <br />
        <a
          target="_blank"
          rel="noopener"
          class="body-bold"
          href="/about_us?name=julia"> Julia Borelli </a>
        was responsible for this project.
      </p>
    </WorkModal>
  {:else if $workModalActive === 'inxtro'}
    <WorkModal>
      <iframe
        slot="media"
        title="Prada Fall/Winter 21 Womens Collection – A conversation with Miuccia Prada and Raf Simons to follow"
        src="https://www.youtube.com/embed/yKw39s55vOM"
        class="youtube-iframe"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope;
    picture-in-picture"
        allowfullscreen
      />

      <h2 slot="title" class="body-extra">INXTRO</h2>

      <p slot="year" class="body-bold">2021</p>

      <div slot="tag">
        <Tag tags="Master" />
      </div>

      <p slot="description" class="body-regular description">
        Inxtro, developed for the fall/winter womenswear collection, boasts
        "syncopated hypnotic beats that welcome you first into an ambience of
        intimacy and sensuality, which then develops in the second half into a
        more playful and sexually charged rhythm of driving percussion".
      </p>

      <p slot="credits" class="body-regular">
        Music by
        <span class="body-bold">Richie Hawtin</span>
        <br />
        Master
        <span class="body-bold">Nadoki Studios</span>
        <br />
        Writer, Director & Producer
        <span class="body-bold">lee Daniels</span>
        <br />
        Co-Creative Directors
        <span class="body-bold">Raf Simons & Miuccia Prada</span>
        <br />
        Fashion Designer
        <span class="body-bold">Rem Koolhaas</span>
        <br />
        <br />
        <a
          target="_blank"
          rel="noopener"
          class="body-bold"
          href="/about_us?name=julia"> Julia Borelli </a>
        was responsible for this project.
      </p>
    </WorkModal>
  {:else if $workModalActive === 'unity-part-two'}
    <WorkModal>
      <iframe
        slot="media"
        title="'Unity Pt.2' by varius Afterlife artists"
        src="https://open.spotify.com/embed/album/5FkWjMTGQOhag93NyFfLP6"
        class="spotify-album-iframe"
        height="360"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
      />
      <h2 slot="title" class="body-extra">UNITY PT.2</h2>

      <p slot="year" class="body-bold">2021</p>

      <div slot="tag">
        <Tag tags="Master" />
      </div>

      <p slot="description" class="body-regular description">
        Almost a year after the first installment, Tale Of Us and Afterlife
        return with the second part of Unity compilation, including 25 new
        exclusive tracks from artists already part of the Afterlife roster as
        well as new names on the label.
      </p>

      <p slot="credits" class="body-regular">
        Music by
        <span class="body-bold">Varius Afterlife artists</span>
        <br />
        Master
        <span class="body-bold">Nadoki Studios</span>
        <br />
        <br />
        <a
          target="_blank"
          rel="noopener"
          class="body-bold"
          href="/about_us?name=elia"> Elia Bertolaso </a>
        +
        <a
          target="_blank"
          rel="noopener"
          class="body-bold"
          href="/about_us?name=julia"> Julia Borelli </a>
        were responsible for this project.
      </p>
    </WorkModal>
  {:else if $workModalActive === 'yum-yum'}
    <WorkModal>
      <iframe
        slot="media"
        title="'YUM YUM' remix by Copycattz"
        src="https://open.spotify.com/embed/track/0uLKiRpmdumNTldHjeisDS"
        class="spotify-track-iframe"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
      />

      <h2 slot="title" class="body-extra">YUM YUM</h2>

      <p slot="year" class="body-bold">2021</p>

      <div slot="tag">
        <Tag tags="Master" />
      </div>

      <p slot="description" class="body-regular description">
        Copycattz remix of Laura Blue's debut single "Yum Yum".
      </p>

      <p slot="credits" class="body-regular">
        Remixed by
        <span class="body-bold">Copycattz</span>
        <br />
        Original by
        <span class="body-bold">Laura Blue</span>
        <br />
        Master
        <span class="body-bold">Nadoki Studios</span>
        <br />
        Released on
        <span class="body-bold">Vybrant</span>
        <br />
        <br />
        <br />
        <a
          target="_blank"
          rel="noopener"
          class="body-bold"
          href="/about_us?name=julia"> Julia Borelli </a>
        was responsible for this project.
      </p>
    </WorkModal>
  {:else if $workModalActive === 'tequilla-and-lime'}
    <WorkModal>
      <iframe
        slot="media"
        title="'Tequila & Lime' by Sunmoon"
        src="https://open.spotify.com/embed/track/13mWorFtWgmyrR6VAYVrlK"
        class="spotify-track-iframe"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
      />
      <h2 slot="title" class="body-extra">TEQUILLA & LIME</h2>

      <p slot="year" class="body-bold">2021</p>

      <div slot="tag">
        <Tag tags="Master" />
      </div>

      <p slot="description" class="body-regular description">
        Sunmoon's debut single.
      </p>

      <p slot="credits" class="body-regular">
        Produced by
        <span class="body-bold">Sunmoon</span>
        <br />
        Vocals by
        <span class="body-bold">Joseph Feinstein</span>
        <br />
        Master
        <span class="body-bold">Nadoki Studios</span>
        <br />
        Released on
        <span class="body-bold">Vybrant</span>
        <br />
        <br />
        <a
          target="_blank"
          rel="noopener"
          class="body-bold"
          href="/about_us?name=julia"> Julia Borelli </a>
        was responsible for this project.
      </p>
    </WorkModal>
  {:else if $workModalActive === 'va-01'}
    <WorkModal>
      <iframe
        slot="media"
        title="'Various Artits Volume I' by the STRECK collective"
        src="https://www.youtube.com/embed/videoseries?list=PL1ntfXx-b2MwesGDjM19uGYNDdaosiGkB"
        class="youtube-iframe"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope;picture-in-picture"
        allowfullscreen
      />

      <h2 slot="title" class="body-extra">VARIOUS ARTISTS VOLUME I</h2>

      <p slot="year" class="body-bold">2021</p>

      <div slot="tag">
        <Tag tags="Master" />
      </div>

      <p slot="description" class="body-regular description">
        First album by the Gothenburg-based techno & trance collective "STRECK"
        with tracks from every member.
      </p>

      <p slot="credits" class="body-regular">
        Producers
        <span class="body-bold"
          >Stefán, Rogue Wave, Stina Francina, Neoandra, Sima, Sonic, Kal Ket &
          Pro Athlete
        </span>
        <br />
        Master
        <span class="body-bold">Nadoki Studios</span>
        <br />
        Artwork
        <span class="body-bold">Radu Gota</span>

        <br />
        <br />
        <a
          target="_blank"
          rel="noopener"
          class="body-bold"
          href="/about_us?name=alper"> Alper Arslan </a>
        +
        <a
          target="_blank"
          rel="noopener"
          class="body-bold"
          href="/about_us?name=julia"> Julia Borelli </a>
        were responsible for this project.
      </p>
    </WorkModal>
  {:else if $workModalActive === 'non-citizens'}
    <WorkModal>
      <div slot="media" style="padding:56.25% 0 0 0;position:relative;">
        <iframe
          title="Non-Citizens - Trailer"
          src="https://player.vimeo.com/video/442164701"
          class="vimeo-iframe"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
        />
      </div>

      <h2 slot="title" class="body-extra">NON-CITIZENS</h2>

      <p slot="year" class="body-bold">2020</p>

      <div slot="tag">
        <Tag tags="Mix, Master" />
      </div>

      <p slot="description" class="body-regular description">
        Migration: leaving everything behind in search of freedom. Escaping
        appaling conditions, relentless horror, famine and war. Risking you life
        walking hundreds of kilometers to reach the gates of paradise: Europe.
        <br /><br />
        Non-Citizens tells the story of the ones waiting in the purgatory where hundreds
        of immigrants from Central Africa are fighting for survival ― giving voice
        to their hopes and fears. This waiting room is not confortable: dark nights
        in collapsing, abandoned factories, meals shared in crumbling caverns. This
        unusual dicumentary contrasts the needs of people in Africa with the abstract,
        philosophical concerns of a european woman in Berlin. Reality and fiction.
        Physical and psychological scars.
      </p>

      <p slot="credits" class="body-regular">
        Directed, Written & Filmed by
        <span class="body-bold">Jordi Garcia Rodriguez</span>
        <br />
        Music by
        <span class="body-bold">Leon Gurvitch</span>
        <br />
        Cast & VO
        <span class="body-bold">Lucie Aron</span>
        <br />
        On set sound
        <span class="body-bold">Ted Debit</span>
        <br />
        VO Recording
        <span class="body-bold">Louis Mcguire</span>
        <br />
        Subtitles
        <span class="body-bold">Lyz Pfister</span>
        <br />
        Translations
        <span class="body-bold">Flora Beillouin & Juliette Ferrere</span>
        <br />
        Mix & Master
        <span class="body-bold">Nadoki Studios</span>
        <br />
        <br />
        <a
          target="_blank"
          rel="noopener"
          class="body-bold"
          href="/about_us?name=joao"> João Rodrigues </a>
        +
        <a
          target="_blank"
          rel="noopener"
          class="body-bold"
          href="/about_us?name=julia"> Julia Borelli </a>
        were responsible for this project.
      </p>
    </WorkModal>
  {:else if $workModalActive === 'unity-live'}
    <WorkModal>
      <iframe
        slot="media"
        title="Unity Live livestream series by varius Afterlife artists"
        src="https://www.youtube.com/embed/videoseries?list=PLvmn9Ssy7H3zRe6XrCYPoUykVso4wmXbg"
        class="youtube-iframe"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope;picture-in-picture"
        allowfullscreen
      />

      <h2 slot="title" class="body-extra">UNITY LIVE</h2>

      <p slot="year" class="body-bold">2021</p>

      <div slot="tag">
        <Tag tags="Audio Engineering" />
      </div>

      <p slot="description" class="body-regular description">
        Italian techno producers Tale of us are contributing and doing their bit
        on this worldwide fight against the COVID-19 pandemic by releasing their
        brand new ‘Unity Live‘ mix series project.
      </p>

      <p slot="credits" class="body-regular">
        Episode 1
        <span class="body-bold">Tale of Us</span>
        <br />
        Episode 2
        <span class="body-bold">Fideles</span>
        <br />
        Episode 3
        <span class="body-bold">Denis Horvat</span>
        <br />
        Episode 4
        <span class="body-bold">Mind Against</span>
        <br />
        Episode 5
        <span class="body-bold">Stephan Jolk</span>
        <br />
        Episode 6
        <span class="body-bold">Mathame</span>
        <br />
        Episode 7
        <span class="body-bold">Agents of Time</span>
        <br />
        Audio Engineering
        <span class="body-bold">Nadoki Studios</span>
        <br />
        <br />
        <a
          target="_blank"
          rel="noopener"
          class="body-bold"
          href="/about_us?name=elia"> Elia Bertolaso </a>
        was responsible for this project.
      </p>
    </WorkModal>
  {:else if $workModalActive === 'holiday-special'}
    <WorkModal>
      <iframe
        slot="media"
        title="Charm's Holiday Special Show | Especial de Natal da Charm"
        src="https://www.youtube.com/embed/wWxVOTqTSts"
        class="youtube-iframe"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope;
      picture-in-picture"
        allowfullscreen
      />

      <h2 slot="title" class="body-extra">HOLIDAY SPECIAL</h2>

      <p slot="year" class="body-bold">2020</p>

      <div slot="tag">
        <Tag tags="Master" />
      </div>

      <p slot="description" class="body-regular description">
        <a
          target="_blank"
          rel="noopener"
          class="body-bold"
          href="https://www.instagram.com/charmmone/">Charm</a
        >
        produced and presented a Holiday Special Show in support of her Gender Affirmation
        Surgery Fund.
        <br /><br />
        This show was live-streamed by
        <a
          target="_blank"
          rel="noopener"
          class="body-bold"
          href="https://mjournal.online/">mjournal.online</a
        >
        on December 25th 2020, with live performances from:
        <br /><br />
        <a
          target="_blank"
          rel="noopener"
          class="body-bold"
          href="https://www.youtube.com/c/kindness">Kindness</a
        >
        <br />
        <a
          target="_blank"
          rel="noopener"
          class="body-bold"
          href="https://www.youtube.com/channel/UCk8uGQbwsy_ul81NF27ZrdA"
          >Cosima</a
        >
        <br />
        <a
          target="_blank"
          rel="noopener"
          class="body-bold"
          href="https://www.youtube.com/channel/UCk_dEx74dykvLCGolO6edjg"
          >Lie Ning</a
        >
        <br />
        <a
          target="_blank"
          rel="noopener"
          class="body-bold"
          href="https://www.youtube.com/channel/UCrXm4IP8ItE8uqXvXQoBJGw">
          Bibi Bourelly</a>
        <br />
        <a
          target="_blank"
          rel="noopener"
          class="body-bold"
          href="https://www.youtube.com/channel/UCk9kwpFiq7nrB2gubjtufvw"
          >Sedric Perry / Yuphoric</a
        >
        <br />
        <a
          target="_blank"
          rel="noopener"
          class="body-bold"
          href="https://www.youtube.com/channel/UC4OlJAQycJqsuWxRFbMcGuA"
          >Aime Simone</a
        >
        <br /><br />
        If you wish to learn more about it and contribute, please check her
        <a
          target="_blank"
          rel="noopener"
          class="body-bold"
          href="https://gf.me/u/yuajb2">GoFundMe campaign</a
        >.
      </p>

      <p slot="credits" class="body-regular">
        Produced by
        <span class="body-bold">Charm, Troels Primdahl and Lie Ning</span>
        <br />
        DOP
        <span class="body-bold">Rick Kleeßen</span>
        <br />
        Focus
        <span class="body-bold">Maximilian Carus</span>
        <br />
        Sound
        <span class="body-bold">Nadoki Studios and Simone Antonioni</span>
        <br />
        MUA
        <span class="body-bold">Leana Ardeleanu</span>
        <br />
        Graphic Design
        <span class="body-bold">Ikaro Cavalcante</span>
        <br />
        <br />
        <a
          target="_blank"
          rel="noopener"
          class="body-bold"
          href="/about_us?name=julia"> Julia Borelli </a>
        was responsible for this project.
      </p>
    </WorkModal>
  {:else if $workModalActive === 'cosmic-minivan'}
    <WorkModal>
      <iframe
        slot="media"
        title="Princess Century - Cosmic Minivan"
        src="https://www.youtube.com/embed/7qOo9FM9aCc"
        class="youtube-iframe"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope;
      picture-in-picture"
        allowfullscreen
      />

      <h2 slot="title" class="body-extra">COSMIC MINIVAN</h2>

      <p slot="year" class="body-bold">2020</p>

      <div slot="tag">
        <Tag tags="Mix, Master" />
      </div>

      <p slot="description" class="body-regular description">
        Berlin-Toronto producer Princess Century, aka Maya Postepski, releases
        the hypnotic techno single ‘Cosmic Minivan’ alongside a retro slasher
        short directed by Laura Hypponen.
        <br />
        <br />
        This is the first single from Postepski’s upcoming album, Surrender, to be
        released in 2021 on Canadian label Paper Bag Records.
      </p>

      <p slot="quote" class="body-regular quote">
        <span class="body-extra" style="text-transform: uppercase;">
          "With its pulsating riff, creepy synth lines, and a relentlessly
          throbbing beat, ‘Cosmic Minivan’ evokes memories of long sweaty nights
          dancing in seedy clubs."
        </span>
        <br />
        <br />
        <span class="body-bold"
          >Nicola Phillips
          <br />
          @ Kaltblut Magazine</span
        >
      </p>

      <p slot="credits" class="body-regular">
        Produced by
        <span class="body-bold">Maya Postepski</span>
        <br />
        Directed by
        <span class="body-bold">Laura Hypponen</span>
        <br />
        Starring
        <span class="body-bold">Jindalee Lehmann and Olga Fedori</span>
        <br />
        DP
        <span class="body-bold">Johnny Welch</span>
        <br />
        Editor
        <span class="body-bold">Chiara Armentano</span>
        <br />
        Colorist
        <span class="body-bold">Stefano Zordan</span>
        <br />
        Titles
        <span class="body-bold">Rosy Tsai</span>
        <br />
        Animation
        <span class="body-bold">Stefano Zordan</span>
        <br />
        Production assistant
        <span class="body-bold">Lukas Hansen</span>
        <br />
        Music written & produced by
        <span class="body-bold">Maya Postepski</span>
        <br />
        Mixed and Mastered by
        <span class="body-bold">Nadoki Studios</span>
        <br />
        <br />
        <a
          target="_blank"
          rel="noopener"
          class="body-bold"
          href="/about_us?name=julia"> Julia Borelli </a>
        was responsible for this project.
      </p>
    </WorkModal>
  {:else if $workModalActive === 'leon-gurvitch'}
    <WorkModal>
      <div slot="media" style="padding:56.25% 0 0 0;position:relative;">
        <iframe
          title="Leon - Belarusian-Soviet composer"
          src="https://player.vimeo.com/video/486987763"
          class="vimeo-iframe"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
        />
      </div>

      <h2 slot="title" class="body-extra">LEON GURVITCH</h2>

      <p slot="year" class="body-bold">2020</p>

      <div slot="tag">
        <Tag tags="Mix, Master" />
      </div>

      <p slot="description" class="body-regular description">
        The pianist, composer, arranger and author of more than 300 compositions
        Leon Gurvitch, lives in Germany and has founded an ensemble in 2000
        called “Leon Gurvitch Project”, with whom he perfected his idea of a
        combination of European standards of jazz and a stylish cross World
        Music can implement.
        <br /><br />
        In his compositions and arrangements of jazz musicians, he combines modern
        elements with klezmer and folk sounds from the Balkans and Russia, as well
        as accents of Latin America and the Orient.
      </p>

      <p slot="credits" class="body-regular">
        Directed by
        <span class="body-bold">Jordi Garcia Rodriguez</span>
        <br />
        Muxic by
        <span class="body-bold">Leon Gurvitch</span>
        <br />
        Violins
        <span class="body-bold">Ksenia Dubrovskaya and Olga Mashanskaya</span>
        <br />
        Viola
        <span class="body-bold">Martin Stupka</span>
        <br />
        Violins
        <span class="body-bold">Ksenia Dubrovskaya and Olga Mashanskaya</span>
        <br />
        Violoncello
        <span class="body-bold">Emilia Lomakova</span>
        <br />
        Flute
        <span class="body-bold">Ramón Lazzaroni</span>
        <br />
        Percussion
        <span class="body-bold">B. Abdul-Salam</span>
        <br />
        Mixed and Mastered by
        <span class="body-bold">Nadoki Studios</span>
        <br />
        <br />
        <a
          target="_blank"
          rel="noopener"
          class="body-bold"
          href="/about_us?name=joao"> João Rodrigues </a>
        +
        <a
          target="_blank"
          rel="noopener"
          class="body-bold"
          href="/about_us?name=julia"> Julia Borelli </a>
        were responsible for this project.
      </p>
    </WorkModal>
  {:else if $workModalActive === 'perle'}
    <WorkModal>
      <iframe
        slot="media"
        title="Seleminga - Perle"
        src="https://www.youtube.com/embed/s0JjHurRb9U"
        class="youtube-iframe"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope;
      picture-in-picture"
        allowfullscreen
      />

      <h2 slot="title" class="body-extra">PERLE</h2>

      <p slot="year" class="body-bold">2020</p>

      <div slot="tag">
        <Tag tags="Mix, Master" />
      </div>

      <p slot="description" class="body-regular description">
        After a first Triphop project <span class="body-bold">Femme Alpha</span
        >, Seleminga, the Berlin based artist, is now jumping deeper in the
        world of experimental production. Perle is the first fragment of her
        next EP
        <span class="body-bold">Curvas Peligrosas</span>.
        <br /><br />
        It is inspired by her trip to Cuba in March 2020 at a shift from one world
        to another. This transitional period will be expressed in her upcoming project
        lead by the double meaning of the title. First, the “dangerous curve” we
        all took while living in a pandemic. Second, the danger of having “curves”
        in today’s society, in other words the burden a woman endures by simply walking
        alone in the streets. These two topics extremely vivid in our cities opened
        the path of Seleminga to new musical exploration.
      </p>

      <p slot="quote" class="body-regular quote">
        <span class="body-extra" style="text-transform: uppercase;">
          "During the whole creative process Seleminga was triggered by the need
          to escape. The floating voices, almost surreal, are evolving around a
          most solid structure made out mainly of drums.
        </span>
        <br />
        <br />
        This very fragile balance is the result of all the opposite forces that the
        artist was experiencing this spring when « Perle » was created."
        <br />
        <br />
        <span class="body-bold"
          >Naikee Simoneau
          <br />
          @ Kaltblut Magazine</span
        >
      </p>

      <p slot="credits" class="body-regular">
        Director
        <span class="body-bold">Tomàs Eyzaguirre</span>
        <br />
        Assistant Director
        <span class="body-bold">Patricio Trim</span>
        <br />
        Producer
        <span class="body-bold">Seleminga</span>
        <br />
        DOP
        <span class="body-bold">Jascha Müller-Guthof</span>
        <br />
        Stylism
        <span class="body-bold"
          >Camille Pailler, Luisa Lauber, Helena Stölting, Ekaterine Gogashvilin
          and Laurențiu Dragotă</span
        >
        <br />
        Hair and Make up
        <span class="body-bold">Samantha Pottmaier</span>
        <br />
        H and M Assistant
        <span class="body-bold">Elisa Lange</span>
        <br />
        Casting
        <span class="body-bold"
          >Jean-Cedric Sow, Odessa Kulwanowski, Giulia Gr, Lev and Seleminga</span
        >
        <br />
        Editing and Color Grading
        <span class="body-bold">Agustín Farias</span>
        <br />
        Pictures
        <span class="body-bold">Tomàs Eyzaguirre and Ivo Santos </span>
        <br />
        Mixed and Mastered by
        <span class="body-bold">Nadoki Studios</span>
        <br />
        <br />
        <a
          target="_blank"
          rel="noopener"
          class="body-bold"
          href="/about_us?name=julia"> Julia Borelli </a>
        was responsible for this project.
      </p>
    </WorkModal>
  {:else if $workModalActive === 'desolator'}
    <WorkModal>
      <iframe
        slot="media"
        title="'Desolator' EP by Karlo Wanny"
        src="https://open.spotify.com/embed/album/3ZDtf23MW76hnni9425qf1"
        class="spotify-album-iframe"
        height="152"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
      />

      <h2 slot="title" class="body-extra">DESOLATOR</h2>

      <p slot="year" class="body-bold">2020</p>

      <div slot="tag">
        <Tag tags="Master" />
      </div>

      <p slot="description" class="body-regular description">
        Second EP from producer Karlo Wanny.
      </p>

      <p slot="credits" class="body-regular">
        Music by
        <span class="body-bold">Karlo Wanny</span>
        <br />
        Mixing
        <span class="body-bold">Karlo Wanny</span>
        <br />
        Mastering
        <span class="body-bold">Nadoki Studios</span>
        <br />
        <br />
        <a
          target="_blank"
          rel="noopener"
          class="body-bold"
          href="/about_us?name=julia"> Julia Borelli </a>
        was responsible for this project.
      </p>
    </WorkModal>
  {:else if $workModalActive === 'pharlight'}
    <WorkModal>
      <iframe
        slot="media"
        title="Introducing PHARLIGHT | Native Instruments"
        src="https://www.youtube.com/embed/lTmvn-Zig5s"
        class="youtube-iframe"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope;
        picture-in-picture"
        allowfullscreen
      />

      <h2 slot="title" class="body-extra">PHARLIGHT</h2>

      <p slot="year" class="body-bold">2020</p>

      <div slot="tag">
        <Tag tags="Sample Production" />
      </div>

      <p slot="description" class="body-regular description">
        PHARLIGHT is a vocal-based granular instrument for artists, composers,
        musicians, and sound designers, developed by the team behind STRAYLIGHT
        for
        <a
          target="_blank"
          rel="noopener"
          href="https://www.native-instruments.com/en/products/komplete/vocal/pharlight/">
          Native Instrument's Komplete
        </a>. Its idiosyncratic sample library packs unconventional sounds
        designed and recorded specifically for two unique playback modules.
        <br /><br />
        From cinematic soundscapes and pulsating ambiences to haymaker hooks, PHARLIGHT
        is all about injecting incredible sound, imaginative modulation, and organic,
        melodic timbres into your music.
      </p>

      <p slot="quote" class="body-regular quote">
        <span class="body-extra" style="text-transform: uppercase;">
          "Sound designers will love digging down into Pharlight’s synthesis
          engine and sophisticated modulation tools,
        </span>
        <br />
        <br />
        while musicians and composers will adore the rich and evolving sound and
        the way Pharlight responds to expressive performance inputs."
        <br />
        <br />
        <span class="body-bold"
          >Adam Crute
          <br />
          @ Music Tech</span
        >
      </p>

      <p slot="credits" class="body-regular">
        Product Concept, Design, Programming and Production
        <span class="body-bold">Frank Elting</span>
        <br />
        Vocal Artists
        <span class="body-bold"
          >Eva Thärichen, Pat Appleton, Ksenija Ladic, Beatboxartist Mando,
          Anselm Ndoung and Bodek Jahnke</span
        >
        <br />
        Sample Content Production
        <span class="body-bold"> Frank Elting, Julia Borelli and Arovane </span>
        <br />
        Library Concept
        <span class="body-bold"> Frank Elting </span>
        <br />
        Sound Presets
        <span class="body-bold">
          Arovane, Andreas Koslik, Jamie Wilder, Jeremiah Savage, Jeremy
          Leaird-Koch, Joerg Huettner, John Valasis, Ksenija Ladic, Noah Pred,
          Patrick Burniston, The Solos and Frank Elting
        </span>
        <br />
        Quality Assurance
        <span class="body-bold"> Francesco Sabatini </span>
        <br />
        Artwork
        <span class="body-bold"> Maik Siemer </span>
        <br />
        <br />
        <a
          target="_blank"
          rel="noopener"
          class="body-bold"
          href="/about_us?name=joao"> João Rodrigues </a>
        +
        <a
          target="_blank"
          rel="noopener"
          class="body-bold"
          href="/about_us?name=julia"> Julia Borelli </a>
        were responsible for this project.
      </p>
    </WorkModal>
  {:else if $workModalActive === 'sin-thetik'}
    <WorkModal>
      <iframe
        slot="media"
        title="Prada Spring/Summer 2021 Womenswear Show"
        src="https://www.youtube.com/embed/RCQxPSNzU2Q"
        class="youtube-iframe"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope;
        picture-in-picture"
        allowfullscreen
      />

      <h2 slot="title" class="body-extra">SIN THETIK</h2>

      <p slot="year" class="body-bold">2020</p>

      <div slot="tag">
        <Tag tags="Master" />
      </div>

      <p slot="description" class="body-regular description">
        Richie Hawtin has adopted his Plastikman alias to compose an original
        soundtrack for Prada’s Spring / Summer 2021 Womenswear Show.
        <br /><br />The 12-minute track is titled ‘Sin Thetik’, and also arrives
        alongside a 20-minute ambient version.
      </p>

      <p slot="quote" class="body-regular quote">
        <span class="body-extra" style="text-transform: uppercase;">
          "...Sin Thetik was created over an intense few weeks and was inspired
          by my conversations with Raf along with directions for Miuccia.
        </span>
        <br />
        <br />The process was new to me, however I always felt the respect and
        openness from Raf and Miuccia to allow me to explore where the sound of
        Plastikman would fit in this new context."
        <br />
        <br />
        <span class="body-bold">Richie Hawtin</span>
      </p>

      <p slot="credits" class="body-regular">
        Music by
        <span class="body-bold">Richie Hawtin</span>
        <br />
        Master
        <span class="body-bold">Nadoki Studios</span>
        <br />
        Co-Creative Directors
        <span class="body-bold"> Raf Simons and Miuccia Prada </span>
        <br />
        <br />
        <a
          target="_blank"
          rel="noopener"
          class="body-bold"
          href="/about_us?name=julia"> Julia Borelli </a>
        was responsible for this project.
      </p>
    </WorkModal>
  {:else if $workModalActive === 'ovoo'}
    <WorkModal>
      <iframe
        slot="media"
        title="'Ovoo' by Ali M. Demirel"
        src="https://www.instagram.com/p/CCTc4aqI7HJ/embed/"
        class="instagram-iframe"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope;
        picture-in-picture"
        allowfullscreen
      />

      <h2 slot="title" class="body-extra">OVOO</h2>

      <p slot="year" class="body-bold">2020</p>

      <div slot="tag">
        <Tag tags="Soundtrack" />
      </div>

      <p slot="description" class="body-regular description">
        360º visual project (work in progress) by Ali M. Demirel in
        collaboration with Arts Council of Mongolia + TodaysArt.
        <br />
        <br />
        The project was premiered on July 8th at Ulaanbaatar International Media
        Art Festival.
        <br />
        <br />
        We worked together with Carlota Marques and Emilio Arias to create a soundscape
        to this visually immersive experience. No public video of the project was
        published yet.
      </p>

      <p slot="quote" class="body-regular quote">
        <span class="body-extra" style="text-transform: uppercase;">
          "I was invited to Mongolia this summer to produce a new work for
          Ulaanbaatar International Media Art Festival.
        </span>
        <br />
        <br />
        Unfortunately my visit couldn’t happen because of the pandemic. However,
        we have decided with the team to start the production process and I have
        created my fantasy of Mongolia with my archive footage from around the world.
        This is the starting point of a work in progress."
        <br />
        <br />
        <span class="body-bold">Ali M. Demirel</span>
      </p>

      <p slot="credits" class="body-regular">
        Project by
        <span class="body-bold">Ali M. Demirel</span>
        <br />
        Produced by
        <span class="body-bold">Arts Council of Mongolia + TodaysArt</span>
        <br />
        Soundtrack by
        <span class="body-bold">
          Carlota Marques, Emilio Arias and Nadoki Studios
        </span>
        <br />
        <br />
        <a
          target="_blank"
          rel="noopener"
          class="body-bold"
          href="/about_us?name=julia"> Julia Borelli </a>
        was responsible for this project.
      </p>
    </WorkModal>
  {:else if $workModalActive === 'bold-gestures'}
    <WorkModal>
      <iframe
        slot="media"
        title="'Bold Gestures' by Rich, Hank and Tobi"
        src="https://open.spotify.com/embed-podcast/show/2BJpkoJl24es7GCKvVo8uZ"
        class="spotify-podcast-iframe"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
      />

      <h2 slot="title" class="body-extra">BOLD GESTURES</h2>

      <p slot="year" class="body-bold">2020</p>

      <div slot="tag">
        <Tag tags="Post-Production" />
      </div>

      <p slot="description" class="body-regular description">
        A podcast where three friends attempt to make sense of this bizarro
        world and the people who live in it. Tobi, Hank, and Tobi search their
        minds, every week, for wisdom but will likely offer none.
        <br />
        <br />
        They give opinions that don't matter during desperate times...because it
        matters!
      </p>

      <p slot="credits" class="body-regular">
        Podcasters
        <span class="body-bold">Rich, Hank and Tobi</span>
        <br />
        Produced by
        <span class="body-bold">VGL Marketing</span>
        <br />
        Co-produced by
        <span class="body-bold">Nadoki Studios</span>
        <br />
        Post-production by
        <span class="body-bold">Nadoki Studios</span>
        <br />
        <br />
        <a
          target="_blank"
          rel="noopener"
          class="body-bold"
          href="/about_us?name=julia"> Julia Borelli </a>
        is responsible for this project.
      </p>
    </WorkModal>
  {:else if $workModalActive === 'ambrosia'}
    <WorkModal>
      <iframe
        slot="media"
        title="'Ambrosia' by SOEL"
        src="https://open.spotify.com/embed/album/7MUXZB7K88izSQvbXrJ2vo"
        class="spotify-album-iframe"
        height="360"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
      />

      <h2 slot="title" class="body-extra">AMBROSIA</h2>

      <p slot="year" class="body-bold">2020</p>

      <div slot="tag">
        <Tag tags="Master" />
      </div>

      <p slot="description" class="body-regular description">
        SOEL's debut album on ORACOLO Records, released on June 8th, features
        nine of his long-awaited tracks, extending over two, 12-inch
        double-vinyls. Ambrosia also had a digital release two weeks later, on
        June 26th.
      </p>

      <p slot="credits" class="body-regular">
        Music by
        <span class="body-bold">SOEL</span>
        <br />
        Mixing
        <span class="body-bold">SOEL</span>
        <br />
        Mastering
        <span class="body-bold">Nadoki Studios</span>
        <br />
        <br />
        <a
          target="_blank"
          rel="noopener"
          class="body-bold"
          href="/about_us?name=joao"> João Rodrigues </a>
        +
        <a
          target="_blank"
          rel="noopener"
          class="body-bold"
          href="/about_us?name=julia"> Julia Borelli </a>
        were responsible for this project.
      </p>
    </WorkModal>
  {:else if $workModalActive === 'we-gotta-live-together'}
    <WorkModal>
      <iframe
        slot="media"
        title="'We Gotta Live Together' by DJ Flat"
        src="https://open.spotify.com/embed/track/0v2IrjcP4tPmMWRkCBSkCk"
        class="spotify-track-iframe"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
      />

      <h2 slot="title" class="body-extra">WE GOTTA LIVE TOGETHER</h2>

      <p slot="year" class="body-bold">2020</p>

      <div slot="tag">
        <Tag tags="Master" />
      </div>

      <p slot="description" class="body-regular description">
        Debut single from Instanbul-born, Berlin-based DJ and producer, DJ FLAT.
      </p>

      <p slot="credits" class="body-regular">
        Music by
        <span class="body-bold">DJ Flat</span>
        <br />
        Mixing
        <span class="body-bold">DJ Flat</span>
        <br />
        Mastering
        <span class="body-bold">Nadoki Studios</span>
        <br />
        <br />
        <a
          target="_blank"
          rel="noopener"
          class="body-bold"
          href="/about_us?name=elia"> Elia Bertolaso </a>
        +
        <a
          target="_blank"
          rel="noopener"
          class="body-bold"
          href="/about_us?name=julia"> Julia Borelli </a>
        were responsible for this project.
      </p>
    </WorkModal>
  {:else if $workModalActive === 'glitter-against-terfs'}
    <WorkModal>
      <iframe
        slot="media"
        title="'Glitter Against Terfs' EP by Lazy Rozario"
        src="https://open.spotify.com/embed/album/5zWKcWRiCURalAmtGoHJkK"
        class="spotify-album-iframe"
        height="152"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
      />

      <h2 slot="title" class="body-extra">GLITTER AGAINST TERFS</h2>

      <p slot="year" class="body-bold">2020</p>

      <div slot="tag">
        <Tag tags="Master" />
      </div>

      <p slot="description" class="body-regular description">
        Fourth EP from Berlin-based DJ and producer, Lazy Roszario.
      </p>

      <p slot="credits" class="body-regular">
        Music by
        <span class="body-bold">Lazy Rozario</span>
        <br />
        Mixing
        <span class="body-bold">Lazy Rozario</span>
        <br />
        Mastering
        <span class="body-bold">Nadoki Studios</span>
        <br />
        <br />
        <a
          target="_blank"
          rel="noopener"
          class="body-bold"
          href="/about_us?name=julia"> Julia Borelli </a>
        was responsible for this project.
      </p>
    </WorkModal>
  {:else if $workModalActive === 'above-it-all'}
    <WorkModal>
      <iframe
        slot="media"
        title="AL037 - Mind Against - Above It All"
        src="https://www.youtube.com/embed/BuLLtZWK-Ds"
        class="youtube-iframe"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope;
        picture-in-picture"
        allowfullscreen
      />

      <h2 slot="title" class="body-extra">ABOVE IT ALL</h2>

      <p slot="year" class="body-bold">2020</p>

      <div slot="tag">
        <Tag tags="Master" />
      </div>

      <p slot="description" class="body-regular description">
        Out of darkness can only come light. 'Above It All' is one of the
        31-tracks from 'Unity', a symbol of togetherness curated by Tale Of Us,
        including artists already on Afterlife and some new names to the label.
        <br />
        <br />
        Accompanied by a continuous journey through this new music, mixed by Tale
        Of Us, we hope this compilation brings some escape at a challenging time.
      </p>

      <p slot="quote" class="body-regular quote">
        <span class="body-extra" style="text-transform: uppercase;">
          "All the tracks in Unity have been carefully selected by Tale Of Us.
        </span>
        <br />
        <br />
        The mix includes some amazing tunes from Agents of Time, Stephan Bodzin,
        Fideles, Mathame, Recondite and others. As the records go by, you will find
        yourself immersed in a simphony of Afterlife sounds, where music is the one
        and only way to reach your soul."
        <br />
        <br />
        <span class="body-bold">Sol Di Tomasso</span>
      </p>

      <p slot="credits" class="body-regular">
        Music by
        <span class="body-bold">Mind Against</span>
        <br />
        Mixing
        <span class="body-bold">Mind Against</span>
        <br />
        Mastering
        <span class="body-bold">Nadoki Studios</span>
        <br />
        <br />
        <a
          target="_blank"
          rel="noopener"
          class="body-bold"
          href="/about_us?name=elia"> Elia Bertolaso </a>
        +
        <a
          target="_blank"
          rel="noopener"
          class="body-bold"
          href="/about_us?name=julia"> Julia Borelli </a>
        were responsible for this project.
      </p>
    </WorkModal>
  {:else if $workModalActive === 'parda'}
    <WorkModal>
      <div slot="media" style="padding:56.25% 0 0 0;position:relative;">
        <iframe
          title="'Parda' by Tai Linhares"
          src="https://player.vimeo.com/video/307440642"
          class="vimeo-iframe"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
        />
      </div>

      <h2 slot="title" class="body-extra">PARDA</h2>

      <p slot="year" class="body-bold">2019</p>

      <div slot="tag">
        <Tag tags="5.1 Mix" />
      </div>

      <p slot="description" class="description body-regular">
        We had the pleasure to do the 5.1 mix of this touching independent movie
        from the Brazilian filmmaker and director Tai Linhares. It questions
        race and self-identification midst of an authoritarian regime that plans
        to restore white supremacy.
        <br />
        <br />
        Parda played in Finland during the
        <span class="body-bold">Cinemaissí Festival</span>
        and in Brazil during the
        <span class="body-bold">Mostra Sesc de Cinema</span>
        .
      </p>

      <p slot="quote" class="quote body-regular">
        <span class="body-extra" style="text-transform: uppercase;">
          "An authoritarian regime plans to restore white supremacy in Brazil.
        </span>
        <br />
        <br />
        Their first act is to demand the return of all white Brazilian citizens living
        abroad. In the midst of this political chaos, Tai needs to prove that she
        is not white, but is faced with uncertainty about her own racial identity.
        The film delves into the ambiguous concept of race in Brazil, exploring the
        traces left by its colonial past and the family history of the director.
        An exploratory journey between fiction and documentary."
        <br />
        <br />
        <span class="body-bold">Tai Linhares</span>
      </p>

      <p slot="credits" class="body-regular">
        Directed, Written and Produced by
        <span class="body-bold">Tai Linhares</span>
        <br />
        Directors of Photography
        <span class="body-bold">
          Aline Juárez, Marcos Lamoreux and Sanni Est
        </span>
        <br />
        Assistant Director
        <span class="body-bold">João Xavi</span>
        <br />
        Editors
        <span class="body-bold">Tai Linhares and Sully Ceccopieri</span>
        <br />
        Music by
        <span class="body-bold">The Cosmic Race</span>
        <br />
        Location Sound
        <span class="body-bold">Elissa Brito</span>
        <br />
        Sound Editor
        <span class="body-bold">Caio Cesar Loures</span>
        <br />
        2.0 Mix by
        <span class="body-bold">Mariana Bahia</span>
        <br />
        5.1 Mix by
        <span class="body-bold">Nadoki Studios</span>
        <br />
        <br />
        <a
          target="_blank"
          rel="noopener"
          class="body-bold"
          href="/about_us?name=joao"> João Rodrigues </a>
        +
        <a
          target="_blank"
          rel="noopener"
          class="body-bold"
          href="/about_us?name=julia"> Julia Borelli </a>
        were responsible for this project.
      </p>
    </WorkModal>
  {:else if $workModalActive === 'love-hurts'}
    <WorkModal>
      <iframe
        slot="media"
        title="'Love Hurts' by Osaka88"
        src="https://open.spotify.com/embed/track/1ClR5vHqlOlK6fj6hLKnNY"
        class="spotify-track-iframe"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
      />

      <h2 slot="title" class="body-extra">LOVE HURTS</h2>

      <p slot="year" class="body-bold">2019</p>

      <div slot="tag">
        <Tag tags="Mix, Master" />
      </div>

      <p slot="description" class="description body-regular">
        Formerly known as OSVKV, Osaka wrote "Love Hurts" — produced together
        with 80root — as his new alias debut: Osaka88.
      </p>

      <p slot="credits" class="body-regular">
        Lyrics and Performance
        <span class="body-bold">Osaka88</span>
        <br />
        Producer
        <span class="body-bold">80root</span>
        <br />
        Recording
        <span class="body-bold">Mo$sart</span>
        <br />
        Mixing
        <span class="body-bold">Nadoki Studios</span>
        <br />
        Mastering
        <span class="body-bold">Nadoki Studios</span>
        <br />
        <br />
        <a
          target="_blank"
          rel="noopener"
          class="body-bold"
          href="/about_us?name=joao"> João Rodrigues </a>
        +
        <a
          target="_blank"
          rel="noopener"
          class="body-bold"
          href="/about_us?name=julia"> Julia Borelli </a>
        were responsible for this project.
      </p>
    </WorkModal>
  {:else if $workModalActive === 'der-hauptbahnhof'}
    <WorkModal>
      <div slot="media" style="padding:56.25% 0 0 0;position:relative;">
        <iframe
          title="AfrikaBurn – Der Hauptbahnhof"
          src="https://player.vimeo.com/video/265019323"
          class="vimeo-iframe"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
        />
      </div>
      <h2 slot="title" class="body-extra">DER HAUPTBANHOF</h2>
      <p slot="year" class="body-bold">2018</p>
      <div slot="tag">
        <Tag tags="Sound Design, Post-Production" />
      </div>

      <p slot="description" class="description body-regular">
        A documentary about the Hauptbahnhof project at AfrikaBurn Festival 2017
        in the Tankwa Karoo.
      </p>

      <p slot="quote" class="quote body-regular">
        <span class="body-extra" style="text-transform: uppercase;">
          "We are throwing this party to express our love for all those who
          manage to find ways instead of making excuses.
        </span>
        <br />
        <br />
        To everyone who prefers to spend time, sweat and tears, rather than to spend
        money. To everyone who believes in deals made with handshakes, rather than
        signatures. To everyone with a burning heart. To everyone who believed in
        a train station in the South African desert. Yes, it happened. Yes, we manifested
        our dream in the sun going down over the horizon. And your energy is what
        keeps the fire burning. You are the ones who put trust into strangers without
        blinking. The ones who keep this spirit that lives deeply in our hearts alive
        and kicking..."
        <br />
        <br />
        <span class="body-bold">Word from the crew</span>
      </p>

      <p slot="credits" class="body-regular">
        Written, Directed and Filmed by
        <span class="body-bold">Jordi Garcia Rodriguez</span>
        <br />
        Text Editor and Narrator
        <span class="body-bold">Lyz Pfister</span>
        <br />
        Sound Mix and Sound Design
        <span class="body-bold">Claudine Fanilia and Nadoki Studios</span>
        <br />
        Music
        <span class="body-bold">
          Cal Kahoone, Thor Rixon with James Tuft, Wagner, Tchaikovsky and
          Xavier
        </span>
        <br />
        Drone Footage
        <span class="body-bold">Skyhook</span>
        <br />
        Extra Footage
        <span class="body-bold">Ryan Frame and Patrick Baumhöfer</span>
        <br />
        <br />
        <a
          target="_blank"
          rel="noopener"
          class="body-bold"
          href="/about_us?name=julia"> Julia Borelli </a>
        was responsible for this project.
      </p>
    </WorkModal>
  {:else if $workModalActive === 'ertrinken'}
    <WorkModal>
      <iframe
        slot="media"
        title="Ertrinken / Vermächtnisstudie von DIE ZEIT, infas, WZB"
        src="https://www.youtube.com/embed/aeJUNTx6fio"
        class="youtube-iframe"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope;
        picture-in-picture"
        allowfullscreen
      />

      <h2 slot="title" class="body-extra">ERTRINKEN</h2>

      <p slot="year" class="body-bold">2017</p>

      <div slot="tag">
        <Tag tags="Sound Design" />
      </div>

      <p slot="description" class="description body-regular">
        What the ubiquitous flood of images and information actually does.
        <br />
        <br />
        Never before have we been surrounded by so many images, texts, videos and
        bits of information – we could drown in it.
        <br />
        <br />
        A view to the Legacy study: with advancing digitization, the older members
        of the population feel increasingly outpaced by the younger – there is no
        connection. Like the protagonist in this animated film, they go under in
        the flood.
      </p>

      <p slot="quote" class="quote body-regular">
        <span class="body-bold">Synospis</span>
        <br />
        Hans is not as young as he used to be. In order to avoid his loneliness,
        he must learn how to swim in the big sea of information that is the Internet
        nowadays. Is he prepared for the overwhelming amount of distractions and
        traps that the online world can offer?
        <br />
        <br />

        <span class="body-bold">Festivals</span>
        <br />
        — Open-Air Filmfest Weiterstadt 2018
        <br />
        — Open World Animation Festival 2018
        <br />
        — BIT BANG 2018
        <br />
        — International Tour Film Fest 2018
        <br />
        <br />

        <span class="body-bold">Prizes</span>
        <br />
        Die Zeit Short Film Competition “Die Welt, die wir uns wünschen. Die Filme
        zur großen Vermächtnisstudie”, Public Prize – Best Short
      </p>

      <p slot="credits" class="body-regular">
        Director
        <span class="body-bold">Pedro Harres</span>
        <br />
        Executive Producer
        <span class="body-bold">Cléo Campe</span>
        <br />
        Assistant Direction and Storyboard
        <span class="body-bold">Maria Teixeira</span>
        <br />
        Sound Design
        <span class="body-bold">Nadoki Studios</span>
        <br />
        <br />
        <a
          target="_blank"
          rel="noopener"
          class="body-bold"
          href="/about_us?name=julia"> Julia Borelli </a>
        was responsible for this project.
      </p>
    </WorkModal>
  {/if}
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
    background-color: var(--main-color);
    margin-top: 4.5rem;
  }

  .modal-wrapper {
    position: fixed;
    top: 0;
    left: 100vw;
    background-color: var(--main-color);
    max-height: 100vh;
    overflow-y: auto;
    z-index: 2;
    transition: left 300ms ease-in-out;
  }

  .modal-is-visible {
    left: 0;
  }

  .quote span:last-child {
    text-align: right;
    display: inline-block;
    width: 100%;
  }

  .youtube-iframe {
    width: 100vw;
    height: calc(100vw / (16 / 9));
  }

  @media (--max-content-width) {
    .youtube-iframe {
      padding: 0 1.5rem;
      height: calc(var(--max-width) * 0.45);
    }
  }

  .instagram-iframe {
    width: 100vw;
    min-height: 450px;
    height: calc(100vw);
  }

  @media (--max-content-width) {
    .instagram-iframe {
      padding: 0 1.5rem;
      height: calc(var(--max-width) * 0.7);
    }
  }

  .vimeo-iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  @media (--max-content-width) {
    .vimeo-iframe {
      padding: 0 1.5rem;
      height: calc(var(--max-width) * 0.45);
    }
  }

  .spotify-track-iframe {
    width: 100%;
    height: calc(100vw + 80px);
  }

  .spotify-album-iframe {
    width: 100%;
  }

  .spotify-podcast-iframe {
    width: 100%;
    height: 232px;
  }

  @media (--max-content-width) {
    .spotify-track-iframe {
      padding: 0 1.5rem;
      height: calc(var(--max-width) - 6rem);
    }

    .spotify-album-iframe {
      padding: 0 1.5rem;
    }

    .spotify-podcast-iframe {
      padding: 0 1.5rem;
    }
  }
</style>
