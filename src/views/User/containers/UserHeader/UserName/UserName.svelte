<script lang="ts">
  import { onMount } from 'svelte';
  import { PencilSquare } from 'svelte-heros-v2';
  import axios from 'axios';

  import { page } from '$app/stores';

  import { WalletStore } from '$core/store/wallet';

  import { UserStore } from '../../../store/user.store';

  let isEditMode = false;
  let name: string;

  const updateName = async (): Promise<void> => {
    const req = await axios.post(
      '/api/user/update',
      {
        data: {
          address: $UserStore.address,
          name
        }
      },
      {
        params: {
          address: $WalletStore.address
        }
      }
    );

    UserStore.set({
      ...req.data
    });

    isEditMode = false;
  };

  onMount(async () => {
    name = $UserStore?.name;
  });
</script>

<div class="flex">
  {#if !isEditMode}
    <div class="flex items-center">
      <span class="text-lg text-gray-two font-bold">{$UserStore?.name} </span>
      {#if $page.params.id === $WalletStore.address}
        <PencilSquare
          class="text-white w-4 ml-3 outline-none cursor-pointer"
          on:click={() => {
            isEditMode = true;
          }}
        />
      {/if}
    </div>
  {/if}
  {#if isEditMode}
    <form class="flex items-center gap-2 mt-4">
      <input type="text" class="input" bind:value={name} />
      <button class="btn solid" type="button" on:click={updateName}>OK</button>
    </form>
  {/if}
</div>
