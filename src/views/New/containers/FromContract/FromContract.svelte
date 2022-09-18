<script lang="ts">
  import { required } from 'svelte-forms/validators';
  import { field, form } from 'svelte-forms';

  let disabled = true;

  const contractAddress = field('nftContractAddress', '', [required()]);
  const tokenId = field('tokenId', '', [required()]);
  const price = field('price', '', [required()]);

  const nftForm = form(contractAddress, tokenId, price);

  const allowForMarketplace = async () => {};
</script>

<div class="flex flex-col pt-8">
  <h2 class="heading-2 text-white">Create New from NFT Contract</h2>

  <form class="flex flex-col gap-5 mt-6">
    <div class="form-field flex flex-col">
      <label for="nftContractAddress">NFT Contract Address</label>
      <input
        class="input"
        type="text"
        id="nftContractAddress"
        bind:value={$contractAddress.value}
      />
    </div>

    <div class="form-field flex flex-col">
      <label for="tokenId">Token ID</label>
      <input class="input" type="number" id="tokenId" bind:value={$tokenId.value} />
    </div>

    <div class="form-field flex flex-col">
      <label for="price">Price</label>
      <input class="input" type="number" id="price" bind:value={$price.value} />
    </div>

    <div class="flex gap-2 justify-end">
      <button {disabled} class="btn solid">
        {#if disabled}
          Allow for Marketplace
        {:else}
          Submit
        {/if}
      </button>
    </div>
  </form>
</div>
