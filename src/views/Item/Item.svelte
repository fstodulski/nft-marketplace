<script lang="ts">
  import { onMount } from 'svelte';

  import { page } from '$app/stores';

  import { tilt } from '$core/utils/tilt';

  import CreatorDetails from './components/CreatorDetails/CreatorDetails.svelte';
  import ItemMetadata from './components/ItemMetadata/ItemMetadata.svelte';
  import ItemTabs from './components/ItemTabs/ItemTabs.svelte';
  import { itemService } from './Item.service';
  import { ItemStore } from './store/item.store';

  const buyItem = async (): Promise<void> => {
    const { contract, id } = $page.params;

    await itemService.buyItem(contract, id, $ItemStore.price);
  };

  const _fetchItem = async (): Promise<void> => {
    const { contract, id } = $page.params;

    await itemService.fetchItem(contract, parseInt(id));
  };

  onMount(async () => {
    await _fetchItem();
  });
</script>

<main class="border-b border-black-one">
  <section class="wrapper grid grid-cols-2 gap-32">
    {#if $ItemStore?.id}
      <figure
        use:tilt={{ max: 12, perspective: 1000, speed: 2000 }}
        class="w-full aspect-square overflow-hidden rounded-xl shadow-2xl my-14"
      >
        <img src={$ItemStore.metadata.image} alt="" class="object-cover h-full w-full" />
      </figure>

      <article class="flex flex-col gap-6 pl-10 border-l border-black-one py-14">
        <ItemMetadata />

        <CreatorDetails />
        <ItemTabs />

        <div class="flex items-center gap-5">
          <button class="btn solid lg" on:click={buyItem}>Buy for {$ItemStore.price} ETH</button>
          <button class="btn outlined lg">Make an offer</button>
        </div>
      </article>
    {/if}
  </section>
</main>
