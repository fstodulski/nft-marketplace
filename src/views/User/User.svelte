<script lang="ts">
  import UserHeader from './containers/UserHeader/UserHeader.svelte';
  import UserItems from './containers/UserItems/UserItems.svelte';
  import { WalletStore } from '$core/store/wallet';
</script>

<UserHeader />

{#if $WalletStore.address}
  <UserItems className="pt-48" />
{/if}
