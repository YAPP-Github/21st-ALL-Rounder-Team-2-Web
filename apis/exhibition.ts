import { Exhibition } from "@/interfaces/exhibition";
import { Artwork } from "@/interfaces/artwork";

import { axiosInstance } from "@/libs/axios";
import { ExhibitControllerApiFactory } from "@/__generate__/post";

const factory = ExhibitControllerApiFactory(
  undefined,
  undefined,
  axiosInstance
);

export const getPostPage = (id: number, pagable: { size: number; page: number }) => {
  const { size, page } = pagable
  return factory.getPostPage(id, size, page);
};

export const getAllPostPage = async (pagable: { size: number; page: number }) => {
  const { size, page } = pagable
  try {
    const response = await factory.getAllPostPage(size, page);
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

const ARTWORK_LIST = new Array(5).fill(0).map((_, i) => ({
  id: `${i}`,
  imageUrl: "https://picsum.photos/300",
  title: "나의 그대여",
  artist: "김호연",
  tags: ["감정예시1", "감정예시2", "감정예시3"],
}));

export const getArtworkInfo = (artworkId: string): Promise<Artwork> => {
  return Promise.resolve(ARTWORK_LIST[Number(artworkId)]);
};

export const getArtworkList = (exhibitionId: string): Promise<Artwork[]> => {
  return Promise.resolve(ARTWORK_LIST);
};

export const getDraftArtworkList = () => {
  return Promise.resolve(ARTWORK_LIST);
};
