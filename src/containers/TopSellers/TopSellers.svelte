<script lang="ts">
  import { onMount } from 'svelte';
  import axios from 'axios';

  import TopSellerBox from './components/TopSellerBox/TopSellerBox.svelte';

  onMount(async () => {
    const res = await axios.get('/api/user/add');
    console.log(res.data);
  });
</script>

<section class="flex flex-col w-full gap-5 pb-10 wrapper">
  <h3 class="heading-3 text-white">Top Sellers</h3>

  <div class="flex flex-nowrap w-full overflow-x-scroll scrollbar-hide gap-3">
    <TopSellerBox />
    <TopSellerBox />
    <TopSellerBox />
    <TopSellerBox />
    <TopSellerBox />
    <TopSellerBox />
  </div>
</section>
