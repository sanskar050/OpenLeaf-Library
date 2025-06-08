// client/src/api.js

const API_URL = import.meta.env.VITE_API_URL;

export async function fetchData() {
  const response = await fetch(`${API_URL}/api/data`);
  return response.json();
}