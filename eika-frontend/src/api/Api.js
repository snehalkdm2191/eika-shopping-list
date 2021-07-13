import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

const Api = axios.create({
  baseURL: BASE_URL
});

Api.interceptors.response.use(
  r => r,
  err => {
    return Promise.reject(err);
  }
);

// Exporting Api into the global namespace for introspecting
window.Api = Api;

export default Api;
