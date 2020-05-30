<script>
  import { fade } from "svelte/transition";
  import {
    animationInDelay,
    animationInDuration,
    animationInEasing,
    animationOutDuration,
    animationOutEasing,
    resetWorkModalActive
  } from "../utensils/stores.js";
  import ModalNav from "../components/ModalNav.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<style>
  .work-modal-content-wrapper {
    padding: 1.5rem 1.5rem 0 1.5rem;
  }

  .credits-wrapper {
    background: var(--main-color);
    padding: 0 1.5rem 2.5rem 1.5rem;
    margin-top: 2.5rem;
  }

  :global(.work-modal-content-wrapper p) {
    margin-top: 2.5rem;
    border-bottom: 2px solid var(--dark);
    padding-bottom: 2.5rem;
  }

  :global(.work-modal-content-wrapper h2 + p) {
    /* P inside modal always has margin-top except P below H2 */
    margin-top: 0.5rem;
    border-bottom: 0;
    padding: 0;
  }
</style>

<div
  in:fade={{ duration: $animationInDuration, easing: $animationInEasing }}
  out:fade={{ delay: $animationInDelay, duration: $animationOutDuration, easing: $animationOutEasing }}>
  <ModalNav title="Work" on:click={() => resetWorkModalActive()} />
  <slot name="media" />

  <div class="work-modal-content-wrapper">
    <slot name="title" />

    <slot name="year" />

    <slot name="tag" />

    <slot name="description" />

    <slot name="quote" />
  </div>

  <div class="credits-wrapper">
    <slot name="credits" />
  </div>
  <Footer delay={$animationInDelay} />
</div>
