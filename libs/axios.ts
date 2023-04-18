import axios from "axios";
import { isBrowser } from "@/utils/browser";

export const axiosInstance = axios.create({
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  if (isBrowser()) {
    const accessToken = document.cookie
      .split("; ")
      .find((e) => e.startsWith("accessToken="))
      ?.split("=")[1];
    config.headers.setAuthorization(`Bearer ${accessToken}`);
  }
  return config;
});
