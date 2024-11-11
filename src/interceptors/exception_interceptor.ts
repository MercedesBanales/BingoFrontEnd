import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_URL,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 400:
          break;

        case 401:
          window.location.href = '/login';
          break;

        case 403:
          window.location.href = '/login';
          break;

        default:
          break;
      }
    } else {
      window.location.href = '/';
    }
    return Promise.reject(error);
  }
);

export default api;
