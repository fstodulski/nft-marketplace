<script lang="ts">
  import { onMount } from 'svelte';

  import { Marketplace } from '$core/web3/marketplace';

  const _fetchHotBids = async (): Promise<void> => {
    await Marketplace.fetchMarketItems();
  };

  onMount(async () => {
    await _fetchHotBids();
  });
</script>

<section class="pb-10 border-b border-b-black-one">
  <div class="flex flex-col items-center wrapper px-2 gap-5">
    <h3 class="heading-3 dark:text-white mr-auto">Hot Bids</h3>

    <!--    <MarketItemsGrid items={[1, 2, 3, 4, 5, 6, 7, 7, 8, 8, 1, 1]} />-->

    <button class="btn outlined w-full mx-auto w-auto">Load More</button>
  </div>
</section>
