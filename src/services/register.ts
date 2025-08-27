import axios from 'axios';
import { api } from './api';

export const registerUser = async (email: string, password: string) => {
  try {
    const res = await api.post(`/register`, {
      email,
      password,
    });
    console.log('Успешно регистр:', res.data);
    return res.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error('Ошибка регистрации:', error.response?.data);
    } else {
      console.error('Неизвестная ошибка:', error);
    }
    throw error;
  }
};
