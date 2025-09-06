import axios from 'axios';

// Axios Interceptor Instance
export const AxiosInstance = axios.create({
  baseURL: 'http://localhost:4000',
});

AxiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    // Handle request errors here
    return Promise.reject(error);
  },
);

// Axios Interceptor: Response Method
AxiosInstance.interceptors.response.use(
  (response) => {
    // Can be modified response
    return response;
  },
  (error) => {
    // Handle response errors here
    return Promise.reject(error);
  },
);
