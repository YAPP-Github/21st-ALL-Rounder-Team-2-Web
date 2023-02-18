"use client";

import React, { Suspense, useCallback, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ExhibitionCardList } from "@/components/pages/Home/ExhibitionCardList/ExhibitionCardList";
import { Select } from "@/components/ui/Select/Select";
import { useSelectCategory } from "@/hooks/useSelectCategory";
import { AppBar } from "@/components/pages/Home/AppBar/AppBar";
import { getAllPostPage, togglePinById } from "@/apis/exhibition";
import { getCategories } from "@/apis/category";
import { PostFloatingButton } from "@/components/pages/Home/PostFloatingButton/PostFloatingButton";
import { sendMessage } from "@/libs/message/message";
import { PostDetailInfo } from "@/__generate__/post";
import * as S from "./page.styles";
import ExhibitionListEmpty from "@/components/ui/Empty/ExhibitionListEmpty/ExhibitionListEmpty";

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

  const { selectedIndex, selectCategoryByIndex: handleSelectCategory } =
    useSelectCategory();

  const {
    selectedIndex: selectedFilter,
    selectCategoryByIndex: handleSelectFilter,
  } = useSelectCategory();

  const { data: allPostInfo } = useQuery({
    queryKey: ["getAllPostPage"],
    queryFn: () => getAllPostPage({ page: 0, size: 100 }),
  });

  const [pins, setPins] = useState<Record<string, boolean>>({});
  const exhibitionListWithPin = useMemo(() => {
    const posts = allPostInfo?.content ?? [];
    return posts.map((item) => {
      return {
        ...item,
        isPin: Boolean(pins[item.id]),
      };
    });
  }, [allPostInfo, pins]);
  const [fixedExhibition, ...restExhibition] = exhibitionListWithPin;
  const isEmpty = true

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
        items={categories ?? []}
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
            exhibitionList={restExhibition}
            onTogglePin={handleTogglePin}
          />
        )}
      </S.Content>
      <PostFloatingButton onClick={handleEditButton} />
    </S.Wrapper>
  );
}
