import axios from 'axios';

interface User {
  email: string;
  name: string;
  role: number;
  password: string;
  id?: string;
}

export const getUsers = () => {
  return axios.get('/api/users');
};

export const createUserByAdmin = ({ email, name, role, password }: User) => {
  const formData = new FormData();
  formData.append('email', email);
  formData.append('name', name);
  formData.append('password', password);
  formData.append('role', String(role));
  return axios.post('/api/admin/user', formData);
};

interface SelectUser {
  id: string;
}

export const deleteUser = ({ id }: SelectUser) => {
  return axios.delete(`/api/user/${id}`);
};

export const editUser = ({ id, name, email, password, role }: User) => {
  const formData = new FormData();
  formData.append('email', email);
  formData.append('name', name);
  formData.append('password', password);
  formData.append('role', String(role));
  return axios.put(`/api/user/${id}`, formData);
};

export const getSiteCarousel = () => {
  return axios.get('/api/site/carousel')
}

export const getSiteInfo = () => {
  return axios.get('/api/site/info')
}

export const updateSiteCarousel = ({ key, data }: any) => {
  const formData = new FormData();
  formData.append('key', key)
  formData.append('image', data)
  return axios.put('/api/site/carousel', formData)
}

export const updateSiteInfo = ({ infos }: any) => {
  return axios.put('/api/site/info', infos)
}