import axios from 'axios';

const usersApi = axios.create({
  baseURL: 'http://localhost:3001'
});

export const getUsers = async () => {
  const res = await usersApi.get('/users');
  return res.data;
};
