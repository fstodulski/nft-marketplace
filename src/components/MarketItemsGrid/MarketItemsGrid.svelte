<script lang="ts">
  import MarketItemBox from './components/MarketItemBox/MarketItemBox.svelte';

  export let items: Array<any> = [];
</script>

<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 w-full">
  {#each items as piwo}
    <MarketItemBox jednoPiwo={piwo} />
  {/each}
</div>
