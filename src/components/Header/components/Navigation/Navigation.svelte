<script lang="ts">
  import { WalletStore } from '$core/store/wallet';
</script>

<nav class="hidden lg:flex paragraph-1 font-semibold text-gray-three gap-5">
  <a href="" class="link active">Explore</a>
  {#if $WalletStore.address}
    <a href="/user/{$WalletStore.address}" class="link">My Items</a>
  {/if}
  <a href="" class="link">Following</a>
</nav>

<style lang="scss">
  .link {
    @apply hover:text-white text-gray-three duration-300;
    &.active {
      @apply text-white;
    }
  }
</style>
