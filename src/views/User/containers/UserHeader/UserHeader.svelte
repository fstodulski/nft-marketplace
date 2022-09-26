<script lang="ts">
  import { Link } from 'svelte-heros-v2';

  import { page } from '$app/stores';

  import UserName from './UserName/UserName.svelte';

  let isCopied = false;

  const copy = async (): Promise<void> => {
    navigator.clipboard.writeText($page.params.id).then(() => {
      isCopied = true;

      setTimeout(() => {
        isCopied = false;
      }, 3000);
    });
  };
</script>

<header class="w-full h-[308px] bg-gray-three relative">
  <figure class="w-full h-full overflow-hidden">
    <img
      class="w-full h-full mx-auto object-cover"
      src="https://images.unsplash.com/photo-1557784873-df9d3dcdf936?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1934&q=80"
      alt=""
    />
  </figure>

  <div class="absolute -bottom-[140px] left-0 right-0 ">
    <div class="relative flex flex-col items-center">
      <figure class="w-56 h-56 rounded-full bg-gray-three mx-auto border-8 border-dark" />

      <div class="flex flex-col items-center">
        <div class="flex items-center">
          <h1
            title={$page.params.id}
            class="heading-1 text-white max-w-[200px] overflow-hidden overflow-ellipsis relative"
          >
            {$page.params.id}
          </h1>
          <Link on:click={copy} class="text-white cursor-pointer" />
          <div
            class:active={isCopied}
            class="absolute opacity-0 pointer-events-none -bottom-4 translate-y-0 duration-300 text-center py-1 rounded-md left-0 right-0 mx-auto bg-black-three text-white shadow-2xl text-xs w-32 "
          >
            Address Copied
          </div>
        </div>

        <UserName />
      </div>
    </div>
  </div>
</header>

<style lang="scss">
  .active {
    @apply translate-y-4 opacity-100;
  }
</style>
