"use client";

import React, { useCallback } from "react";
import { Divider } from "../../components/ui/Divider/Divider";
import { ExhibitionCardList } from "../../components/pages/Home/ExhibitionCardList/ExhibitionCardList";
import { Select } from "../../components/ui/Select/Select";
import { useSelectCategory } from "../../hooks/useSelectCategory";
import * as S from "../../styles/home.styles";

const fixedExhibition = {
  id: 123,
  imageUrl: "https://picsum.photos/358",
  title: "목조형가구학과 졸전",
  date: "2022. 11. 08",
};
const exhibitionList = [
  {
    id: 1,
    imageUrl: "https://picsum.photos/358",
    title: "전시회명어쩌구저쩌구",
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
];

export default function Home() {
  const categoryItems = [
    { text: "전체 기록", active: false },
    { text: "졸업전시", active: false },
  ];

  const fixedExhibition = {
    id: 123,
    imageUrl: "https://picsum.photos/358",
    title: "목조형가구학과 졸전",
    date: "2022. 11. 08",
  };

  const exhibitionList = [
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
  ];

  const { selectedIndex, selectCategoryByIndex: handleSelectCategory } =
    useSelectCategory();

  const {
    selectedIndex: selectedFilter,
    selectCategoryByIndex: handleSelectFilter,
  } = useSelectCategory();

  const handleRegisterCategory = useCallback(() => {}, []);

  return (
    <S.Wrapper>
      <S.CategoryListStyled
        activeIndex={selectedIndex}
        items={categoryItems}
        onSelected={handleSelectCategory}
        onRegister={handleRegisterCategory}
      />
      <Divider />
      <S.Filter>
        <Select activeIndex={selectedFilter} onSelected={handleSelectFilter} />
      </S.Filter>
      <S.Content>
        <ExhibitionCardList
          fixedExhibition={fixedExhibition}
          exhibitionList={exhibitionList}
        />
      </S.Content>
    </S.Wrapper>
  );
}
