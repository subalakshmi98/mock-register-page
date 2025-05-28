<script lang="ts">
  import { register } from '$lib/auth';
  import { goto } from '$app/navigation';

  let email = '';
  let password = '';
  let error: string | null = null;

  function handleRegister() {
    error = register({ email, password });
    if (!error) goto('/login');
  }
</script>

<h1>Register</h1>
<form on:submit|preventDefault={handleRegister}>
  <input bind:value={email} placeholder="Email" required />
  <input bind:value={password} type="password" placeholder="Password" required />
  <button>Register</button>
  {#if error}<p>{error}</p>{/if}
</form>
