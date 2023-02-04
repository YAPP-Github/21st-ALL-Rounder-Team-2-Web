import { axiosInstance } from "@/libs/axios";
import { ExhibitControllerApiFactory } from "@/__generate__/post";

const factory = ExhibitControllerApiFactory(undefined, undefined, axiosInstance);

export const getPostByMonthly = async (params: { year: number; month: number }) => {
  const { year, month } = params;
  return (await factory.getPostByMonthly(year, month)).data;
};
