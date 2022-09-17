<script lang="ts">
  import NewsletterForm from '$containers/NewsletterForm/NewsletterForm.svelte';
</script>

<footer class="grid w-full grid-cols-1 lg:grid-cols-2 py-8 gap-6 wrapper">
  <div class="flex flex-col gap-6">
    <h3 class="heading-2 text-white">Logo</h3>

    <span class="dark:text-white paragraph-1 font-semibold">Get the latest updates!</span>
    <NewsletterForm />
  </div>

  <nav class="grid grid-cols-2">
    <div class="flex flex-col">
      <span class="heading-3 dark:text-white">CryptoKet</span>
    </div>

    <div class="flex flex-col">
      <span class="heading-3 dark:text-white">Support</span>
    </div>
  </nav>
</footer>
