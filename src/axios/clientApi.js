import { generateRSAkey } from '@/lib';
import axios from 'axios';
import { clientId } from './getClientId';

export const clientApi = axios.create({
  baseURL: 'https://service.s-tech.info/',
  timeout: 10000
});

clientApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    const time = Date.now();
    config.headers['Authorization'] = `Bearer ${token}`;
    config.headers['info'] = JSON.stringify({
      client_id: `${clientId}`,
      time,
      signature: generateRSAkey(clientId + time)
    });
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

clientApi.interceptors.response.use(
  async function (res) {
    if (res.data.mess === 'token-expired') {
      localStorage.removeItem('userInfo');
      localStorage.removeItem('token');
    }
    if (res && res.data) return res.data;
  },
  async function (error) {
    console.log(error);
    return { data: {}, status: false, mess: 'Đường truyền không ổn định, vui lòng thử lại sau!' };
  }
);
