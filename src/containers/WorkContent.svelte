<script>
  import { onMount } from "svelte";
  import { get } from "svelte/store";
  import {
    scrollYPosition,
    workModalActive,
    setWorkModalActive,
    handleWorkModalClick
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

    window.addEventListener("popstate", function() {
      const url = new URL(document.location);
      const nameParam = url.searchParams.get("project");
      if (workSubpages.includes(nameParam)) {
        setWorkModalActive(nameParam);
      } else {
        setWorkModalActive("");
      }
      return;
    });
  });

  const workSubpages = [
    "we_gotta_live_together",
    "glitter_against_terfs",
    "above_it_all",
    "parda",
    "love_hurts",
    "der_hauptbahnhof",
    "ertrinken",
    "a_juventude_por_ela_própria"
  ];

  $: isAnyWorkModalActive = !!$workModalActive;

  let workCards = [
    {
      url: "we_gotta_live_together",
      ratio: "100%",
      src: "work/we_gotta_live_together.jpg",
      alt: "'We Gotta Live Together' album cover art",
      title: "We Gotta Live Together",
      content: "Song by DJ FLAT.",
      tags: "Master"
    },
    {
      url: "glitter_against_terfs",
      ratio: "100%",
      src: "work/glitter_against_terfs.jpg",
      alt: "'Glitter Against Terfs' album cover art",
      title: "Glitter Against Terfs",
      content: "EP by Lazy Rosario.",
      tags: "Master"
    },
    {
      url: "above_it_all",
      ratio: "100%",
      src: "work/above_it_all.jpg",
      alt: "'Above It ALL' album cover art",
      title: "Above It All",
      content: "Song by Mind Against.",
      tags: "Master"
    },
    {
      url: "parda",
      ratio: "calc(1527 / 1080 * 100%)",
      src: "work/parda.jpg",
      alt: "'Parda' documentary cover art",
      title: "Parda",
      content: "A Brazilian documentary, directed by Tai Linhares.",
      tags: "5.1 Mix"
    },
    {
      url: "love_hurts",
      ratio: "100%",
      src: "work/love_hurts.jpg",
      alt: "'Love Hurts' single cover art",
      title: "Love Hurts",
      content: "Song by Osaka88.",
      tags: "Mix, Master"
    },
    {
      url: "der_hauptbahnhof",
      ratio: "calc(1528 / 1080 * 100%)",
      src: "work/der_hauptbahnhof.jpg",
      alt: "'Der Hauptbanhof' documentary cover art",
      title: "Der Hauptbanhnof",
      content:
        "A documentary written, directed and filmed by Jordi Garcia Rodriguez.",
      tags: "Sound Design, Post-Production"
    },
    {
      url: "ertrinken",
      ratio: "calc(1080 / 1920 * 100%)",
      src: "work/ertrinken.jpg",
      alt: "Frame from 'Ertrinken' short film",
      title: "Ertrinken",
      content:
        "A short story directed by Pedro Harres and produced by Cléo Campe.",
      tags: "Sound Design"
    },
    {
      url: "a_juventude_por_ela_própria",
      ratio: "calc(1080 / 1920 * 100%)",
      src: "work/a_juventude_por_ela_própria.jpg",
      alt: "Frame from 'A juventude por ela própria' documentary",
      title: "A juventude por ela própria",
      content:
        "A documentary produced by Agora, irrepetível. and edited by Guilherme Sousa.",
      tags: "Soundtrack"
    }
  ];
</script>

