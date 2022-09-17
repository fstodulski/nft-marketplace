<script lang="ts">
  import ItemDetails from './components/ItemDetails/ItemDetails.svelte';
  import ItemOffers from './components/ItemOffers/ItemOffers.svelte';

  enum Tab {
    Details = 'Details',
    Offers = 'Offers',
    History = 'History'
  }

  let selectedTab = Tab.Details;

  const selectTab = (tab: Tab): void => {
    selectedTab = tab;
  };
</script>

<div class="flex flex-col w-full">
  <div class="flex w-full text-white font-semibold gap-6 paragraph-1 border-b border-black-one">
    <span
      class:active={selectedTab === Tab.Details}
      class="tab"
      on:click={() => selectTab(Tab.Details)}>Details</span
    >
    <span
      class:active={selectedTab === Tab.Offers}
      class="tab"
      on:click={() => selectTab(Tab.Offers)}>Offers</span
    >
    <span
      class:active={selectedTab === Tab.History}
      class="tab"
      on:click={() => selectTab(Tab.History)}>History</span
    >
  </div>

  {#if selectedTab === Tab.Details}
    <ItemDetails />
  {/if}

  {#if selectedTab === Tab.Offers}
    <ItemOffers />
  {/if}

  {#if selectedTab === Tab.History}{/if}
</div>

<style lang="scss">
  .tab {
    @apply border-b border-dark cursor-pointer pb-2;

    &.active {
      @apply border-white;
    }
  }
</style>
