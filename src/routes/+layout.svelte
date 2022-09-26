<script lang="ts">
  import { onMount } from 'svelte';

  import { WalletService } from '$core/web3/wallet.service';

  import Footer from '$containers/Footer/Footer.svelte';

  import Header from '$components/Header/Header.svelte';

  import { UserRepository } from '../core/repository/user/user.repository';
  import { WalletStore } from '../core/store/wallet';

  import '../app.scss';

  const _connectWallet = async (): Promise<void> => {
    await WalletService.connectWallet();
  };

  const _login = async (): Promise<void> => {
    await UserRepository.login($WalletStore.address);
  };

  onMount(async (): Promise<void> => {
    // await _connectWallet();
    // await _login();
    document.getElementsByTagName('body')[0].classList.add('dark');
  });
</script>

<Header />
<slot />

<Footer />
