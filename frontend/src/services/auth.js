import api from './api';

const authenticate = async (username, password) => {
  const response = await api.post('/api/token/', { username, password });
  return response.data;
};

const refreshToken = async (refreshToken) => {
  const response = await api.post('/api/token/refresh/', { refresh: refreshToken });
  return response.data;
};

const verifyToken = async (token) => {
  const response = await api.post('/api/token/verify/', { token });
  return response.data;
};

export { authenticate, refreshToken, verifyToken };