<script>
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  import Card from "../components/Card.svelte";
  import { handleWorkClick } from "../components/stores.js";
  import { onMount } from "svelte";

  onMount(() => {
    handleWorkClick();
  });

  let cards = [
    {
      src: "work/above_it_all.jpg",
      alt: "'Above It ALL' album cover art",
      title: "ABOVE IT ALL",
      content: "Song by Mind Against.",
      tags: "Master"
    },
    {
      src: "work/parda.jpg",
      alt: "'Parda' documentary cover art",
      title: "PARDA",
      content: "A Brazilian documentary, directed by Tai Linhares.",
      tags: "5.1 Mix"
    },
    {
      src: "work/love_hurts.jpg",
      alt: "'Love Hurts' single cover art",
      title: "LOVE HURTS",
      content: "Song by Osaka88.",
      tags: "Mix, Master"
    },
    {
      src: "work/der_hauptbanhof.jpg",
      alt: "'Der Hauptbanhof' documentary cover art",
      title: "DER HAUPTBANHOF",
      content:
        "A documentary written, directed and filmed by Jordi Garcia Rodriguez.",
      tags: "Sound Design, Post-Production"
    },
    {
      src: "work/ertrinken.jpg",
      alt: "Frame from 'Ertrinken' short film",
      title: "ERTRINKEN",
      content:
        "A short story directed by Pedro Harres and produced by Cléo Campe.",
      tags: "Sound Design"
    },
    {
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

</style>

<Header />
<ul>
  {#each cards as card}
    <Card {card} />
  {/each}
</ul>
<Footer />
