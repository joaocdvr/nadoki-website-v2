<script>
  import { scrollYPosition } from "../utensils/stores.js";
  import Header from "../components/Header.svelte";
  import Card from "../components/Card.svelte";
  import Footer from "../components/Footer.svelte";

  let studioCards = [
    {
      src: "studio/nadoki_studios_1.jpg",
      alt: "Nadoki Studios picture nº1",
      title: "Nadoki",
      size: "20m²",
      content:
        "Our control room is equipped with multiple pairs of speakers, outboard gear, instruments and synthesizers. This mixing and mastering suite is also a perfect option for producing and writing sessions.",
      tags: ""
    },
    {
      src: "studio/riverside_1.jpg",
      alt: "Riverside Studios picture nº1",
      title: "Riverside Studios",
      size: "1700m²",
      content:
        "The complex we are located at, is a unique collective of renowned artists and professionals located in Berlin’s Media Spree, right by the water, neighboring most of the industry’s leaders. ",
      tags: ""
    },
    {
      src: "studio/the_lab_1.jpg",
      alt: "The Lab picture nº1",
      title: "The Lab",
      size: "100m²",
      content:
        "It is a flexible live tracking room that is perfect for a band, orchestra or choir recording.",
      tags: ""
    },
    {
      src: "studio/studio_10.jpg",
      alt: "Studio 10 picture nº1",
      title: "Studio 10",
      size: "20m²",
      content:
        "The perfect space for tracking vocals or overdubs. Great fit for lower-budget projects.",
      tags: ""
    }
  ];
</script>

<div style="transform: translateY({$scrollYPosition * -1}px)">
  <Header variant="studio" />
  <Card cards={studioCards} variant="studio" />
  <Footer />
</div>
