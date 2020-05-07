<script>
  import {
    animationInDelay,
    animationInDuration,
    animationInEasing,
    animationOutDuration,
    animationOutEasing,
    itemActive,
    setItemActive
  } from "../components/stores.js";
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";

  onMount(() => {
    const url = new URL(document.location);
    const nameParam = url.searchParams.get("name");
    if (["alper", "elia", "joao", "julia"].includes(nameParam)) {
      handleItemClick(nameParam);
    }
  });

  $: isAnyItemActive = !!$itemActive;

  $: isItemActive = name => {
    return $itemActive === name;
  };

  $: isJoaoActive = isItemActive("joao");

  function handleItemClick(name) {
    const newUrl = `${window.location.pathname}?name=${name}`;
    window.history.pushState("", "", newUrl);
    setItemActive(name);
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
    width: 50vw;
    max-width: 50%;
    padding: 1.5rem;
    transition: all 300ms ease;
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

  .any-button-open {
    width: calc(1 / 4 * 100vw);
    max-width: calc(1 / 4 * 100%);
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 0.125rem solid var(--main-color);
    padding: 0.5rem 1rem;
  }

  .specific-button-open {
    background-color: var(--main-color);
  }

  .specific-img-open {
    margin: 0;
  }
</style>

<menu
  class:menu-open={isAnyItemActive}
  in:fade={{ delay: $animationInDelay, duration: $animationInDuration, easing: $animationInEasing }}
  out:fade={{ duration: $animationOutDuration, easing: $animationOutEasing }}>
  <button
    class="alper"
    class:any-button-open={isAnyItemActive}
    class:specific-button-open={isItemActive('alper')}
    on:click={() => handleItemClick('alper')}
    aria-label="Toggle Alper Arslan's details"
    aria-pressed={isItemActive('alper')}>
    <img
      class:specific-img-open={isAnyItemActive}
      src="about_us/alper.png"
      alt="Alper Arslan" />
    <h2 class="body-bold">
      {#if isAnyItemActive}Alper{:else}Alper Arslan{/if}
    </h2>
  </button>
  <button
    class="elia"
    class:any-button-open={isAnyItemActive}
    class:specific-button-open={isItemActive('elia')}
    on:click={() => handleItemClick('elia')}
    aria-label="Toggle Elia Bertolaso's details"
    aria-pressed={isItemActive('elia')}>
    <img
      class:specific-img-open={isAnyItemActive}
      src="about_us/elia.png"
      alt="Elia Bertolaso" />
    <h2 class="body-bold">
      {#if isAnyItemActive}Elia{:else}Elia Bertolaso{/if}
    </h2>
  </button>
  <button
    class="joao"
    class:any-button-open={isAnyItemActive}
    class:specific-button-open={isJoaoActive}
    on:click={() => handleItemClick('joao')}
    aria-label="Toggle João Rodrigues's details"
    aria-pressed={isJoaoActive}>
    <img
      class:specific-img-open={isAnyItemActive}
      src="about_us/joao.png"
      alt="João Rodrigues" />
    <h2 class="body-bold">
      {#if isAnyItemActive}João{:else}João Rodrigues{/if}
    </h2>
  </button>
  <button
    class="julia"
    class:any-button-open={isAnyItemActive}
    class:specific-button-open={isItemActive('julia')}
    on:click={() => handleItemClick('julia')}
    aria-label="Toggle Julia Borelli's details"
    aria-pressed={isItemActive('julia')}>
    <img
      class:specific-img-open={isAnyItemActive}
      src="about_us/julia.png"
      alt="Julia Borelli" />
    <h2 class="body-bold">
      {#if isAnyItemActive}Julia{:else}Julia Borelli{/if}
    </h2>
  </button>
</menu>
