const API_URL = import.meta.env.VITE_API_URL;

export const fetchData = async () => {
  const response = await fetch(`${API_URL}/api/endpoint`);
  const data = await response.json();
  return data;
};