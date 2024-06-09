// src/services/authService.ts
const API_BASE_URL = 'http://localhost:8000/api/user'; 

export const login = async (email: string, password: string) => {
  const response = await fetch(`${API_BASE_URL}/login?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    return false;
  }
  const data = await response.json();

  localStorage.setItem('loginStatus', 'true');
  window.location.href = '/noticias';

  return data.success;
};

export const register = async (email: string, password: string) => {
  const response = await fetch(`${API_BASE_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error('Registration failed');
  }

  return response.json();
};

export const logout = () => {
  localStorage.removeItem('loginStatus');
  window.location.href = '/';
};
