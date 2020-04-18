<script>
  export let button = {};
</script>

<style>
  a {
    text-decoration: none;
    border-radius: 5rem;
    text-align: center;
    color: var(--dark);
    background-color: var(--main-color);
  }
  a:active,
  a:visited {
    color: var(--dark);
    outline: none;
  }

  a:focus {
    background-color: var(--light);
    outline: none;
    box-shadow: inset 0 0 0 0.2rem var(--main-color);
  }

  div {
    display: flex;
    justify-content: center;
    padding: 2.5rem 0;
  }

  p {
    padding: 0.5rem 1.5rem;
  }
</style>

<div>
  <a href={button.href} aria-label={button.label} target="_blank">
    <span>
      <p class="body-bold">{button.text}</p>
    </span>
  </a>
</div>
