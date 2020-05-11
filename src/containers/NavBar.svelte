<script>
  import { isMenuClicked } from "../utensils/stores.js";
  import MenuButton from "../components/otu/MenuButton.svelte";
  import HomepageButton from "../components/otu/HomepageButton.svelte";
  import Menu from "./Menu.svelte";
</script>

<style>
  nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    background-color: var(--light);
    backface-visibility: hidden;
    z-index: 1;
    border-bottom: 0.125rem solid var(--main-color);
  }

  /* NavBar animation */
  .nav-bg {
    position: absolute;
    z-index: -1;
    background-color: var(--dark);
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

  /* Menu animation */
  .menu-bg {
    position: absolute;
    z-index: -1;
    background-color: var(--dark);
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
  <HomepageButton />
  <MenuButton />
  <div class:nav-bg-is-activated={$isMenuClicked} class="nav-bg" />
  <Menu />
  <div class:menu-bg-is-activated={$isMenuClicked} class="menu-bg" />
</nav>
