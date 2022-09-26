<script lang="ts">
  import { onMount } from 'svelte';

  import { page } from '$app/stores';

  import UserHeader from './containers/UserHeader/UserHeader.svelte';
  import { UserItemsService } from './containers/UserItems/UserItems.service';
  import UserItems from './containers/UserItems/UserItems.svelte';
  import { UserStore } from './store/user.store';

  export let data: any;

  onMount(async () => {
    const address = $page.params.id;

    await UserItemsService.fetchOwnedNFTs(address);

    UserStore.set({
      ...data
    });
  });
</script>

<UserHeader />

<UserItems className="pt-48" />
