<script lang="ts">
  import { jumpStore } from '$lib/state/jumpStore';
</script>

<section class="settings-panel">

  <header>
    <h2>Settings</h2>
  </header>

  <form class="settings-form">

    <fieldset>
      <legend>Ruler Geometry</legend>

      <label for="rulerMax">
        Original Ruler Length
      </label>
      <input
        id="rulerMax"
        type="number"
        bind:value={$jumpStore.rulerMax}
      />

      <label for="startInp">
        Ruler Starts At (#)
      </label>
      <input
        id="startInp"
        type="number"
        bind:value={$jumpStore.start}
      />

      <label for="lengthInp">
        Pencil Length
      </label>
      <input
        id="lengthInp"
        type="number"
        bind:value={$jumpStore.pencilLen}
      />

      <label for="speedInp">
        Jump Speed
      </label>
      <input
        id="speedInp"
        type="range"
        min="1"
        max="10"
        bind:value={$jumpStore.speed}
      />

    </fieldset>

  </form>

</section>
