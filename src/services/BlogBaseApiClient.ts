// import {Alert} from 'react-native';
import { BaseApiResponse, IBaseApiError } from '@/types/BaseApi';
import { extractErrorMessage } from '@/utils/extractErrorMessage';
import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

// Set in .env file
const API_BASE_URL = 'https://localhost:5001/api';

const BlogBaseApiClient = axios.create({
  baseURL: API_BASE_URL,
});

BlogBaseApiClient.interceptors.request.use(
  (request: InternalAxiosRequestConfig) => {
    if (request.url !== '/auth/login') {
      
    }

    return request;
  },
  error => Promise.reject(error),
);

BlogBaseApiClient.interceptors.response.use(
  <T>(response: AxiosResponse<BaseApiResponse<T>>) => response,
  (error: AxiosError<IBaseApiError>) => {
    if (error.response) {
      const status = error.response.status;
      const message = extractErrorMessage(error.response.data);

      switch (status) {
        case 401:
          console.error(message);
          
          break;
        case 400:
        case 502:
          // Alert.alert('Error Happened', message);
          
          break;
        default:
         
        console.log(error);
      }
    }

    return Promise.reject(error);
  },
);

export default BlogBaseApiClient;
