<script lang="ts">
  import { MagnifyingGlass } from 'svelte-heros-v2';
  import Navigation from './components/Navigation/Navigation.svelte';
  import ConnectWallet from './containers/ConnectWallet/ConnectWallet.svelte';
  import CreateNewItem from './containers/CreateNewItem/CreateNewItem.svelte';
</script>

<header class="bg-gray-50 dark:bg-dark py-4 px-2 border-b border-b-black-one">
  <div class="wrapper flex items-center justify-between gap-3">
    <figure class="w-8 h-8 bg-red-violet rounded-lg flex-none flex justify-center items-center">
      <span class="w-5 h-5 border-2 border-dark rounded-full" />
    </figure>

    <form class="shrink w-full max-w-sm mr-auto">
      <div class="form-field">
        <MagnifyingGlass class="absolute top-2 left-3 text-white" />
        <input type="text" class="input with-prefix" placeholder="Search Item Here" />
      </div>
    </form>

    <Navigation />
    <div class="hidden lg:flex items-center ml-5 gap-3">
      <CreateNewItem />
      <ConnectWallet />
    </div>
    <button class="w-12 h-10 flex flex-col items-center justify-center md:hidden">
      <div class="space-y-2">
        <div class="w-8 h-0.5 bg-white" />
        <div class="w-8 h-0.5 bg-white" />
        <div class="w-8 h-0.5 bg-white" />
      </div>
    </button>
  </div>
</header>
