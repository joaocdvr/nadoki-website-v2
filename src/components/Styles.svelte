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
    font-size: 30px;
    text-align: center;
    color: var(--main-color);
  }
</style>
