<script>
  export let tags = []
  export let splitTags = tags.split(',')
</script>

<ul>
  {#each splitTags as tag}
    <li class="body-bold tag-color">{tag}</li>
  {/each}
</ul>

<style>
  li {
    margin-right: 0.5rem;
    margin-top: 1rem;
    flex: 0 0 auto;
    background-color: var(--dark);
    color: var(--main-color);
    padding: 0.375rem;
  }

  li:last-child {
    margin-right: 0;
  }

  ul {
    display: flex;
    justify-content: flex-start;
    align-content: flex-start;
    flex-wrap: wrap;
  }

  @media (--max-content-width) {
    .body-bold {
      font-size: 1.25rem;
    }
  }
</style>
