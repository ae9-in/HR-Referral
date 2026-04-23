import axios from 'axios';

const api = axios.create({
  // Use explicitly provided API URL or fallback to localhost port 4000
  baseURL: process.env.NEXT_PUBLIC_API_URL ? `${process.env.NEXT_PUBLIC_API_URL}/api` : 'http://127.0.0.1:4000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

/* Request Interceptor for Auth Token */
api.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('refhire_token');
    if (token && token !== 'undefined' && token !== 'null') {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

/* Response Interceptor for Error Handling */
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401 && typeof window !== 'undefined') {
      localStorage.removeItem('refhire_token');
      localStorage.removeItem('refhire_user');
      // window.location.href = '/auth/login';
    }
    return Promise.reject(error);
  }
);

export default api;
