import { Exhibition } from "../interfaces/exhibition";

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

export const getExhibitionWorkList = () => {
  return Promise.resolve(
    new Array(10).fill(0).map((_, i) => ({
      id: i,
      imageUrl: "https://picsum.photos/300",
      title: "나의 그대여",
      artist: "김호연",
    }))
  );
};

export const getExhibitionWorkDraftList = () => {
  return Promise.resolve(
    new Array(10).fill(0).map((_, i) => ({
      id: i,
      imageUrl: "https://picsum.photos/300",
      title: "전시 기록중",
      artist: "김호연",
    }))
  );
};
