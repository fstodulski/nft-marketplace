<script lang="ts">
  import { onMount } from 'svelte';
  import Header from '$components/Header/Header.svelte';
  import Footer from '$containers/Footer/Footer.svelte';
  import '../app.scss';

  onMount(() => {
    document.getElementsByTagName('body')[0].classList.add('dark');
  });
</script>

<Header />
<slot />

<Footer />
