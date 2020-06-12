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
  export let delay = 0;
  export let variant = "";
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
    background-color: var(--dark);
  }

  @media (--max-content-width) {
    .services-tab-menu {
      position: sticky;
      flex-direction: column;
      align-items: stretch;
      top: 4.5rem;
      left: 0;
      width: 35%;
      height: calc(var(--vh, 1vh) * 100 - 4.5rem);
      border-bottom: none;
    }
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

  button:last-child {
    border: none;
  }

  @media (--max-content-width) {
    .services-tab-menu button {
      border-right: 0.125rem solid var(--dark);
      border-bottom: 0.125rem solid var(--dark);
      flex-grow: 1;
      text-align: right;
    }

    .services-tab-menu button:last-child {
      border-bottom: none;
    }
  }

  :global(.user-is-tabbing) button:focus {
    background-color: var(--secondary-color);
  }

  :global(.user-is-tabbing) button:focus p {
    color: var(--light);
  }

  @media (--not-touchscreen) {
    button:hover {
      background-color: var(--secondary-color);
    }

    button:hover p {
      color: var(--light);
    }
  }

  p {
    color: var(--dark);
    margin: 1rem 1.5rem;
    transition: color 300ms ease-in-out;
  }

  .button-is-selected {
    background-color: var(--dark);
    border-color: var(--dark);
  }

  .p-is-selected {
    color: var(--light);
  }

  .just-two {
    width: 50%;
    border: none;
  }

  .body-bold {
    font-size: 1rem;
  }
</style>

<menu
  class:services-tab-menu={variant === 'services'}
  in:fade={{ delay: $animationInDelay, duration: $animationInDuration, easing: $animationInEasing }}
  out:fade={{ delay: delay, duration: $animationOutDuration, easing: $animationOutEasing }}>
  {#each tab as tab}
    <button
      class="tab-button"
      on:click={tab.function}
      aria-label="Toggle {tab.title} list"
      aria-pressed={tab.variable}
      class:just-two={tab.justTwo}
      class:button-is-selected={tab.variable}>
      <p class="body-bold" class:p-is-selected={tab.variable}>{tab.title}</p>
    </button>
  {/each}
</menu>
