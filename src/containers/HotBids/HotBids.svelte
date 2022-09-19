<script lang="ts">
  import { onMount } from 'svelte';

  import MarketItemsGrid from '$components/MarketItemsGrid/MarketItemsGrid.svelte';

  import { HotBidsService } from './HotBids.service';
  import { HotBidsStore } from './store/HotBids.store.js';

  onMount(async () => {
    await HotBidsService.getHotBids();
  });
</script>

<section class="pb-10 border-b border-b-black-one">
  <div class="flex flex-col items-center wrapper px-2 gap-5">
    <h3 class="heading-3 dark:text-white mr-auto">Hot Bids</h3>

    {#if $HotBidsStore.hotBids.length > 0}
      <MarketItemsGrid items={$HotBidsStore.hotBids} />
    {/if}

    <button class="btn outlined w-full mx-auto w-auto">Load More</button>
  </div>
</section>
