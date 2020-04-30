<style>
  menu {
    line-height: 0;
    height: calc(100vh - 11rem);
    display: flex;
    flex-wrap: wrap;
  }

  button {
    width: 50vw;
    max-width: 50%;
    padding: 1.25rem;
    box-shadow: inset 0 0 0 0.2rem var(--main-color);
  }

  button:focus {
    outline: none;
  }

  :global(.user-is-tabbing) button:focus {
    background-color: var(--main-color);
  }

  img {
    margin-bottom: 1.25rem;
  }
</style>

<menu>
  <button aria-label="Toggle Alper Arlan's details">
    <img src="about_us/alper.png" alt="Alper Arslan" />
    <p class="body-bold">Alper Arslan</p>
  </button>
  <button aria-label="Toggle Elia Berolaso's details">
    <img src="about_us/elia.png" alt="Elia Bertolaso" />
    <p class="body-bold">Elia Bertolaso</p>
  </button>
  <button aria-label="Toggle João Rodrigues' details">
    <img src="about_us/joao.png" alt="João Rodrigues" />
    <p class="body-bold">João Rodrigues</p>
  </button>
  <button aria-label="Toggle Julia Borelli's details">
    <img src="about_us/julia.png" alt="Julia Borelli" />
    <p class="body-bold">Julia Borelli</p>
  </button>
</menu>
