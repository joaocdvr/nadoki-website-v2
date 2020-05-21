<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import {
    animationInDelay,
    animationInDuration,
    animationInEasing,
    animationOutDuration,
    animationOutEasing,
    aboutUsActiveItem,
    setAboutUsActiveItem
  } from "../utensils/stores.js";

  onMount(() => {
    const url = new URL(document.location);
    const nameParam = url.searchParams.get("name");
    if (["alper", "elia", "joao", "julia"].includes(nameParam)) {
      handleAboutUsItemClick(nameParam);
    }
    window.addEventListener("popstate", function() {
      const url = new URL(document.location);
      const nameParam = url.searchParams.get("name");
      if (["alper", "elia", "joao", "julia"].includes(nameParam)) {
        setAboutUsActiveItem(nameParam);
      } else {
        setAboutUsActiveItem("");
      }
    });
  });

  $: isAnyAboutUsItemActive = !!$aboutUsActiveItem;

  function handleAboutUsItemClick(name) {
    const newUrl = `${window.location.pathname}?name=${name}`;
    window.history.pushState("", "", newUrl);
    setAboutUsActiveItem(name);
  }
</script>

<style>
  menu {
    line-height: 0;
    height: calc(100vh - 11rem);
    display: flex;
    flex-wrap: wrap;
  }

  button {
    width: 50%;
    padding: 1.5rem;
    background-color: var(--light);
    transition: background-color 300ms ease-in-out, color 300ms ease-in-out;
  }

  button:focus {
    outline: none;
  }

  :global(.user-is-tabbing) button:focus {
    background-color: var(--secondary-color);
  }

  :global(.user-is-tabbing) button:focus h2 {
    color: var(--light);
  }

  img {
    margin-bottom: 1.25rem;
  }
  /* Different border widths fix */
  .alper {
    border-left: 0.125rem solid var(--main-color);
    border-right: 0.0625rem solid var(--main-color);
    border-top: 0.125rem solid var(--main-color);
    border-bottom: 0.0625rem solid var(--main-color);
  }

  .elia {
    border-left: 0.0625rem solid var(--main-color);
    border-right: 0.125rem solid var(--main-color);
    border-top: 0.125rem solid var(--main-color);
    border-bottom: 0.0625rem solid var(--main-color);
  }

  .joao {
    border-left: 0.125rem solid var(--main-color);
    border-right: 0.0625rem solid var(--main-color);
    border-top: 0.0625rem solid var(--main-color);
    border-bottom: 0.125rem solid var(--main-color);
  }

  .julia {
    border-left: 0.0625rem solid var(--main-color);
    border-right: 0.125rem solid var(--main-color);
    border-top: 0.0625rem solid var(--main-color);
    border-bottom: 0.125rem solid var(--main-color);
  }

  /* Animation */
  .menu-open {
    height: fit-content;
  }

  .button-open {
    width: calc(1 / 4 * 100%);
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 0.125rem solid var(--secondary-color);
    padding: 0.5rem 0;
  }

  .img-open {
    margin: 0;
    width: calc(100% - 1rem);
  }

  .selected-button {
    background-color: var(--secondary-color);
  }

  .selected-text {
    color: var(--light);
  }
</style>

<menu
  class:menu-open={isAnyAboutUsItemActive}
  in:fade={{ delay: $animationInDelay, duration: $animationInDuration, easing: $animationInEasing }}
  out:fade={{ duration: $animationOutDuration, easing: $animationOutEasing }}>
  <button
    class="alper"
    class:button-open={isAnyAboutUsItemActive}
    class:selected-button={$aboutUsActiveItem === 'alper'}
    on:click={() => handleAboutUsItemClick('alper')}
    aria-label="Toggle Alper Arslan's details"
    aria-pressed={$aboutUsActiveItem === 'alper'}>
    <img
      class:img-open={isAnyAboutUsItemActive}
      src="about_us/alper.png"
      alt="Alper Arslan" />
    <h2 class="body-bold" class:selected-text={$aboutUsActiveItem === 'alper'}>
      {#if isAnyAboutUsItemActive}Alper{:else}Alper Arslan{/if}
    </h2>
  </button>
  <button
    class="elia"
    class:button-open={isAnyAboutUsItemActive}
    class:selected-button={$aboutUsActiveItem === 'elia'}
    on:click={() => handleAboutUsItemClick('elia')}
    aria-label="Toggle Elia Bertolaso's details"
    aria-pressed={$aboutUsActiveItem === 'elia'}>
    <img
      class:img-open={isAnyAboutUsItemActive}
      src="about_us/elia.png"
      alt="Elia Bertolaso" />
    <h2 class="body-bold" class:selected-text={$aboutUsActiveItem === 'elia'}>
      {#if isAnyAboutUsItemActive}Elia{:else}Elia Bertolaso{/if}
    </h2>
  </button>
  <button
    class="joao"
    class:button-open={isAnyAboutUsItemActive}
    class:selected-button={$aboutUsActiveItem === 'joao'}
    on:click={() => handleAboutUsItemClick('joao')}
    aria-label="Toggle João Rodrigues's details"
    aria-pressed={$aboutUsActiveItem === 'joao'}>
    <img
      class:img-open={isAnyAboutUsItemActive}
      src="about_us/joao.png"
      alt="João Rodrigues" />
    <h2 class="body-bold" class:selected-text={$aboutUsActiveItem === 'joao'}>
      {#if isAnyAboutUsItemActive}João{:else}João Rodrigues{/if}
    </h2>
  </button>
  <button
    class="julia"
    class:button-open={isAnyAboutUsItemActive}
    class:selected-button={$aboutUsActiveItem === 'julia'}
    on:click={() => handleAboutUsItemClick('julia')}
    aria-label="Toggle Julia Borelli's details"
    aria-pressed={$aboutUsActiveItem === 'julia'}>
    <img
      class:img-open={isAnyAboutUsItemActive}
      src="about_us/julia.png"
      alt="Julia Borelli" />
    <h2 class="body-bold" class:selected-text={$aboutUsActiveItem === 'julia'}>
      {#if isAnyAboutUsItemActive}Julia{:else}Julia Borelli{/if}
    </h2>
  </button>
</menu>
