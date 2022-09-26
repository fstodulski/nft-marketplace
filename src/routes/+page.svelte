<script lang="ts">
  import Home from '$views/Home/Home.svelte';

  export let data: {
    topSellers: Array<any>;
  };
</script>

<Home topSellers={data.topSellers} />
