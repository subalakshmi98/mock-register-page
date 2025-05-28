import { browser } from '$app/environment';

type User = {
  email: string;
  password: string;
};

const USER_KEY = 'mock_users';
const SESSION_KEY = 'mock_session';

export function register(user: User): string | null {
  if (!browser) return 'Client only';

  const users = getUsers();
  if (users.find(u => u.email === user.email)) {
    return 'User already exists';
  }
  users.push(user);
  localStorage.setItem(USER_KEY, JSON.stringify(users));
  return null;
}

export function login(email: string, password: string): string | null {
  if (!browser) return 'Client only';

  const users = getUsers();
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) return 'Invalid credentials';
  localStorage.setItem(SESSION_KEY, email);
  return null;
}

export function logout() {
  if (browser) {
    localStorage.removeItem(SESSION_KEY);
  }
}

export function isLoggedIn(): boolean {
  return browser && localStorage.getItem(SESSION_KEY) !== null;
}

function getUsers(): User[] {
  if (!browser) return [];
  return JSON.parse(localStorage.getItem(USER_KEY) || '[]');
}
