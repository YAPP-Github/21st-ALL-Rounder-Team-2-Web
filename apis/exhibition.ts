import { axiosInstance } from "@/libs/axios";
import { ExhibitControllerApiFactory } from "@/__generate__/post";

const factory = ExhibitControllerApiFactory(undefined, undefined, axiosInstance);

export const getAllPostPage = async ({
  size = 100,
  page = 0,
  direction,
  category,
}: {
  size?: number;
  page?: number;
  direction?: "ASC" | "DESC";
  category?: number;
}) => {
  try {
    const response = await factory.getAllPostPage(size, page, direction, category);
    return response.data;
  } catch (err) {
    return null;
  }
};

export const togglePinById = async (id: number, category?: boolean, pinned?: boolean) => {
  const response = await factory.updatePostPinType(id, category, pinned);
  return response.data;
};

export const getPostInfoWithCategory = async (id: number) => {
  const response = await factory.getPostInfoWithCategory(id);
  return response.data;
};

export const getIndexHtmlByLink = async (link: string | undefined): Promise<string> => {
  if (typeof link === "undefined") return Promise.reject(new Error("Invalid link"));

  const response = await axiosInstance({
    url: `${process.env.NEXT_PROXY_URL}/${link}`,
  });
  return response.data;
};
