import { env } from '@/config/env';
import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: env.BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});