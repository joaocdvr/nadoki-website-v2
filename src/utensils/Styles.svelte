<script>
  import CssReset from "./CssReset.svelte";
  import SyneFont from "./SyneFont.svelte";
</script>

<style global>
  :global(:root) {
    /* Colors */
    --main-color: #00ff00;
    --secondary-color: #6400ff;
    --light: #ffffff;
    --dark: #000000;

    /* Width */
    --max-width: 48rem;
  }

  /* Removes scrollbar from body */
  :global(.body-is-not-visible) {
    overflow: hidden;
  }

  /* Text */

  :global(.header-big) {
    font-family: "syne-extra", Arial, Helvetica, sans-serif;
    line-height: 1.5;
    font-size: 1.625rem;
    color: var(--dark);
    word-break: break-word;
    hyphens: auto;
  }

  @media (--max-content-width) {
    :global(.header-big) {
      font-size: 2.5rem;
    }
  }

  :global(.header-small) {
    font-family: "syne-extra", Arial, Helvetica, sans-serif;
    line-height: 2;
    font-size: 1rem;
    color: var(--dark);
  }

  @media (--max-content-width) {
    :global(.header-small) {
      font-size: 1.25rem;
    }
  }

  :global(.body-regular) {
    font-family: "syne-regular", Arial, Helvetica, sans-serif;
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
    font-family: "syne-regular", Arial, Helvetica, sans-serif;
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
    font-family: "syne-bold", Arial, Helvetica, sans-serif;
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
    font-family: "syne-extra", Arial, Helvetica, sans-serif;
    line-height: 1.5;
    font-size: 1rem;
    color: var(--dark);
  }

  @media (--max-content-width) {
    :global(.body-extra) {
      font-size: 1.5rem;
    }
  }

  :global(.body-italic) {
    font-family: "syne-italic", Arial, Helvetica, sans-serif;
    line-height: 1.5;
    font-size: 1.25rem;
    color: var(--dark);
  }

  :global(.body-mono) {
    font-family: "syne-mono", Arial, Helvetica, sans-serif;
    line-height: 1.5;
    font-size: 1.25rem;
    color: var(--dark);
  }

  :global(.caption) {
    font-family: "syne-regular", Arial, Helvetica, sans-serif;
    line-height: 2;
    font-size: 0.75rem;
    color: var(--dark);
  }

  :global(.homepage) {
    font-family: "syne-extra", Arial, Helvetica, sans-serif;
    line-height: 1.5;
    font-size: 1.25rem;
    color: var(--dark);
  }

  @media (--max-content-width) {
    :global(.homepage) {
      font-size: 1.875rem;
    }
  }
</style>
