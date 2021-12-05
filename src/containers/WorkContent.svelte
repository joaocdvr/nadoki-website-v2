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
  import workContent from '../content/work'

  onMount(() => {
    const url = new URL(document.location)
    const projectParam = url.searchParams.get('project')

    if (workContent.filter((work) => work.url === projectParam)) {
      handleWorkModalClick(projectParam)
    }

    window.addEventListener('popstate', function () {
      const url = new URL(document.location)
      const projectParam = url.searchParams.get('project')
      if (workContent.filter((work) => work.url === projectParam)) {
        setWorkModalActive(projectParam)
      } else {
        setWorkModalActive('')
      }
      return
    })
  })

  $: isAnyWorkModalActive = !!$workModalActive
</script>

<div
  class="content-wrapper"
  style="transform: translateY({$scrollYPosition * -1}px)"
>
  <Header variant="work" />
  <Card cards={workContent} variant="work" />
  <Footer />
</div>

<div class="modal-wrapper" class:modal-is-visible={isAnyWorkModalActive}>
  {#each workContent.filter((work) => work.url === $workModalActive) as work}
    <WorkModal>
      <div
        slot="media"
        style={work.mediaSrc.startsWith('https://player.vimeo.com/video') &&
          'padding:56.25% 0 0 0;position:relative;'}
      >
        <iframe
          title={work.mediaTitle}
          src={work.mediaSrc}
          class={work.mediaSrc.startsWith('https://www.youtube.com/embed')
            ? 'youtube-iframe'
            : work.mediaSrc.startsWith('https://open.spotify.com/embed/album')
            ? 'spotify-album-iframe'
            : work.mediaSrc.startsWith('https://open.spotify.com/embed/track')
            ? 'spotify-track-iframe'
            : work.mediaSrc.startsWith('https://open.spotify.com/embed-podcast')
            ? 'spotify-podcast-iframe'
            : work.mediaSrc.startsWith('https://www.instagram.com')
            ? 'instagram-iframe'
            : work.mediaSrc.startsWith('https://player.vimeo.com/video')
            ? 'vimeo-iframe'
            : ''}
          style={!work.mediaSrc && 'display: none'}
          height={work.mediaHeight | ''}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope;
picture-in-picture"
          allowfullscreen
        />
      </div>

      <h2 slot="title" class="body-extra">{work.title.toUpperCase()}</h2>

      <p slot="year" class="body-bold">{work.year}</p>

      <div slot="tag">
        <Tag tags={work.tags} />
      </div>

      <p
        slot="description"
        class="body-regular description"
        style={!work.description && 'display: none'}
      >
        {#each work.description as description}
          <span>{description}</span>
        {/each}
      </p>

      <p
        slot="quote"
        class="body-regular quote"
        style={!work.quote && 'display: none'}
      >
        {#if work.quote}
          <span class="body-extra" style="text-transform: uppercase;">
            "{work.quote.highlight}
          </span>
          <br />
          <br />
          {work.quote.rest}"
          <br />
          <br />
          <span class="body-bold">{work.quote.author}</span>
        {/if}
      </p>

      <p slot="credits" class="body-regular">
        {#each work.credits as credited}
          {credited.role}
          <span class="body-bold">{credited.people}</span>
          <br />
        {/each}
        <br />

        {#each work.teamMembers as member, i}
          {i > 0 ? ' + ' : ''}

          <a
            target="_blank"
            rel="noopener"
            class="body-bold"
            href={member.startsWith('Elia')
              ? '/about_us?name=elia'
              : member.startsWith('João')
              ? '/about_us?name=joao'
              : member.startsWith('Julia')
              ? '/about_us?name=julia'
              : ''}>
            {member}
          </a>
        {/each}

        {work.teamMembers.length > 1 ? 'were' : 'was'} responsible for this project.
      </p>
    </WorkModal>
  {/each}
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

  .description {
    display: grid;
    grid-gap: 1.5rem;
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
