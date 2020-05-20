<script>
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
  import Header from "../components/Header.svelte";
  import AboutUsNav from "../containers/AboutUsNav.svelte";
  import Footer from "../components/Footer.svelte";

  $: isAnyAboutUsItemActive = !!$aboutUsActiveItem;
</script>

<style>
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
    width: 100%;
    padding: 1.5rem;
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

  .socials-a {
    width: 100%;
    height: 100%;
    padding: 0.5rem;
  }

  dt {
    border-bottom: 0.0625rem solid var(--main-color);
    padding: 2.5rem 0 0.5rem 0;
  }

  dd {
    padding-top: 0.25rem;
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
    padding: 0;
  }
</style>

<div
  class="content-wrapper"
  style="transform: translateY({$scrollYPosition * -1}px)">
  <Header variant="about_us" />
  <AboutUsNav />

  {#if isAnyAboutUsItemActive}
    {#if $aboutUsActiveItem === 'alper'}
      <div
        in:fade={{ delay: $animationInDelay, duration: $animationInDuration, easing: $animationInEasing }}
        out:fade={{ duration: $animationOutDuration, easing: $animationOutEasing }}>
        <img
          class:specific-img-open={isAnyAboutUsItemActive}
          src="about_us/alper.png"
          alt="Alper Arslan" />

        <h2 class="header-big">ALPER ARSLAN</h2>

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
                      d="M12 0C8.741 0 8.333 0.014 7.053 0.072C2.695 0.272 0.273
                      2.69 0.073 7.052C0.014 8.333 0 8.741 0 12C0 15.259 0.014
                      15.668 0.072 16.948C0.272 21.306 2.69 23.728 7.052
                      23.928C8.333 23.986 8.741 24 12 24C15.259 24 15.668 23.986
                      16.948 23.928C21.302 23.728 23.73 21.31 23.927
                      16.948C23.986 15.668 24 15.259 24 12C24 8.741 23.986 8.333
                      23.928 7.053C23.732 2.699 21.311 0.273 16.949 0.073C15.668
                      0.014 15.259 0 12 0ZM11.9999 5.83789C8.59689 5.83789
                      5.83789 8.59689 5.83789 11.9999C5.83789 15.4029 8.59689
                      18.1629 11.9999 18.1629C15.4029 18.1629 18.1619 15.4039
                      18.1619 11.9999C18.1619 8.59689 15.4029 5.83789 11.9999
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
                      2.5ZM5 7H0V23H5V7ZM12.982 7H8.014V23H12.983V14.601C12.983
                      9.931 19.012 9.549 19.012 14.601V23H24V12.869C24 4.989
                      15.078 5.276 12.982 9.155V7Z" />
                  </svg>
                </a>
              </li>
            </ul>
          </li>

          <li>
            <dt class="header-small">Experience</dt>
            <dd class="body-regular">
              Talent Manager of Electronic Music Artists (2 years)
              <br />
              <span class="body-regular-two">Berlin, Germany (Freelancer)</span>
              <br />
              DJ (8 years)
              <br />
              <span class="body-regular-two">Miami, USA</span>
            </dd>
          </li>

          <li>
            <dt class="header-small">Education</dt>
            <dd class="body-regular">
              Audio Engineering (BA)
              <br />
              <span class="body-regular-two">SAE Institute Berlin</span>
              <br />
              Finance (BA)
              <br />
              <span class="body-regular-two">Marmara University</span>
            </dd>
          </li>

          <li>
            <dt class="header-small">Background</dt>
            <dd class="body-regular">
              Producer, mixing engineer, DJ & financial analyst
            </dd>
          </li>
          <li>
            <dt class="header-small">Interests</dt>
            <dd class="body-regular">
              Electronic music production, vocal recording, 3D audio, virtual
              reality & social media management
            </dd>
          </li>

          <li>
            <br />
            <dt class="header-small">Nationality</dt>
            <dd class="body-regular">Turkish</dd>
          </li>

          <li>
            <dt class="header-small">Languages</dt>
            <dd class="body-regular">Turkish, English & German</dd>
          </li>

          <li>
            <dt class="header-small">About me</dt>
            <dd class="body-regular">Energetic & supportive</dd>
          </li>

          <li>
            <dt class="header-small">Highlights</dt>
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
        in:fade={{ delay: $animationInDelay, duration: $animationInDuration, easing: $animationInEasing }}
        out:fade={{ duration: $animationOutDuration, easing: $animationOutEasing }}>
        <img
          class:specific-img-open={isAnyAboutUsItemActive}
          src="about_us/elia.png"
          alt="Elia Bertolaso" />

        <h2 class="header-big">ELIA BERTOLASO</h2>

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
                      d="M12 0C8.741 0 8.333 0.014 7.053 0.072C2.695 0.272 0.273
                      2.69 0.073 7.052C0.014 8.333 0 8.741 0 12C0 15.259 0.014
                      15.668 0.072 16.948C0.272 21.306 2.69 23.728 7.052
                      23.928C8.333 23.986 8.741 24 12 24C15.259 24 15.668 23.986
                      16.948 23.928C21.302 23.728 23.73 21.31 23.927
                      16.948C23.986 15.668 24 15.259 24 12C24 8.741 23.986 8.333
                      23.928 7.053C23.732 2.699 21.311 0.273 16.949 0.073C15.668
                      0.014 15.259 0 12 0ZM11.9999 5.83789C8.59689 5.83789
                      5.83789 8.59689 5.83789 11.9999C5.83789 15.4029 8.59689
                      18.1629 11.9999 18.1629C15.4029 18.1629 18.1619 15.4039
                      18.1619 11.9999C18.1619 8.59689 15.4029 5.83789 11.9999
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
                      2.5ZM5 7H0V23H5V7ZM12.982 7H8.014V23H12.983V14.601C12.983
                      9.931 19.012 9.549 19.012 14.601V23H24V12.869C24 4.989
                      15.078 5.276 12.982 9.155V7Z" />
                  </svg>
                </a>
              </li>
            </ul>
          </li>

          <li>
            <dt class="header-small">Experience</dt>
            <dd class="body-regular">
              Tour Manager & Studio Consultant
              <br />
              <span class="body-regular-two">Tale of Us</span>
              <br />
              Audio Department Assistant
              <br />
              <span class="body-regular-two">SAE Institute Berlin</span>
            </dd>
          </li>

          <li>
            <dt class="header-small">Education</dt>
            <dd class="body-regular">
              Audio Engineering (BA)
              <br />
              <span class="body-regular-two">SAE Institute Berlin</span>
              <br />
              Classical Music
              <br />
              <span class="body-regular-two">
                Conservatory of Bruno Maderna
              </span>
            </dd>
          </li>

          <li>
            <dt class="header-small">Background</dt>
            <dd class="body-regular">???</dd>
          </li>

          <li>
            <dt class="header-small">Interests</dt>
            <dd class="body-regular">Techno & electronic music production</dd>
          </li>

          <li>
            <br />
            <dt class="header-small">Nationality</dt>
            <dd class="body-regular">Italian</dd>
          </li>

          <li>
            <dt class="header-small">Languages</dt>
            <dd class="body-regular">Italian, English & German (B1)</dd>
          </li>

          <li>
            <dt class="header-small">About me</dt>
            <dd class="body-regular">???</dd>
          </li>

          <li>
            <dt class="header-small">Highlights</dt>
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
        in:fade={{ delay: $animationInDelay, duration: $animationInDuration, easing: $animationInEasing }}
        out:fade={{ duration: $animationOutDuration, easing: $animationOutEasing }}>
        <img
          class:specific-img-open={isAnyAboutUsItemActive}
          src="about_us/joao.png"
          alt="João Rodrigues" />

        <h2 class="header-big">JOÃO RODRIGUES</h2>
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
                      d="M12 0C8.741 0 8.333 0.014 7.053 0.072C2.695 0.272 0.273
                      2.69 0.073 7.052C0.014 8.333 0 8.741 0 12C0 15.259 0.014
                      15.668 0.072 16.948C0.272 21.306 2.69 23.728 7.052
                      23.928C8.333 23.986 8.741 24 12 24C15.259 24 15.668 23.986
                      16.948 23.928C21.302 23.728 23.73 21.31 23.927
                      16.948C23.986 15.668 24 15.259 24 12C24 8.741 23.986 8.333
                      23.928 7.053C23.732 2.699 21.311 0.273 16.949 0.073C15.668
                      0.014 15.259 0 12 0ZM11.9999 5.83789C8.59689 5.83789
                      5.83789 8.59689 5.83789 11.9999C5.83789 15.4029 8.59689
                      18.1629 11.9999 18.1629C15.4029 18.1629 18.1619 15.4039
                      18.1619 11.9999C18.1619 8.59689 15.4029 5.83789 11.9999
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
                      2.5ZM5 7H0V23H5V7ZM12.982 7H8.014V23H12.983V14.601C12.983
                      9.931 19.012 9.549 19.012 14.601V23H24V12.869C24 4.989
                      15.078 5.276 12.982 9.155V7Z" />
                  </svg>
                </a>
              </li>
            </ul>
          </li>

          <li>
            <dt class="header-small">Education</dt>
            <dd class="body-regular">
              Audio Engineering (BA)
              <br />
              <span class="body-regular-two">SAE Institute Berlin</span>
              <br />
              Sound Art (PgD)
              <br />
              <span class="body-regular-two">
                Faculty of Fine Arts of the University of Lisbon
              </span>
              <br />
              Communication Design (BA)
              <br />
              <span class="body-regular-two">
                Faculty of Fine Arts of the University of Lisbon
              </span>
            </dd>
          </li>

          <li>
            <dt class="header-small">Background</dt>
            <dd class="body-regular">???</dd>
          </li>

          <li>
            <dt class="header-small">Interests</dt>
            <dd class="body-regular">Games, sound design & web design</dd>
          </li>

          <li>
            <br />
            <dt class="header-small">Nationality</dt>
            <dd class="body-regular">Portuguese</dd>
          </li>

          <li>
            <dt class="header-small">Languages</dt>
            <dd class="body-regular">Portuguese & English</dd>
          </li>

          <li>
            <dt class="header-small">About me</dt>
            <dd class="body-regular">
              Gamer since Game Boy Color. Ocasional spearfisher. Retired double
              bassist
            </dd>
          </li>

          <li>
            <dt class="header-small">Highlights</dt>
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
        in:fade={{ delay: $animationInDelay, duration: $animationInDuration, easing: $animationInEasing }}
        out:fade={{ duration: $animationOutDuration, easing: $animationOutEasing }}>
        <img
          class:specific-img-open={isAnyAboutUsItemActive}
          src="about_us/julia.png"
          alt="Julia Borelli" />

        <h2 class="header-big">JULIA BORELLI</h2>

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
                      d="M12 0C8.741 0 8.333 0.014 7.053 0.072C2.695 0.272 0.273
                      2.69 0.073 7.052C0.014 8.333 0 8.741 0 12C0 15.259 0.014
                      15.668 0.072 16.948C0.272 21.306 2.69 23.728 7.052
                      23.928C8.333 23.986 8.741 24 12 24C15.259 24 15.668 23.986
                      16.948 23.928C21.302 23.728 23.73 21.31 23.927
                      16.948C23.986 15.668 24 15.259 24 12C24 8.741 23.986 8.333
                      23.928 7.053C23.732 2.699 21.311 0.273 16.949 0.073C15.668
                      0.014 15.259 0 12 0ZM11.9999 5.83789C8.59689 5.83789
                      5.83789 8.59689 5.83789 11.9999C5.83789 15.4029 8.59689
                      18.1629 11.9999 18.1629C15.4029 18.1629 18.1619 15.4039
                      18.1619 11.9999C18.1619 8.59689 15.4029 5.83789 11.9999
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
                      2.5ZM5 7H0V23H5V7ZM12.982 7H8.014V23H12.983V14.601C12.983
                      9.931 19.012 9.549 19.012 14.601V23H24V12.869C24 4.989
                      15.078 5.276 12.982 9.155V7Z" />
                  </svg>
                </a>
              </li>
            </ul>
          </li>

          <li>
            <dt class="header-small">Experience</dt>
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
            </dd>
          </li>

          <li>
            <dt class="header-small">Education</dt>
            <dd class="body-regular">
              Audio Engineering (BA)
              <br />
              <span class="body-regular-two">SAE Institute Berlin</span>
              <br />
              International Music Production & Sound Engineering Diploma
              <br />
              <span class="body-regular-two">Point Blank</span>
              <br />
              Summer Performance Program
              <br />
              <span class="body-regular-two">Berklee College of Music</span>
            </dd>
          </li>

          <li>
            <dt class="header-small">Background</dt>
            <dd class="body-regular">
              Musician since an early age — mainly guitarist
            </dd>
          </li>
          <li>
            <dt class="header-small">Interests</dt>
            <dd class="body-regular">Technology, music, & Netflix</dd>
          </li>

          <li>
            <br />
            <dt class="header-small">Nationality</dt>
            <dd class="body-regular">Brazilian</dd>
          </li>

          <li>
            <dt class="header-small">Languages</dt>
            <dd class="body-regular">
              Portuguese, English, German (B1) & I pretend I speak Spanish
            </dd>
          </li>

          <li>
            <dt class="header-small">About me</dt>
            <dd class="body-regular">
              Workaholic. Part-time OCD. Full-time nerd
            </dd>
          </li>

          <li>
            <dt class="header-small">Highlights</dt>
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

    <Footer />
  {/if}
</div>
