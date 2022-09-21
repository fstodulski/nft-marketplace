<script lang="ts">
  import { onMount } from 'svelte';
  import { field, form } from 'svelte-forms';
  import { required } from 'svelte-forms/validators';

  import { CONTRACT } from '$core/constants/contract';
  import { MarketplaceService } from '$core/web3/marketplace';

  import ConfettiWrapper from '$components/ConfettiWrapper/ConfettiWrapper.svelte';

  import { FromContractService } from './FromContract.service';

  enum AllowedStatus {
    NotAllowed,
    Allowed,
    DonKnowYet
  }

  let allowedStatus: AllowedStatus = AllowedStatus.DonKnowYet;

  const contractAddress = field('nftContractAddress', '', [required()]);
  const tokenId = field('tokenId', '', [required()]);
  const price = field('price', '', [required()]);

  const nftForm = form(contractAddress, tokenId, price);

  const allowForMarketplace = async (): Promise<void> => {
    await FromContractService.allowMarketPlace($contractAddress.value, $tokenId.value);
  };

  const isMarketplaceApproved = async (): Promise<void> => {
    const res = await FromContractService.isMarketplaceApproved(
      $contractAddress.value,
      $tokenId.value
    );

    if (res === CONTRACT.address) {
      allowedStatus = AllowedStatus.Allowed;
    } else {
      allowedStatus = AllowedStatus.NotAllowed;
    }
  };

  const submitItem = async (): Promise<void> => {
    if ($nftForm.valid) {
      await FromContractService.createMarketItem(
        $contractAddress.value,
        $tokenId.value,
        $price.value
      );
    }
  };

  onMount(async () => {
    await MarketplaceService.subscribeOnListItem();
  });
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
      <input class="input" type="text" id="price" bind:value={$price.value} />
    </div>

    <div class="flex gap-2 justify-end">
      <button class="btn solid" type="button">
        {#if allowedStatus === AllowedStatus.NotAllowed}
          <span on:click={allowForMarketplace}> Allow for Marketplace </span>
        {/if}

        {#if allowedStatus === AllowedStatus.DonKnowYet}
          <span on:click={isMarketplaceApproved}>Check if it's allowed</span>
        {/if}
        {#if allowedStatus === AllowedStatus.Allowed}
          <span on:click={submitItem}>Submit</span>
        {/if}
      </button>
    </div>
  </form>
</div>
<ConfettiWrapper />
