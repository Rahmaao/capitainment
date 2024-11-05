// src/services/apiClient.ts
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://nneoma2-001-site1.ftempurl.com',
  headers: {
    'Content-Type': 'application/json',
  },
  auth: {
    username: '11197036', // replace with the actual username
    password: '60-dayfreetrial', // replace with the actual password
  },
});

export default apiClient;
