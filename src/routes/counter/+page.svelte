<script lang="ts">
  import './style.css';
  import { count, increment, decrement } from './counter.logic';
</script>

<main>
  <section>
    <h1>Counter</h1>
    <output>{$count}</output>
    <nav aria-label="counter controls">
      <button on:click={decrement}>Decrease</button>
      <button on:click={increment}>Increase</button>
    </nav>
  </section>
</main>
