<script lang="ts">
  import CreatorDetails from './components/CreatorDetails/CreatorDetails.svelte';
  import ItemMetadata from './components/ItemMetadata/ItemMetadata.svelte';
  import ItemTabs from './components/ItemTabs/ItemTabs.svelte';
</script>

<main class="grid grid-cols-2 wrapper border-b border-black-one gap-32">
  <figure class="w-full aspect-square overflow-hidden rounded-xl shadow-2xl my-14">
    <img
      src="https://images.unsplash.com/photo-1662759508448-b5a1df24d414?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      alt=""
      class="object-cover h-full w-full"
    />
  </figure>

  <article class="flex flex-col gap-6 pl-10 border-l border-black-one py-14">
    <ItemMetadata />

    <CreatorDetails />
    <ItemTabs />
  </article>
</main>
