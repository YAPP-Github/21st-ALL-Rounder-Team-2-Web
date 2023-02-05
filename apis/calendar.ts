import { axiosInstance } from "@/libs/axios";
import { ExhibitControllerApiFactory } from "@/__generate__/post";

const factory = ExhibitControllerApiFactory(undefined, undefined, axiosInstance);

export const getPostsByMonthly = async (params: { year: number; month: number }) => {
  const { year, month } = params;
  return (await factory.getPostsByMonthly(year, month)).data;
};
