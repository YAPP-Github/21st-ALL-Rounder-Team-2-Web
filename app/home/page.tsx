"use client";

import React, { Suspense, useCallback, useMemo } from "react";
import { ExhibitionCardList } from "@/components/pages/Home/ExhibitionCardList/ExhibitionCardList";
import { Select } from "@/components/ui/Select/Select";
import { useSelectCategory } from "@/hooks/useSelectCategory";
import { AppBar } from "@/components/pages/Home/AppBar/AppBar";
import { PostFloatingButton } from "@/components/pages/Home/PostFloatingButton/PostFloatingButton";
import { sendMessage } from "@/libs/message/message";
import { PostDetailInfo } from "@/__generate__/post";
import ExhibitionListEmpty from "@/components/ui/Empty/ExhibitionListEmpty/ExhibitionListEmpty";
import * as S from "./page.styles";
import { useGetExhibitionList, useTogglePinById } from "@/hooks/exhibition";
import { useGetCategoryList } from "@/hooks/category";

export default function PageWrapper() {
  return (
    <Suspense fallback={null}>
      <Page />
    </Suspense>
  );
}

function Page() {
  const { selectedIndex, selectCategoryByIndex: handleSelectCategory } = useSelectCategory();
  const { selectedIndex: selectedFilter, selectCategoryByIndex: handleSelectFilter } = useSelectCategory();
  const { data: categories } = useGetCategoryList();
  const { data: allPostInfo = [] } = useGetExhibitionList(selectedFilter ? "ASC" : "DESC", selectedIndex || undefined);
  const { mutate } = useTogglePinById();

  const fixedExhibition = useMemo(() => {
    return allPostInfo.find((item) => item.pinned);
  }, [allPostInfo]);

  const isEmpty = allPostInfo.length === 0;

  const handleTogglePin = async (e: React.MouseEvent, item: PostDetailInfo) => {
    mutate({ id: item.id, category: Boolean(selectedIndex), pinned: !(item.id === fixedExhibition?.id) });
  };

  const handleClickItem = useCallback(async (e: React.MouseEvent, item: PostDetailInfo) => {
    e.preventDefault();
    sendMessage(["NAVIGATE_TO_EXHIBITION_DETAIL", item]);
  }, []);

  const handleEditButton = useCallback((e: React.MouseEvent) => {
    sendMessage(["NAVIGATE_TO_EDIT"]);
  }, []);

  return (
    <S.Wrapper>
      <AppBar />
      <S.CategoryListStyled
        activeIndex={selectedIndex}
        items={categories ? [{ id: 0, name: "전체 기록" }, ...categories] : []}
        onSelected={handleSelectCategory}
      />
      <S.Filter>
        <Select activeIndex={selectedFilter} onSelected={handleSelectFilter} />
      </S.Filter>

      <S.Content>
        {isEmpty ? (
          <ExhibitionListEmpty onSubmit={handleEditButton} />
        ) : (
          <ExhibitionCardList
            fixedExhibition={fixedExhibition}
            exhibitionList={allPostInfo}
            onTogglePin={handleTogglePin}
            onClickItem={handleClickItem}
          />
        )}
      </S.Content>
      <PostFloatingButton onClick={handleEditButton} />
    </S.Wrapper>
  );
}
