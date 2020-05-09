<script>
  import { isMenuClicked } from "../../utensils/stores.js";
  import { handleMenuClick } from "../../utensils/utils.js";
</script>

<style>
  a {
    padding: 1.5rem;
    display: inline-block;
    transition: background-color 300ms ease-in-out, fill 300ms ease-in-out;
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

  svg {
    width: 2.5rem;
    height: 1.5rem;
    fill: var(--dark);
    transition-delay: 0;
  }
  /* Fill animation */
  .is-white {
    fill: var(--light);
    transition-delay: 100ms;
  }
</style>

<a href="/" aria-label="Homepage">
  <svg
    class:is-white={$isMenuClicked}
    on:click={$isMenuClicked ? handleMenuClick : () => null}
    preserveAspectRatio="none"
    alt="Nadoki logo"
    viewBox="0 0 40 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6.878 1.20028L0.0902539 21.6895C0.00244457 21.9532 -0.0217469 22.2342
      0.0196766 22.5092C0.0611001 22.7842 0.166951 23.0453 0.328488
      23.271C0.490025 23.4967 0.702616 23.6806 0.948706 23.8073C1.1948 23.9341
      1.46732 24.0001 1.74379 24H12.3813C12.7457 23.998 13.1003 23.8811 13.3953
      23.6658C13.6902 23.4505 13.9107 23.1476 14.0257 22.7997L19.5929
      5.99954C19.7087 5.65002 19.9309 5.34602 20.228 5.1306C20.5251 4.91518
      20.882 4.79926 21.2483 4.79926H22.3445C22.621 4.79926 22.8936 4.86536
      23.1397 4.9921C23.3858 5.11885 23.5984 5.30261 23.7601 5.52825C23.9218
      5.75389 24.0278 6.01496 24.0695 6.28992C24.1112 6.56488 24.0873 6.84588
      23.9999 7.10975L19.169 21.6895C19.0816 21.9534 19.0577 22.2344 19.0994
      22.5093C19.1411 22.7843 19.2472 23.0454 19.4088 23.271C19.5705 23.4967
      19.7831 23.6804 20.0293 23.8072C20.2754 23.9339 20.5479 24 20.8244
      24H31.4655C31.8317 24 32.1887 23.8841 32.4858 23.6687C32.7829 23.4532
      33.0051 23.1492 33.1209 22.7997L39.9105 2.31049C39.9979 2.04661 40.0217
      1.76562 39.98 1.49066C39.9383 1.21569 39.8323 0.954631 39.6706
      0.728989C39.509 0.503346 39.2963 0.319584 39.0502 0.192841C38.8041
      0.0660967 38.5316 -2.41097e-06 38.2551 0H8.53336C8.16714 -3.19353e-06
      7.8102 0.115917 7.5131 0.331337C7.216 0.546758 6.99381 0.850762 6.878
      1.20028Z" />
  </svg>
</a>
