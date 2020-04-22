<script>
  import {
    animationInDelay,
    animationInDuration,
    animationInEasing,
    animationOutDuration,
    animationOutEasing
  } from "./stores.js";
  import { fade } from "svelte/transition";
  import { quadIn, quadOut } from "svelte/easing";

  export let tab = [];
</script>

<style>
  menu {
    position: relative;
    display: flex;
    flex-direction: row;
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
  }

  button {
    height: 3.5rem;
    border: none;
    cursor: pointer;
    text-align: center;
    flex: 0 0 auto;
    background-color: var(--dark);
    box-shadow: inset 0 0 0 0.2rem var(--dark);
  }

  button:focus {
    outline: none;
  }

  :global(.user-is-tabbing) button:focus {
    color: var(--dark);
    background-color: var(--main-color);
  }

  p {
    color: var(--light);
    margin: 1rem 1.5rem;
    transition: color 300ms ease-in-out;
  }

  .is-clicked-color {
    color: var(--main-color);
  }

  .is-clicked-box-shadow {
    box-shadow: inset 0 0 0 0.2rem var(--main-color);
  }

  .just-two {
    width: 50%;
  }
</style>

<menu
  in:fade={{ delay: $animationInDelay, duration: $animationInDuration, easing: $animationInEasing }}
  out:fade={{ duration: $animationOutDuration, easing: $animationOutEasing }}>
  {#each tab as tab}
    <button
      on:click={tab.function}
      aria-label="Toggle {tab.title} list"
      aria-pressed={tab.variable}
      class:is-clicked-box-shadow={tab.variable}
      class:just-two={tab.justTwo}>
      <p class="body-bold" class:is-clicked-color={tab.variable}>{tab.title}</p>
    </button>
  {/each}
</menu>
