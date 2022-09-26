<script lang="ts">
  import { Heart } from 'svelte-heros-v2';

  import type { NFTMetadata } from '$core/models/get-nfts.model';

  export let nft: NFTMetadata;

  console.log(nft);
</script>

<div class="px-2 py-4 rounded-xl bg-black-three">
  <a class=" flex flex-col gap-2 " href="/item/{nft.contract.address}/{nft.itemId}">
    <figure class="w-full h-[145px] overflow-hidden rounded-xl bg-black-two">
      <img class="w-full h-full object-cover" src={nft.metadata.image} alt="" />
    </figure>
    <span
      class="whitespace-nowrap mt-4 overflow-hidden overflow-ellipsis paragraph-3 font-semibold text-white"
    >
      {nft.metadata.name}
    </span>
    <div class="flex justify-between items-center w-full">
      <span class="paragraph-4 text-white font-semibold">
        {nft.price}
        <span class="font-light">ETH</span>
      </span>

      <div class="flex items-center gap-1">
        <Heart variation="solid" class="dark:text-dark w-5" />
        <span class="dark:text-white paragraph-4">92</span>
      </div>
    </div>
  </a>
</div>
