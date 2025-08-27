import { api } from './api';

export const getUser = async (id: string) => {
  try {
    const res = await api.get(`/users/${id}`);
    return res.data.data;
  } catch (error) {
    console.error(error);
  }
};
