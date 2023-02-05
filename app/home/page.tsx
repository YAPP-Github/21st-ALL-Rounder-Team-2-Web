"use client";

import React, { Suspense, useCallback, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ExhibitionCardList } from "@/components/pages/Home/ExhibitionCardList/ExhibitionCardList";
import { Select } from "@/components/ui/Select/Select";
import { useSelectCategory } from "@/hooks/useSelectCategory";
import { AppBar } from "@/components/pages/Home/AppBar/AppBar";
import { getAllPostPage, togglePinById } from "@/apis/exhibition";
import { getMockCategories } from "@/apis/category";
import { PostFloatingButton } from "@/components/pages/Home/PostFloatingButton/PostFloatingButton";
import { sendMessage } from "@/libs/message/message";
import { PostDetailInfo } from "@/__generate__/post";
import * as S from "./page.styles";

export default function PageWrapper() {
  return (
    <Suspense fallback={null}>
      <Page />
    </Suspense>
  );
}

function Page() {
  const categoriesQuery = useQuery({
    queryKey: ["categories"],
    queryFn: getMockCategories,
  });

  const { selectedIndex, selectCategoryByIndex: handleSelectCategory } =
    useSelectCategory();

  const {
    selectedIndex: selectedFilter,
    selectCategoryByIndex: handleSelectFilter,
  } = useSelectCategory();

  const { data: allPostInfo } = useQuery({
    queryKey: ["getAllPostPage"],
    queryFn: () => getAllPostPage({ page: 0, size: 100 }),
    suspense: true,
  });

  const [pins, setPins] = useState<Record<string, boolean>>({});
  const exhibitionListWithPin = useMemo(() => {
    const posts = allPostInfo?.content ?? []
    return posts.map((item) => {
      return {
        ...item,
        isPin: Boolean(pins[item.id]),
      };
    });
  }, [allPostInfo, pins]);
  const [fixedExhibition, ...restExhibition] = exhibitionListWithPin;

  const handleRegisterCategory = useCallback(() => {}, []);

  const handleTogglePin = useCallback(
    async (e: React.MouseEvent, item: PostDetailInfo) => {
      const id = String(item.id);
      setPins((pins) => {
        return {
          ...pins,
          [id]: !Boolean(pins[id]),
        };
      });
      await togglePinById(id);
    },
    []
  );

  const handleEditButton = useCallback((e: React.MouseEvent) => {
    sendMessage(["NAVIGATE_TO_EDIT"]);
  }, []);

  return (
    <S.Wrapper>
      <AppBar />
      <S.CategoryListStyled
        activeIndex={selectedIndex}
        items={categoriesQuery?.data ?? []}
        onSelected={handleSelectCategory}
        onRegister={handleRegisterCategory}
      />
      <S.Filter>
        <Select activeIndex={selectedFilter} onSelected={handleSelectFilter} />
      </S.Filter>
      <S.Content>
        <ExhibitionCardList
          fixedExhibition={fixedExhibition}
          exhibitionList={restExhibition}
          onTogglePin={handleTogglePin}
        />
      </S.Content>
      <PostFloatingButton onClick={handleEditButton} />
    </S.Wrapper>
  );
}
