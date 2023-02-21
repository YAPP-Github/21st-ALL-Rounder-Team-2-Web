import React, { useCallback } from "react";
import { ExhibitionCard } from "../ExhibitionCard/ExhibitionCard";
import { MainExhibitionCard } from "../MainExhibitionCard/MainExhibitionCard";
import * as S from "./ExhibitionCardList.styles";
import { PostDetailInfo } from "@/__generate__/post";

interface Props {
  fixedExhibition: PostDetailInfo;
  exhibitionList: Array<PostDetailInfo>;
  onTogglePin?: (e: React.MouseEvent, item: PostDetailInfo) => void;
  onClickItem: (e: React.MouseEvent,  item: PostDetailInfo) => void
}

export const ExhibitionCardList = (props: Props) => {
  const { fixedExhibition, exhibitionList, onTogglePin, onClickItem } = props;

  const handleTogglePin = useCallback(
    (item: PostDetailInfo) => {
      return (e: React.MouseEvent) => {
        onTogglePin?.(e, item);
      };
    },
    [onTogglePin]
  );


  const handleClickItem = useCallback(
    (item: PostDetailInfo) => {
      return (e: React.MouseEvent) => {
        onClickItem?.(e, item);
      };
    },
    [onClickItem]
  );

  return (
    <S.Wrapper>
      {fixedExhibition && (
        <MainExhibitionCard
          {...fixedExhibition}
          onTogglePin={handleTogglePin(fixedExhibition)}
          onClickItem={handleClickItem(fixedExhibition)}
        />
      )}
      <S.Content>
        {exhibitionList.map((exhibition) => (
          <ExhibitionCard
            key={exhibition.id}
            {...exhibition}
            onTogglePin={handleTogglePin(exhibition)}
            onClickItem={handleClickItem(exhibition)}
          />
        ))}
      </S.Content>
    </S.Wrapper>
  );
};
