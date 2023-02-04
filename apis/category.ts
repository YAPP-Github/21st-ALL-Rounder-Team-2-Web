import { axiosInstance } from "@/libs/axios";
import { CategoryControllerApiFactory } from "@/__generate__/category";

const factory = CategoryControllerApiFactory(undefined, undefined, axiosInstance);

export const getCategories = () => {
  return factory.getCategories();
};

export const getMockCategories = () => {
  return Promise.resolve([
    { text: "전체 기록", active: false },
    { text: "졸업전시", active: false },
    { text: "졸업전시", active: false },
    { text: "졸업전시", active: false },
    { text: "졸업전시", active: false },
    { text: "졸업전시", active: false },
    { text: "졸업전시", active: false },
    { text: "졸업전시", active: false },
  ]);
};
