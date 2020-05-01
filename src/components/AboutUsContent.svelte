<script>
  import Footer from "../components/Footer.svelte";
  import {
    isAlperClicked,
    isEliaClicked,
    isJoaoClicked,
    isJuliaClicked,
    isAnyOfUsClicked,
    animationInDelay,
    animationInDuration,
    animationInEasing,
    animationOutDuration,
    animationOutEasing
  } from "../components/stores.js";
  import { fade } from "svelte/transition";
</script>

<style>
  div {
    padding: 0 1.5rem 1.5rem 1.5rem;
  }
</style>

<div
  in:fade={{ delay: $animationInDelay, duration: $animationInDuration, easing: $animationInEasing }}
  out:fade={{ duration: $animationOutDuration, easing: $animationOutEasing }}>
  {#if $isAlperClicked}
    <h2 class="header-big">Alper Arslan</h2>
  {:else if $isEliaClicked}
    <h2 class="header-big">Elia Bertolaso</h2>
  {:else if $isJoaoClicked}
    <h2 class="header-big">João Rodrigues</h2>
  {:else if $isJuliaClicked}
    <h2 class="header-big">Julia Borelli</h2>
    <br />
    <h3 class="body-bold">Nationality</h3>
    <p class="body-regular">
      Brazilian
      <br />
      ...
    </p>
    <h3 class="body-bold">Experience</h3>
    <p class="body-regular">
      SAE Institute Berlin
      <small>Audio Department Assistant</small>
      <br />
      ...
    </p>
  {/if}
</div>

{#if $isAnyOfUsClicked}
  <Footer />
{/if}
