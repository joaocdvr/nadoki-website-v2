<script>
  import { isStudioClicked, isWorkClicked } from "../components/stores.js";
  import Tag from "../components/Tag.svelte";

  export let card = [];
  export let tags = card.tags.split(",");
</script>

<style>
  img {
    width: 100vw;
  }

  div {
    padding: 1.5rem 1.5rem 2.5rem 1.5rem;
  }

  h2 {
    padding-bottom: 1.5rem;
  }

  p {
    padding-top: 0.75rem;
  }

  hr {
    height: 0.2rem;
    border-width: 0;
    background-color: var(--main-color);
    margin: 0;
  }

  ul {
    display: flex;
    justify-content: flex-start;
  }
</style>

<li>
  <hr noshade />
  <img src={card.src} alt={card.alt} />
  <hr noshade />
  <div>
    <h1>{card.title}</h1>
    {#if $isStudioClicked}
      <h2 class="body-bold">{card.size}</h2>
      <hr noshade />
    {/if}
    <p class="body-regular">{card.content}</p>
    {#if $isWorkClicked}
      <ul>
        {#each tags as tag}
          <Tag {tag} />
        {/each}
      </ul>
    {/if}
  </div>
</li>