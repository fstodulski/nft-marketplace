<script lang="ts">
  import { ItemStore } from '../../store/item.store';
</script>

<div class="flex flex-col gap-2">
  <span class="paragraph-3 text-white">Creator</span>
  <div class="flex items-center gap-2">
    <figure class="w-10 h-10 rounded-full bg-gray-three">
      <img src="" alt="" />
    </figure>
    <div class="flex flex-col">
      <span class="text-white paragraph-2 font-semibold">Mia Ayana</span>
      <span class="text-xs dark:text-white w-10 overflow-hidden overflow-ellipsis"
        >{$ItemStore.seller}</span
      >
    </div>
  </div>
</div>
