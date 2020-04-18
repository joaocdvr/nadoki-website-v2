<script>
  export let button = {};
</script>

<style>
  a {
    text-decoration: none;
    display: flex;
    justify-content: center;
  }
  a:active,
  a:visited {
    color: var(--dark);
    outline: none;
  }

  a:focus {
    color: var(--dark);
    outline: none;
  }

  div {
    margin: 2.5rem 0;
    background-color: var(--main-color);
    text-align: center;
    width: fit-content;
    border-radius: 5rem;
  }

  p {
    padding: 0.5rem 1.5rem;
    color: var(--dark);
  }
</style>

<a href={button.href} aria-label={button.label} target="_blank">
  <div>
    <p class="body-bold">{button.text}</p>
  </div>
</a>
