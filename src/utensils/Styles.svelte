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
    --dark-two: #868686;

    /* Width */
    --max-width: 48rem;
  }

  :global(.header-small) {
    font-family: "syne-extra", Arial, Helvetica, sans-serif;
    line-height: 2;
    font-size: 1rem;
    color: var(--dark);
  }

  :global(.header-big) {
    font-family: "syne-extra", Arial, Helvetica, sans-serif;
    line-height: 1.5;
    font-size: 1.625rem;
    color: var(--dark);
    word-break: break-word;
    hyphens: auto;
  }

  :global(.body-regular) {
    font-family: "syne-regular", Arial, Helvetica, sans-serif;
    line-height: 1.5;
    font-size: 1rem;
    color: var(--dark);
  }

  :global(.body-small) {
    font-family: "syne-regular", Arial, Helvetica, sans-serif;
    line-height: 1.5;
    font-size: 1rem;
    color: var(--dark-two);
    margin-bottom: 0.5rem;
    display: inline-block;
    word-break: break-word;
    hyphens: auto;
  }

  :global(.body-bold) {
    font-family: "syne-bold", Arial, Helvetica, sans-serif;
    line-height: 1.5;
    font-size: 1rem;
    color: var(--dark);
  }

  :global(.body-extra) {
    font-family: "syne-extra", Arial, Helvetica, sans-serif;
    line-height: 1.5;
    font-size: 1rem;
    color: var(--dark);
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
    word-break: break-word;
    hyphens: auto;
  }

  :global(.list-name) {
    font-family: "syne-bold", Arial, Helvetica, sans-serif;
    line-height: 3;
    font-size: 1rem;
    color: var(--dark);
    word-break: break-word;
    hyphens: auto;
  }

  :global(.list-content) {
    font-family: "syne-regular", Arial, Helvetica, sans-serif;
    line-height: 2;
    font-size: 1rem;
    color: var(--dark);
  }

  :global(.homepage) {
    font-family: "syne-extra", Arial, Helvetica, sans-serif;
    line-height: 1.5;
    font-size: 1.25rem;
    color: var(--dark);
  }
</style>
