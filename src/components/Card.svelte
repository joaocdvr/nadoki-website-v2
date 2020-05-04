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

  div {
    padding: 1.5rem 1.5rem 2.5rem 1.5rem;
  }

  h3 {
    padding-bottom: 1.5rem;
  }

  p {
    padding-top: 0.75rem;
  }

  hr {
    height: 0.125rem;
    border-width: 0;
    background-color: var(--main-color);
    margin: 0;
  }
</style>

<ul>
  {#each cards as card, i}
    <li
      in:fade={{ delay: $animationInDelay + i * 250, duration: $animationInDuration + 700, easing: $animationInEasing }}
      out:fade={{ duration: $animationOutDuration, easing: $animationOutEasing }}>
      <span>
        <hr noshade />
        <img src={card.src} alt={card.alt} />
        <hr noshade />
      </span>
      <div>
        <h2 class="header-small">{card.title}</h2>
        {#if $isStudioClicked}
          <h3 class="body-bold">{card.size}</h3>
          <hr style="height: 0.0625rem" noshade />
        {/if}
        <p class="body-regular">{card.content}</p>
        {#if $isWorkClicked}
          <Tag tags={card.tags} />
        {/if}
      </div>
    </li>
  {/each}
</ul>
