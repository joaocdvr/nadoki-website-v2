<script>
  import { afterUpdate } from "svelte";
  import { fade } from "svelte/transition";
  import {
    animationInDelay,
    animationInDuration,
    animationInEasing,
    animationOutDuration,
    animationOutEasing,
    scrollYPosition,
    aboutUsActiveItem
  } from "../utensils/stores.js";
  import { handleSVGAnimation } from "../utensils/utils.js";

  import Header from "../components/Header.svelte";
  import AboutUsNav from "../containers/AboutUsNav.svelte";
  import Footer from "../components/Footer.svelte";

  afterUpdate(() => {
    if ($aboutUsActiveItem === "alper") {
      setTimeout(
        () =>
          handleSVGAnimation(
            "svg-to-animate-alper-2",
            "about_us",
            "name",
            "alper"
          ),
        0
      );
    } else if ($aboutUsActiveItem === "elia") {
      setTimeout(
        () =>
          handleSVGAnimation(
            "svg-to-animate-elia-2",
            "about_us",
            "name",
            "elia"
          ),
        0
      );
    } else if ($aboutUsActiveItem === "joao") {
      setTimeout(
        () =>
          handleSVGAnimation(
            "svg-to-animate-joao-2",
            "about_us",
            "name",
            "joao"
          ),
        0
      );
    } else if ($aboutUsActiveItem === "julia") {
      setTimeout(
        () =>
          handleSVGAnimation(
            "svg-to-animate-julia-2",
            "about_us",
            "name",
            "julia"
          ),
        0
      );
    }
  });

  $: isAnyAboutUsItemActive = !!$aboutUsActiveItem;
</script>

