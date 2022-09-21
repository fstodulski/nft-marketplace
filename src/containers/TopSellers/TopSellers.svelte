<script lang="ts">
  import { onMount } from 'svelte';

  import { UserRepository } from '$core/repository/user/user.repository';

  import TopSellerBox from './components/TopSellerBox/TopSellerBox.svelte';

  let topSellers: Array<any> = [];

  const _fetchTopSellers = async (): Promise<void> => {
    const res = await UserRepository.topSellers();

    topSellers = res;
  };
  onMount(async () => {
    await _fetchTopSellers();
  });
</script>

<section class="flex flex-col w-full gap-5 pb-10 wrapper">
  <h3 class="heading-3 text-white">Top Sellers</h3>

  <div class="flex flex-nowrap w-full overflow-x-scroll scrollbar-hide gap-3">
    {#each topSellers as topSeller}
      <TopSellerBox user={topSeller} />
    {/each}
  </div>
</section>
