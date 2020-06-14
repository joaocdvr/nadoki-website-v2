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
    z-index: 1;
    width: 100vw;
    background-color: var(--light);
    border-bottom: 0.125rem solid var(--dark);
    text-align: center;
  }

  nav > div:not(.menu-bg):not(.nav-bg) {
    max-width: var(--max-width);
    display: flex;
    justify-content: space-between;
  }

  @media (--max-content-width) {
    nav > div:first-child {
      -webkit-transform: translateZ(0);
      -webkit-transform: translateX(calc(50vw - var(--max-width) / 2));
      -moz-transform: translateX(calc(50vw - var(--max-width) / 2));
      -ms-transform: translateX(calc(50vw - var(--max-width) / 2));
      -o-transform: translateX(calc(50vw - var(--max-width) / 2));
      transform: translateX(calc(50vw - var(--max-width) / 2));
    }
  }

  /* NavBar animation */
  .nav-bg {
    position: absolute;
    z-index: -1;
    background-color: var(--dark);
    width: 100vw;
    height: 4.5rem;
    top: 0;
    right: -100vw;
    -webkit-transition: -webkit-transform 500ms ease-in-out;
    -moz-transition: transform 500ms ease-in-out;
    -o-transition: transform 500ms ease-in-out;
    transition: transform 500ms ease-in-out;
    transition-delay: 500ms;
  }

  .nav-bg-is-activated {
    -webkit-transform: translateZ(0);
    -webkit-transform: translateX(-100vw);
    -moz-transform: translateX(-100vw);
    -ms-transform: translateX(-100vw);
    -o-transform: translateX(-100vw);
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
    left: 0;
    -webkit-transition: -webkit-transform 500ms ease-in-out;
    -moz-transition: transform 500ms ease-in-out;
    -o-transition: transform 500ms ease-in-out;
    transition: transform 500ms ease-in-out;
  }

  .menu-bg-is-activated {
    -webkit-transform: translateZ(0);
    -webkit-transform: translateY(100vh);
    -moz-transform: translateY(100vh);
    -ms-transform: translateY(100vh);
    -o-transform: translateY(100vh);
    transform: translateY(100vh);
    transition-delay: 500ms;
  }
</style>

<nav>
  <div>
    <HomepageButton />
    <MenuButton />
    <Menu />
  </div>
  <div class:menu-bg-is-activated={$isMenuClicked} class="menu-bg" />
  <div class:nav-bg-is-activated={$isMenuClicked} class="nav-bg" />
</nav>
