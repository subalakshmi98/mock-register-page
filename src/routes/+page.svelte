<script lang="ts">
  import { isLoggedIn } from '$lib/auth';
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';

onMount(() => {
  if (!isLoggedIn()) {
    goto('/login');
  }
});

</script>
