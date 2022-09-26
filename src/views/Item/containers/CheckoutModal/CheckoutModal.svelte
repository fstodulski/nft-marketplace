<script lang="ts">
  import { backOut } from 'svelte/easing';
  import { get } from 'svelte/store';
  import { fly } from 'svelte/transition';

  import { itemService } from '../../Item.service';
  import { CheckoutModalStore } from './store/CheckoutModal.store';
  const cancelModal = (): void => {
    CheckoutModalStore.set({
      isOpen: false,
      item: undefined
    });
  };

  const checkout = async (): Promise<void> => {
    const { item } = get(CheckoutModalStore);
    const {
      contract: { address },
      itemId,
      price
    } = item;
    const req = await itemService.buyItem(address, itemId, price);

    const receipt = await req.wait();

    console.log(receipt);
  };
</script>

<aside
  in:fly={{
    y: 100,
    easing: backOut
  }}
  out:fly={{
    y: 100,
    easing: backOut
  }}
  class="fixed top-0 left-0 w-screen h-screen bg-slate-800/[0.8] z-50 flex items-center justify-center"
>
  <div class="bg-dark rounded-lg flex flex-col max-w-screen-sm w-full items-center">
    <div class="py-7 w-full flex flex-col items-center border-b border-b-black-one">
      <h2 class="heading-2 dark:text-white ">Checkout</h2>
    </div>

    <div class="flex w-full p-10 justify-between">
      <div class="flex flex-col items-start gap-7">
        <span class="paragraph-1 dark:text-white font-semibold">Item</span>

        <div class="flex gap-5 items-center">
          <figure class="w-32 h-32 bg-gray-three">
            <img src={$CheckoutModalStore.item.metadata.image} alt="" />
          </figure>

          <div class="flex flex-col">
            <span class="dark:text-white paragraph-2 font-semibold">Mia Ayana</span>
            <span class="dark:text-white paragraph-2"
              >{$CheckoutModalStore.item.metadata.name}
            </span>
          </div>
        </div>
      </div>

      <div class="flex flex-col items-end gap-7">
        <span class="paragraph-1 dark:text-white font-semibold">Subtotal</span>

        <span class="dark:text-white paragraph-1"
          >{$CheckoutModalStore.item.price} <span class="font-semibold">ETH</span></span
        >
      </div>
    </div>

    <div class="flex w-full justify-between px-10 pb-7">
      <span class="dark:text-white paragraph-1 font-semibold">Total</span>
      <span class="dark:text-white paragraph-1"
        >{$CheckoutModalStore.item.price} <span class="font-semibold">ETH</span></span
      >
    </div>

    <div class="w-full flex justify-center gap-5 py-7 border-t border-t-black-one">
      <button class="btn solid"> Checkout </button>
      <button class="btn outlined" on:click={cancelModal}> Cancel</button>
    </div>
  </div>
</aside>
