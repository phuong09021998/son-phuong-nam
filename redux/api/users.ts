import axios from 'axios';

interface LoginUser {
  email: string;
  password: string;
}

export const loginUser = ({ email, password }: LoginUser) => {
  return axios.post('/api/user/login', { email, password });
};

export const getUser = () => {
  return axios.get('/api/user');
};

export const createUser = (payload: any) => {
  const formData = new FormData();
  for (const key in payload) {
    formData.append(key, payload[key]);
  }
  return axios.post('/api/user', formData);
};

export const loginByGoogle = (fields: any) => {
  return axios.post('/api/user/login/google', fields);
};

export const loginByFacebook = (fields: any) => {
  return axios.post('/api/user/login/facebook', fields);
};

export const logoutUser = () => {
  return axios.get('/api/user/logout');
};

export const updateUser = (fields: any) => {
  return axios.put('/api/user', fields);
};