<style>
  @media (--max-content-width) {
    main {
      height: calc(100vh - 12.5rem);
      display: flex;
    }

    .header-big {
      /* display: inline-block; */
      font-size: 2.625rem;
    }

    .header-big + .header-big {
      margin-bottom: 1rem;
    }
  }

  .content-wrapper {
    background-color: var(--main-color);
  }

  a {
    text-decoration: none;
    color: var(--dark);
    display: inline-block;
    fill: var(--dark);
  }

  a:active,
  a:visited,
  a:focus {
    outline: none;
  }

  :global(.user-is-tabbing) a:focus {
    background-color: var(--secondary-color);
  }

  :global(.user-is-tabbing) a:focus svg {
    fill: var(--light);
  }

  img {
    position: relative;
    width: 100%;
    padding: 1.5rem;
    z-index: 1;
  }

  @media (--max-content-width) {
    .img-wrapper {
      width: 20rem;
      max-width: 30vw;
      position: absolute;
      right: 0;
      top: 0;
      padding: 0;
    }
  }

  h2 {
    padding-bottom: 0.5rem;
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

  @media (--max-content-width) {
    .socials-ul {
      width: 100%;
      padding-bottom: 5rem;
      border-bottom: 2px solid var(--dark);
    }
  }

  ul :last-child {
    margin-right: 0;
  }

  .socials-li {
    min-width: 2.5rem;
    width: calc((100vw - 5rem) / 5);
    box-shadow: inset 0 0 0 0.0625rem var(--dark);
    text-align: center;
    margin-right: 0.5rem;
  }

  @media (--max-content-width) {
    .socials-li {
      width: initial;
      min-width: 5rem;
    }
  }

  .socials-a {
    width: 100%;
    height: 100%;
    padding: 0.5rem;
    transition: background-color 300ms ease-in;
  }

  .socials-a svg {
    transition: fill 300ms ease-in;
  }

  @media (--max-content-width) {
    .socials-a:hover {
      background-color: var(--secondary-color);
    }

    .socials-a:hover svg {
      fill: var(--light);
    }
  }

  li:not(:first-child):not(.socials-li):not(:last-child) {
    margin-bottom: 2.5rem;
    padding-bottom: 2.5rem;
    border-bottom: 2px solid var(--dark);
  }

  li:first-child:not(.socials-li) {
    margin-bottom: 2.5rem;
  }

  @media (--max-content-width) {
    li:not(:first-child):not(.socials-li):not(:last-child) {
      margin-bottom: 5rem;
      padding-bottom: 5rem;
    }

    li:first-child:not(.socials-li) {
      margin-bottom: 5rem;
    }
  }

  dt {
    margin-bottom: 0.5rem;
  }

  dd {
    padding-top: 0.25rem;
  }

  dd span {
    display: block;
    padding-bottom: 0.5rem;
  }

  dd :last-child {
    margin-bottom: 0;
  }

  ul :last-child dt {
    border-bottom: none;
  }

  ul :last-child dd {
    padding-top: 0;
  }

  table {
    border: 0.0625rem solid var(--dark);
    border-collapse: collapse;
    width: 100%;
  }

  th,
  td {
    border: 0.0625rem solid var(--dark);
    width: calc(1 / 2 * 100%);
    padding: 0.5rem 1rem;
  }

  td {
    text-align: center;
  }

  .content-wrapper {
    margin-top: 4.5rem;
    padding: 0;
    position: relative;
  }

  .texture-svg {
    position: absolute;
    fill: var(--light);
    top: 0;
    left: 0;
    height: 100vw;
    width: 100vw;
  }

  @media (--max-content-width) {
    .texture-svg {
      height: 100%;
      width: 100%;
    }
  }

  .personal-page-wrapper {
    position: relative;
  }

  @media (--max-content-width) {
    .personal-page-wrapper {
      width: 100%;
      overflow-y: scroll;
      padding: 5rem;
    }

    .personal-page-wrapper .body-bold {
      font-size: 2rem;
      margin-bottom: 0;
    }

    .personal-page-wrapper .body-regular {
      font-size: 1.5rem;
    }
  }

  h2 {
    position: relative;
    z-index: 1;
  }
</style>

<div
  class="content-wrapper"
  style="transform: translateY({$scrollYPosition * -1}px)">
  <Header variant="about_us" />
  <main>
    <AboutUsNav />

    {#if isAnyAboutUsItemActive}
      {#if $aboutUsActiveItem === 'alper'}
        <div
          class="personal-page-wrapper"
          in:fade={{ delay: $animationInDelay, duration: $animationInDuration, easing: $animationInEasing }}
          out:fade={{ duration: $animationOutDuration, easing: $animationOutEasing }}>
          <div class="img-wrapper">
            <img
              class:specific-img-open={isAnyAboutUsItemActive}
              src="about_us/alper.png"
              alt="Alper Arslan" />

            <svg
              id="svg-to-animate-alper-2"
              class="texture-svg"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 80 80">
              <path
                d="M72,18.1v.67c-1.14,2.84-3.58,5.81-3.16,8.48,1.13,7.3.22,13.18-10,15.18-2.49.48-5.19.22-7.8.26-.17,0-.34-.37-.51-.56a7.42,7.42,0,0,1,1.11-.33,9.87,9.87,0,0,1,1.22-.08c-.07-.2-.08-.54-.23-.59-.47-.15-1.2-.42-1.47-.26-2.33,1.42-4.66,2.85-6.79,4.46-.67.5-.72,1.54-1,2.34a13.4,13.4,0,0,1,2.54-1.4,30.41,30.41,0,0,1,3.76-.65l-.39,2.92c-.43,3.34-2,7-1,9.94s3.36,2.21,3.21-1c.19,0,.47-.06.57,0,2.38,1.86,5.08,5.51,7,5.26,5-.65-3.13,10,5.87,4.12a9.58,9.58,0,0,1,2-1.31,9.52,9.52,0,0,1,2.43-.22c-.07,1.11.38,2.79-.33,3.23A16.15,16.15,0,0,1,62.61,71c-5.5.59-11.08.69-16.62,1h-.83c-1.65-.93-3.36-1.8-4.93-2.81a2.41,2.41,0,0,1-1-1.51c-.6-3.73.25-8.14-2-11-3-3.91-3.09-14-14.56-7.19-.39.23-.21,1-.58,1.34C18.06,54.2,14,57.54,9.85,60.88a2.54,2.54,0,0,1-.79.29c.55-4,1.35-8,1.58-12a33.7,33.7,0,0,0-.94-7.69c-.07-.38-1.11-.64-1.7-1v-.67c.53-1.82.56-3.9,1.71-5.41,1.55-2,3.58-4.42,6.11-5.24s6.17-.11,9.3,0a19,19,0,0,1,3.12.65c-.43.88-.54,2.11-1.33,2.6-1.92,1.16-5.42,1.63-6,3-1.66,3.88-2.21,8.08-3.09,12.17-.1.5.51,1.1.79,1.66l.67-.79c2.31-2.68,4.69-5.33,6.91-8.06,1.42-1.75,2.47-3.69,3.93-5.41,2.43-2.88,5-5.65,7.61-8.45a27.65,27.65,0,0,1,4.12-4.19,53.61,53.61,0,0,1,6.43-3.55c.12-.06.45.17.69.25,2.16.66,4.31,1.34,6.48,2s4.52,1.26,6.71,2c.44.15.58.86.86,1.31a15.16,15.16,0,0,0,.92-1.61c.64-1.45,1.14-2.95,1.86-4.37C66.42,17.2,68,16,67.86,14.82c-.3-2-1.63-3.82-2.52-5.72,0-.07,0-.19.12-.26.22-.29.47-.56.7-.84,1.52.85,3.89,1.46,4.38,2.61C71.56,13,71.57,15.59,72,18.1Z" />
            </svg>
          </div>

          <h2 class="header-big">ALPER</h2>
          <h2 class="header-big">ARSLAN</h2>

          <ul>
            <li>
              <ul class="socials-ul">
                <li class="socials-li">
                  <a
                    class="socials-a"
                    target="_blank"
                    aria-label="Alper Arslan's Instagram page"
                    href="https://www.instagram.com/arslanofficial._">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 16C9.791 16 8 14.21 8 12C8 9.791 9.791 8 12
                        8C14.209 8 16 9.791 16 12C16 14.21 14.209 16 12 16Z" />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 0C8.741 0 8.333 0.014 7.053 0.072C2.695 0.272
                        0.273 2.69 0.073 7.052C0.014 8.333 0 8.741 0 12C0 15.259
                        0.014 15.668 0.072 16.948C0.272 21.306 2.69 23.728 7.052
                        23.928C8.333 23.986 8.741 24 12 24C15.259 24 15.668
                        23.986 16.948 23.928C21.302 23.728 23.73 21.31 23.927
                        16.948C23.986 15.668 24 15.259 24 12C24 8.741 23.986
                        8.333 23.928 7.053C23.732 2.699 21.311 0.273 16.949
                        0.073C15.668 0.014 15.259 0 12 0ZM11.9999
                        5.83789C8.59689 5.83789 5.83789 8.59689 5.83789
                        11.9999C5.83789 15.4029 8.59689 18.1629 11.9999
                        18.1629C15.4029 18.1629 18.1619 15.4039 18.1619
                        11.9999C18.1619 8.59689 15.4029 5.83789 11.9999
                        5.83789ZM18.4058 4.15503C17.6098 4.15503 16.9648 4.80003
                        16.9648 5.59503C16.9648 6.39003 17.6098 7.03503 18.4058
                        7.03503C19.2008 7.03503 19.8448 6.39003 19.8448
                        5.59503C19.8448 4.80003 19.2008 4.15503 18.4058 4.15503Z" />
                    </svg>
                  </a>
                </li>

                <li class="socials-li">
                  <a
                    class="socials-a"
                    target="_blank"
                    aria-label="Alper Arslan's LindedIn"
                    href="https://www.linkedin.com/in/nadokiarslan">
                    <svg viewBox="0 0 24 23" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M4.98 2.5C4.98 3.881 3.87 5 2.5 5C1.13 5 0.02 3.881
                        0.02 2.5C0.02 1.12 1.13 0 2.5 0C3.87 0 4.98 1.12 4.98
                        2.5ZM5 7H0V23H5V7ZM12.982
                        7H8.014V23H12.983V14.601C12.983 9.931 19.012 9.549
                        19.012 14.601V23H24V12.869C24 4.989 15.078 5.276 12.982
                        9.155V7Z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <dt class="body-bold">Experience</dt>
              <dd class="body-regular">
                — Talent Manager of Electronic Music Artists (2 years)
                <span class="body-small">Berlin, Germany (Freelancer)</span>
                — DJ (8 years)
                <span class="body-small">Miami, USA</span>
              </dd>
            </li>

            <li>
              <dt class="body-bold">Education</dt>
              <dd class="body-regular">
                — Audio Engineering (BA)
                <span class="body-small">SAE Institute Berlin</span>
                — Finance (BA)
                <span class="body-small">Marmara University</span>
              </dd>
            </li>

            <li>
              <dt class="body-bold">Background</dt>
              <dd class="body-regular">
                Producer, mixing engineer, DJ & financial analyst
              </dd>
            </li>
            <li>
              <dt class="body-bold">Interests</dt>
              <dd class="body-regular">
                Electronic music production, vocal recording, 3D audio, virtual
                reality & social media management
              </dd>
            </li>

            <li>

              <dt class="body-bold">Nationality</dt>
              <dd class="body-regular">Turkish</dd>
            </li>

            <li>
              <dt class="body-bold">Languages</dt>
              <dd class="body-regular">Turkish, English & German</dd>
            </li>

            <li>
              <dt class="body-bold">About me</dt>
              <dd class="body-regular">Energetic & supportive</dd>
            </li>

            <li>
              <dt class="body-bold">Highlights</dt>
              <dd>
                <table>
                  <tr>
                    <th class="body-regular">Owned vynils</th>
                    <td class="header-big">186</td>
                  </tr>
                  <tr>
                    <th class="body-regular">Fastest speed</th>
                    <td class="header-big">262</td>
                  </tr>
                  <tr>
                    <th class="body-regular">Max. elevation</th>
                    <td class="header-big">2800</td>
                  </tr>
                </table>
              </dd>
            </li>
          </ul>
        </div>
      {:else if $aboutUsActiveItem === 'elia'}
        <div
          class="personal-page-wrapper"
          in:fade={{ delay: $animationInDelay, duration: $animationInDuration, easing: $animationInEasing }}
          out:fade={{ duration: $animationOutDuration, easing: $animationOutEasing }}>
          <div class="img-wrapper">
            <img
              class:specific-img-open={isAnyAboutUsItemActive}
              src="about_us/elia.png"
              alt="Elia Bertolaso" />

            <svg
              id="svg-to-animate-elia-2"
              class="texture-svg"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 80 80">
              <path
                d="M49.37,47c-.38,1-.75,1.93-1.12,2.89-.07.17-.23.39-.19.49.16.41.4,1.11.58,1.1a8.82,8.82,0,0,0,2.8-.63c.52-.24,1-1.55,1.32-1.44,2.68.88,5.31,2,8,3a4.35,4.35,0,0,0,.89.14,9.69,9.69,0,0,0,2.89.4c.74-.11,1.4-1,2.15-1.26a1.8,1.8,0,0,1,1.54.28c3.43,2.51.35,2.8-.79,3.9-9.84,9.49-20.08.8-30.12,1.14-.29,0-.59-.3-.88-.46a3.4,3.4,0,0,0,.78-.1,10.36,10.36,0,0,0,1-.5c-1.06-.63-2.1-1.72-3.18-1.79-2.82-.19-5.66.06-8.49.09-.05,0,0-.68-.17-.93a4.2,4.2,0,0,0-.73-.79l2.17-2.73c-.6.45-1.21,1.28-1.8,1.25a4.66,4.66,0,0,1-2.39-1.15,2.44,2.44,0,0,1-.68-1.66c.05-1.6.3-3.19.46-4.79a32,32,0,0,1-3.48,3.07c-1.28.85-3.74,1.09-3.87,2a28.8,28.8,0,0,0,.35,8.78c.37,2,1.67,3.72,2.43,5.64a16.16,16.16,0,0,1,.57,3q.24-1.12.51-2.25l.35.11c-.15.42-.53,1-.43,1.24,3.75,8.51-1.68,4.45-3.91,4.78a3.08,3.08,0,0,0-.86.41c.1.17.17.45.3.5.87.39,1.75.73,2.63,1.08a1.65,1.65,0,0,1-.58.19c-1.09-.07-2.44.32-3.21-.36-1.73-1.54-4-3.28-4.55-5.56-.95-3.7-.78-7.89-1-11.87-.27-4.5-.84-9-.49-13.48.14-1.77,2.19-3.69,3.7-4.8,2.81-2.05,5.89-3.46,8.79-5.31A119.29,119.29,0,0,0,31.67,23a8.35,8.35,0,0,0,2.82-5.43c-.06-4.9-.38-4.86-7.14-6.45-2.36-.56-4.69-1.35-7-2L22.8,8h.28c.59.5,1.16,1.4,1.75,1.42,4.26.13,8.6-.55,12.75.35,1.92.41,4.86,3.7,4.94,5.83.36,10,4,16.12,11.16,19,6.52,2.59,14.54,1,18.32,11.07v.72c-4.9,7.63-10.24.18-15.35.8-.6.07-1.16.83-1.75,1.24a2.08,2.08,0,0,1-.79.39,2.19,2.19,0,0,1-.79-.2,3.36,3.36,0,0,0,.57-.62c.41-.66.77-1.36,1.15-2a56.56,56.56,0,0,0-5.63-3c-.52-.21-1.34.78-2,1.22l2,2a2.38,2.38,0,0,0-.67-.18c-1.39-.06-2.78-.08-4.18-.12.61-.7,1.19-1.44,1.84-2.06.18-.16.58.09.89.14,0-.49,0-1.4-.06-1.43-4.48-1.52-9-3-13.46-4.4-.25-.08-.53.07-.8.11,0,.29,0,.69.16.85a4.53,4.53,0,0,0,.9.68L32.53,40l-2.89.55c.1.46.1,1.19.32,1.31.75.43,1.59.57,2.36,1a42,42,0,0,0,4,2.1,12.75,12.75,0,0,0,3.54.41c.12,0,.4-.57.35-.68a3.18,3.18,0,0,0-.87-1.33c-.41-.23-1.08.15-1.41-.14s-.41-1.1-.59-1.68c1.11.66,2.25,1.25,3.32,2,.18.13-.13,1.34.06,1.5a6.52,6.52,0,0,0,1.79.84A33.91,33.91,0,0,0,40.74,42c-.3-.48-1.06-.49-1.6-.75-.07,0-.07-.27-.1-.41l4.43,2.7c-1.14,1.14,3.12,7.79-2.61,4.27,0,0-.19.22-.28.34.17.23.33.63.53.67a36,36,0,0,0,6,1.05c.92,0,1.85-1,2.78-1.47a28.73,28.73,0,0,1-3.08-.07,2.39,2.39,0,0,1-1.21-.73,1.42,1.42,0,0,1-.14-.91,1.76,1.76,0,0,1,1.12-.46A28.53,28.53,0,0,1,49.37,47ZM24.56,48.28l3.79-3.38c-.87-.58-2-1.89-2.54-1.57-.86.5-1.37,2.08-1.94,3.27C23.78,46.8,24.18,47.37,24.56,48.28Z" />
            </svg>
          </div>
          <h2 class="header-big">ELIA</h2>
          <h2 class="header-big">BERTOLASO</h2>

          <ul>
            <li>
              <ul class="socials-ul">
                <li class="socials-li">
                  <a
                    class="socials-a"
                    target="_blank"
                    aria-label="Elia Bertolaso's Instagram page"
                    href="https://www.instagram.com/eliabertolaso">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 16C9.791 16 8 14.21 8 12C8 9.791 9.791 8 12
                        8C14.209 8 16 9.791 16 12C16 14.21 14.209 16 12 16Z" />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 0C8.741 0 8.333 0.014 7.053 0.072C2.695 0.272
                        0.273 2.69 0.073 7.052C0.014 8.333 0 8.741 0 12C0 15.259
                        0.014 15.668 0.072 16.948C0.272 21.306 2.69 23.728 7.052
                        23.928C8.333 23.986 8.741 24 12 24C15.259 24 15.668
                        23.986 16.948 23.928C21.302 23.728 23.73 21.31 23.927
                        16.948C23.986 15.668 24 15.259 24 12C24 8.741 23.986
                        8.333 23.928 7.053C23.732 2.699 21.311 0.273 16.949
                        0.073C15.668 0.014 15.259 0 12 0ZM11.9999
                        5.83789C8.59689 5.83789 5.83789 8.59689 5.83789
                        11.9999C5.83789 15.4029 8.59689 18.1629 11.9999
                        18.1629C15.4029 18.1629 18.1619 15.4039 18.1619
                        11.9999C18.1619 8.59689 15.4029 5.83789 11.9999
                        5.83789ZM18.4058 4.15503C17.6098 4.15503 16.9648 4.80003
                        16.9648 5.59503C16.9648 6.39003 17.6098 7.03503 18.4058
                        7.03503C19.2008 7.03503 19.8448 6.39003 19.8448
                        5.59503C19.8448 4.80003 19.2008 4.15503 18.4058 4.15503Z" />
                    </svg>
                  </a>
                </li>

                <li class="socials-li">
                  <a
                    class="socials-a"
                    target="_blank"
                    aria-label="Elia Bertolaso's LindedIn"
                    href="https://www.linkedin.com/in/elia-bertolaso-97a807130">
                    <svg viewBox="0 0 24 23" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M4.98 2.5C4.98 3.881 3.87 5 2.5 5C1.13 5 0.02 3.881
                        0.02 2.5C0.02 1.12 1.13 0 2.5 0C3.87 0 4.98 1.12 4.98
                        2.5ZM5 7H0V23H5V7ZM12.982
                        7H8.014V23H12.983V14.601C12.983 9.931 19.012 9.549
                        19.012 14.601V23H24V12.869C24 4.989 15.078 5.276 12.982
                        9.155V7Z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <dt class="body-bold">Experience</dt>
              <dd class="body-regular">
                — Tour Manager & Studio Consultant
                <span class="body-small">Tale of Us</span>
                — Audio Department Assistant
                <span class="body-small">SAE Institute Berlin</span>
              </dd>
            </li>

            <li>
              <dt class="body-bold">Education</dt>
              <dd class="body-regular">
                — Audio Engineering (BA)
                <span class="body-small">SAE Institute Berlin</span>
                — Classical Music
                <span class="body-small">Conservatory of Bruno Maderna</span>
              </dd>
            </li>

            <li>
              <dt class="body-bold">Background</dt>
              <dd class="body-regular">???</dd>
            </li>

            <li>
              <dt class="body-bold">Interests</dt>
              <dd class="body-regular">Techno & electronic music production</dd>
            </li>

            <li>

              <dt class="body-bold">Nationality</dt>
              <dd class="body-regular">Italian</dd>
            </li>

            <li>
              <dt class="body-bold">Languages</dt>
              <dd class="body-regular">Italian, English & German (B1)</dd>
            </li>

            <li>
              <dt class="body-bold">About me</dt>
              <dd class="body-regular">???</dd>
            </li>

            <li>
              <dt class="body-bold">Highlights</dt>
              <dd>
                <table>
                  <tr>
                    <th class="body-regular">undefined</th>
                    <td class="header-big">?</td>
                  </tr>
                  <tr>
                    <th class="body-regular">undefined</th>
                    <td class="header-big">?</td>
                  </tr>
                  <tr>
                    <th class="body-regular">undefined</th>
                    <td class="header-big">?</td>
                  </tr>
                </table>
              </dd>
            </li>
          </ul>
        </div>
      {:else if $aboutUsActiveItem === 'joao'}
        <div
          class="personal-page-wrapper"
          in:fade={{ delay: $animationInDelay, duration: $animationInDuration, easing: $animationInEasing }}
          out:fade={{ duration: $animationOutDuration, easing: $animationOutEasing }}>
          <div class="img-wrapper">
            <img
              class:specific-img-open={isAnyAboutUsItemActive}
              src="about_us/joao.png"
              alt="João Rodrigues" />

            <svg
              id="svg-to-animate-joao-2"
              class="texture-svg"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 80 80">
              <path
                d="M63.86,19.52c-1-.91-3.68.49-5.54,1.1a8.59,8.59,0,0,0-2.27,1.78c-.3-2.42-.62-4.84-.87-7.27-.09-.89.26-2.38-.08-2.61-2.91-1.95-5.94-3.68-8.93-5.47.19.77.38,1.54.56,2.31.79,3.53,1.64,7,2.31,10.6.15.83-.71,2.13-.4,2.67.49.87,2.36,1.47,2.29,1.84a34.63,34.63,0,0,1-1.78,5.29c-2.08-1.52-4.21-3-6.22-4.59-2.63-2.13-5-4.89-7.87-6.32-.85-.43-3,3.8-4.62,3.91-2.38.15-4.82-2.07-7.3-2.27-9.79-.77-11.11,4.74-7.62,14,.42,1.14-1.39,3.4-2.16,5.14-.93-1.25-1.87-2.5-2.78-3.76a3,3,0,0,1-.28-.63c-.11.55-.21,1.1-.33,1.64Q8.52,43.36,7.05,49.8v1c5.49-2.87,11.86-4.57,16.23-8.93,4.18-4.19,5.62-12.12,13.21-5.47,2.51,2.2,7.84.89,9.55,3.35,3.35,4.8,4.89,11.23,7.51,16.77,1.33,2.81,3.39,5.16,5.12,7.72.64-3.14,1.31-6.28,1.91-9.44.53-2.78,1-5.6,1.45-8.4.79,2,1.57,4,2.38,6.05a5.54,5.54,0,0,0,.59.92,10.52,10.52,0,0,0-.21-1.12c-.49-1.75-1-3.49-1.52-5.24l2.51,2.13c.51-2.14.91-4.32,1.56-6.4C68.5,39,69.81,35.3,71.05,31.58v-3C68.7,25.46,66.63,22,63.86,19.52Z" />
              <path
                d="M42.9,54a.26.26,0,0,1,.06-.23c.3-.22.62-.42.92-.63-.46,0-1.19-.31-1.33-.08A8.24,8.24,0,0,0,42,55c-.52,1.81-.65,4.56-1.69,5.15s-3.09-.77-4.61-1.49c-3.3-1.57-6.53-3.36-9.83-4.9a24.38,24.38,0,0,0-4.06-1.12,43.84,43.84,0,0,1,3.24-3.42A28.75,28.75,0,0,1,28.34,47c-.88.19-1.95.06-2.63.6-8.9,7-9.57,14.85-1.56,23.42,3.9,2,8.9,3,13.15,0C37.8,64.76,47.94,62.67,42.9,54Z" />
              <path
                d="M65.3,18.63a4.1,4.1,0,0,0,.59.66c.06-.21.2-.45.15-.62-.19-.61-.44-1.2-.67-1.8.49,0,1.35-.05,1.4.15a29.26,29.26,0,0,1,.45,3,37.67,37.67,0,0,0,.85,4c.07.24,1.05.45,1.12.32a18,18,0,0,0,1-2.44c-1.35-3.5-2.67-6.89-4-10.29l-3.65,2.27C63.44,15.45,64.36,17.05,65.3,18.63Z" />
            </svg>
          </div>
          <h2 class="header-big">JOÃO</h2>
          <h2 class="header-big">RODRIGUES</h2>

          <ul>
            <li>
              <ul class="socials-ul">
                <li class="socials-li">
                  <a
                    class="socials-a"
                    target="_blank"
                    aria-label="João Rodrigues' Instagram page"
                    href="https://www.instagram.com/joaocdvr">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 16C9.791 16 8 14.21 8 12C8 9.791 9.791 8 12
                        8C14.209 8 16 9.791 16 12C16 14.21 14.209 16 12 16Z" />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 0C8.741 0 8.333 0.014 7.053 0.072C2.695 0.272
                        0.273 2.69 0.073 7.052C0.014 8.333 0 8.741 0 12C0 15.259
                        0.014 15.668 0.072 16.948C0.272 21.306 2.69 23.728 7.052
                        23.928C8.333 23.986 8.741 24 12 24C15.259 24 15.668
                        23.986 16.948 23.928C21.302 23.728 23.73 21.31 23.927
                        16.948C23.986 15.668 24 15.259 24 12C24 8.741 23.986
                        8.333 23.928 7.053C23.732 2.699 21.311 0.273 16.949
                        0.073C15.668 0.014 15.259 0 12 0ZM11.9999
                        5.83789C8.59689 5.83789 5.83789 8.59689 5.83789
                        11.9999C5.83789 15.4029 8.59689 18.1629 11.9999
                        18.1629C15.4029 18.1629 18.1619 15.4039 18.1619
                        11.9999C18.1619 8.59689 15.4029 5.83789 11.9999
                        5.83789ZM18.4058 4.15503C17.6098 4.15503 16.9648 4.80003
                        16.9648 5.59503C16.9648 6.39003 17.6098 7.03503 18.4058
                        7.03503C19.2008 7.03503 19.8448 6.39003 19.8448
                        5.59503C19.8448 4.80003 19.2008 4.15503 18.4058 4.15503Z" />
                    </svg>
                  </a>
                </li>

                <li class="socials-li">
                  <a
                    class="socials-a"
                    target="_blank"
                    aria-label="João Rodrigues' LindedIn"
                    href="https://www.linkedin.com/in/joaocdvr">
                    <svg viewBox="0 0 24 23" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M4.98 2.5C4.98 3.881 3.87 5 2.5 5C1.13 5 0.02 3.881
                        0.02 2.5C0.02 1.12 1.13 0 2.5 0C3.87 0 4.98 1.12 4.98
                        2.5ZM5 7H0V23H5V7ZM12.982
                        7H8.014V23H12.983V14.601C12.983 9.931 19.012 9.549
                        19.012 14.601V23H24V12.869C24 4.989 15.078 5.276 12.982
                        9.155V7Z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <dt class="body-bold">Education</dt>
              <dd class="body-regular">
                — Audio Engineering (BA)
                <span class="body-small">SAE Institute Berlin</span>
                — Sound Art (PgD)
                <span class="body-small">
                  Faculty of Fine Arts of the University of Lisbon
                </span>
                — Communication Design (BA)
                <span class="body-small">
                  Faculty of Fine Arts of the University of Lisbon
                </span>
              </dd>
            </li>

            <li>
              <dt class="body-bold">Background</dt>
              <dd class="body-regular">???</dd>
            </li>

            <li>
              <dt class="body-bold">Interests</dt>
              <dd class="body-regular">Games, sound design & web design</dd>
            </li>

            <li>

              <dt class="body-bold">Nationality</dt>
              <dd class="body-regular">Portuguese</dd>
            </li>

            <li>
              <dt class="body-bold">Languages</dt>
              <dd class="body-regular">Portuguese & English</dd>
            </li>

            <li>
              <dt class="body-bold">About me</dt>
              <dd class="body-regular">
                Gamer since Game Boy Color. Ocasional spearfisher. Retired
                double bassist
              </dd>
            </li>

            <li>
              <dt class="body-bold">Highlights</dt>
              <dd>
                <table>
                  <tr>
                    <th class="body-regular">undefined</th>
                    <td class="header-big">?</td>
                  </tr>
                  <tr>
                    <th class="body-regular">undefined</th>
                    <td class="header-big">?</td>
                  </tr>
                  <tr>
                    <th class="body-regular">undefined</th>
                    <td class="header-big">?</td>
                  </tr>
                </table>
              </dd>
            </li>
          </ul>
        </div>
      {:else if $aboutUsActiveItem === 'julia'}
        <div
          class="personal-page-wrapper"
          in:fade={{ delay: $animationInDelay, duration: $animationInDuration, easing: $animationInEasing }}
          out:fade={{ duration: $animationOutDuration, easing: $animationOutEasing }}>
          <div class="img-wrapper">
            <img
              class:specific-img-open={isAnyAboutUsItemActive}
              src="about_us/julia.png"
              alt="Julia Borelli" />

            <svg
              id="svg-to-animate-julia-2"
              class="texture-svg"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 80 80">
              <path
                d="M31.83,66.46c10-3.83,20-7.8,30.12-11,2.3-.73,5.34,1.12,8,2,.85.28,1.52,1.18,2.27,1.79.27-.89,1-1.9.76-2.65-1.23-4.88-2.88-9.65-3.84-14.58-.28-1.41,1.26-3.25,2-4.89-1.4.18-3.31-.18-4.1.68-1.2,1.31-1.74,3.43-2.38,5.27a30.33,30.33,0,0,0-.79,3.86,6.11,6.11,0,0,1-1.73-1.24c-1.08-1.58-2-3.28-3-4.94.75,2.09,1.54,4.16,2.17,6.29.06.21-.82,1-1.36,1.15-2.87,1-5.86,1.58-8.62,2.81-1,.45-1.45,2.26-2.16,3.45-.63-1.66-2.21-3.94-1.7-4.86,1.1-2,3.35-3.24,5-5a50.2,50.2,0,0,0,6.7-8.14c.25-.41-3.24-3.26-4.72-5.23-2.11-2.81-4.39-5.62-5.77-8.85-1-2.3-.54-7.61-.9-7.63-4.29-.23-9.42-1.18-12.75,1a42.49,42.49,0,0,0-13.81,14c-1.86,3.28.39,9.27.55,14a32.11,32.11,0,0,1-.78,5.71c2.48-1.74,5.61-2.94,7.3-5.34,2.84-4,4.76-8.8,7.07-13.26,3.48,3.81,7.16,7.43,10.32,11.54.9,1.16,1,4.69.19,5.47-3.75,3.53-8,6.46-12,9.6a15.46,15.46,0,0,0,1.28,1c.47.31,1,.54,1.48.8-.75.76-1.45,1.57-2.25,2.26-.26.22-.84,0-1.12.18-2.33,1.75-4.66,3.53-6.93,5.39a14.54,14.54,0,0,0-1.72,2.07h3.2A23,23,0,0,1,31.83,66.46Z" />
              <path
                d="M22.53,16.42c2.24-3.12,4.76-6,7.16-9L25.6,5.18H24.32L9,18.4V30.92c2.57-1.8,5.52-3.19,7.63-5.5C19,22.84,20.44,19.32,22.53,16.42Z" />
            </svg>
          </div>
          <h2 class="header-big">JULIA</h2>
          <h2 class="header-big">BORELLI</h2>

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
                        d="M12 16C9.791 16 8 14.21 8 12C8 9.791 9.791 8 12
                        8C14.209 8 16 9.791 16 12C16 14.21 14.209 16 12 16Z" />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 0C8.741 0 8.333 0.014 7.053 0.072C2.695 0.272
                        0.273 2.69 0.073 7.052C0.014 8.333 0 8.741 0 12C0 15.259
                        0.014 15.668 0.072 16.948C0.272 21.306 2.69 23.728 7.052
                        23.928C8.333 23.986 8.741 24 12 24C15.259 24 15.668
                        23.986 16.948 23.928C21.302 23.728 23.73 21.31 23.927
                        16.948C23.986 15.668 24 15.259 24 12C24 8.741 23.986
                        8.333 23.928 7.053C23.732 2.699 21.311 0.273 16.949
                        0.073C15.668 0.014 15.259 0 12 0ZM11.9999
                        5.83789C8.59689 5.83789 5.83789 8.59689 5.83789
                        11.9999C5.83789 15.4029 8.59689 18.1629 11.9999
                        18.1629C15.4029 18.1629 18.1619 15.4039 18.1619
                        11.9999C18.1619 8.59689 15.4029 5.83789 11.9999
                        5.83789ZM18.4058 4.15503C17.6098 4.15503 16.9648 4.80003
                        16.9648 5.59503C16.9648 6.39003 17.6098 7.03503 18.4058
                        7.03503C19.2008 7.03503 19.8448 6.39003 19.8448
                        5.59503C19.8448 4.80003 19.2008 4.15503 18.4058 4.15503Z" />
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
                        d="M4.98 2.5C4.98 3.881 3.87 5 2.5 5C1.13 5 0.02 3.881
                        0.02 2.5C0.02 1.12 1.13 0 2.5 0C3.87 0 4.98 1.12 4.98
                        2.5ZM5 7H0V23H5V7ZM12.982
                        7H8.014V23H12.983V14.601C12.983 9.931 19.012 9.549
                        19.012 14.601V23H24V12.869C24 4.989 15.078 5.276 12.982
                        9.155V7Z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <dt class="body-bold">Experience</dt>
              <dd class="body-regular">
                — Audio Department Assistant
                <span class="body-small">SAE Institute Berlin</span>
                — Assistant Engineer
                <span class="body-small">Jazzanova Recording Studio</span>
                — Production Assistant
                <span class="body-small">Post Modern Mastering</span>
              </dd>
            </li>

            <li>
              <dt class="body-bold">Education</dt>
              <dd class="body-regular">
                — Audio Engineering (BA)
                <span class="body-small">SAE Institute Berlin</span>
                — International Music Production & Sound Engineering Diploma
                <span class="body-small">Point Blank</span>
                — Summer Performance Program
                <span class="body-small">Berklee College of Music</span>
              </dd>
            </li>

            <li>
              <dt class="body-bold">Background</dt>
              <dd class="body-regular">
                Musician since an early age — mainly guitarist
              </dd>
            </li>
            <li>
              <dt class="body-bold">Interests</dt>
              <dd class="body-regular">Technology, music, & Netflix</dd>
            </li>

            <li>

              <dt class="body-bold">Nationality</dt>
              <dd class="body-regular">Brazilian</dd>
            </li>

            <li>
              <dt class="body-bold">Languages</dt>
              <dd class="body-regular">
                Portuguese, English, German (B1) & I pretend I speak Spanish
              </dd>
            </li>

            <li>
              <dt class="body-bold">About me</dt>
              <dd class="body-regular">
                Workaholic. Part-time OCD. Full-time nerd
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
        </div>
      {/if}
    {/if}
  </main>
  <Footer />
</div>
