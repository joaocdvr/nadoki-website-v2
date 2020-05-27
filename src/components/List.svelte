<script>
  import { slide, fade } from "svelte/transition";
  import {
    animationInDelay,
    animationInDuration,
    animationInEasing,
    animationOutDuration,
    animationOutEasing
  } from "../utensils/stores.js";

  export let listItem = [];
  export let i = 0;
</script>

<style>
  button {
    border: none;
    cursor: pointer;
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  button:focus {
    outline: none;
  }

  :global(.user-is-tabbing) button:focus {
    background-color: var(--secondary-color);
  }

  :global(.user-is-tabbing) button:focus dt {
    color: var(--light);
  }

  dl {
    border-bottom: 0.125rem solid var(--dark);
    background-color: var(--light);
    transition: background-color 300ms ease-in-out;
  }

  dt {
    padding: 1.5rem 0 1.5rem 1.5rem;
  }

  dd {
    padding: 0 1.5rem 1.5rem 1.5rem;
  }

  .item-is-clicked {
    background-color: var(--main-color);
  }

  .item-is-clicked button:before {
    transform: rotate(-90deg);
  }

  button:after {
    content: "";
    position: absolute;
    top: 2.125rem;
    right: 1.5rem;
    width: 1rem;
    height: 0.25rem;
    background-color: var(--dark);
  }

  button:before {
    content: "";
    position: absolute;
    top: 1.75rem;
    right: 1.875rem;
    width: 0.25rem;
    height: 1rem;
    background-color: var(--dark);
    transition: transform 300ms;
  }
</style>

<dl
  class:item-is-clicked={listItem.open}
  in:fade={{ delay: $animationInDelay + i * 50, duration: $animationInDuration, easing: $animationInEasing }}
  out:fade={{ duration: $animationOutDuration, easing: $animationOutEasing }}>
  <button
    on:click
    aria-label="Toggle {listItem.name} list"
    aria-pressed={listItem.open}>
    <dt class="body-bold">{listItem.name}</dt>
  </button>

  {#if listItem.open}
    <dd class="list-content" transition:slide>
      {@html listItem.content}
    </dd>
  {/if}
</dl>
