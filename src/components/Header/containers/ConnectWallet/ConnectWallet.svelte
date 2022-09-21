<script lang="ts">
  import { WalletStore } from '$core/store/wallet';
  import { WalletService } from '$core/web3/wallet.service';

  let isConnected: boolean;

  $: isConnected = $WalletStore.address !== undefined;
</script>

{#if !isConnected}
  <button class="btn outlined" on:click={WalletService.connectWallet}> Connect </button>
{/if}
