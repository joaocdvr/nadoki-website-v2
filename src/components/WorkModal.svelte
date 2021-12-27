<script>
  import { fade } from 'svelte/transition'
  import {
    animationInDelay,
    animationInDuration,
    animationInEasing,
    animationOutDuration,
    animationOutEasing,
    resetWorkModalActive,
  } from '../utensils/stores.js'
  import ModalNav from '../components/ModalNav.svelte'
  import Footer from '../components/Footer.svelte'

  function handleBackClick(event, callback) {
    event.preventDefault()
    callback
  }
</script>

<div>
  <ModalNav
    on:click={(event) => handleBackClick(event, resetWorkModalActive())}
    title="Work"
    path="/work"
    label="Back to work"
  />
  <main
    in:fade={{
      delay: $animationInDelay,
      duration: $animationInDuration,
      easing: $animationInEasing,
    }}
    out:fade={{
      delay: $animationInDelay,
      duration: $animationOutDuration,
      easing: $animationOutEasing,
    }}
  >
    <slot name="media" />
    <article>
      <div class="work-modal-content-wrapper">
        <slot name="title" />

        <slot name="year" />

        <slot name="tag" />

        <slot name="description" />
      </div>

      <div class="credits-wrapper">
        <slot name="credits" />
      </div>
    </article>
  </main>
  <Footer delay={$animationInDelay} />
</div>

<style>
  main {
    width: 100%;
  }

  @media (--max-content-width) {
    main {
      max-width: var(--max-width);
      transform: translateX(calc(50vw - var(--max-width) / 2));
      padding: 1.5rem 4rem 0;
    }
  }

  article {
    padding: 1.5rem 1.5rem 2.5rem;
  }

  .credits-wrapper {
    margin-top: 2.5rem;
  }

  :global(.work-modal-content-wrapper p) {
    margin-top: 2.5rem;
    border-bottom: 2px solid var(--dark);
    padding-bottom: 2.5rem;
  }

  :global(.work-modal-content-wrapper h2 + p) {
    /* p inside modal always has margin-top except when p is below h2 */
    margin-top: 0.5rem;
    border-bottom: 0;
    padding: 0;
  }
</style>
