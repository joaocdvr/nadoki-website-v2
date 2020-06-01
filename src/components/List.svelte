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
    transition: background-color 300ms ease-in-out, color 300ms ease-in-out;
  }

  button:focus {
    outline: none;
  }

  button:hover,
  :global(.user-is-tabbing) button:focus {
    background-color: var(--secondary-color);
  }

  button:hover dt,
  :global(.user-is-tabbing) button:focus dt {
    color: var(--light);
  }

  button:hover :before,
  button:hover :after,
  :global(.user-is-tabbing) button:focus :before,
  :global(.user-is-tabbing) button:focus :after {
    background-color: var(--light);
  }

  .list-content {
    font-family: "syne-regular", Arial, Helvetica, sans-serif;
    line-height: 2;
    font-size: 1rem;
    color: transparent;
    transition: color 50ms ease-in-out;
    transition-delay: 0;
    max-width: 48rem;
  }

  .list-open {
    transition: color 300ms ease-in-out;
    transition-delay: 100ms;
    color: var(--dark);
  }

  @media (--max-content-width) {
    .list-content {
      transform: translateX(calc(50vw - var(--max-width) / 2));
    }
  }

  dl {
    border-bottom: 0.125rem solid var(--dark);
    background-color: var(--light);
    transition: background-color 300ms ease-in-out;
  }

  dt,
  div {
    width: 100%;
    max-width: var(--max-width);
    text-align: left;
  }

  @media (--max-content-width) {
    dt,
    div {
      transform: translateX(calc(50vw - var(--max-width) / 2));
    }
  }

  dt {
    padding: 1.5rem;
    position: relative;
  }

  dt span:after {
    content: "";
    position: absolute;
    top: 2.125rem;
    right: 1.5rem;
    width: 1rem;
    height: 0.25rem;
    background-color: var(--dark);
  }

  dt span:before {
    content: "";
    position: absolute;
    top: 1.75rem;
    right: 1.875rem;
    width: 0.25rem;
    height: 1rem;
    background-color: var(--dark);
    transition: transform 300ms;
  }

  .item-is-clicked dt span:before {
    transform: rotate(-90deg);
  }

  div dd {
    padding: 0 1.5rem 1.5rem 1.5rem;
  }

  .item-is-clicked {
    background-color: var(--main-color);
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
    <dt class="body-bold">
      {listItem.name}
      <span />
    </dt>
  </button>
  <div class="list-content" class:list-open={listItem.open}>
    {#if listItem.open}
      <dd transition:slide>
        {@html listItem.content}
      </dd>
    {/if}
  </div>
</dl>
