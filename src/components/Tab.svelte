<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import {
    animationInDelay,
    animationInDuration,
    animationInEasing,
    animationOutDuration,
    animationOutEasing
  } from "../utensils/stores.js";

  onMount(() => {
    // On mobile, if a tab item was previously selected, that item is shown as selected.
    // It also scrolls the tab component until the selected item is either shown 24px of the left margin or at an edge.
    if (window.innerWidth < 768 && variant === "services") {
      const servicesMenu = document.getElementsByClassName("services-tab-menu");
      const menuBounds = servicesMenu[0].getBoundingClientRect();

      const selectedTab = document.getElementsByClassName("a-is-selected");
      const tabBounds = selectedTab[0].getBoundingClientRect();

      if (menuBounds.left === 0) {
        servicesMenu[0].scrollTo({
          left: tabBounds.left - 24,
          behavior: "smooth"
        });
      } else {
        servicesMenu[0].scrollTo({
          left:
            tabBounds.left +
            servicesMenu[0].scrollLeft -
            24 -
            window.innerWidth,
          behavior: "smooth"
        });
      }
    }
  });

  export let tab = [];
  export let delay = 0;
  export let variant = "";

  function handleClick(event, callback) {
    event.preventDefault();
    callback();

    if (window.screen.width >= 768) {
      const servicesModal = document.getElementById("services-modal");
      if (servicesModal.scrollTop > 128) {
        servicesModal.scrollTop = 130;
      }
      // Scrolls the tab component until the selected item is either shown 24px of the left margin or at an edge.
    } else {
      const servicesMenu = document.getElementsByClassName("services-tab-menu");
      const tabBounds = event.target.getBoundingClientRect();

      servicesMenu[0].scrollTo({
        left: tabBounds.left + servicesMenu[0].scrollLeft - 24,
        behavior: "smooth"
      });
    }
  }
</script>

<style>
  ul {
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow-x: auto;
    border-bottom: 0.125rem solid var(--dark);
    background-color: var(--dark);
    scroll-behavior: smooth;
  }

  li {
    min-height: 3.5rem;
    flex: 0 0 auto;
    border-right: 0.125rem solid var(--dark);
  }

  @media (--max-content-width) {
    .services-tab-menu {
      position: sticky;
      flex-direction: column;
      align-items: stretch;
      top: 4.5rem;
      left: 0;
      width: 35%;
      height: calc(var(--vh, 1vh) * 100 - 4.5rem);
      border-bottom: none;
      scroll-behavior: unset;
    }
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    width: 100%;
    height: 100%;
    border: none;
    cursor: pointer;
    background-color: var(--light);
    box-shadow: none;
    transition: background-color 300ms ease-in-out,
      border-color 300ms ease-in-out;
  }

  a:last-child {
    border: none;
  }

  @media (--max-content-width) {
    .services-tab-menu li {
      border-right: 0.125rem solid var(--dark);
      border-bottom: 0.125rem solid var(--dark);
      flex-grow: 1;
    }

    .services-tab-menu a {
      justify-content: flex-end;
    }

    .services-tab-menu li:last-child {
      border-bottom: none;
    }
  }

  :global(.user-is-tabbing) a:focus {
    background-color: var(--secondary-color);
  }

  :global(.user-is-tabbing) a:focus span {
    color: var(--light);
  }

  @media (--not-touchscreen) {
    a:hover {
      background-color: var(--secondary-color);
    }

    a:hover span {
      color: var(--light);
    }
  }

  span {
    color: var(--dark);
    margin: 1rem 1.5rem;
    transition: color 300ms ease-in-out;
    display: block;
    pointer-events: none;
  }

  .a-is-selected {
    background-color: var(--dark);
    border-color: var(--dark);
  }

  .span-is-selected {
    color: var(--light);
  }

  .just-two {
    width: 50%;
    border: none;
  }

  .body-bold {
    font-size: 1rem;
  }
</style>

<ul
  class:services-tab-menu={variant === 'services'}
  in:fade={{ delay: $animationInDelay, duration: $animationInDuration, easing: $animationInEasing }}
  out:fade={{ delay: delay, duration: $animationOutDuration, easing: $animationOutEasing }}>

  {#each tab as tab}
    <li class:just-two={tab.justTwo}>
      <a
        href={tab.path}
        class="tab-a"
        on:click={event => handleClick(event, tab.function)}
        aria-pressed={tab.variable}
        class:a-is-selected={tab.variable}>

        <span class="body-bold" class:span-is-selected={tab.variable}>
          {tab.title}
        </span>
      </a>
    </li>
  {/each}
</ul>
