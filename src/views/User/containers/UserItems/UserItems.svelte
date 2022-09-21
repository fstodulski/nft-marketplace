<script lang="ts">
  import { MagnifyingGlass } from 'svelte-heros-v2';

  import MarketItemsGrid from '$components/MarketItemsGrid/MarketItemsGrid.svelte';
  import { ModalEnum } from '$components/Modal/modal.store.js';
  import Modal from '$components/Modal/Modal.svelte';

  import { UserItemsStore } from './store/user-items.store';

  export let className: string;
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
  {#if $UserItemsStore.ownedNfts.length > 0}
    <MarketItemsGrid items={$UserItemsStore.ownedNfts} />
    <button class="btn outlined mx-auto">Load More</button>
  {:else}
    <div class="w-full py-10 flex justify-center bg-black-three shadow-2xl rounded-lg">
      <div class="flex flex-col items-center gap-4">
        <span class="text-xl text-white ">There are no items. Yet!</span>
        <a class="btn solid" href="/explore">Go Back and Explore!</a>
      </div>
    </div>
  {/if}
</section>

<Modal modalId={ModalEnum.WalletNotConnected} />
