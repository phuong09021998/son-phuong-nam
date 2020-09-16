import axios from 'axios';

export const getPostsByAdmin = () => {
  return axios.get('/api/posts?limit=10000&skip=0&sortBy=name&order=asc');
};

export const createPost = ({ title, content, type, upload }: any) => {
  const formData = new FormData();
  formData.append('title', title);
  formData.append('content', content);
  formData.append('type', type);
  formData.append('upload', upload);
  return axios.post('/api/post', formData);
};

export const deletePost = ({ id }: any) => {
  return axios.delete(`/api/post/${id}`);
};
