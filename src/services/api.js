import axios from 'axios';

const api = () => {
  const KEY = '12bd2f54';
  const axiosInstance = axios.create({
    baseURL: `https://api.hgbrasil.com/finance?format=json-cors&key=${KEY}`,
    withCredentials: false,
  });

  return axiosInstance;
};

export default api;
