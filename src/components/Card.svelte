<script>
  import { fade } from "svelte/transition";
  import {
    animationInDelay,
    animationInDuration,
    animationInEasing,
    animationOutDuration,
    animationOutEasing,
    workModalActive,
    setWorkModalActive
  } from "../utensils/stores.js";
  import Tag from "./Tag.svelte";

  function handleWorkModalClick(name) {
    if (name !== undefined) {
      const newUrl = `${window.location.pathname}?project=${name}`;
      window.history.pushState("", "", newUrl);
      setWorkModalActive(name);
    }
  }

  export let cards = [];
  export let variant = "";
</script>

<style>
  button {
    text-align: left;
    cursor: pointer;
    width: 100vw;
    line-height: 0;
    transition: background-color 300ms ease-in-out, color 300ms ease-in-out;
    padding: 3rem 3rem 7rem 3rem;
  }

  button:focus {
    outline: none;
  }

  :global(.user-is-tabbing) button:focus,
  :global(.user-is-tabbing) button:focus .div-arrow {
    background-color: var(--secondary-color);
  }

  :global(.user-is-tabbing) button:focus img {
    /* filter: grayscale(0); */
  }

  :global(.user-is-tabbing) button:focus p,
  :global(.user-is-tabbing) button:focus h2,
  :global(.user-is-tabbing) button:focus h3 {
    color: var(--light);
  }

  :global(.user-is-tabbing) button:focus .div-arrow svg {
    fill: var(--light);
  }

  img {
    width: 100%;
    transition: filter 300ms ease-in-out;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.6);
  }

  .div-img {
    position: relative;
    border-top: 0.125rem solid var(--main-color);
    border-bottom: 0.125rem solid var(--main-color);
  }

  .div-header {
    border-bottom: 0.0625rem solid var(--main-color);
    margin-top: 2rem;
  }

  p {
    padding-top: 0.75rem;
  }

  ul {
    background-color: var(--main-color);
  }
</style>

<ul>
  {#each cards as card, i}
    <li
      in:fade={{ delay: $animationInDelay + i * 250, duration: $animationInDuration + 700, easing: $animationInEasing }}
      out:fade={{ duration: $animationOutDuration, easing: $animationOutEasing }}>
      <button
        on:click={() => handleWorkModalClick(card.url)}
        aria-label="Toggle {card.title}'s details"
        aria-pressed={$workModalActive === card.url}>

        <div class="div-img">
          <img src={card.src} alt={card.alt} />
        </div>

        <div class="div-text">
          <div class="div-header">
            <h2 class="header-small">{card.title.toUpperCase()}</h2>

            {#if variant === 'studio'}
              <h3 class="body-bold">{card.size}</h3>
            {/if}
          </div>

          <p class="body-regular">{card.content}</p>

          {#if variant === 'work'}
            <Tag tags={card.tags} />
          {/if}
        </div>
      </button>
    </li>
  {/each}
</ul>
