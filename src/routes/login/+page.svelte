<script lang="ts">
  import { login } from '$lib/auth';
  import { goto } from '$app/navigation';

  let email = '';
  let password = '';
  let error: string | null = null;

  function handleLogin() {
    error = login(email, password);
    if (!error) goto('/dashboard');
  }
</script>

<h1>Login</h1>
<form on:submit|preventDefault={handleLogin}>
  <input bind:value={email} placeholder="Email" required />
  <input bind:value={password} type="password" placeholder="Password" required />
  <button>Login</button>
  {#if error}<p>{error}</p>{/if}
</form>
