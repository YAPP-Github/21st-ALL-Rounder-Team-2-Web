"use client";

import React, { Suspense, useCallback, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ExhibitionCardList } from "@/components/pages/Home/ExhibitionCardList/ExhibitionCardList";
import { Select } from "@/components/ui/Select/Select";
import { useSelectCategory } from "@/hooks/useSelectCategory";
import { AppBar } from "@/components/pages/Home/AppBar/AppBar";
import { getAllPostPage } from "@/apis/exhibition";
import { getCategories } from "@/apis/category";
import { PostFloatingButton } from "@/components/pages/Home/PostFloatingButton/PostFloatingButton";
import { sendMessage } from "@/libs/message/message";
import { PostDetailInfo } from "@/__generate__/post";
import ExhibitionListEmpty from "@/components/ui/Empty/ExhibitionListEmpty/ExhibitionListEmpty";
import * as S from "./page.styles";
import { useTogglePinById } from "@/hooks/exhibition";

export default function PageWrapper() {
  return (
    <Suspense fallback={null}>
      <Page />
    </Suspense>
  );
}

function Page() {
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  const { selectedIndex, selectCategoryByIndex: handleSelectCategory } = useSelectCategory();

  const { selectedIndex: selectedFilter, selectCategoryByIndex: handleSelectFilter } = useSelectCategory();

  const { data: allPostInfo = [] } = useQuery({
    queryKey: ["getAllPostPage", { direction: selectedFilter, category: selectedIndex }],
    queryFn: () => getAllPostPage({ direction: selectedFilter ? "ASC" : "DESC", category: selectedIndex || undefined }),
    select: (data) => data?.content ?? [],
  });

  const fixedExhibition = useMemo(() => {
    return allPostInfo.find((item) => item.pinned);
  }, [allPostInfo]);

  const isEmpty = allPostInfo.length === 0;

  const handleRegisterCategory = useCallback(() => {}, []);

  const { mutate } = useTogglePinById();
  const handleTogglePin = async (e: React.MouseEvent, item: PostDetailInfo) => {
    mutate({ id: item.id, category: Boolean(selectedIndex), pinned: !(item.id === fixedExhibition?.id) });
  };

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
        onRegister={handleRegisterCategory}
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
          />
        )}
      </S.Content>
      <PostFloatingButton onClick={handleEditButton} />
    </S.Wrapper>
  );
}
