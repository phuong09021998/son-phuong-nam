import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api',
  /* other custom settings */
});

export default axiosInstance;
