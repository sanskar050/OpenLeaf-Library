const API_URL = import.meta.env.VITE_API_URL;

axios.post(`${API_URL}/register`, {
  username: 'example',
  password: 'password123',
});