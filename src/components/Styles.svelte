<script>
  import CssReset from "./CssReset.svelte";
  import SyneFont from "./SyneFont.svelte";
</script>

<style global>
  :global(:root) {
    /* Colors */
    --main-color: #00ff00;
    --light: #ffffff;
    --dark: #000000;
  }

  :global(h1) {
    font-family: "syne-extra", Arial, Helvetica, sans-serif;
    line-height: 2rem;
    font-size: 1rem;
    color: var(--dark);
  }

  :global(.body-regular) {
    font-family: "syne-regular", Arial, Helvetica, sans-serif;
    line-height: 1.5rem;
    font-size: 1rem;
    color: var(--dark);
  }

  :global(.body-bold) {
    font-family: "syne-bold", Arial, Helvetica, sans-serif;
    line-height: 1.5rem;
    font-size: 1rem;
    color: var(--dark);
  }

  :global(.body-extra) {
    font-family: "syne-extra", Arial, Helvetica, sans-serif;
    line-height: 1.5rem;
    font-size: 1rem;
    color: var(--dark);
  }

  :global(.body-italic) {
    font-family: "syne-italic", Arial, Helvetica, sans-serif;
    line-height: 1.5rem;
    font-size: 1rem;
    color: var(--dark);
  }

  :global(.body-mono) {
    font-family: "syne-mono", Arial, Helvetica, sans-serif;
    line-height: 1.5rem;
    font-size: 1rem;
    color: var(--dark);
  }

  :global(.caption) {
    font-family: "syne-regular", Arial, Helvetica, sans-serif;
    line-height: 1.5rem;
    font-size: 0.75rem;
    color: var(--dark);
  }

  :global(.list-name) {
    font-family: "syne-bold", Arial, Helvetica, sans-serif;
    line-height: 3rem;
    font-size: 1rem;
    color: var(--dark);
  }

  :global(.list-content) {
    font-family: "syne-regular", Arial, Helvetica, sans-serif;
    line-height: 2rem;
    font-size: 1rem;
    color: var(--dark);
  }
</style>
