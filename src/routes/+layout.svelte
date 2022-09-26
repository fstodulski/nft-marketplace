<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import { get } from 'svelte/store';

  import Footer from '$containers/Footer/Footer.svelte';

  import Header from '$components/Header/Header.svelte';

  import { UserRepository } from '../core/repository/user/user.repository';
  import { WalletStore } from '../core/store/wallet';

  import '../app.scss';

  const _login = async (): Promise<void> => {
    await UserRepository.login(get(WalletStore).address);
  };

  const _walletStore$ = WalletStore.subscribe(async (store) => {
    if (store.address) {
      await _login();
    }
  });

  onMount(async (): Promise<void> => {
    document.getElementsByTagName('body')[0].classList.add('dark');
  });

  onDestroy(_walletStore$);
</script>

<Header />
<slot />

<Footer />
