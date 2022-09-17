<script lang="ts">
  import { Check } from 'svelte-heros-v2';
</script>

<div
  class="flex flex-col justify-center items-center pt-8 px-6 pb-3 dark:bg-black-three rounded-xl relative min-w-[150px] lg:min-w-[180px]"
>
  <div
    class="w-6 h-6 bg-gradient rounded-full absolute top-2 left-2 flex items-center justify-center dark:text-white paragraph-3 font-semibold"
  >
    1
  </div>

  <a href="/user/1">
    <figure class="rounded-full w-20 h-20 bg-black-four relative">
      <div
        class="w-5 h-5 absolute bottom-0 right-1 rounded-full bg-green-500 flex items-center justify-center p-0.5"
      >
        <Check class="text-white" />
      </div>
    </figure>
  </a>

  <span class="paragraph-2 font-semibold text-white mt-2 mb-1">Mia Ayana</span>
  <span class="paragraph-2 font-semibold text-white">
    5.250
    <span class="font-light"> ETH </span>
  </span>
</div>
