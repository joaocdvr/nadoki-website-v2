<script>
  import { isMenuClicked } from "./stores.js";
  import MenuIcon from "./MenuIcon.svelte";
  import NadokiLogo from "./NadokiLogo.svelte";
  import Menu from "./Menu.svelte";
</script>

<style>
  nav {
    position: fixed;
    width: 100vw;
    max-width: 100%;
    height: 72px;
    display: flex;
    justify-content: space-between;
    background-color: var(--white);
    backface-visibility: hidden;
  }

  div {
    position: absolute;
    z-index: -1;
    background-color: var(--black);
    width: 100%;
    height: 100%;
    right: -100vw;
    transition: transform 1s;
  }

  .isActivated {
    transform: translateX(-100%);
  }
</style>

<nav>
  <NadokiLogo />
  <MenuIcon />
  <div class:isActivated={$isMenuClicked} />
  {#if $isMenuClicked}
    <Menu />
  {/if}
</nav>
