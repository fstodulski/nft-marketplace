<script lang="ts">
  import { onMount } from 'svelte';
  import { get } from 'svelte/store';

  import { page } from '$app/stores';

  import { WalletStore } from '$core/store/wallet';
  import { tilt } from '$core/utils/tilt';
  import { WalletService } from '$core/web3/wallet.service';

  import CreatorDetails from './components/CreatorDetails/CreatorDetails.svelte';
  import ItemMetadata from './components/ItemMetadata/ItemMetadata.svelte';
  import ItemTabs from './components/ItemTabs/ItemTabs.svelte';
  import CheckoutModal from './containers/CheckoutModal/CheckoutModal.svelte';
  import { CheckoutModalStore } from './containers/CheckoutModal/store/CheckoutModal.store';
  import { itemService } from './Item.service';
  import { ItemStore } from './store/item.store';

  const buyItem = async (): Promise<void> => {
    await WalletService.connectWallet();

    CheckoutModalStore.set({
      isOpen: true,
      item: get(ItemStore)
    });
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
  <section class="wrapper grid grid-cols-1 md:grid-cols-2 md:gap-32  w-full">
    {#if $ItemStore?.id}
      <figure
        use:tilt={{ max: 12, perspective: 1000, speed: 2000 }}
        class="w-full aspect-square overflow-hidden rounded-xl shadow-2xl my-8 md:my-14"
      >
        <img src={$ItemStore.metadata.image} alt="" class="object-cover h-full w-full" />
      </figure>

      <article class="flex flex-col gap-6 md:pl-10 md:border-l border-black-one py-6 md:py-14">
        <ItemMetadata />

        <CreatorDetails />
        <ItemTabs />

        {#if $ItemStore.seller !== $WalletStore.address && $ItemStore.seller}
          <div class="flex items-center gap-5 flex-wrap">
            <button class="btn solid lg" on:click={buyItem}>Buy for {$ItemStore.price} ETH</button>
            <button class="btn outlined lg">Make an offer</button>
          </div>
        {/if}
      </article>
    {/if}
  </section>
</main>
{#if $CheckoutModalStore.isOpen}
  <CheckoutModal />
{/if}
