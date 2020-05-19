<script>
  import { onMount } from "svelte";
  import { scrollYPosition } from "../utensils/stores.js";
  import { workModalActive, setWorkModalActive } from "../utensils/stores.js";
  import Header from "../components/Header.svelte";
  import Card from "../components/Card.svelte";
  import WorkModal from "./WorkModal.svelte";
  import Tag from "../components/Tag.svelte";
  import Footer from "../components/Footer.svelte";

  onMount(() => {
    const url = new URL(document.location);
    const projectParam = url.searchParams.get("project");
    if (
      [
        "above_it_all",
        "parda",
        "love_hurts",
        "der_hauptbahnhof",
        "ertrinken",
        "a_juventude_por_ela_própria"
      ].includes(projectParam)
    ) {
      handleWorkModalClick(projectParam);
    }
  });

  $: isAnyItemActive = !!$workModalActive;

  $: isWorkModalActive = name => {
    return $workModalActive === name;
  };

  let workCards = [
    {
      url: "above_it_all",
      src: "work/above_it_all.jpg",
      alt: "'Above It ALL' album cover art",
      title: "ABOVE IT ALL",
      content: "Song by Mind Against.",
      tags: "Master"
    },
    {
      url: "parda",
      src: "work/parda.jpg",
      alt: "'Parda' documentary cover art",
      title: "PARDA",
      content: "A Brazilian documentary, directed by Tai Linhares.",
      tags: "5.1 Mix"
    },
    {
      url: "love_hurts",
      src: "work/love_hurts.jpg",
      alt: "'Love Hurts' single cover art",
      title: "LOVE HURTS",
      content: "Song by Osaka88.",
      tags: "Mix, Master"
    },
    {
      url: "der_hauptbahnhof",
      src: "work/der_hauptbahnhof.jpg",
      alt: "'Der Hauptbanhof' documentary cover art",
      title: "DER HAUPTBAHNHOF",
      content:
        "A documentary written, directed and filmed by Jordi Garcia Rodriguez.",
      tags: "Sound Design, Post-Production"
    },
    {
      url: "ertrinken",
      src: "work/ertrinken.jpg",
      alt: "Frame from 'Ertrinken' short film",
      title: "ERTRINKEN",
      content:
        "A short story directed by Pedro Harres and produced by Cléo Campe.",
      tags: "Sound Design"
    },
    {
      url: "a_juventude_por_ela_própria",
      src: "work/a_juventude_por_ela_própria.jpg",
      alt: "Frame from 'A juventude por ela própria' documentary",
      title: "A JUVENTUDE POR ELA PRÓPRIA",
      content:
        "A documentary produced by Agora, irrepetível. and edited by Guilherme Sousa.",
      tags: "Soundtrack"
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

  .cards-are-hidden {
    overflow: hidden;
    max-height: 100vh;
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .description {
    padding: 1.5rem 0 2.5rem 0;
    border-bottom: 0.0625rem solid var(--main-color);
  }

  .quote {
    padding-top: 1.5rem;
  }
</style>

<div
  class:cards-are-hidden={isAnyItemActive}
  style="transform: translateY({$scrollYPosition * -1}px)">
  <Header />
  <Card cards={workCards} />
  <Footer />
</div>

<div class="modal-wrapper" class:modal-is-visible={isAnyItemActive}>
  {#if isWorkModalActive('above_it_all')}
    <WorkModal>
      <iframe
        slot="media"
        title="'Above It All' by Mind Against"
        src="https://www.youtube.com/embed/BuLLtZWK-Ds"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope;
        picture-in-picture"
        allowfullscreen />
      <span slot="title">ABOVE IT ALL</span>
      <span slot="year">2019</span>
      <div slot="tag">
        <Tag tags="Master" />
      </div>
    </WorkModal>
  {:else if isWorkModalActive('parda')}
    <WorkModal>
      <iframe
        slot="media"
        title="'Parda' by Tai Linhares"
        SameSite="None"
        Secure
        src="https://player.vimeo.com/video/307440642"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen />

      <span slot="title">PARDA</span>

      <span slot="year">2019</span>

      <div slot="tag">
        <Tag tags="5.1 Mix" />
      </div>

      <span slot="description">
        <p class="description">
          We had the pleasure to do the 5.1 mix of this touching independent
          movie from the Brazilian filmmaker and director Tai Linhares. It
          questions race and self-identification midst of an authoritarian
          regime that plans to restore white supremacy.
          <br />
          <br />
          Parda played in Finland during the
          <span class="body-bold">Cinemaissí Festival</span>
          and in Brazil during the
          <span class="body-bold">Mostra Sesc de Cinema</span>
          .«
        </p>
      </span>

      <span slot="quote">
        <p class="quote">
          <span class="body-extra">
            “An authoritarian regime plans to restore white supremacy in Brazil.
          </span>
          <br />
          <br />
          Their first act is to demand the return of all white Brazilian
          citizens living abroad. In the midst of this political chaos, Tai
          needs to prove that she is not white, but is faced with uncertainty
          about her own racial identity. The film delves into the ambiguous
          concept of race in Brazil, exploring the traces left by its colonial
          past and the family history of the director. An exploratory journey
          between fiction and documentary.”
          <br />
          <br />
          <span class="body-bold">Tai Linhares</span>
        </p>
      </span>

      <span slot="credits">
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
  {:else if isWorkModalActive('love_hurts')}
    <WorkModal>
      <iframe
        slot="media"
        title="'Love Hurts' by Osaka88"
        src="https://open.spotify.com/embed/track/1ClR5vHqlOlK6fj6hLKnNY"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media" />
      <span slot="title">LOVE HURTS</span>
      <span slot="year">2019</span>
      <div slot="tag">
        <Tag tags="Mix, Master" />
      </div>
    </WorkModal>
  {:else if isWorkModalActive('der_hauptbahnhof')}
    <WorkModal>
      <iframe
        slot="media"
        title="'Der Hauptbahnhof' by Jordi Garcia Rodriguez"
        SameSite="None"
        src="https://player.vimeo.com/video/265019323"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen />
      <span slot="title">DER HAUPTBANHOF</span>
      <span slot="year">2018</span>
      <div slot="tag">
        <Tag tags="Sound Design, Post-Production" />
      </div>
    </WorkModal>
  {:else if isWorkModalActive('ertrinken')}
    <WorkModal>
      <iframe
        slot="media"
        title="'Ertrinken' by Pedro Harres"
        src="https://www.youtube.com/embed/aeJUNTx6fio"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope;
        picture-in-picture"
        allowfullscreen />
      <span slot="title">ERTRINKEN</span>
      <span slot="year">2017</span>
      <div slot="tag">
        <Tag tags="Sound Design" />
      </div>
    </WorkModal>
  {:else if isWorkModalActive('a_juventude_por_ela_própria')}
    <WorkModal>
      <iframe
        slot="media"
        title="'A juventude por ela própria' by Agora Irrepetível"
        src="https://www.youtube.com/embed/iSD3Gwa0oLs"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope;
        picture-in-picture"
        allowfullscreen />
      <span slot="title">A JUVENTUDE POR ELA PRÓPRIA</span>
      <span slot="year">2015</span>
      <div slot="tag">
        <Tag tags="Soundtrack" />
      </div>
    </WorkModal>
  {/if}
</div>
