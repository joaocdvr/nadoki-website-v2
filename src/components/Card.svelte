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

  function handleClick(event, callback) {
    event.preventDefault();
    callback;
  }
</script>

<style>
  a {
    text-align: left;
    display: inline-block;
    text-decoration: none;
    cursor: pointer;
    width: 100vw;
    transition: background-color 300ms ease-in-out, color 300ms ease-in-out;
    padding: 3rem 3rem 7rem 3rem;
  }

  @media (--max-content-width) {
    a {
      padding: 3rem;
      margin: 3rem 0 6rem 0;
      width: calc(var(--max-width) * 0.65);
      transform: translateX(calc(50vw - var(--max-width) * 0.325));
    }
  }

  :global(.user-is-tabbing) a:focus {
    background-color: var(--secondary-color);
  }

  :global(.user-is-tabbing) a:focus p,
  :global(.user-is-tabbing) a:focus h2 {
    color: var(--light);
  }

  a {
    color: var(--dark);
    display: inline-block;
    transition: background-color 300ms ease-in-out, color 300ms ease-in-out;
  }

  :global(.user-is-tabbing) a:focus {
    color: var(--light);
    background-color: var(--secondary-color);
  }

  @media (--not-touchscreen) {
    a:hover {
      color: var(--secondary-color);
      background-color: var(--secondary-color);
    }

    a:hover p,
    a:hover h2 {
      color: var(--light);
    }
  }

  :global(.tag-color) {
    transition: color 300ms ease-in-out;
  }

  @media (--not-touchscreen) {
    a:hover :global(.tag-color) {
      color: var(--secondary-color);
    }
  }

  .studio-card-a {
    padding: 0;
    margin-bottom: 0;
    transform: translateX(0);
    width: auto;
  }

  @media (--not-touchscreen) {
    .studio-card-a:hover {
      color: var(--secondary-color);
      background-color: transparent;
    }
  }

  .studio-card-wrapper {
    text-align: left;
    width: 100vw;
    line-height: 0;
    padding: 1.5rem 1.5rem 9rem 1.5rem;
  }

  @media (--max-content-width) {
    .studio-card-wrapper {
      width: var(--max-width);
      transform: translateX(calc(50vw - var(--max-width) * 0.5));
      padding: 3rem 1.5rem 9rem 1.5rem;
    }
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.6);
  }

  .img-wrapper {
    position: relative;
  }

  .div-header {
    margin-top: 2rem;
    margin-bottom: 0.5rem;
  }

  /* Exceptions for the studio cards */
  .div-header-border {
    border-bottom: 2px solid var(--dark);
    padding-bottom: 1rem;
    margin-bottom: 1rem;
  }

  .body-small {
    margin-top: 1rem;
    text-decoration: underline;
  }
</style>

<ul class:work-cards={variant === 'work'}>
  {#each cards as card, i}
    <li
      in:fade={{ delay: $animationInDelay + i * 250, duration: $animationInDuration + 700, easing: $animationInEasing }}
      out:fade={{ duration: $animationOutDuration, easing: $animationOutEasing }}>

      {#if variant === 'studio'}
        <div class="studio-card-wrapper">
          <div class="img-wrapper" style="padding-top:{card.ratio}">
            <img
              src={card.src}
              srcset={card.srcset}
              sizes="(max-width: 480px) 480w, (max-width: 720px) 720w, 1080w"
              alt={card.alt} />
          </div>

          <div class="div-text">
            <div
              class="div-header"
              class:div-header-border={variant === 'studio'}>
              <h2 class="header-small">{card.title.toUpperCase()}</h2>
            </div>

            <p class="body-regular">
              {@html card.content}
            </p>

            {#if card.link}
              <a
                target="_blank"
                rel="noopener"
                class="body-small studio-card-a"
                href={card.path}>
                Learn more
              </a>
            {/if}
          </div>
        </div>
      {/if}

      {#if variant === 'work'}
        <a
          href={card.path}
          on:click={event => handleClick(event, handleWorkModalClick(card.url))}
          aria-label="Toggle {card.title}'s details"
          aria-pressed={$workModalActive === card.url}>

          <div class="img-wrapper" style="padding-top:{card.ratio}">
            <img src={card.src} srcset={card.srcset} alt={card.alt} />
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
        </a>
      {/if}

    </li>
  {/each}
</ul>
