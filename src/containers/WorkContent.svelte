<script>
  import { onMount } from "svelte";
  import { get } from "svelte/store";
  import {
    scrollYPosition,
    workModalActive,
    setWorkModalActive,
    handleWorkModalClick,
  } from "../utensils/stores.js";
  import Header from "../components/Header.svelte";
  import Card from "../components/Card.svelte";
  import WorkModal from "../components/WorkModal.svelte";
  import Tag from "../components/Tag.svelte";
  import Footer from "../components/Footer.svelte";

  onMount(() => {
    const url = new URL(document.location);
    const projectParam = url.searchParams.get("project");

    if (workSubpages.includes(projectParam)) {
      handleWorkModalClick(projectParam);
    }

    window.addEventListener("popstate", function () {
      const url = new URL(document.location);
      const projectParam = url.searchParams.get("project");
      if (workSubpages.includes(projectParam)) {
        setWorkModalActive(projectParam);
      } else {
        setWorkModalActive("");
      }
      return;
    });
  });

  const workSubpages = [
    /* 
    Every time there's a new "works" entry, it's desired url string must be added manually to this array.
    
    This array is used by the popstate event listener to check if the url project parameter includes any of these strings.
    If it doesn't, no modal will be activated. This means that the user will be able to continue scrolling on the "Works" page.

    Let's look at an example: www.nadoki.com/work?project=example 
    Since this array (workSubpages) doesn't include an "example" string, 
    the example url (in practice) would behave as if it didn't have the project parameter (www.nadoki.com/work) 
    */
    "pharlight",
    "sin_thetik",
    "ovoo",
    "bold_gestures",
    "ambrosia",
    "we_gotta_live_together",
    "glitter_against_terfs",
    "above_it_all",
    "parda",
    "love_hurts",
    "der_hauptbahnhof",
    "ertrinken",
  ];

  $: isAnyWorkModalActive = !!$workModalActive;

  let workCards = [
    // Every time there's a new "works" entry, it's data must be added manually to this array.
    {
      url: "pharlight",
      ratio: "100%",
      src: "work/pharlight-720.jpg",
      srcset:
        "work/pharlight-480.jpg 480w, work/pharlight-720.jpg 720w, work/pharlight-1080.jpg 1080w",
      alt: "'Pharlight' artwork made by Maik Siemer",
      title: "Pharlight",
      content:
        "Vocal-based granular instrument for artists, composers, musicians, and sound designers, developed by the team behind STRAYLIGHT.",
      tags: "Sample Production",
      path: "/work?project=pharlight",
    },
    {
      url: "sin_thetik",
      ratio: "100%",
      src: "work/sin-thetik-720.jpg",
      srcset:
        "work/sin-thetik-480.jpg 480w, work/sin-thetik-720.jpg 720w, work/sin-thetik-1080.jpg 1080w",
      alt: "Frame from Prada's Spring /Summer 2021 Womenswear YouTube video",
      title: "Sin Thetik",
      content:
        "Richie Hawtin's original soundtrack for Prada's Spring /Summer 2021 Womenswear.",
      tags: "Master",
      path: "/work?project=sin_thetik",
    },
    {
      url: "ovoo",
      ratio: "100%",
      src: "work/ovoo-720.jpg",
      srcset:
        "work/ovoo-480.jpg 480w, work/ovoo-720.jpg 720w, work/ovoo-1080.jpg 1080w",
      alt: "'Ovoo' project artwork",
      title: "Ovoo",
      content:
        "360º visual project by Ali M. Demirel in collaboration with Arts Council of Mongolia and TodaysArt.",
      tags: "Sountrack",
      path: "/work?project=ovoo",
    },
    {
      url: "bold_gestures",
      ratio: "100%",
      src: "work/bold-gestures-720.jpg",
      srcset:
        "work/bold-gestures-480.jpg 480w, work/bold-gestures-720.jpg 720w, work/bold-gestures-1080.jpg 1080w",
      alt: "'Bold Gestures' podcast cover art",
      title: "Bold Gestures",
      content:
        "A podcast where three friends attempt to make sense of this bizarro world and the people who live in it.",
      tags: "Post-Production",
      path: "/work?project=bold_gestures",
    },
    {
      url: "ambrosia",
      ratio: "100%",
      src: "work/ambrosia-720.jpg",
      srcset:
        "work/ambrosia-480.jpg 480w, work/ambrosia-720.jpg 720w, work/ambrosia-1080.jpg 1080w",
      alt: "'Ambrosia' album cover art",
      title: "Ambrosia",
      content: "SOEL's debut album on ORACOLO Records. ",
      tags: "Master",
      path: "/work?project=ambrosia",
    },
    {
      url: "we_gotta_live_together",
      ratio: "100%",
      src: "work/we-gotta-live-together-720.jpg",
      srcset:
        "work/we-gotta-live-together-480.jpg 480w, work/we-gotta-live-together-720.jpg 720w, work/we-gotta-live-together-1080.jpg 1080w",
      alt: "'We Gotta Live Together' album cover art",
      title: "We Gotta Live Together",
      content: "DJ FLAT's debut single.",
      tags: "Master",
      path: "/work?project=we_gotta_live_together",
    },
    {
      url: "glitter_against_terfs",
      ratio: "100%",
      src: "work/glitter-against-terfs-720.jpg",
      srcset:
        "work/glitter-against-terfs-480.jpg 480w, work/glitter-against-terfs-720.jpg 720w, work/glitter-against-terfs-1080.jpg 1080w",
      alt: "'Glitter Against Terfs' EP cover art",
      title: "Glitter Against Terfs",
      content: "Lazy Rosario's fourth EP.",
      tags: "Master",
      path: "/work?project=glitter_against_terfs",
    },
    {
      url: "above_it_all",
      ratio: "100%",
      src: "work/above-it-all-720.jpg",
      srcset:
        "work/above-it-all-480.jpg 480w, work/above-it-all-720.jpg 720w, work/above-it-all-1080.jpg 1080w",
      alt: "'Above It ALL' album cover art",
      title: "Above It All",
      content:
        "Mind Against contribution for Unity — a symbol of togetherness curated by Tale Of Us.",
      tags: "Master",
      path: "/work?project=above_it_all",
    },
    {
      url: "parda",
      ratio: "calc(1414 / 1000 * 100%)",
      src: "work/parda-720.jpg",
      srcset:
        "work/parda-480.jpg 480w, work/parda-720.jpg 720w, work/parda-1080.jpg 1080w",
      alt: "'Parda' documentary cover art",
      title: "Parda",
      content: "A Brazilian documentary, directed by Tai Linhares.",
      tags: "5.1 Mix",
      path: "/work?project=parda",
    },
    {
      url: "love_hurts",
      ratio: "100%",
      src: "work/love-hurts-720.jpg",
      srcset:
        "work/love-hurts-480.jpg 480w, work/love-hurts-720.jpg 720w, work/love-hurts-1080.jpg 1080w",
      alt: "'Love Hurts' single cover art",
      title: "Love Hurts",
      content: "Osaka88's debut single.",
      tags: "Mix, Master",
      path: "/work?project=love_hurts",
    },
    {
      url: "der_hauptbahnhof",
      ratio: "calc(1415 / 1000 * 100%)",
      src: "work/der-hauptbahnhof-720.jpg",
      srcset:
        "work/der-hauptbahnhof-480.jpg 480w, work/der-hauptbahnhof-720.jpg 720w, work/der-hauptbahnhof-1080.jpg 1080w",
      alt: "'Der Hauptbanhof' documentary cover art",
      title: "Der Hauptbanhnof",
      content:
        "A documentary written, directed and filmed by Jordi Garcia Rodriguez.",
      tags: "Sound Design, Post-Production",
      path: "/work?project=der_hauptbahnhof",
    },
    {
      url: "ertrinken",
      ratio: "calc(563 / 1000 * 100%)",
      src: "work/ertrinken-720.jpg",
      srcset:
        "work/ertrinken-480.jpg 480w, work/ertrinken-720.jpg 720w, work/ertrinken-1080.jpg 1080w",
      alt: "Frame from 'Ertrinken' short film",
      title: "Ertrinken",
      content:
        "A short story directed by Pedro Harres and produced by Cléo Campe.",
      tags: "Sound Design",
      path: "/work?project=ertrinken",
    },
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

<div
  class="content-wrapper"
  style="transform: translateY({$scrollYPosition * -1}px)">
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
  {#if $workModalActive === 'pharlight'}
    <WorkModal>
      <iframe
        slot="media"
        title="Introducing PHARLIGHT | Native Instruments"
        src="https://www.youtube.com/embed/lTmvn-Zig5s"
        class="youtube-iframe"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope;
        picture-in-picture"
        allowfullscreen />

      <h2 slot="title" class="body-extra">PHARLIGHT</h2>

      <p slot="year" class="body-bold">2020</p>

      <div slot="tag">
        <Tag tags="Sample Production" />
      </div>

      <p slot="description" class="body-regular description">
        PHARLIGHT is a vocal-based granular instrument for artists, composers,
        musicians, and sound designers, developed by the team behind STRAYLIGHT.
        Its idiosyncratic sample library packs unconventional sounds designed
        and recorded specifically for two unique playback modules. <br /><br /> From
        cinematic soundscapes and pulsating ambiences to haymaker hooks, PHARLIGHT
        is all about injecting incredible sound, imaginative modulation, and organic,
        melodic timbres into your music.
      </p>

      <p slot="quote" class="body-regular quote">
        <span class="body-extra" style="text-transform: uppercase;">
          "Sound designers will love digging down into Pharlight’s synthesis
          engine and sophisticated modulation tools,
        </span>
        <br />
        <br /> while musicians and composers will adore the rich and evolving sound
        and the way Pharlight responds to expressive performance inputs." <br />
        <br />
        <span class="body-bold">Adam Crute @ Music Tech</span>
      </p>

      <p slot="credits" class="body-regular">
        Product Concept, Design, Programming and Production <span class="body-bold">Frank
          Elting</span>
        <br /> Vocal Artists <span class="body-bold">Eva Thärichen, Pat
          Appleton, Ksenija Ladic, Beatboxartist Mando, Anselm Ndoung and Bodek
          Jahnke</span>
        <br /> Sample Content Production <span class="body-bold">
          Frank Elting, Julia Borelli and Arovane
        </span>
        <br /> Library Concept <span class="body-bold"> Frank Elting </span>
        <br /> Sound Presets <span class="body-bold">
          Arovane, Andreas Koslik, Jamie Wilder, Jeremiah Savage, Jeremy
          Leaird-Koch, Joerg Huettner, John Valasis, Ksenija Ladic, Noah Pred,
          Patrick Burniston, The Solos and Frank Elting
        </span>
        <br /> Quality Assurance <span class="body-bold">
          Francesco Sabatini
        </span>
        <br /> Artwork <span class="body-bold"> Maik Siemer </span>
        <br />
        <br />
        <a
          target="_blank"
          rel="noopener"
          class="body-bold"
          href="/about_us?name=joao">
          João Rodrigues
        </a> + <a
          target="_blank"
          rel="noopener"
          class="body-bold"
          href="/about_us?name=julia">
          Julia Borelli
        </a> were responsible for this project.
      </p>
    </WorkModal>
  {:else if $workModalActive === 'sin_thetik'}
    <WorkModal>
      <iframe
        slot="media"
        title="Prada Spring/Summer 2021 Womenswear Show"
        src="https://www.youtube.com/embed/RCQxPSNzU2Q"
        class="youtube-iframe"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope;
        picture-in-picture"
        allowfullscreen />

      <h2 slot="title" class="body-extra">SIN THETIK</h2>

      <p slot="year" class="body-bold">2020</p>

      <div slot="tag">
        <Tag tags="Master" />
      </div>

      <p slot="description" class="body-regular description">
        Richie Hawtin has adopted his Plastikman alias to compose an original
        soundtrack for Prada’s Spring / Summer 2021 Womenswear Show. <br /><br />The
        12-minute track is titled ‘Sin Thetik’, and also arrives alongside a
        20-minute ambient version.
      </p>

      <p slot="quote" class="body-regular quote">
        <span class="body-extra" style="text-transform: uppercase;">
          "...Sin Thetik was created over an intense few weeks and was inspired
          by my conversations with Raf along with directions for Miuccia.
        </span>
        <br />
        <br />The process was new to me, however I always felt the respect and
        openness from Raf and Miuccia to allow me to explore where the sound of
        Plastikman would fit in this new context." <br />
        <br />
        <span class="body-bold">Richie Hawtin</span>
      </p>

      <p slot="credits" class="body-regular">
        Music by <span class="body-bold">Richie Hawtin</span>
        <br /> Master <span class="body-bold">Nadoki Studios</span>
        <br /> Co-Creative Directors <span class="body-bold">
          Raf Simons and Miuccia Prada
        </span>
        <br />
        <br />
        <a
          target="_blank"
          rel="noopener"
          class="body-bold"
          href="/about_us?name=julia">
          Julia Borelli
        </a> was responsible for this project.
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
        allowfullscreen />

      <h2 slot="title" class="body-extra">OVOO</h2>

      <p slot="year" class="body-bold">2020</p>

      <div slot="tag">
        <Tag tags="Soundtrack" />
      </div>

      <p slot="description" class="body-regular description">
        360º visual project (work in progress) by Ali M. Demirel in
        collaboration with Arts Council of Mongolia + TodaysArt. <br />
        <br /> The project was premiered on July 8th at Ulaanbaatar International
        Media Art Festival. <br />
        <br /> We worked together with Carlota Marques and Emilio Arias to create
        a soundscape to this visually immersive experience. No public video of the
        project was published yet.
      </p>

      <p slot="quote" class="body-regular quote">
        <span class="body-extra" style="text-transform: uppercase;">
          "I was invited to Mongolia this summer to produce a new work for
          Ulaanbaatar International Media Art Festival.
        </span>
        <br />
        <br /> Unfortunately my visit couldn’t happen because of the pandemic. However,
        we have decided with the team to start the production process and I have
        created my fantasy of Mongolia with my archive footage from around the world.
        This is the starting point of a work in progress." <br />
        <br />
        <span class="body-bold">Ali M. Demirel</span>
      </p>

      <p slot="credits" class="body-regular">
        Project by <span class="body-bold">Ali M. Demirel</span>
        <br /> Produced by <span class="body-bold">Arts Council of Mongolia +
          TodaysArt</span>
        <br /> Soundtrack by <span class="body-bold">
          Carlota Marques, Emilio Arias and Nadoki Studios
        </span>
        <br />
        <br />
        <a
          target="_blank"
          rel="noopener"
          class="body-bold"
          href="/about_us?name=julia">
          Julia Borelli
        </a> was responsible for this project.
      </p>
    </WorkModal>
  {:else if $workModalActive === 'bold_gestures'}
    <WorkModal>
      <iframe
        slot="media"
        title="'Bold Gestures' by Rich, Hank and Tobi"
        src="https://open.spotify.com/embed-podcast/show/2BJpkoJl24es7GCKvVo8uZ"
        class="spotify-podcast-iframe"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media" />

      <h2 slot="title" class="body-extra">BOLD GESTURES</h2>

      <p slot="year" class="body-bold">2020</p>

      <div slot="tag">
        <Tag tags="Post-Production" />
      </div>

      <p slot="description" class="body-regular description">
        A podcast where three friends attempt to make sense of this bizarro
        world and the people who live in it. Tobi, Hank, and Tobi search their
        minds, every week, for wisdom but will likely offer none. <br />
        <br /> They give opinions that don't matter during desperate times...because
        it matters!
      </p>

      <p slot="credits" class="body-regular">
        Podcasters <span class="body-bold">Rich, Hank and Tobi</span>
        <br /> Produced by <span class="body-bold">VGL Marketing</span>
        <br /> Co-produced by <span class="body-bold">Nadoki Studios</span>
        <br /> Post-production by <span class="body-bold">Nadoki Studios</span>
        <br />
        <br />
        <a
          target="_blank"
          rel="noopener"
          class="body-bold"
          href="/about_us?name=julia">
          Julia Borelli
        </a> is responsible for this project.
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
        allow="encrypted-media" />

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
        Music by <span class="body-bold">SOEL</span>
        <br /> Mixing <span class="body-bold">SOEL</span>
        <br /> Mastering <span class="body-bold">Nadoki Studios</span>
        <br />
        <br />
        <a
          target="_blank"
          rel="noopener"
          class="body-bold"
          href="/about_us?name=joao">
          João Rodrigues
        </a> + <a
          target="_blank"
          rel="noopener"
          class="body-bold"
          href="/about_us?name=julia">
          Julia Borelli
        </a> were responsible for this project.
      </p>
    </WorkModal>
  {:else if $workModalActive === 'we_gotta_live_together'}
    <WorkModal>
      <iframe
        slot="media"
        title="'We Gotta Live Together' by DJ Flat"
        src="https://open.spotify.com/embed/track/0v2IrjcP4tPmMWRkCBSkCk"
        class="spotify-track-iframe"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media" />

      <h2 slot="title" class="body-extra">WE GOTTA LIVE TOGETHER</h2>

      <p slot="year" class="body-bold">2020</p>

      <div slot="tag">
        <Tag tags="Master" />
      </div>

      <p slot="description" class="body-regular description">
        Debut single from Instanbul-born, Berlin-based DJ and producer, DJ FLAT.
      </p>

      <p slot="credits" class="body-regular">
        Music by <span class="body-bold">DJ Flat</span>
        <br /> Mixing <span class="body-bold">DJ Flat</span>
        <br /> Mastering <span class="body-bold">Nadoki Studios</span>
        <br />
        <br />
        <a
          target="_blank"
          rel="noopener"
          class="body-bold"
          href="/about_us?name=elia">
          Elia Bertolaso
        </a> + <a
          target="_blank"
          rel="noopener"
          class="body-bold"
          href="/about_us?name=julia">
          Julia Borelli
        </a> were responsible for this project.
      </p>
    </WorkModal>
  {:else if $workModalActive === 'glitter_against_terfs'}
    <WorkModal>
      <iframe
        slot="media"
        title="'Glitter Against Terfs' EP by Lazy Rozario"
        src="https://open.spotify.com/embed/album/5zWKcWRiCURalAmtGoHJkK"
        class="spotify-album-iframe"
        height="152"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media" />

      <h2 slot="title" class="body-extra">GLITTER AGAINST TERFS</h2>

      <p slot="year" class="body-bold">2020</p>

      <div slot="tag">
        <Tag tags="Master" />
      </div>

      <p slot="description" class="body-regular description">
        Fourth EP from Berlin-based DJ and producer, Lazy Roszario.
      </p>

      <p slot="credits" class="body-regular">
        Music by <span class="body-bold">Lazy Rozario</span>
        <br /> Mixing <span class="body-bold">Lazy Rozario</span>
        <br /> Mastering <span class="body-bold">Nadoki Studios</span>
        <br />
        <br />
        <a
          target="_blank"
          rel="noopener"
          class="body-bold"
          href="/about_us?name=julia">
          Julia Borelli
        </a> was responsible for this project.
      </p>
    </WorkModal>
  {:else if $workModalActive === 'above_it_all'}
    <WorkModal>
      <iframe
        slot="media"
        title="AL037 - Mind Against - Above It All"
        src="https://www.youtube.com/embed/BuLLtZWK-Ds"
        class="youtube-iframe"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope;
        picture-in-picture"
        allowfullscreen />

      <h2 slot="title" class="body-extra">ABOVE IT ALL</h2>

      <p slot="year" class="body-bold">2020</p>

      <div slot="tag">
        <Tag tags="Master" />
      </div>

      <p slot="description" class="body-regular description">
        Out of darkness can only come light. 'Above It All' is one of the
        31-tracks from 'Unity', a symbol of togetherness curated by Tale Of Us,
        including artists already on Afterlife and some new names to the label. <br />
        <br /> Accompanied by a continuous journey through this new music, mixed
        by Tale Of Us, we hope this compilation brings some escape at a challenging
        time.
      </p>

      <p slot="quote" class="body-regular quote">
        <span class="body-extra" style="text-transform: uppercase;">
          "All the tracks in Unity have been carefully selected by Tale Of Us.
        </span>
        <br />
        <br /> The mix includes some amazing tunes from Agents of Time, Stephan Bodzin,
        Fideles, Mathame, Recondite and others. As the records go by, you will find
        yourself immersed in a simphony of Afterlife sounds, where music is the one
        and only way to reach your soul." <br />
        <br />
        <span class="body-bold">Sol Di Tomasso</span>
      </p>

      <p slot="credits" class="body-regular">
        Music by <span class="body-bold">Mind Against</span>
        <br /> Mixing <span class="body-bold">Mind Against</span>
        <br /> Mastering <span class="body-bold">Nadoki Studios</span>
        <br />
        <br />
        <a
          target="_blank"
          rel="noopener"
          class="body-bold"
          href="/about_us?name=elia">
          Elia Bertolaso
        </a> + <a
          target="_blank"
          rel="noopener"
          class="body-bold"
          href="/about_us?name=julia">
          Julia Borelli
        </a> were responsible for this project.
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
          allowfullscreen />
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
        to restore white supremacy. <br />
        <br /> Parda played in Finland during the <span
          class="body-bold">Cinemaissí Festival</span> and in Brazil during the <span
          class="body-bold">Mostra Sesc de Cinema</span> .
      </p>

      <p slot="quote" class="quote body-regular">
        <span class="body-extra" style="text-transform: uppercase;">
          "An authoritarian regime plans to restore white supremacy in Brazil.
        </span>
        <br />
        <br /> Their first act is to demand the return of all white Brazilian citizens
        living abroad. In the midst of this political chaos, Tai needs to prove that
        she is not white, but is faced with uncertainty about her own racial identity.
        The film delves into the ambiguous concept of race in Brazil, exploring the
        traces left by its colonial past and the family history of the director.
        An exploratory journey between fiction and documentary." <br />
        <br />
        <span class="body-bold">Tai Linhares</span>
      </p>

      <p slot="credits" class="body-regular">
        Directed, Written and Produced by <span class="body-bold">Tai Linhares</span>
        <br /> Directors of Photography <span class="body-bold">
          Aline Juárez, Marcos Lamoreux and Sanni Est
        </span>
        <br /> Assistant Director <span class="body-bold">João Xavi</span>
        <br /> Editors <span class="body-bold">Tai Linhares and Sully Ceccopieri</span>
        <br /> Music by <span class="body-bold">The Cosmic Race</span>
        <br /> Location Sound <span class="body-bold">Elissa Brito</span>
        <br /> Sound Editor <span class="body-bold">Caio Cesar Loures</span>
        <br /> 2.0 Mix by <span class="body-bold">Mariana Bahia</span>
        <br /> 5.1 Mix by <span class="body-bold">Nadoki Studios</span>
        <br />
        <br />
        <a
          target="_blank"
          rel="noopener"
          class="body-bold"
          href="/about_us?name=joao">
          João Rodrigues
        </a> + <a
          target="_blank"
          rel="noopener"
          class="body-bold"
          href="/about_us?name=julia">
          Julia Borelli
        </a> were responsible for this project.
      </p>
    </WorkModal>
  {:else if $workModalActive === 'love_hurts'}
    <WorkModal>
      <iframe
        slot="media"
        title="'Love Hurts' by Osaka88"
        src="https://open.spotify.com/embed/track/1ClR5vHqlOlK6fj6hLKnNY"
        class="spotify-track-iframe"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media" />

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
        Lyrics and Performance <span class="body-bold">Osaka88</span>
        <br /> Producer <span class="body-bold">80root</span>
        <br /> Recording <span class="body-bold">Mo$sart</span>
        <br /> Mixing <span class="body-bold">Nadoki Studios</span>
        <br /> Mastering <span class="body-bold">Nadoki Studios</span>
        <br />
        <br />
        <a
          target="_blank"
          rel="noopener"
          class="body-bold"
          href="/about_us?name=joao">
          João Rodrigues
        </a> + <a
          target="_blank"
          rel="noopener"
          class="body-bold"
          href="/about_us?name=julia">
          Julia Borelli
        </a> were responsible for this project.
      </p>
    </WorkModal>
  {:else if $workModalActive === 'der_hauptbahnhof'}
    <WorkModal>
      <div slot="media" style="padding:56.25% 0 0 0;position:relative;">
        <iframe
          title="'Der Hauptbahnhof' by Jordi Garcia Rodriguez"
          src="https://player.vimeo.com/video/265019323"
          class="vimeo-iframe"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen />
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
        <br /> To everyone who prefers to spend time, sweat and tears, rather than
        to spend money. To everyone who believes in deals made with handshakes, rather
        than signatures. To everyone with a burning heart. To everyone who believed
        in a train station in the South African desert. Yes, it happened. Yes, we
        manifested our dream in the sun going down over the horizon. And your energy
        is what keeps the fire burning. You are the ones who put trust into strangers
        without blinking. The ones who keep this spirit that lives deeply in our
        hearts alive and kicking..." <br />
        <br />
        <span class="body-bold">Word from the crew</span>
      </p>

      <p slot="credits" class="body-regular">
        Written, Directed and Filmed by <span class="body-bold">Jordi Garcia
          Rodriguez</span>
        <br /> Text Editor and Narrator <span class="body-bold">Lyz Pfister</span>
        <br /> Sound Mix and Sound Design <span class="body-bold">Claudine
          Fanilia and Nadoki Studios</span>
        <br /> Music <span class="body-bold">
          Cal Kahoone, Thor Rixon with James Tuft, Wagner, Tchaikovsky and
          Xavier
        </span>
        <br /> Drone Footage <span class="body-bold">Skyhook</span>
        <br /> Extra Footage <span class="body-bold">Ryan Frame and Patrick
          Baumhöfer</span>
        <br />
        <br />
        <a
          target="_blank"
          rel="noopener"
          class="body-bold"
          href="/about_us?name=julia">
          Julia Borelli
        </a> was responsible for this project.
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
        allowfullscreen />

      <h2 slot="title" class="body-extra">ERTRINKEN</h2>

      <p slot="year" class="body-bold">2017</p>

      <div slot="tag">
        <Tag tags="Sound Design" />
      </div>

      <p slot="description" class="description body-regular">
        What the ubiquitous flood of images and information actually does. <br />
        <br /> Never before have we been surrounded by so many images, texts, videos
        and bits of information – we could drown in it. <br />
        <br /> A view to the Legacy study: with advancing digitization, the older
        members of the population feel increasingly outpaced by the younger – there
        is no connection. Like the protagonist in this animated film, they go under
        in the flood.
      </p>

      <p slot="quote" class="quote body-regular">
        <span class="body-bold">Synospis</span>
        <br /> Hans is not as young as he used to be. In order to avoid his loneliness,
        he must learn how to swim in the big sea of information that is the Internet
        nowadays. Is he prepared for the overwhelming amount of distractions and
        traps that the online world can offer? <br />
        <br />

        <span class="body-bold">Festivals</span>
        <br /> — Open-Air Filmfest Weiterstadt 2018 <br /> — Open World Animation
        Festival 2018 <br /> — BIT BANG 2018 <br /> — International Tour Film Fest
        2018 <br />
        <br />

        <span class="body-bold">Prizes</span>
        <br /> Die Zeit Short Film Competition “Die Welt, die wir uns wünschen. Die
        Filme zur großen Vermächtnisstudie”, Public Prize – Best Short
      </p>

      <p slot="credits" class="body-regular">
        Director <span class="body-bold">Pedro Harres</span>
        <br /> Executive Producer <span class="body-bold">Cléo Campe</span>
        <br /> Assistant Direction and Storyboard <span class="body-bold">Maria
          Teixeira</span>
        <br /> Sound Design <span class="body-bold">Nadoki Studios</span>
        <br />
        <br />
        <a
          target="_blank"
          rel="noopener"
          class="body-bold"
          href="/about_us?name=julia">
          Julia Borelli
        </a> was responsible for this project.
      </p>
    </WorkModal>
  {/if}
</div>
