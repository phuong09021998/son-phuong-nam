import axios from 'axios';
import baseUrl from 'config/basedUrl'

export const getCarousel = () => {
  return axios.get(`${baseUrl}/api/site/carousel`);
};

export const getSiteInfo = () => {
  return axios.get(`${baseUrl}/api/site/info`);
};
