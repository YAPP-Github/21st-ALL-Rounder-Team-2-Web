import axios, { AxiosRequestConfig } from "axios";
import { isBrowser } from "@/utils/browser";

export const axiosInstance = axios.create();

axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
  if (isBrowser()) {
    const accessToken = document.cookie
      .split("; ")
      .find((e) => e.startsWith("accessToken="))
      ?.split("=")[1];
    config.headers = { ...config.headers, Authorization: accessToken };
  } else {
  }
  return config;
});
