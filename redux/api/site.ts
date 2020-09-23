import axios from 'axios';

export const getCarousel = () => {
  return axios.get('/api/site/carousel');
};

export const getSiteInfo = () => {
  return axios.get('/api/site/info');
};
