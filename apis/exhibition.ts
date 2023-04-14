import { axiosInstance } from "@/libs/axios";
import { ExhibitControllerApiFactory } from "@/__generate__/post";
import { BASE_PATH } from "@/__generate__/post/base";

const factory = ExhibitControllerApiFactory(undefined, undefined, axiosInstance);

export const getAllPostPage = async ({
  size = 10,
  page = 0,
  direction,
  category,
}: {
  size?: number;
  page?: number;
  direction?: "ASC" | "DESC";
  category?: number;
}) => {
  const response = await axiosInstance({
    url: `${BASE_PATH}/post/home`,
    params: {
      size,
      page,
      direction,
      category,
    },
  });
  return response.data;
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
    baseURL: `${process.env.NEXT_PUBLIC_PROXY_URL}`,
    headers: { "X-Requested-With": "XMLHttpRequest" },
    url: `/${link}`,
  });
  return response.data;
};
