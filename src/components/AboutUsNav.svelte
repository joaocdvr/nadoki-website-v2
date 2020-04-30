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

  .alper {
    border-left: 0.2rem solid var(--main-color);
    border-right: 0.1rem solid var(--main-color);
    border-top: 0.2rem solid var(--main-color);
    border-bottom: 0.1rem solid var(--main-color);
  }

  .elia {
    border-left: 0.1rem solid var(--main-color);
    border-right: 0.2rem solid var(--main-color);
    border-top: 0.2rem solid var(--main-color);
    border-bottom: 0.1rem solid var(--main-color);
  }

  .joao {
    border-left: 0.2rem solid var(--main-color);
    border-right: 0.1rem solid var(--main-color);
    border-top: 0.1rem solid var(--main-color);
    border-bottom: 0.2rem solid var(--main-color);
  }

  .julia {
    border-left: 0.1rem solid var(--main-color);
    border-right: 0.2rem solid var(--main-color);
    border-top: 0.1rem solid var(--main-color);
    border-bottom: 0.2rem solid var(--main-color);
  }
</style>

<menu>
  <button class="alper" aria-label="Toggle Alper Arlan's details">
    <img src="about_us/alper.png" alt="Alper Arslan" />
    <p class="body-bold">Alper Arslan</p>
  </button>
  <button class="elia" aria-label="Toggle Elia Berolaso's details">
    <img src="about_us/elia.png" alt="Elia Bertolaso" />
    <p class="body-bold">Elia Bertolaso</p>
  </button>
  <button class="joao" aria-label="Toggle João Rodrigues' details">
    <img src="about_us/joao.png" alt="João Rodrigues" />
    <p class="body-bold">João Rodrigues</p>
  </button>
  <button class="julia" aria-label="Toggle Julia Borelli's details">
    <img src="about_us/julia.png" alt="Julia Borelli" />
    <p class="body-bold">Julia Borelli</p>
  </button>
</menu>