<style>
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
    backface-visibility: hidden;
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

  .spotify-iframe {
    width: 100%;
    height: calc(100vw + 80px);
  }

  @media (--max-content-width) {
    .spotify-iframe {
      padding: 0 1.5rem;
      height: calc(var(--max-width) - 6rem);
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
  {#if $workModalActive === 'we_gotta_live_together'}
    <WorkModal>
      <iframe
        slot="media"
        title="'We Gotta Live Together' by DJ Flat"
        src="https://open.spotify.com/embed/track/0v2IrjcP4tPmMWRkCBSkCk"
        class="spotify-iframe"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media" />

      <h2 slot="title" class="body-extra">WE GOTTA LIVE TOGETHER</h2>

      <p slot="year" class="body-bold">2020</p>

      <div slot="tag">
        <Tag tags="Master" />
      </div>

      <span slot="credits" class="body-regular">
        Music by
        <span class="body-bold">DJ Flat</span>
        <br />
        Mixing
        <span class="body-bold">DJ Flat</span>
        <br />
        Mastering
        <span class="body-bold">Nadoki Studios</span>
      </span>
    </WorkModal>
  {:else if $workModalActive === 'glitter_against_terfs'}
    <WorkModal>
      <iframe
        slot="media"
        title="'Glitter Against Terfs' by Lazy Rozario"
        src="https://open.spotify.com/embed/track/3ZUxwyfhShxKdaBHYJkyXl"
        class="spotify-iframe"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media" />

      <h2 slot="title" class="body-extra">GLITTER AGAINST TERFS</h2>

      <p slot="year" class="body-bold">2020</p>

      <div slot="tag">
        <Tag tags="Master" />
      </div>

      <span slot="credits" class="body-regular">
        Music by
        <span class="body-bold">Lazy Rozario</span>
        <br />
        Mixing
        <span class="body-bold">Lazy Rozario</span>
        <br />
        Mastering
        <span class="body-bold">Nadoki Studios</span>
      </span>
    </WorkModal>
  {:else if $workModalActive === 'above_it_all'}
    <WorkModal>
      <iframe
        slot="media"
        title="'Above It All' by Mind Against"
        src="https://www.youtube.com/embed/BuLLtZWK-Ds"
        class="youtube-iframe"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope;
        picture-in-picture"
        allowfullscreen />

      <h2 slot="title" class="body-extra">ABOVE IT ALL</h2>

      <p slot="year" class="body-bold">2019</p>

      <div slot="tag">
        <Tag tags="Master" />
      </div>

      <p slot="description" class="body-regular description">
        Out of darkness can only come light. 'Above It All' is one of the
        31-tracks from 'Unity', a symbol of togetherness curated by Tale Of Us,
        including artists already on Afterlife and some new names to the label.
        Accompanied by a continuous journey through this new music, mixed by
        Tale Of Us, we hope this compilation brings some escape at a challenging
        time.
      </p>

      <p slot="quote" class="body-regular quote">
        <span class="body-extra" style="text-transform: uppercase;">
          "All the tracks in Unity have been carefully selected by Tale Of Us.
        </span>
        <br />
        <br />
        The mix includes some amazing tunes from Agents of Time, Stephan Bodzin,
        Fideles, Mathame, Recondite and others. As the records go by, you will
        find yourself immersed in a simphony of Afterlife sounds, where music is
        the one and only way to reach your soul."
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
        Their first act is to demand the return of all white Brazilian citizens
        living abroad. In the midst of this political chaos, Tai needs to prove
        that she is not white, but is faced with uncertainty about her own
        racial identity. The film delves into the ambiguous concept of race in
        Brazil, exploring the traces left by its colonial past and the family
        history of the director. An exploratory journey between fiction and
        documentary."
        <br />
        <br />
        <span class="body-bold">Tai Linhares</span>
      </p>

      <span slot="credits" class="body-regular">
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
      </span>
    </WorkModal>
  {:else if $workModalActive === 'love_hurts'}
    <WorkModal>
      <iframe
        slot="media"
        title="'Love Hurts' by Osaka88"
        src="https://open.spotify.com/embed/track/1ClR5vHqlOlK6fj6hLKnNY"
        class="spotify-iframe"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media" />

      <h2 slot="title" class="body-extra">LOVE HURTS</h2>

      <p slot="year" class="body-bold">2019</p>

      <div slot="tag">
        <Tag tags="Mix, Master" />
      </div>

      <span slot="credits" class="body-regular">
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
      </span>
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
        <br />
        To everyone who prefers to spend time, sweat and tears, rather than to
        spend money. To everyone who believes in deals made with handshakes,
        rather than signatures. To everyone with a burning heart. To everyone
        who believed in a train station in the South African desert. Yes, it
        happened. Yes, we manifested our dream in the sun going down over the
        horizon. And your energy is what keeps the fire burning. You are the
        ones who put trust into strangers without blinking. The ones who keep
        this spirit that lives deeply in our hearts alive and kicking..."
        <br />
        <br />
        <span class="body-bold">Word from the crew</span>
      </p>

      <span slot="credits" class="body-regular">
        Written, Directed and Filmed by
        <span class="body-bold">Jordi Garcia Rodriguez</span>
        <br />
        Text Editor and Narrator
        <span class="body-bold">Lyz Pfister</span>
        <br />
        Sound Mix and Sound Design
        <span class="body-bold">Nadoki Studios and Claudine Fanilia</span>
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
      </span>
    </WorkModal>
  {:else if $workModalActive === 'ertrinken'}
    <WorkModal>
      <iframe
        slot="media"
        title="'Ertrinken' by Pedro Harres"
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
        What the ubiquitous flood of images and information actually does.
        <br />
        <br />
        Never before have we been surrounded by so many images, texts, videos
        and bits of information – we could drown in it.
        <br />
        <br />
        A view to the Legacy study: with advancing digitization, the older
        members of the population feel increasingly outpaced by the younger –
        there is no connection. Like the protagonist in this animated film, they
        go under in the flood.
      </p>

      <p slot="quote" class="quote body-regular">
        <span class="body-bold">Synospis</span>
        <br />
        Hans is not as young as he used to be. In order to avoid his loneliness,
        he must learn how to swim in the big sea of information that is the
        Internet nowadays. Is he prepared for the overwhelming amount of
        distractions and traps that the online world can offer?
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
        Die Zeit Short Film Competition “Die Welt, die wir uns wünschen. Die
        Filme zur großen Vermächtnisstudie”, Public Prize – Best Short
      </p>

      <span slot="credits" class="body-regular">
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
      </span>
    </WorkModal>
  {:else if $workModalActive === 'a_juventude_por_ela_própria'}
    <WorkModal>
      <iframe
        slot="media"
        title="'A juventude por ela própria' by Agora Irrepetível"
        src="https://www.youtube.com/embed/iSD3Gwa0oLs"
        class="youtube-iframe"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope;
        picture-in-picture"
        allowfullscreen />

      <h2 slot="title" class="body-extra">A JUVENTUDE POR ELA PRÓPRIA</h2>

      <p slot="year" class="body-bold">2015</p>

      <div slot="tag">
        <Tag tags="Soundtrack" />
      </div>

      <p slot="description" class="quote body-regular">
        In 2015, the project of the students of Communication Design at FBAUL
        consisted of the theme “Youth on the Move”. Fourteen working groups gave
        very different responses to the initial motto, through projects that
        addressed issues related to education, current political and social
        context, as well as this generation’s youth. On the day of the
        assessment, we asked one member of each group to talk about the
        experience of working on this topic and the testimonies of the students
        were brought together in this document.
      </p>

      <span slot="credits" class="body-regular">
        Realization
        <span class="body-bold">Agora, irrepetível.</span>
        <br />
        Editing
        <span class="body-bold">Guilherme Sousa</span>
        <br />
        Soundtrack
        <span class="body-bold">Nadoki Studios and Mariana Freitas</span>
      </span>
    </WorkModal>
  {/if}
</div>
