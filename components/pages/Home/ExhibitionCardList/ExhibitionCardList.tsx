"use client";

import React, { useCallback, useMemo } from "react";
import { ExhibitionCard } from "../ExhibitionCard/ExhibitionCard";
import { MainExhibitionCard } from "../MainExhibitionCard/MainExhibitionCard";
import ExhibitionListEmpty from "@/components/ui/Empty/ExhibitionListEmpty/ExhibitionListEmpty";
import { InfiniteScroll } from "@/components/ui/InfiniteScroll/InfiniteScroll";
import { PostDetailInfo } from "@/__generate__/post";
import { sendMessage } from "@/libs/message/message";
import { useGetExhibitionList, useTogglePinById } from "@/hooks/exhibition";
import * as S from "./ExhibitionCardList.styles";

type Props = {
  direction: "ASC" | "DESC";
  category?: number;
};

export const ExhibitionCardList = ({ direction, category }: Props) => {
  const { allPostInfo: exhibitionList, fetchNextPage } = useGetExhibitionList(direction, category);
  const { mutate } = useTogglePinById(direction);

  const fixedExhibition = useMemo(() => {
    return exhibitionList.find((item) => item.pinned);
  }, [exhibitionList]);

  const isEmpty = exhibitionList.length === 0;

  const handleTogglePin = useCallback((item: PostDetailInfo) => {
    return (e: React.MouseEvent) => {
      e.stopPropagation();
      mutate({ id: item.id, category, pinned: !(item.id === fixedExhibition?.id) });
    };
  }, []);

  const handleClickItem = useCallback((item: PostDetailInfo) => {
    return (e: React.MouseEvent) => {
      sendMessage(["NAVIGATE_TO_EXHIBITION_DETAIL", item]);
    };
  }, []);

  if (isEmpty) return <ExhibitionListEmpty />;

  return (
    <S.Wrapper>
      <InfiniteScroll onIntersect={fetchNextPage} options={{ rootMargin: "30px 0px" }}>
        {fixedExhibition && (
          <MainExhibitionCard
            {...fixedExhibition}
            onTogglePin={handleTogglePin(fixedExhibition)}
            onClickItem={handleClickItem(fixedExhibition)}
            isPin
          />
        )}
        <S.Content>
          {exhibitionList.map(
            (exhibition) =>
              !exhibition.pinned && (
                <ExhibitionCard
                  key={exhibition.id}
                  {...exhibition}
                  onTogglePin={handleTogglePin(exhibition)}
                  onClickItem={handleClickItem(exhibition)}
                />
              )
          )}
        </S.Content>
      </InfiniteScroll>
    </S.Wrapper>
  );
};
