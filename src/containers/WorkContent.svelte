<script>
  import { onMount } from "svelte";
  import { workModalActive, setWorkModalActive } from "../utensils/stores.js";
  import Card from "../components/Card.svelte";
  import WorkModal from "./WorkModal.svelte";
  import Tag from "../components/Tag.svelte";

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

  function handleWorkModalClick(name) {
    const newUrl = `${window.location.pathname}?project=${name}`;
    window.history.pushState("", "", newUrl);
    setWorkModalActive(name);
  }

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
  .modal {
    position: fixed;
    top: 0;
    left: 100vw;
    background-color: var(--light);
    z-index: 2;
    transition: left 300ms ease-in-out;
  }

  .modal-is-visible {
    left: 0;
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .description {
    margin-top: 1.5rem;
  }
</style>

<Card cards={workCards} />

<div class="modal" class:modal-is-visible={isAnyItemActive}>
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
          .
        </p>
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
        allow="encrypted-media"
        data-mce-fragment="1" />
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
