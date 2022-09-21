<script lang="ts">
  import { Confetti } from 'svelte-confetti';

  import { ConfettiWrapperStore } from './ConfettiWrapper.store';

  $: if ($ConfettiWrapperStore.isOpen === true) {
    setTimeout(() => {
      ConfettiWrapperStore.set({
        isOpen: false
      });
    }, 8000);
  }
</script>

{#if $ConfettiWrapperStore.isOpen}
  <div class="fixed -top-10 left-0 h-screen w-screen flex justify-center overflow-hidden">
    <Confetti
      x={[-5, 5]}
      y={[0, 0.1]}
      delay={[500, 2000]}
      infinite
      duration="5000"
      amount="6000"
      fallDistance="100vh"
    />
  </div>
{/if}
