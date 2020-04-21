<script>
  import { slide, fade } from "svelte/transition";

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

  dl {
    padding: 0 1.5rem;
  }

  dd {
    padding-bottom: 0.75rem;
  }

  hr {
    height: 0.1rem;
    border-width: 0;
    background-color: var(--main-color);
    margin: 0;
  }
</style>

<svelte:options immutable={true} />

<dl in:fade>
  <button
    on:click
    aria-label="Toggle {list.name} list"
    aria-pressed={list.open}>
    <dt class="list-name">{list.name}</dt>
    <p class="list-name">{list.open ? '-' : '+'}</p>
  </button>

  {#if list.open}
    <dd class="list-content" transition:slide>
      {@html list.content}
    </dd>
  {/if}
  <hr noshade />
</dl>
