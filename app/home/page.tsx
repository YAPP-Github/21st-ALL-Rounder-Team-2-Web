"use client";

import React, { Suspense, useCallback, useMemo } from "react";
import { ExhibitionCardList } from "@/components/pages/Home/ExhibitionCardList/ExhibitionCardList";
import { SortDirectionSelect } from "@/components/pages/Home/SortDirectionSelect/SortDirectionSelect";
import { useSelect } from "@/hooks/useSelect";
import { AppBar } from "@/components/pages/Home/AppBar/AppBar";
import { PostFloatingButton } from "@/components/pages/Home/PostFloatingButton/PostFloatingButton";
import { sendMessage } from "@/libs/message/message";
import { PostDetailInfo } from "@/__generate__/post";
import ExhibitionListEmpty from "@/components/ui/Empty/ExhibitionListEmpty/ExhibitionListEmpty";
import { InfiniteScroll } from "@/components/ui/InfiniteScroll/InfiniteScroll";
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
  const [categoryId, handleSelectCategoryId] = useSelect(0);
  const [sortBy, handleSelectSortBy] = useSelect<"ASC" | "DESC">("DESC");
  const { data: categories } = useGetCategoryList();
  const { allPostInfo, fetchNextPage } = useGetExhibitionList(sortBy, categoryId || undefined);
  const { mutate } = useTogglePinById(sortBy);

  const fixedExhibition = useMemo(() => {
    return allPostInfo.find((item) => item.pinned);
  }, [allPostInfo]);

  const isEmpty = allPostInfo.length === 0;

  const handleTogglePin = async (e: React.MouseEvent, item: PostDetailInfo) => {
    mutate({ id: item.id, category: categoryId || undefined, pinned: !(item.id === fixedExhibition?.id) });
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
        activeIndex={categoryId}
        items={categories ? [{ id: 0, name: "전체 기록" }, ...categories] : []}
        onSelected={handleSelectCategoryId}
      />
      <S.Filter>
        <SortDirectionSelect selectedValue={sortBy} onSelected={handleSelectSortBy} />
      </S.Filter>
      <S.Content>
        {isEmpty ? (
          <ExhibitionListEmpty onSubmit={handleEditButton} />
        ) : (
          <InfiniteScroll onIntersect={fetchNextPage} options={{ rootMargin: "30px 0px" }}>
            <ExhibitionCardList
              fixedExhibition={fixedExhibition}
              exhibitionList={allPostInfo}
              onTogglePin={handleTogglePin}
              onClickItem={handleClickItem}
            />
          </InfiniteScroll>
        )}
      </S.Content>
      <PostFloatingButton onClick={handleEditButton} />
    </S.Wrapper>
  );
}
