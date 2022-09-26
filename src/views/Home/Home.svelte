<script lang="ts">
  import HotBids from '$containers/HotBids/HotBids.svelte';
  import TopSellers from '$containers/TopSellers/TopSellers.svelte';

  import HeroBanner from './components/HeroBanner/HeroBanner.svelte';

  export let topSellers: Array<any>;
</script>

<HeroBanner />
<TopSellers {topSellers} />
<HotBids />
