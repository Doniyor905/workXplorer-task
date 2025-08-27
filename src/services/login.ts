import axios from 'axios';
import { api } from './api';

export const loginUser = async (email: string, password: string) => {
  try {
    const res = await api.post(`/login`, {
      email,
      password,
    });
    return { token: res.data, userId: 2 };
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error('Ошибка логин:', error.response?.data);
    } else {
      console.error('Неизвестная ошибка:', error);
    }
    throw error;
  }
};
