<script lang="ts">
  import { onMount } from 'svelte';

  import { ModalEnum, ModalStore } from './modal.store';

  export let modalId: ModalEnum;

  onMount(() => {
    ModalStore.update((store) => {
      return {
        ...store,
        [modalId]: {
          isOpen: false
        }
      };
    });
  });
</script>

{#if $ModalStore[modalId].isOpen}
  <aside class="fixed w-full h-full left-0 top-0 z-50">
    <div class="z-0 absolute top-0 left-0 w-full h-full bg-black-two opacity-75" />

    <div class="absolute z-1 bg-white rounded-lg p-5">{$ModalStore.WalletNotConnected.isOpen}</div>
  </aside>
{/if}
