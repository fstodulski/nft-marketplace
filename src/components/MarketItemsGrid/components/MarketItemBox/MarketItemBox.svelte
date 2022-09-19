<script lang="ts">
  import { Heart } from 'svelte-heros-v2';
  
  import type { OwnedNft } from '$core/models/get-nfts.model';

  export let nft: OwnedNft;

  console.log(nft);
</script>

<div class="px-2 py-4 rounded-xl flex flex-col gap-2 bg-black-three">
  <a href="/item/{nft.contract.address}/{nft.metadata.id}">
    <figure class="w-full h-[145px] overflow-hidden rounded-xl bg-black-two">
      <img class="w-full h-full object-cover" src={nft.metadata.image} alt="" />
    </figure>
    <span
      class="whitespace-nowrap overflow-hidden overflow-ellipsis paragraph-3 font-semibold text-white"
    >
      {nft.metadata.name}
    </span>
    <div class="flex justify-between items-center w-full">
      <span class="paragraph-4 text-white font-semibold"
        >1.25
        <span class="font-light">ETH</span></span
      >

      <div class="flex items-center gap-1">
        <Heart variation="solid" class="dark:text-dark w-5" />
        <span class="dark:text-white paragraph-4">92</span>
      </div>
    </div>
  </a>
</div>
