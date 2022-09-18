<script lang="ts">
  import { Wallet } from '$core/web3/wallet';
  import { WalletStore } from '$core/store/wallet';

  const connectWallet = async () => {
    const provider = Wallet.provider();

    const [account] = await provider.send('eth_requestAccounts', []);

    WalletStore.set({
      address: account
    });
  };

  let isConnected: boolean;

  $: isConnected = $WalletStore.address !== undefined;
</script>

{#if !isConnected}
  <button class="btn outlined" on:click={connectWallet}> Connect </button>
{/if}
