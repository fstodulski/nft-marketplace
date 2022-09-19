<script lang="ts">
  import { onMount } from 'svelte';

  import { Wallet } from '$core/web3/wallet';

  import Footer from '$containers/Footer/Footer.svelte';

  import Header from '$components/Header/Header.svelte';

  import '../app.scss';

  const _connectWallet = async (): Promise<void> => {
    await Wallet.connectWallet();
  };

  onMount(async (): Promise<void> => {
    await _connectWallet();
    document.getElementsByTagName('body')[0].classList.add('dark');
  });
</script>

<Header />
<slot />

<Footer />
