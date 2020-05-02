<script>
  import Footer from "../components/Footer.svelte";
  import {
    isAlperClicked,
    isEliaClicked,
    isJoaoClicked,
    isJuliaClicked,
    isAnyOfUsClicked,
    animationInDelay,
    animationInDuration,
    animationInEasing,
    animationOutDuration,
    animationOutEasing
  } from "../components/stores.js";
  import { fade } from "svelte/transition";
</script>

<style>
  a {
    text-decoration: none;
    color: var(--dark);
    display: inline-block;
  }
  a:active,
  a:visited {
    color: var(--dark);
    outline: none;
  }

  a:focus {
    color: var(--dark);
    outline: none;
  }

  :global(.user-is-tabbing) a:focus {
    background-color: var(--main-color);
  }

  div {
    padding: 0 1.5rem 2.5rem 1.5rem;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  .socials-ul {
    display: flex;
    flex-direction: row;
    width: fit-content;
  }

  ul :last-child {
    margin-right: 0;
  }

  .socials-li {
    min-width: 2.5rem;
    width: calc((100vw - 5rem) / 5);
    box-shadow: inset 0 0 0 0.125rem var(--dark);
    text-align: center;
    margin: 0.5rem 0.5rem 1.5rem 0;
  }

  .socials-a {
    width: 100%;
    height: 100%;
    padding: 0.5rem;
  }

  table {
    border: 0.0625rem solid var(--dark);
    border-collapse: collapse;
    width: 100%;
    margin-top: 0.5rem;
  }

  th,
  td {
    border: 0.0625rem solid var(--dark);
    width: calc(1 / 2 * 100%);
    padding: 0.5rem 1rem;
  }

  /* td {
    text-align: center;
  } */
</style>

{#if $isAnyOfUsClicked}
  <div
    in:fade={{ delay: $animationInDelay, duration: $animationInDuration, easing: $animationInEasing }}
    out:fade={{ duration: $animationOutDuration, easing: $animationOutEasing }}>
    {#if $isAlperClicked}
      <h2 class="header-big">Alper Arslan</h2>
    {:else if $isEliaClicked}
      <h2 class="header-big">Elia Bertolaso</h2>
    {:else if $isJoaoClicked}
      <h2 class="header-big">João Rodrigues</h2>
    {:else if $isJuliaClicked}
      <h2 class="header-big">Julia Borelli</h2>

      <ul>
        <li>
          <ul class="socials-ul">
            <li class="socials-li">
              <a
                class="socials-a"
                target="_blank"
                aria-label="Julia Borelli's Instagram page"
                href="https://www.instagram.com/juliaborelli">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 16C9.791 16 8 14.21 8 12C8 9.791 9.791 8 12 8C14.209
                    8 16 9.791 16 12C16 14.21 14.209 16 12 16Z"
                    fill="var(--dark)" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 0C8.741 0 8.333 0.014 7.053 0.072C2.695 0.272 0.273
                    2.69 0.073 7.052C0.014 8.333 0 8.741 0 12C0 15.259 0.014
                    15.668 0.072 16.948C0.272 21.306 2.69 23.728 7.052
                    23.928C8.333 23.986 8.741 24 12 24C15.259 24 15.668 23.986
                    16.948 23.928C21.302 23.728 23.73 21.31 23.927 16.948C23.986
                    15.668 24 15.259 24 12C24 8.741 23.986 8.333 23.928
                    7.053C23.732 2.699 21.311 0.273 16.949 0.073C15.668 0.014
                    15.259 0 12 0ZM11.9999 5.83789C8.59689 5.83789 5.83789
                    8.59689 5.83789 11.9999C5.83789 15.4029 8.59689 18.1629
                    11.9999 18.1629C15.4029 18.1629 18.1619 15.4039 18.1619
                    11.9999C18.1619 8.59689 15.4029 5.83789 11.9999
                    5.83789ZM18.4058 4.15503C17.6098 4.15503 16.9648 4.80003
                    16.9648 5.59503C16.9648 6.39003 17.6098 7.03503 18.4058
                    7.03503C19.2008 7.03503 19.8448 6.39003 19.8448
                    5.59503C19.8448 4.80003 19.2008 4.15503 18.4058 4.15503Z"
                    fill="var(--dark)" />
                </svg>
              </a>
            </li>

            <li class="socials-li">
              <a
                class="socials-a"
                target="_blank"
                aria-label="Julia Borelli's LindedIn"
                href="https://www.linkedin.com/in/juliaborelli">
                <svg viewBox="0 0 24 23" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4.98 2.5C4.98 3.881 3.87 5 2.5 5C1.13 5 0.02 3.881 0.02
                    2.5C0.02 1.12 1.13 0 2.5 0C3.87 0 4.98 1.12 4.98 2.5ZM5
                    7H0V23H5V7ZM12.982 7H8.014V23H12.983V14.601C12.983 9.931
                    19.012 9.549 19.012 14.601V23H24V12.869C24 4.989 15.078
                    5.276 12.982 9.155V7Z"
                    fill="var(--dark)" />
                </svg>
              </a>
            </li>
          </ul>
        </li>

        <li>
          <br />
          <dt class="body-bold">Nationality</dt>
          <dd class="body-regular">
            Brazilian
            <br />
            <br />
          </dd>
        </li>

        <li>
          <dt class="body-bold">Experience</dt>
          <dd class="body-regular">
            Audio Department Assistant
            <br />
            <span class="body-regular-two">SAE Institute Berlin</span>
            <br />
            Assistant Engineer
            <br />
            <span class="body-regular-two">Jazzanova Recording Studio</span>
            <br />
            Production Assistant
            <br />
            <span class="body-regular-two">Post Modern Mastering</span>
            <br />
            <br />
          </dd>
        </li>

        <li>
          <dt class="body-bold">Education</dt>
          <dd class="body-regular">
            Audio Engineering
            <br />
            <span class="body-regular-two">SAE Institute Berlin</span>
            <br />
            International Music Production and Sound Engineering Diploma
            <br />
            <span class="body-regular-two">Point Blank</span>
            <br />
            Summer Performance Program
            <br />
            <span class="body-regular-two">Berklee College of Music</span>
            <br />
            <br />
          </dd>
        </li>

        <li>
          <dt class="body-bold">Background</dt>
          <dd class="body-regular">
            Musician since an early age — mainly guitarist
            <br />
            <br />
          </dd>
        </li>
        <li>
          <dt class="body-bold">Interests</dt>
          <dd class="body-regular">
            Technology, music, and Netflix
            <br />
            <br />
          </dd>
        </li>

        <li>
          <dt class="body-bold">Languages</dt>
          <dd class="body-regular">
            Portuguese, English, German (B1) and I pretend I speak Spanish
            <br />
            <br />
          </dd>
        </li>

        <li>
          <dt class="body-bold">About me</dt>
          <dd class="body-regular">
            Workaholic. Part-time OCD. Full-time Nerd
            <br />
            <br />
          </dd>
        </li>

        <li>
          <dt class="body-bold">Highlights</dt>
          <dd>
            <table>
              <tr>
                <th class="body-regular">Pairs of glasses</th>
                <td class="header-big">16</td>
              </tr>
              <tr>
                <th class="body-regular">Guitar strings</th>
                <td class="header-big">100</td>
              </tr>
              <tr>
                <th class="body-regular">Favourite Emoji</th>
                <td class="header-big">👽</td>
              </tr>
            </table>
          </dd>
        </li>
      </ul>
    {/if}
  </div>
  <Footer />
{/if}
