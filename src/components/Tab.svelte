<script>
  export let tab = [];
</script>

<style>
  menu {
    position: relative;
    display: flex;
    flex-direction: row;
  }

  button {
    width: 50vw;
    border: none;
    cursor: pointer;
    text-align: center;
    padding: 1rem 0;
    color: var(--light);
    background-color: var(--dark);
  }

  button:focus {
    outline: none;
  }

  :global(.user-is-tabbing) button:focus {
    color: var(--dark);
    background-color: var(--main-color);
  }

  hr {
    position: absolute;
    bottom: 0;
    width: 50vw;
    max-width: 50%;
    height: 0.3rem;
    border-width: 0;
    background-color: var(--main-color);
    margin: 0;
  }

  .is-clicked {
    color: var(--main-color);
  }
</style>

<menu>
  {#each tab as tab}
    <button
      on:click={tab.function}
      aria-label="Toggle {tab.title} list"
      aria-pressed={tab.variable}
      class="body-bold"
      class:is-clicked={tab.variable}>
      {tab.title}
      {#if tab.variable}
        <hr noshade />
      {/if}
    </button>
  {/each}
</menu>
