import { axiosInstance } from "@/libs/axios";
import { ExhibitControllerApiFactory } from "@/__generate__/post";

const factory = ExhibitControllerApiFactory(undefined, undefined, axiosInstance);

export const getPostsByMonthly = async (params: { year: number; month: number }) => {
  const { year, month } = params;
  const response = await factory.getPostsByMonthly(year, month);
  return response.data;
};

export const getExhibitsByDate = async (params: { year: number; month: number; day: number }) => {
  const { year, month, day } = params;
  const response = await factory.getExhibitsByDate(year, month, day);
  return response.data;
};
