import axios from 'axios';

interface User {
  email: string;
  name: string;
  role: number;
  password: string;
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
