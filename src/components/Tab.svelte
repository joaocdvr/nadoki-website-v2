<script>
  import { fade } from "svelte/transition";
  import { quadIn, quadOut } from "svelte/easing";
  import {
    animationInDelay,
    animationInDuration,
    animationInEasing,
    animationOutDuration,
    animationOutEasing
  } from "../utensils/stores.js";

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
    box-shadow: none;
    transition: background-color 300ms ease-in-out;
  }

  button:focus {
    outline: none;
  }

  :global(.user-is-tabbing) button:focus {
    background-color: var(--secondary-color);
  }

  p {
    color: var(--light);
    margin: 1rem 1.5rem;
    transition: color 300ms ease-in-out;
  }

  .is-selected-color {
    background-color: var(--secondary-color);
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
      class:just-two={tab.justTwo}
      class:is-selected-color={tab.variable}>
      <p class="body-bold">{tab.title}</p>
    </button>
  {/each}
</menu>
