import axios from 'axios';

export const getProductsByAdmin = () => {
  return axios.get('/api/products?limit=10000&skip=0&sortBy=name&order=asc');
};

export const createProduct = (payload: any) => {
  const formData = new FormData();
  for (const key in payload) {
    formData.append(key, payload[key]);
  }
  return axios.post('/api/product', formData);
};

export const updatePublishProduct = ({ publish, id }: any) => {
  const formData = new FormData();
  formData.append('publish', publish);
  return axios.put(`/api/product/${id}`, formData);
};

export const updateAvailableProduct = ({ available, id }: any) => {
  console.log('run');
  const formData = new FormData();
  formData.append('available', available);
  return axios.put(`/api/product/${id}`, formData);
};

export const deleteProduct = ({ id }: any) => {
  return axios.delete(`/api/product/${id}`);
};

export const updateProduct = (payload: any) => {
  const formData = new FormData();
  for (const key in payload) {
    formData.append(key, payload[key]);
  }

  return axios.put(`/api/product/${payload.id}`, formData);
};
