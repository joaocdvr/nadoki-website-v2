<script>
  import { scrollYPosition } from '../utensils/stores.js'
  import Header from '../components/Header.svelte'
  import Card from '../components/Card.svelte'
  import Footer from '../components/Footer.svelte'

  let studioCards = [
    {
      src: 'studio/nadoki-studios-720.jpg',
      srcset:
        'studio/nadoki-studios-480.jpg 480w, studio/nadoki-studios-720.jpg 720w, studio/nadoki-studios-1080.jpg 1080w',
      ratio: 'calc(810 / 1080 * 100%)',
      alt:
        "Nadoki studio, at Riverside Studios (Berlin), being lit by blue light. On the left, there is a stand with MIDI keyboards and synthesizers. In the middle, there's a black office chair facing a black studio desk equipped with a computer screen, outboard gear, and two pairs of speakers. On the right, there are two guitars on a stand and a guitar amplifier. The studio walls and ceiling are full of acoustic panels.",
      title: 'Nadoki',
      content:
        'We are a mixing and mastering studio located at Riverside Studios. Nadoki was founded in 2019 after four educated engineers united to bring a fresh new start to the industry. With our hybrid analog + digital approach, we have the tools and ears to make your idea sound as it deserves.<br><br>Our control room is equipped with multiple pairs of speakers, outboard gear, instruments, and synthesizers. Our mixing and mastering suite is also a perfect option for producing and writing sessions.',
      tags: '',
    },
    {
      src: 'studio/studio-10-720.jpg',
      srcset:
        'studio/studio-10-480.jpg 480w, studio/studio-10-720.jpg 720w, studio/studio-10-1080.jpg 1080w',
      ratio: 'calc(755 / 1080 * 100%)',
      alt:
        "Studio 10, at Riverside Studios (Berlin). Closer to the entrance, on the left, there is a black office chair facing a wooden studio desk with a computer screen, a computer keyboard, a MIDI keyboard, outboard gear, and a pair of speakers. On the back, there's a black couch with a small guitar on top of it and a small white table on it's right.",
      title: 'Studio 10',
      content:
        'Studio 10 is our tracking booth for vocals and overdub recordings. It is the perfect space for smaller-scaled projects.',
      tags: '',
    },
    {
      src: 'studio/the-lab-720.jpg',
      srcset:
        'studio/the-lab-480.jpg 480w, studio/the-lab-720.jpg 720w, studio/the-lab-1080.jpg 1080w',
      ratio: 'calc(560 / 1080 * 100%)',
      alt:
        "The Lab, at Riverside Studios (Berlin), being lit by blue and red lights. The ceiling is full of pipes and cables, there's a a collumn on the right and, on the back, there's a pair of big speakers and a door. Most of the room is empty.",
      title: 'The Lab',
      content:
        'The Riverside eventspace is a flexible 100+ m² live tracking room that is perfect for a full band, orchestra, or choir recording.',
      tags: '',
    },
    {
      src: 'studio/riverside-720.jpg',
      srcset:
        'studio/riverside-480.jpg 480w, studio/riverside-720.jpg 720w, studio/riverside-1080.jpg 1080w',
      ratio: 'calc(675 / 1080 * 100%)',
      alt:
        "Riverside Studios (Berlin) main common area. There's big wooden table on the left with benches on both sides. On the right there's a semi-open door followed by a big red vintage couch. In the middle, at the back of the room, there's a grand piano with it's cover open next to a big brick collumn.",
      title: 'Riverside Studios',
      content:
        'We are part of the Riverside Studio complex, a unique collective of renowned artists and professionals located in Berlin’s Media Spree, right by the water, neighboring most of the industry’s leaders.',
      tags: '',
      link: true,
      path: 'https://riversidestudios.de/',
    },
  ]
</script>

<div
  class="content-wrapper"
  style="transform: translateY({$scrollYPosition * -1}px)"
>
  <Header variant="studio" />
  <Card cards={studioCards} variant="studio" />
  <Footer />
</div>

<style>
  .content-wrapper {
    margin-top: 4.5rem;
    background-color: var(--main-color);
  }
</style>
