<script>
  import { fade } from "svelte/transition";
  import {
    animationInDelay,
    animationInDuration,
    animationInEasing,
    animationOutDuration,
    animationOutEasing,
    workModalActive,
    setWorkModalActive,
    handleWorkModalClick
  } from "../utensils/stores.js";
  import Tag from "./Tag.svelte";

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

  @media (--max-content-width) {
    button {
      padding: 3rem 1.5rem 7rem 1.5rem;
    }

    .work-cards button {
      padding: 5rem 3rem;
    }
  }

  :global(.user-is-tabbing) button:focus {
    background-color: var(--secondary-color);
  }

  :global(.user-is-tabbing) button:focus p,
  :global(.user-is-tabbing) button:focus h2 {
    color: var(--light);
  }

  @media (--not-touchscreen) {
    button:hover {
      background-color: var(--secondary-color);
    }

    button:hover p,
    button:hover h2 {
      color: var(--light);
    }
  }

  .work-wrapper {
    width: 100%;
  }

  @media (--max-content-width) {
    .work-wrapper {
      width: calc(var(--max-width) * 0.62);
      transform: translateX(calc(47vw - var(--max-width) * 0.31));
    }
  }

  .studio-card-wrapper {
    text-align: left;
    width: 100vw;
    line-height: 0;
    padding: 1.5rem 1.5rem 7rem 1.5rem;
  }

  @media (--max-content-width) {
    .studio-card-wrapper {
      width: var(--max-width);
      transform: translateX(calc(50vw - var(--max-width) * 0.5));
      padding: 3rem 1.5rem 7rem 1.5rem;
    }
  }

  img {
    width: 100%;
    transition: filter 300ms ease-in-out;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.6);
  }

  .div-img {
    position: relative;
  }

  .div-header {
    margin-top: 2rem;
    margin-bottom: 0.5rem;
  }

  .div-header-border {
    /* Exceptions for the studio cards */
    border-bottom: 2px solid var(--dark);
    padding-bottom: 1rem;
    margin-bottom: 1rem;
  }

  .body-small {
    margin-top: 1rem;
    text-decoration: underline;
  }

  @media (--max-content-width) {
    .body-regular {
      font-size: 1.25rem;
    }

    .body-bold {
      font-size: 1rem;
    }

    .body-small {
      font-size: 1rem;
    }
  }
</style>

<ul class:work-cards={variant === 'work'}>
  {#each cards as card, i}
    <li
      in:fade={{ delay: $animationInDelay + i * 250, duration: $animationInDuration + 700, easing: $animationInEasing }}
      out:fade={{ duration: $animationOutDuration, easing: $animationOutEasing }}>
      {#if variant === 'studio'}
        <div class="studio-card-wrapper">
          <div class="div-img">
            <img src={card.src} alt={card.alt} />
          </div>

          <div class="div-text">
            <div
              class="div-header"
              class:div-header-border={variant === 'studio'}>
              <h2 class="header-small">{card.title.toUpperCase()}</h2>
              <h3 class="body-bold">{card.size}</h3>
            </div>

            <p class="body-regular">
              {@html card.content}
            </p>
          </div>
        </div>
      {/if}

      {#if variant === 'work'}
        <button
          on:click={() => handleWorkModalClick(card.url)}
          aria-label="Toggle {card.title}'s details"
          aria-pressed={$workModalActive === card.url}>

          <div class="work-wrapper">
            <div class="div-img">
              <img src={card.src} alt={card.alt} />
            </div>

            <div class="div-text">
              <div
                class="div-header"
                class:div-header-border={variant === 'studio'}>
                <h2 class="header-small">{card.title.toUpperCase()}</h2>
              </div>

              <p class="body-regular">{card.content}</p>

              <Tag tags={card.tags} />

              <p class="body-small">Learn more</p>
            </div>
          </div>
        </button>
      {/if}

    </li>
  {/each}
</ul>
