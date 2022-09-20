<script lang="ts">
  import { page } from '$app/stores';

  import { WalletStore } from '$core/store/wallet';

  let path: string;

  $: path = $page.url.pathname;
</script>

<nav class="hidden lg:flex paragraph-1 font-semibold text-gray-three gap-5">
  <a class:active={path === '/explore'} href="/explore" class="link">Explore</a>

  {#if $WalletStore.address}
    <a class:active={path === '/user/following'} href="/user/following" class="link"> Following</a>
    <a
      class:active={path === `/user/${$WalletStore.address}`}
      href="/user/{$WalletStore.address}"
      class="link">My Items</a
    >
  {/if}
</nav>

<style lang="scss">
  .link {
    @apply hover:text-white text-gray-three duration-300;

    &.active {
      @apply text-white;
    }
  }
</style>
