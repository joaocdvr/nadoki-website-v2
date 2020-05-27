<script>
  export let tags = [];
  export let splitTags = tags.split(",");
</script>

<style>
  li {
    padding: 0.75rem 0.75rem 0 0;
    flex: 0 0 auto;
  }

  p {
    background-color: var(--dark);
    color: var(--main-color);
    padding: 0.375rem;
  }

  ul {
    display: flex;
    justify-content: flex-start;
    align-content: flex-start;
    flex-wrap: wrap;
  }
</style>

<ul>
  {#each splitTags as tag}
    <li>
      <p class="body-bold">{tag}</p>
    </li>
  {/each}
</ul>
