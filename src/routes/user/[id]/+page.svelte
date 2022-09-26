<script lang="ts">
  import type { User as UserModel } from '@prisma/client';

  import User from '$views/User/User.svelte';

  export let data: {
    user: UserModel;
  };
</script>

<User data={data.user} />
