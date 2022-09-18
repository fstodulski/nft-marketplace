<script lang="ts">
  import CreatorDetails from './components/CreatorDetails/CreatorDetails.svelte';
  import ItemMetadata from './components/ItemMetadata/ItemMetadata.svelte';
  import ItemTabs from './components/ItemTabs/ItemTabs.svelte';
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import { NftRepository } from '$core/repository/nft/nft.repository';
  import { ItemStore } from './store/item.store';
  import { Wallet } from '$core/web3/wallet';

  const _fetchItem = async () => {
    const { contract, id } = $page.params;

    try {
      const res = await NftRepository.single(contract, id);

      ItemStore.set(res);
    } catch (e) {
      console.error(e);
    }
  };

  onMount(async () => {
    await Wallet.connectWallet();
    await _fetchItem();
  });
</script>

<main class="grid grid-cols-2 wrapper border-b border-black-one gap-32">
  {#if $ItemStore?.id}
    <figure class="w-full aspect-square overflow-hidden rounded-xl shadow-2xl my-14">
      <img src={$ItemStore.metadata.image} alt="" class="object-cover h-full w-full" />
    </figure>

    <article class="flex flex-col gap-6 pl-10 border-l border-black-one py-14">
      <ItemMetadata />

      <CreatorDetails />
      <ItemTabs />
    </article>
  {/if}
</main>
