<script lang="ts">
  import { WalletStore } from '$core/store/wallet';

  import UserHeader from './containers/UserHeader/UserHeader.svelte';
  import UserItems from './containers/UserItems/UserItems.svelte';
</script>

<UserHeader />

{#if $WalletStore.address}
  <UserItems className="pt-48" />
{/if}
