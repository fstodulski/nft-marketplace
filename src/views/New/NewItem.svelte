<script lang="ts">
  import { onMount } from 'svelte';

  import { WalletService } from '../../core/web3/wallet.service';
  import FromContract from './containers/FromContract/FromContract.svelte';
  import UploadFile from './containers/UploadFile/UploadFile.svelte';

  enum Tab {
    UploadFile,
    FromContract
  }

  let selectedTab: Tab = Tab.FromContract;

  const selectTab = (tab: Tab): void => {
    selectedTab = tab;
  };

  const _connectWallet = async (): Promise<void> => {
    await WalletService.connectWallet();
  };

  onMount(async (): Promise<void> => {
    await _connectWallet();
  });
</script>

<main class="max-w-2xl mx-auto flex flex-col mt-10">
  <nav class="flex gap-4">
    <span
      class:active={selectedTab === Tab.FromContract}
      class="tab active"
      on:click={() => selectTab(Tab.FromContract)}>From Contract</span
    >
    <span
      class:active={selectedTab === Tab.UploadFile}
      class="tab"
      on:click={() => selectTab(Tab.UploadFile)}>Upload File</span
    >
  </nav>

  <section class="mt-4">
    {#if selectedTab === Tab.FromContract}
      <FromContract />
    {/if}

    {#if selectedTab === Tab.UploadFile}
      <UploadFile />
    {/if}
  </section>
</main>

<style lang="scss">
  .tab {
    @apply text-white font-semibold text-sm cursor-pointer pb-1;

    &.active {
      @apply border-b border-white;
    }
  }
</style>
