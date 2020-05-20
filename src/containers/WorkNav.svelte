<script>
  import BackButton from "../components/otu/BackButton.svelte";
</script>

<style>
  nav {
    position: sticky;
    top: 0;
    left: 0;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    background-color: var(--light);
    z-index: 3;
    border-bottom: 0.125rem solid var(--main-color);
  }

  h1 {
    align-self: center;
  }

  span {
    width: 5.5rem;
    height: 4.5rem;
    visibility: hidden;
  }
</style>

<nav>
  <BackButton />
  <h1 class="body-bold">Work</h1>
  <span />
</nav>
