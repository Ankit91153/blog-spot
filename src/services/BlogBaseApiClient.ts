// import {Alert} from 'react-native';
import { useBoundStore } from "@/store/store";
import { BaseApiResponse, IBaseApiError } from "@/types/BaseApi";
import { isAuthWhitelisted } from "@/utils/authHeader";
import { extractErrorMessage } from "@/utils/extractErrorMessage";
import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { use } from "react";
import { toast } from "react-toastify";

// Set in .env file
const API_BASE_URL = "http://localhost:5001/api";

const BlogBaseApiClient = axios.create({
  baseURL: API_BASE_URL,
});

BlogBaseApiClient.interceptors.request.use(
  (request: InternalAxiosRequestConfig) => {
    const accessToken = useBoundStore.getState().accessToken;
    if (request.url && !isAuthWhitelisted(request.url)) {
      if (accessToken) {
        request.headers.Authorization = `Bearer ${accessToken}`;
      }
    }
    return request;
  },
  (error) => Promise.reject(error)
);

BlogBaseApiClient.interceptors.response.use(
  <T>(response: AxiosResponse<BaseApiResponse<T>>) => response,
  (error: AxiosError<IBaseApiError>) => {
    if (error.response) {
      const status = error.response.status;
      const message = extractErrorMessage(error.response.data);

      toast(message);
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
  }
);

export default BlogBaseApiClient;
