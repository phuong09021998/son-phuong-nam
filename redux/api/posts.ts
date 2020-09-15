import axios from 'axios';

export const getPostsByAdmin = () => {
  return axios.get('/api/posts?limit=10000&skip=0&sortBy=name&order=asc');
};
