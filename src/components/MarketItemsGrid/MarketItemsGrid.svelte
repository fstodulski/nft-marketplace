<script lang="ts">
  import type { OwnedNft } from '$core/models/get-nfts.model';
  
  import MarketItemBox from './components/MarketItemBox/MarketItemBox.svelte';

  export let items: Array<OwnedNft> = [];
</script>

<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 w-full">
  {#if items.length > 0}
    {#each items as nft}
      <MarketItemBox {nft} />
    {/each}
  {/if}
</div>
