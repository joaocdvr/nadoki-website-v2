<script>
  import { fade } from "svelte/transition";
  import {
    animationInDelay,
    animationInDuration,
    animationInEasing,
    animationOutDuration,
    animationOutEasing
  } from "../utensils/stores.js";

  export let delay = 0;
</script>

<style>
  a {
    text-decoration: none;
    color: var(--dark);
    display: inline-block;
    transition: background-color 300ms ease-in-out, color 300ms ease-in-out;
  }

  :global(.user-is-tabbing) a:focus {
    color: var(--light);
    background-color: var(--secondary-color);
  }

  :global(.user-is-tabbing) a:focus svg {
    fill: var(--light);
  }

  :global(.user-is-tabbing) a:focus {
    fill: var(--light);
  }

  @media (--not-touchscreen) {
    a:hover {
      color: var(--secondary-color);
    }

    .socials-a:hover {
      background-color: var(--secondary-color);
    }

    .socials-a:hover svg {
      fill: var(--light);
    }
  }

  footer {
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: flex-end;
    width: 100vw;
    min-height: calc(100vh - 4.5rem);
    background-color: var(--light);
    border-top: 0.125rem solid var(--dark);
  }

  @media (--max-content-width) {
    footer > div {
      max-width: var(--max-width);
      transform: translateX(calc(50vw - var(--max-width) / 2));
    }
  }

  ul {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  ul :last-child {
    margin-right: 0;
  }

  li {
    min-width: 2.5rem;
    width: calc((100% - 2rem) / 5);
    box-shadow: inset 0 0 0 0.0625rem var(--dark);
    text-align: center;
    margin: 0.5rem 0.5rem 0.5rem 0;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
    fill: var(--dark);
  }

  @media (--max-content-width) {
    svg {
      margin: 0.5rem 0;
      height: 1.5rem;
    }
  }

  .email-a {
    width: 100%;
    text-align: center;
    text-decoration: underline;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }

  .socials-a {
    width: 100%;
    height: 100%;
    padding: 0.5rem;
  }

  address {
    margin-bottom: 1rem;
  }

  .underlined {
    text-decoration: underline;
  }

  .svg-bg {
    width: 100%;
    height: 7rem;
    fill: var(--main-color);
  }

  .prompt-wrapper {
    position: absolute;
    padding: 0 1.5rem;
    width: 100%;
    bottom: 50%;
  }

  .contacts-wrapper {
    padding: 0 1.5rem 1.5rem 1.5rem;
    z-index: 1;
  }

  .body-bold {
    font-size: 1rem;
  }
</style>

<footer
  in:fade={{ delay: $animationInDelay, duration: $animationInDuration, easing: $animationInEasing }}
  out:fade={{ delay: delay, duration: $animationOutDuration, easing: $animationOutEasing }}>

  <div class="prompt-wrapper">
    <svg
      class="svg-bg"
      preserveAspectRatio="none"
      width="360"
      height="111"
      viewBox="0 0 360 111"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Let's talk">
      <path
        d="M31.6527 76.7709V107.74H3.76185H0V3.4229H9.49962V76.7709H31.6527Z" />
      <path
        d="M76.1246
        76.7709V107.74H37.7461V3.4229H76.0486V34.3921H47.2458V47.4317H70.8048V63.7313H47.2458V76.7709H76.1246Z" />
      <path
        d="M120.949
        34.3921H105.94V107.74H96.4404V34.3921H81.431V3.4229H120.949V34.3921Z" />
      <path
        d="M126.607 42.0529C127.037 41.0749 127.468 39.1189 127.899
        36.185C128.329 33.1424 128.583 29.9912 128.659 26.7313L126.075
        24.9383V0H135.688V15.1586C135.688 25.4816 134.992 33.9031 133.599
        40.4229C132.205 46.8341 130.052 50.746 127.139 52.1586L126.607 42.0529Z" />
      <path
        d="M150.232 69.4361C150.485 72.8047 151.498 75.4126 153.272
        77.2599C155.045 79.1072 157.401 80.0308 160.339 80.0308C162.29 80.0308
        163.797 79.8135 164.861 79.3789C165.925 78.8355 166.685 77.9662 167.141
        76.7709C167.622 75.467 167.863 73.7283 167.863 71.5551C167.863 69.4905
        167.483 67.9148 166.723 66.8282C165.988 65.6329 164.709 64.8179 162.885
        64.3833C161.087 63.9486 158.439 63.7313 154.944 63.7313C149.877 63.7313
        146.191 61.6123 143.886 57.3745C141.581 53.0279 140.428 46.0734 140.428
        36.511C140.428 24.232 141.897 15.1043 144.836 9.12775C147.8 3.04258
        152.271 0 158.249 0C164.076 0 168.522 3.64023 171.587 10.9207C174.677
        18.0925 176.223 28.4699 176.223 42.0529H166.381C166.254 38.467 165.469
        35.7504 164.025 33.9031C162.581 31.9471 160.529 30.9692 157.869
        30.9692C155.184 30.9692 153.208 31.6755 151.942 33.0881C150.7 34.3921
        150.08 36.5654 150.08 39.6079C150.08 41.7812 150.409 43.4112 151.068
        44.4978C151.726 45.5844 152.904 46.3451 154.602 46.7797C156.299 47.2144
        158.845 47.4317 162.239 47.4317C165.836 47.4317 168.724 48.464 170.903
        50.5286C173.081 52.4846 174.665 55.5272 175.653 59.6564C176.641 63.6769
        177.135 68.9471 177.135 75.467C177.135 83.8341 176.514 90.6256 175.273
        95.8414C174.057 100.949 172.132 104.752 169.497 107.251C166.888 109.75
        163.455 111 159.199 111C155.222 111 151.777 109.37 148.864
        106.11C145.951 102.742 143.721 97.9604 142.176 91.7665C140.631 85.464
        139.858 78.0206 139.858 69.4361H150.232Z" />
      <path
        d="M233.342
        34.3921H218.332V107.74H208.833V34.3921H193.823V3.4229H233.342V34.3921Z" />
      <path
        d="M262.286 91.9295H244.655L242.261 107.74H231.811L248.113
        3.4229H258.676L275.13 107.74H264.68L262.286 91.9295ZM258.6
        67.4802L253.433 33.2511L248.303 67.4802H258.6Z" />
      <path
        d="M311.728
        76.7709V107.74H283.837H280.076V3.4229H289.575V76.7709H311.728Z" />
      <path
        d="M345.865 107.74L327.321
        52.6476V107.74H317.822V3.4229H327.321V52.1586L344.421
        3.4229H357.948L339.785 51.9956L360 107.74H345.865Z" />
    </svg>

    <a
      class="body-extra email-a"
      target="_blank"
      rel="noopener"
      aria-label="Nadoki's Email"
      href="mailto:info@nadoki.com">
      INFO@NADOKI.COM
    </a>
  </div>

  <div class="contacts-wrapper">

    <address>
      <p class="body-bold">
        <a
          target="_blank"
          rel="noopener"
          aria-label="Nadoki's address"
          href="https://goo.gl/maps/gYojUUpPSQornBWh9">
          @
          <span class="underlined">Riverside Studios</span>
          <br />
          Pfuelstraße 5
          <br />
          10997 Berlin
        </a>
      </p>
    </address>

    <ul>
      <li>
        <a
          class="socials-a"
          target="_blank"
          rel="noopener"
          aria-label="Nadoki's Instagram"
          href="https://www.instagram.com/nadokistudios">
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true">
            <path
              d="M12 16C9.791 16 8 14.21 8 12C8 9.791 9.791 8 12 8C14.209 8 16
              9.791 16 12C16 14.21 14.209 16 12 16Z" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 0C8.741 0 8.333 0.014 7.053 0.072C2.695 0.272 0.273 2.69
              0.073 7.052C0.014 8.333 0 8.741 0 12C0 15.259 0.014 15.668 0.072
              16.948C0.272 21.306 2.69 23.728 7.052 23.928C8.333 23.986 8.741 24
              12 24C15.259 24 15.668 23.986 16.948 23.928C21.302 23.728 23.73
              21.31 23.927 16.948C23.986 15.668 24 15.259 24 12C24 8.741 23.986
              8.333 23.928 7.053C23.732 2.699 21.311 0.273 16.949 0.073C15.668
              0.014 15.259 0 12 0ZM11.9999 5.83789C8.59689 5.83789 5.83789
              8.59689 5.83789 11.9999C5.83789 15.4029 8.59689 18.1629 11.9999
              18.1629C15.4029 18.1629 18.1619 15.4039 18.1619 11.9999C18.1619
              8.59689 15.4029 5.83789 11.9999 5.83789ZM18.4058 4.15503C17.6098
              4.15503 16.9648 4.80003 16.9648 5.59503C16.9648 6.39003 17.6098
              7.03503 18.4058 7.03503C19.2008 7.03503 19.8448 6.39003 19.8448
              5.59503C19.8448 4.80003 19.2008 4.15503 18.4058 4.15503Z" />
          </svg>
        </a>
      </li>

      <li>
        <a
          class="socials-a"
          target="_blank"
          rel="noopener"
          aria-label="Nadoki's Facebook page"
          href="https://www.facebook.com/nadokistudios">
          <svg
            viewBox="0 0 12 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true">
            <path
              d="M3 8H0V12H3V24H8V12H11.642L12 8H8V6.333C8 5.378 8.192 5 9.115
              5H12V0H8.192C4.596 0 3 1.583 3 4.615V8Z" />
          </svg>
        </a>
      </li>

      <li>
        <a
          class="socials-a"
          target="_blank"
          rel="noopener"
          aria-label="Nadoki's Messenger"
          href="https://www.m.me/nadokistudios">
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 0C5.373 0 0 4.975 0 11.111C0 14.608 1.745 17.727 4.472
              19.763V24L8.558 21.758C9.648 22.059 10.804 22.222 12 22.222C18.627
              22.222 24 17.248 24 11.111C24 4.975 18.627 0 12 0ZM13.193
              14.963L10.137 11.704L4.174 14.963L10.733 8L13.863 11.259L19.752
              8L13.193 14.963Z" />
          </svg>
        </a>
      </li>

      <li>
        <a
          class="socials-a"
          target="_blank"
          rel="noopener"
          aria-label="Nadoki's WhatsApp"
          href="https://wa.me/4917643965731">
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 24L1.69505 17.837C0.649083 16.033 0.0994725 13.988 0.100477
              11.891C0.103492 5.335 5.46395 0 12.0502 0C15.2464 0.001 18.2467
              1.24 20.5034 3.488C22.7591 5.736 24.001 8.724 24 11.902C23.997
              18.459 18.6365 23.794 12.0502 23.794C10.0507 23.793 8.08038 23.294
              6.33509 22.346L0 24ZM17.6615 14.4618C17.8698 14.5618 18.0102
              14.6292 18.07 14.7289C18.1453 14.8529 18.1453 15.4479 17.8961
              16.1429C17.6469 16.8369 16.4543 17.4709 15.8805 17.5559C15.3661
              17.6319 14.715 17.6639 13.9996 17.4379C13.5666 17.3009 13.0099
              17.1179 12.2975 16.8119C9.50326 15.6113 7.61407 12.918 7.25159
              12.4013C7.22552 12.3641 7.20735 12.3382 7.1973 12.3249L7.19376
              12.3202C7.03243 12.1055 5.97852 10.7028 5.97852 9.2509C5.97852
              7.88409 6.65205 7.16753 6.96347 6.83622C6.98539 6.8129 7.00551
              6.79149 7.02348 6.7719C7.29678 6.4739 7.62031 6.3999 7.81926
              6.3999L8.39198 6.4099C8.41328 6.41095 8.43544 6.41082 8.45836
              6.41068C8.63216 6.40965 8.84934 6.40835 9.06417 6.9199C9.14069
              7.10334 9.25034 7.36929 9.36764 7.65377C9.6308 8.29201 9.93242
              9.02353 9.98454 9.1259C10.0599 9.2749 10.1091 9.4489 10.0097
              9.6469C9.99433 9.67728 9.98018 9.70591 9.96669 9.73323C9.89177
              9.88488 9.83679 9.99616 9.70823 10.1419C9.65817 10.2001 9.60653
              10.2627 9.55494 10.3253C9.45225 10.45 9.34972 10.5744 9.2601
              10.6629C9.1114 10.8109 8.95566 10.9719 9.12948 11.2689C9.30331
              11.5669 9.90316 12.5399 10.7904 13.3279C11.7432 14.1743 12.5719
              14.532 12.9928 14.7137C13.0756 14.7494 13.1427 14.7784 13.1918
              14.8029C13.4902 14.9519 13.665 14.9269 13.8389 14.7289C14.0127
              14.5309 14.5854 13.8609 14.7843 13.5639C14.9843 13.2659 15.1832
              13.3159 15.4565 13.4149C15.7308 13.5139 17.1988 14.2329 17.4972
              14.3819C17.5559 14.4111 17.6107 14.4374 17.6615 14.4618Z" />
          </svg>
        </a>
      </li>

      <li>
        <a
          class="socials-a"
          target="_blank"
          rel="noopener"
          aria-label="Nadoki's LindedIn"
          href="https://www.linkedin.com/company/nadokistudios">
          <svg
            viewBox="0 0 24 23"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true">
            <path
              d="M4.98 2.5C4.98 3.881 3.87 5 2.5 5C1.13 5 0.02 3.881 0.02
              2.5C0.02 1.12 1.13 0 2.5 0C3.87 0 4.98 1.12 4.98 2.5ZM5
              7H0V23H5V7ZM12.982 7H8.014V23H12.983V14.601C12.983 9.931 19.012
              9.549 19.012 14.601V23H24V12.869C24 4.989 15.078 5.276 12.982
              9.155V7Z" />
          </svg>
        </a>
      </li>
    </ul>

    <p>
      <small class="caption">© 2020 Nadoki. All rights reserved.</small>
    </p>
  </div>
</footer>
