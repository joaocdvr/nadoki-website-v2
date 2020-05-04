<script>
  import {
    isStudioClicked,
    isWorkClicked,
    animationInDelay,
    animationInDuration,
    animationInEasing,
    animationOutDuration,
    animationOutEasing
  } from "./stores.js";
  import Tag from "./Tag.svelte";
  import { fade } from "svelte/transition";

  export let cards = [];
</script>

<style>
  img {
    width: 100%;
    height: auto;
    filter: grayscale(1);
    transition: filter 300ms ease-in-out;
  }

  img:hover {
    filter: grayscale(0);
  }

  .div-img {
    border-top: 0.125rem solid var(--main-color);
    border-bottom: 0.125rem solid var(--main-color);
  }

  .div-text {
    padding: 1.5rem 1.5rem 2.5rem 1.5rem;
  }

  h3 {
    padding-bottom: 1.5rem;
    border-bottom: 0.0625rem solid var(--main-color);
  }

  p {
    padding-top: 0.75rem;
  }
</style>

<ul>
  {#each cards as card, i}
    <li
      in:fade={{ delay: $animationInDelay + i * 250, duration: $animationInDuration + 700, easing: $animationInEasing }}
      out:fade={{ duration: $animationOutDuration, easing: $animationOutEasing }}>
      <div class="div-img">
        <img src={card.src} alt={card.alt} />
      </div>
      <div class="div-text">
        <h2 class="header-small">{card.title}</h2>
        {#if $isStudioClicked}
          <h3 class="body-bold">{card.size}</h3>
        {/if}
        <p class="body-regular">{card.content}</p>
        {#if $isWorkClicked}
          <Tag tags={card.tags} />
        {/if}
      </div>
    </li>
  {/each}
</ul>
