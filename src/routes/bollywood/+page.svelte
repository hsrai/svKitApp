<script lang="ts">
  import './style.css';
  import { eras } from './bollywood.data';
</script>

<main>
  <article>
    <header>
      <h1>Bollywood</h1>
      <p>Past, Present and Future</p>
    </header>

    {#each eras as era}
      <section aria-labelledby={era.id}>
        <h2 id={era.id}>{era.title}</h2>
        <p>{era.description}</p>
      </section>
    {/each}
  </article>
</main>
