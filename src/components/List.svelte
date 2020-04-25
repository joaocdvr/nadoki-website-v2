<script>
  import {
    animationInDelay,
    animationInDuration,
    animationInEasing,
    animationOutDuration,
    animationOutEasing
  } from "./stores.js";
  import { slide, fade } from "svelte/transition";

  export let listItem = [];
  export let i = 0;
</script>

<style>
  button {
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    width: calc(100vw - 3rem);
  }

  button:focus {
    outline: none;
  }

  :global(.user-is-tabbing) button:focus {
    background-color: var(--main-color);
  }

  dl {
    padding: 0 1.5rem;
  }

  dd {
    padding-bottom: 0.75rem;
  }

  hr {
    height: 0.1rem;
    border-width: 0;
    background-color: var(--main-color);
    margin: 0;
  }
</style>

<svelte:options immutable={true} />

<dl
  in:fade={{ delay: $animationInDelay + i * 100, duration: $animationInDuration, easing: $animationInEasing }}
  out:fade={{ duration: $animationOutDuration, easing: $animationOutEasing }}>
  <button
    on:click
    aria-label="Toggle {listItem.name} list"
    aria-pressed={listItem.open}>
    <dt class="list-name">{listItem.name}</dt>
    <p class="list-name">{listItem.open ? '-' : '+'}</p>
  </button>

  {#if listItem.open}
    <dd class="list-content" transition:slide>
      {@html listItem.content}
    </dd>
  {/if}
  <hr noshade />
</dl>
