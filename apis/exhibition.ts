import { Exhibition } from "@/interfaces/exhibition";
import { axiosInstance } from "@/libs/axios";
import { ExhibitControllerApiFactory } from "@/__generate__/post";

const factory = ExhibitControllerApiFactory(undefined, undefined, axiosInstance);

export const getPostPage = (id: number, pagable: { size: number; page: number }) => {
  const { size, page } = pagable;
  return factory.getPostPage(id, size, page);
};

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

export const getExhibitionList = (): Promise<Exhibition[]> => {
  return Promise.resolve([
    {
      id: 123,
      imageUrl: "https://picsum.photos/358",
      title: "목조형가구학과 졸전",
      date: "2022. 11. 08",
    },
    {
      id: 1,
      imageUrl: "https://picsum.photos/358",
      title: "전시회명어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구",
      date: "2022. 11. 08",
    },
    {
      id: 2,
      imageUrl: "https://picsum.photos/358",
      title: "전시회명어쩌구저쩌구",
      date: "2022. 11. 08",
    },
    {
      id: 3,
      imageUrl: "https://picsum.photos/358",
      title: "전시회명어쩌구저쩌구",
      date: "2022. 11. 08",
    },
    {
      id: 4,
      imageUrl: "https://picsum.photos/358",
      title: "전시회명어쩌구저쩌구",
      date: "2022. 11. 08",
    },
    {
      id: 5,
      imageUrl: "https://picsum.photos/358",
      title: "전시회명어쩌구저쩌구",
      date: "2022. 11. 08",
    },
    {
      id: 6,
      imageUrl: "https://picsum.photos/358",
      title: "전시회명어쩌구저쩌구",
      date: "2022. 11. 08",
    },
  ]);
};

export const togglePinById = (id: string) => {
  return Promise.resolve(true);
};

export const getPostInfoWithCategory = async (id: number) => {
  const response = await factory.getPostInfoWithCategory(id);
  return response.data;
};
