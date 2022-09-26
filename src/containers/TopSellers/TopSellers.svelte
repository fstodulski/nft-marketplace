<script lang="ts">
  import TopSellerBox from './components/TopSellerBox/TopSellerBox.svelte';

  export let topSellers: Array<any> = [];
</script>

<section class="flex flex-col w-full gap-5 pb-10 wrapper">
  <h3 class="heading-3 text-white">Top Sellers</h3>

  <div class="flex flex-nowrap w-full overflow-x-scroll scrollbar-hide gap-3">
    {#each topSellers as topSeller}
      <TopSellerBox user={topSeller} />
    {/each}
  </div>
</section>
