<script>
  import { fade } from "svelte/transition";
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
    border-bottom: 0.125rem solid var(--dark);
  }

  button {
    min-height: 3.5rem;
    border: none;
    border-right: 0.125rem solid var(--dark);
    cursor: pointer;
    text-align: center;
    flex: 0 0 auto;
    background-color: var(--light);
    box-shadow: none;
    transition: background-color 300ms ease-in-out,
      border-color 300ms ease-in-out;
  }

  button:focus {
    outline: none;
  }

  :global(.user-is-tabbing) button:focus {
    background-color: var(--secondary-color);
  }

  :global(.user-is-tabbing) button:focus p {
    color: var(--light);
  }

  menu :last-child {
    border: none;
  }

  p {
    color: var(--dark);
    margin: 1rem 1.5rem;
    transition: color 300ms ease-in-out;
  }

  .button-is-selected {
    background-color: var(--dark);
    border-color: var(--light);
  }

  .p-is-selected {
    color: var(--light);
  }

  .just-two {
    width: 50%;
    border: none;
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
      class:button-is-selected={tab.variable}>
      <p class="body-bold" class:p-is-selected={tab.variable}>{tab.title}</p>
    </button>
  {/each}
</menu>
