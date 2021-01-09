<script>
  import { slide, fade } from 'svelte/transition'
  import {
    animationInDelay,
    animationInDuration,
    animationInEasing,
    animationOutDuration,
    animationOutEasing,
  } from '../utensils/stores.js'

  export let listItem = []
  export let i = 0
</script>

<li
  class:item-is-clicked={listItem.open}
  in:fade={{
    delay: $animationInDelay + i * 100,
    duration: $animationInDuration,
    easing: $animationInEasing,
  }}
  out:fade={{ duration: $animationOutDuration, easing: $animationOutEasing }}
>
  <button
    on:click
    aria-label="Toggle {listItem.name} list"
    aria-pressed={listItem.open}>
    <p class="body-bold">
      {listItem.name}
      <span />
    </p>
  </button>

  <div class="list-content" class:list-open={listItem.open}>
    {#if listItem.open}
      <p transition:slide>
        {@html listItem.content}
      </p>
    {/if}
  </div>
</li>

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

  :global(.user-is-tabbing) button:focus {
    background-color: var(--secondary-color);
  }

  :global(.user-is-tabbing) button:focus p {
    color: var(--light);
  }

  :global(.user-is-tabbing) button:focus :before,
  :global(.user-is-tabbing) button:focus :after {
    background-color: var(--light);
  }

  @media (--not-touchscreen) {
    button:hover {
      background-color: var(--secondary-color);
    }

    button:hover p {
      color: var(--light);
    }

    button:hover :before,
    button:hover :after {
      background-color: var(--light);
    }
  }

  .list-content {
    font-family: 'syne-regular', Arial, Helvetica, sans-serif;
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
      font-size: 1.25rem;
      transform: translateX(calc(50vw - var(--max-width) / 2));
    }
  }

  li {
    border-bottom: 0.125rem solid var(--dark);
    background-color: var(--light);
    transition: background-color 300ms ease-in-out;
  }

  p,
  div {
    width: 100%;
    max-width: var(--max-width);
    text-align: left;
  }

  @media (--max-content-width) {
    p,
    div {
      transform: translateX(calc(50vw - var(--max-width) / 2));
    }
  }

  p {
    padding: 1.5rem;
    position: relative;
  }

  p span:after {
    content: '';
    position: absolute;
    top: 2.125rem;
    right: 1.5rem;
    width: 1rem;
    height: 0.25rem;
    background-color: var(--dark);
  }

  p span:before {
    content: '';
    position: absolute;
    top: 1.75rem;
    right: 1.875rem;
    width: 0.25rem;
    height: 1rem;
    background-color: var(--dark);
    transition: transform 300ms;
  }

  .item-is-clicked p span:before {
    transform: rotate(-90deg);
  }

  div p {
    padding: 0 1.5rem 1.5rem 1.5rem;
    transform: translateX(0);
  }

  @media (--max-content-width) {
    div p {
      padding: 1.5rem;
    }
  }

  .item-is-clicked {
    background-color: var(--main-color);
  }

  @media (--max-content-width) {
    .body-bold {
      font-size: 1rem;
    }
  }
</style>
