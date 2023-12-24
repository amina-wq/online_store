import axios from 'axios';

const API_BASE_URL = process.env.BACKEND_HOST ? process.env.BACKEND_HOST : '127.0.0.1';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export default api;
