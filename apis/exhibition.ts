import { axiosInstance } from "@/libs/axios";
import { ExhibitControllerApiFactory } from "@/__generate__/post";

const factory = ExhibitControllerApiFactory(undefined, undefined, axiosInstance);

export const getAllPostPage = async (params: {
  size?: number;
  page?: number;
  direction?: "ASC" | "DESC";
  category?: number;
}) => {
  const { size = 10, page = 0, direction, category } = params;
  const response = await factory.getAllPostPage(size, page, direction, category);
  return response.data;
};

export const togglePinById = (id: number, category?: boolean, pinned?: boolean) => {
  return factory.updatePostPinType(id, category, pinned);
};

export const getPostInfoWithCategory = async (id: number) => {
  const response = await factory.getPostInfoWithCategory(id);
  return response.data;
};

export const getIndexHtmlByLink = async (link: string) => {
  const response = await axiosInstance<string>({
    url: link,
  });
  return response.data;
};
