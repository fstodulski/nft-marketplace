<script lang="ts">
  import { onMount } from 'svelte';

  import { page } from '$app/stores';

  import { NftRepository } from '$core/repository/nft/nft.repository';
  import { tilt } from '$core/utils/tilt';
  import { WalletService } from '$core/web3/wallet.service';

  import CreatorDetails from './components/CreatorDetails/CreatorDetails.svelte';
  import ItemMetadata from './components/ItemMetadata/ItemMetadata.svelte';
  import ItemTabs from './components/ItemTabs/ItemTabs.svelte';
  import { ItemStore } from './store/item.store';

  const _fetchItem = async (): Promise<void> => {
    const { contract, id } = $page.params;

    try {
      const res = await NftRepository.single(contract, id);

      ItemStore.set(res);
    } catch (e) {
      console.error(e);
    }
  };

  onMount(async () => {
    await WalletService.connectWallet();
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
      </article>
    {/if}
  </section>
</main>
