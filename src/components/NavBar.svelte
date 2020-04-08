<script>
  import { isMenuClicked } from "./stores.js";
  import MenuIcon from "./MenuIcon.svelte";
  import NadokiLogo from "./NadokiLogo.svelte";
  import Menu from "./Menu.svelte";
</script>

<style>
  nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 4.5rem;
    display: flex;
    justify-content: space-between;
    background-color: var(--white);
    backface-visibility: hidden;
  }

  hr {
    position: absolute;
    top: 4.5rem;
    height: 0.2rem;
    width: 100vw;
    border-width: 0;
    background-color: var(--main-color);
    margin: 0;
    opacity: 1;
    transition: opacity 500ms ease-in-out;
    transition-delay: 500ms;
  }

  /* NavBar animation */
  .nav-bg {
    position: absolute;
    z-index: -1;
    background-color: var(--black);
    width: 100vw;
    height: 4.5rem;
    right: -100vw;
    transition: transform 500ms ease;
    transition-delay: 500ms;
  }

  .nav-bg-is-activated {
    transform: translateX(-100vw);
    transition-delay: 0s;
  }

  .hr-is-hidden {
    opacity: 0;
    transition-delay: 0s;
  }

  /* Menu animation */
  .menu-bg {
    position: absolute;
    z-index: -1;
    background-color: var(--black);
    width: 100vw;
    height: 100vh;
    top: -100vh;
    transition: transform 500ms ease;
    transition-delay: 0s;
  }

  .menu-bg-is-activated {
    transform: translateY(100vh);
    transition-delay: 500ms;
  }
</style>

<nav>
  <NadokiLogo />
  <MenuIcon />
  <div class:nav-bg-is-activated={$isMenuClicked} class="nav-bg" />
  <Menu />
  <div class:menu-bg-is-activated={$isMenuClicked} class="menu-bg" />
  <hr noshade class:hr-is-hidden={$isMenuClicked} />
</nav>
