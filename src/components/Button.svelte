<script>
  export let button = {};
</script>

<style>
  a {
    text-decoration: none;
    text-align: center;
    color: var(--main-color);
    background-color: var(--dark);
  }
  a:active,
  a:visited {
    color: var(--main-color);
    outline: none;
  }

  a:focus {
    background-color: var(--main-color);
    color: var(--dark);
    outline: none;
    box-shadow: inset 0 0 0 0.125rem var(--dark);
  }

  div {
    display: flex;
    justify-content: center;
    padding-bottom: 2.5rem;
  }

  p {
    padding: 0.5rem 1.5rem;
  }
</style>

<div>
  <a
    class="body-bold"
    href={button.href}
    aria-label={button.label}
    target="_blank">
    <span>
      <p>{button.text}</p>
    </span>
  </a>
</div>
