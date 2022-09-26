<script lang="ts">
  import { Heart } from 'svelte-heros-v2';

  import { ItemStore } from '../../store/item.store';
</script>

<div class="flex flex-col gap-2">
  <div class="flex items-start justify-between">
    <h1 class="heading-1 text-white font-bold">{$ItemStore.metadata.name}</h1>
    <div class="flex items-center py-1 px-3 rounded-3xl border border-gray-two gap-2">
      <Heart variation="solid" class="w-4 outline-none text-white" />
      <span class="paragraph-2 text-white">92</span>
    </div>
  </div>

  {#if $ItemStore.price}
    <div class="flex text-white paragraph-2 gap-3">
      <span>From <span class="font-semibold">{$ItemStore.price} ETH</span></span>

      <span>20 of 25 available</span>
    </div>
  {/if}
</div>
