import { Exhibition } from "@/interfaces/exhibition";
import { axiosInstance } from "@/libs/axios";
import { ExhibitControllerApiFactory, Pageable } from "@/__generate__/post";

const factory = ExhibitControllerApiFactory(undefined, "", axiosInstance);

export const getPostPage = (id: number, pageable: Pageable) => {
  return factory.getPostPage(pageable, id);
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

export const getPostInfoWithCategory = (id: number) =>
  factory.getPostInfoWithCategory(id);
