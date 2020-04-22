<script>
  import { handleListToggle } from "./utils.js";
  import { slide, fade } from "svelte/transition";
  import { quadInOut } from "svelte/easing";

  export let inputList = [];
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

  ul {
    padding-bottom: 2.5rem;
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

<ul>
  {#each inputList as outputList, i}
    <dl
      in:fade={{ delay: 300 + i * 100, duration: 300, easing: quadInOut }}
      out:fade={{ duration: 300 }}>
      <button
        on:click={() => handleListToggle(inputList, outputList)}
        aria-label="Toggle {outputList.name} list"
        aria-pressed={outputList.open}>
        <dt class="list-name">{outputList.name}</dt>
        <p class="list-name">{outputList.open ? '-' : '+'}</p>
      </button>

      {#if outputList.open}
        <dd class="list-content" transition:slide>
          {@html outputList.content}
        </dd>
      {/if}
      <hr noshade />
    </dl>
  {/each}
</ul>
