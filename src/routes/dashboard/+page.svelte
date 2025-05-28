<script lang="ts">
  import { isLoggedIn, logout } from '$lib/auth';
  import { goto } from '$app/navigation';

  if (!isLoggedIn()) {
    goto('/login');
  }

  function handleLogout() {
    logout();
    goto('/login');
  }
</script>

<h1>Dashboard</h1>
<p>Welcome! You're logged in.</p>
<button on:click={handleLogout}>Logout</button>
