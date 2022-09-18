<script lang="ts">
  import MarketItemsGrid from '$components/MarketItemsGrid/MarketItemsGrid.svelte';
  import { MagnifyingGlass } from 'svelte-heros-v2';
  import { onMount } from 'svelte';
  import { NftRepository } from '$core/repository/nft/nft.repository';
  import { WalletStore } from '$core/store/wallet';
  import { UserItemsStore } from './store/user-items.store';

  export let className: string;

  const _fetchNFTs = async () => {
    try {
      const res = await NftRepository.byOwner($WalletStore.address);

      UserItemsStore.set({
        ownedNfts: res
      });
    } catch (e) {
      console.error(e);
    }
  };

  onMount(async () => {
    await _fetchNFTs();
  });
</script>

<section class="wrapper {className} flex flex-col gap-8">
  <form class="grid grid-cols-4 items-center gap-3">
    <div class="form-field col-start-1 col-end-4">
      <MagnifyingGlass class="absolute top-2 left-3 text-white" />
      <input type="text" class="input with-prefix" placeholder="Search Item Here" />
    </div>

    <div class="form-field">
      <select name="sort" id="sort" class="w-full input">
        <option value="Recently Listed">Recently Listed</option>
      </select>
    </div>
  </form>
  <MarketItemsGrid items={$UserItemsStore.ownedNfts} />
  <button class="btn outlined mx-auto">Load More</button>
</section>
