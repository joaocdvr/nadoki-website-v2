<script>
  const ola = "adeus";

  let count = 0;
  function increment() {
    count = count + 1;
    console.log(count);
  }
</script>

<style>
  button {
    width: 100px;
    background-color: red;
  }
</style>

<button on:click={increment}>+1</button>

<h1>lol {count}</h1>
