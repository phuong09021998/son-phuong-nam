import axios from 'axios';

interface LoginUser {
  email: string;
  password: string;
}

export const loginUser = ({ email, password }: LoginUser) => {
  return axios.post('/api/user/login', { email, password });
};