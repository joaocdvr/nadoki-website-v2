<script>
  import Styles from "../components/CssReset.svelte";
  import SyneFont from "../components/SyneFont.svelte";
</script>

<style>
  :global(:root) {
    /* Colors */
    --main-color: #00ff00;
    --white: #ffffff;
    --black: #000000;
  }

  :global(h1) {
    font-family: "syne-extra", Arial, Helvetica, sans-serif;
    line-height: 2rem;
    font-size: 1rem;
    color: var(--black);
  }

  :global(.body-regular) {
    font-family: "syne-regular", Arial, Helvetica, sans-serif;
    line-height: 1.5rem;
    font-size: 1rem;
    color: var(--black);
  }

  :global(.body-bold) {
    font-family: "syne-bold", Arial, Helvetica, sans-serif;
    line-height: 1.5rem;
    font-size: 1rem;
    color: var(--black);
  }

  :global(.body-extra) {
    font-family: "syne-extra", Arial, Helvetica, sans-serif;
    line-height: 1.5rem;
    font-size: 1rem;
    color: var(--black);
  }

  :global(.body-italic) {
    font-family: "syne-italic", Arial, Helvetica, sans-serif;
    line-height: 1.5rem;
    font-size: 1rem;
    color: var(--black);
  }

  :global(.body-mono) {
    font-family: "syne-mono", Arial, Helvetica, sans-serif;
    line-height: 1.5rem;
    font-size: 1rem;
    color: var(--black);
  }

  :global(.caption) {
    font-family: "syne-regular", Arial, Helvetica, sans-serif;
    line-height: 1.5rem;
    font-size: 0.75rem;
    color: var(--black);
  }
</style>
