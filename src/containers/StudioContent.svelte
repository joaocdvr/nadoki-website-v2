<script>
  import { scrollYPosition } from "../utensils/stores.js";
  import Header from "../components/Header.svelte";
  import Card from "../components/Card.svelte";
  import Footer from "../components/Footer.svelte";

  let studioCards = [
    {
      src: "studio/nadoki_studios_1.jpg",
      ratio: "calc(810 / 1080 * 100%)",
      alt: "Nadoki Studios picture nº1",
      title: "Nadoki",
      content:
        "We are a mixing and mastering studio located at Riverside Studios. Our studio was founded in 2019 after four educated engineers united to bring a fresh new start to the industry. With our hybrid analog + digital approach, we have the tools and ears to make your idea sound as it deserves.<br><br>Our control room is equipped with multiple pairs of speakers, outboard gear, instruments and synthesizers. Our mixing and mastering suite is also a perfect option for producing and writing sessions.",
      tags: ""
    },
    {
      src: "studio/the_lab_1.jpg",
      ratio: "calc(560 / 1080 * 100%)",
      alt: "The Lab picture nº1",
      title: "The Lab",
      content:
        "The Riverside eventspace is a flexible live tracking room that is perfect for a full band, orchestra, or choir recording",
      tags: ""
    },
    {
      src: "studio/studio_10.jpg",
      ratio: "calc(755 / 1080 * 100%)",
      alt: "Studio 10 picture nº1",
      title: "Studio 10",
      content:
        "Studio 10 is our tracking booth for vocals and overdubs recordings. It is the perfect space for smaller-scaled projects.",
      tags: ""
    },

    {
      src: "studio/riverside_1.jpg",
      ratio: "calc(675 / 1080 * 100%)",
      alt: "Riverside Studios picture nº1",
      title: "Riverside Studios",
      content:
        "The complex we are located at is a unique collective of renowned artists and professionals located in Berlin’s Media Spree, right by the water, neighboring most of the industry’s leaders. ",
      tags: "",
      link: true,
      linkHref: "https://riversidestudios.de/"
    }
  ];
</script>

<style>
  .content-wrapper {
    margin-top: 4.5rem;
    background-color: var(--main-color);
  }
</style>

<div
  class="content-wrapper"
  style="transform: translateY({$scrollYPosition * -1}px)">
  <Header variant="studio" />
  <Card cards={studioCards} variant="studio" />
  <Footer />
</div>
