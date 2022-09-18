<script lang="ts">
  import { Wallet } from '$core/web3/wallet';
  import { WalletStore } from '$core/store/wallet';

  let isConnected: boolean;

  $: isConnected = $WalletStore.address !== undefined;
</script>

{#if !isConnected}
  <button class="btn outlined" on:click={Wallet.connectWallet}> Connect </button>
{/if}
