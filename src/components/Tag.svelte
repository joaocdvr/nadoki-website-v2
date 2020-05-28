<script>
  export let tags = [];
  export let splitTags = tags.split(",");
</script>

<style>
  li {
    margin-right: .5rem;
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
</style>

<ul>
  {#each splitTags as tag}
    <li class="body-bold">
      {tag}
    </li>
  {/each}
</ul>
