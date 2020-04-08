<script>
  import { slide } from "svelte/transition";

  export let list = [];
</script>

<style>
  button {
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    width: calc(100vw - 3rem);
  }

  button:focus {
    outline: none;
  }

  :global(.user-is-tabbing) button:focus {
    background-color: var(--main-color);
  }

  li {
    padding: 0 1.5rem;
  }

  hr {
    height: 0.1rem;
    border-width: 0;
    background-color: var(--main-color);
    margin: 0;
  }
</style>

<svelte:options immutable={true} />

<li>
  <button
    on:click
    aria-label="Toggle {list.name} list"
    aria-pressed={list.open}>
    <p class="list-name">{list.name}</p>
    <p class="list-name">{list.open ? '-' : '+'}</p>
  </button>

  {#if list.open}
    <p class="list-content" transition:slide>
      {@html list.content}
    </p>
  {/if}
  <hr noshade />
</li>
