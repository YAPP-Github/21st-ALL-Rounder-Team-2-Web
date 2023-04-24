import { axiosInstance } from "@/libs/axios";
import { CategoryControllerApiFactory } from "@/__generate__/category";

const factory = CategoryControllerApiFactory(undefined, undefined, axiosInstance);

export const getCategories = async () => {
  const response = await factory.getCategories();
  return response.data;
};
