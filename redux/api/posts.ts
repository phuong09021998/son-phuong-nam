import axios from 'axios';
import baseUrl from 'config/basedUrl'

export const getPostsByAdmin = () => {
  return axios.get(`${baseUrl}/api/posts?limit=10000&skip=0&sortBy=type&order=asc`);
};

export const createPost = ({ title, content, type, image }: any) => {
  const formData = new FormData();
  formData.append('title', title);
  formData.append('content', content);
  formData.append('type', type);
  formData.append('image', image);
  return axios.post(`${baseUrl}/api/post`, formData);
};

export const updatePublish = ({ publish, id }: any) => {
  const formData = new FormData();
  formData.append('publish', publish);
  return axios.put(`${baseUrl}/api/post/${id}`, formData);
};

export const deletePost = ({ id }: any) => {
  return axios.delete(`${baseUrl}/api/post/${id}`);
};

export const updatePost = (payload: any) => {
  const formData = new FormData();
  for (const key in payload) {
    formData.append(key, payload[key]);
  }

  return axios.put(`${baseUrl}/api/post/${payload.id}`, formData);
};
