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
    max-width: 100%;
    height: 72px;
    display: flex;
    justify-content: space-between;
    background-color: var(--white);
    backface-visibility: hidden;
  }

  /* NavBar animation */
  .nav-bg {
    position: absolute;
    z-index: -1;
    background-color: var(--black);
    width: 120vw;
    height: 72px;
    right: -120vw;
    transition: transform 500ms;
    transition-delay: 500ms;
  }

  .navBgIsActivated {
    transform: translateX(-100%);
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
    transition: transform 500ms;
    transition-delay: 0s;
  }

  .menuBgIsActivated {
    transform: translateY(100%);
    transition-delay: 500ms;
  }
</style>

<nav>
  <NadokiLogo />
  <MenuIcon />
  <div class:navBgIsActivated={$isMenuClicked} class="nav-bg" />
  <Menu />
  <div class:menuBgIsActivated={$isMenuClicked} class="menu-bg" />
</nav>
