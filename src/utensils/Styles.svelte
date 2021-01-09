<script>
  import CssReset from './CssReset.svelte'
  import SyneFont from './SyneFont.svelte'
</script>

<style global>
  :global(:root) {
    /* Colors */
    --main-color: #6400ff;
    --secondary-color: #00ff00;
    --light: #ffffff;
    --dark: #000000;

    /* Width */
    --max-width: 48rem;
  }

  /* Controls global font-size parameter */
  @media only screen and (min-width: 1920px) {
    :global(html) {
      font-size: 120% !important;
    }
  }

  @media only screen and (min-width: 2560px) {
    :global(html) {
      font-size: 180% !important;
    }
  }

  @media only screen and (min-width: 4096px) {
    :global(html) {
      font-size: 250% !important;
    }
  }

  /* Removes scrollbar from body */
  :global(.body-is-not-visible) {
    overflow: hidden;
  }

  /* Hides element visually */
  :global(.visually-hidden) {
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
    clip: rect(1px, 1px, 1px, 1px);
    white-space: nowrap; /* added line */
  }

  /* Text global styles*/
  :global(.header-big) {
    font-family: 'syne-extra', Arial, Helvetica, sans-serif;
    line-height: 1.5;
    font-size: 1.625rem;
    color: var(--dark);
    letter-spacing: 0.1rem;
    word-break: break-word;
    hyphens: auto;
  }

  @media (--max-content-width) {
    :global(.header-big) {
      font-size: 2.5rem;
    }
  }

  :global(.header-small) {
    font-family: 'syne-extra', Arial, Helvetica, sans-serif;
    line-height: 2;
    font-size: 1rem;
    color: var(--dark);
    letter-spacing: 0.1rem;
    word-break: break-word;
    hyphens: auto;
  }

  @media (--max-content-width) {
    :global(.header-small) {
      font-size: 1.25rem;
    }
  }

  :global(.body-regular) {
    font-family: 'syne-regular', Arial, Helvetica, sans-serif;
    line-height: 1.5;
    font-size: 1rem;
    color: var(--dark);
  }

  @media (--max-content-width) {
    :global(.body-regular) {
      font-size: 1.5rem;
    }
  }

  :global(.body-small) {
    font-family: 'syne-regular', Arial, Helvetica, sans-serif;
    line-height: 1.5;
    font-size: 0.8rem;
    color: var(--dark);
  }

  @media (--max-content-width) {
    :global(.body-small) {
      font-size: 1.25rem;
    }
  }

  :global(.body-bold) {
    font-family: 'syne-bold', Arial, Helvetica, sans-serif;
    line-height: 1.5;
    font-size: 1rem;
    color: var(--dark);
  }

  @media (--max-content-width) {
    :global(.body-bold) {
      font-size: 1.5rem;
    }
  }

  :global(.body-extra) {
    font-family: 'syne-extra', Arial, Helvetica, sans-serif;
    line-height: 1.5;
    font-size: 1rem;
    color: var(--dark);
  }

  @media (--max-content-width) {
    :global(.body-extra) {
      font-size: 1.5rem;
    }
  }

  :global(.caption) {
    font-family: 'syne-regular', Arial, Helvetica, sans-serif;
    line-height: 2;
    font-size: 0.75rem;
    color: var(--dark);
  }
</style>
