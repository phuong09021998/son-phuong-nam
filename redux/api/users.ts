import axios from 'axios';
import baseUrl from 'config/basedUrl'

interface LoginUser {
  email: string;
  password: string;
}

export const loginUser = ({ email, password }: LoginUser) => {
  return axios.post(`${baseUrl}/api/user/login`, { email, password });
};

export const getUser = () => {
  return axios.get(`${baseUrl}/api/user`);
};

export const createUser = (payload: any) => {
  const formData = new FormData();
  for (const key in payload) {
    formData.append(key, payload[key]);
  }
  return axios.post(`${baseUrl}/api/user`, formData);
};

export const loginByGoogle = (fields: any) => {
  return axios.post(`${baseUrl}/api/user/login/google`, fields);
};

export const loginByFacebook = (fields: any) => {
  return axios.post(`${baseUrl}/api/user/login/facebook`, fields);
};

export const logoutUser = () => {
  return axios.get(`${baseUrl}/api/user/logout`);
};

export const updateUser = (fields: any) => {
  return axios.put(`${baseUrl}/api/user`, fields);
};
