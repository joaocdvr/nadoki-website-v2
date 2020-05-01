<script>
  import {
    isAlperClicked,
    handleAlperClick,
    isEliaClicked,
    handleEliaClick,
    isJoaoClicked,
    handleJoaoClick,
    isJuliaClicked,
    handleJuliaClick,
    isAnyOfUsClicked,
    animationInDelay,
    animationInDuration,
    animationInEasing,
    animationOutDuration,
    animationOutEasing
  } from "../components/stores.js";
  import { fade } from "svelte/transition";
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
  }

  button:focus {
    outline: none;
  }

  :global(.user-is-tabbing) button:focus {
    background-color: var(--main-color);
  }

  img {
    margin-bottom: 1.25rem;
  }
  /* Different border widths fix */
  .alper {
    border-left: 0.2rem solid var(--main-color);
    border-right: 0.1rem solid var(--main-color);
    border-top: 0.2rem solid var(--main-color);
    border-bottom: 0.1rem solid var(--main-color);
  }

  .elia {
    border-left: 0.1rem solid var(--main-color);
    border-right: 0.2rem solid var(--main-color);
    border-top: 0.2rem solid var(--main-color);
    border-bottom: 0.1rem solid var(--main-color);
  }

  .joao {
    border-left: 0.2rem solid var(--main-color);
    border-right: 0.1rem solid var(--main-color);
    border-top: 0.1rem solid var(--main-color);
    border-bottom: 0.2rem solid var(--main-color);
  }

  .julia {
    border-left: 0.1rem solid var(--main-color);
    border-right: 0.2rem solid var(--main-color);
    border-top: 0.1rem solid var(--main-color);
    border-bottom: 0.2rem solid var(--main-color);
  }

  /* Animation */
  .menu-open {
    height: fit-content;
  }

  .any-button-open {
    width: calc(1 / 3 * 100vw);
    max-width: calc(1 / 3 * 100%);
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 0.2rem solid var(--main-color);
  }

  .specific-button-open {
    order: 4;
    width: 100vw;
    max-width: 100%;
    border: none;
  }

  .specific-img-open {
    margin: 0;
  }
</style>

<menu
  class:menu-open={$isAnyOfUsClicked}
  in:fade={{ delay: $animationInDelay, duration: $animationInDuration, easing: $animationInEasing }}
  out:fade={{ duration: $animationOutDuration, easing: $animationOutEasing }}>
  <button
    class="alper"
    class:any-button-open={$isAnyOfUsClicked}
    class:specific-button-open={$isAlperClicked}
    on:click={handleAlperClick}
    aria-label="Toggle Alper Arslan's details"
    aria-pressed={$isAlperClicked}>
    <img
      class:specific-img-open={$isAnyOfUsClicked}
      src="about_us/alper.png"
      alt="Alper Arslan" />
    <p class={$isAlperClicked ? 'header-big' : 'body-bold'}>
      {#if $isEliaClicked || $isJoaoClicked || $isJuliaClicked}
        Alper
      {:else if !$isAnyOfUsClicked}Alper Arslan{/if}
    </p>
  </button>
  <button
    class="elia"
    class:any-button-open={$isAnyOfUsClicked}
    class:specific-button-open={$isEliaClicked}
    on:click={handleEliaClick}
    aria-label="Toggle Elia Bertolaso's details"
    aria-pressed={$isEliaClicked}>
    <img
      class:specific-img-open={$isAnyOfUsClicked}
      src="about_us/elia.png"
      alt="Elia Bertolaso" />
    <p class="body-bold">
      {#if $isAlperClicked || $isJoaoClicked || $isJuliaClicked}
        Elia
      {:else if !$isAnyOfUsClicked}Elia Bertolaso{/if}
    </p>
  </button>
  <button
    class="joao"
    class:any-button-open={$isAnyOfUsClicked}
    class:specific-button-open={$isJoaoClicked}
    on:click={handleJoaoClick}
    aria-label="Toggle João Rodrigues's details"
    aria-pressed={$isJoaoClicked}>
    <img
      class:specific-img-open={$isAnyOfUsClicked}
      src="about_us/joao.png"
      alt="João Rodrigues" />
    <p class="body-bold">
      {#if $isAlperClicked || $isEliaClicked || $isJuliaClicked}
        João
      {:else if !$isAnyOfUsClicked}João Rodrigues{/if}
    </p>
  </button>
  <button
    class="julia"
    class:any-button-open={$isAnyOfUsClicked}
    class:specific-button-open={$isJuliaClicked}
    on:click={handleJuliaClick}
    aria-label="Toggle Julia Borelli's details"
    aria-pressed={$isJuliaClicked}>
    <img
      class:specific-img-open={$isAnyOfUsClicked}
      src="about_us/julia.png"
      alt="Julia Borelli" />
    <p class="body-bold">
      {#if $isAlperClicked || $isEliaClicked || $isJoaoClicked}
        Julia
      {:else if !$isAnyOfUsClicked}Julia Borelli{/if}
    </p>
  </button>
</menu>
