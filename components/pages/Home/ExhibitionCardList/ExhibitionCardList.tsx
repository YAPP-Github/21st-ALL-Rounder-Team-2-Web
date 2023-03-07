import React, { useCallback } from "react";
import { ExhibitionCard } from "../ExhibitionCard/ExhibitionCard";
import { MainExhibitionCard } from "../MainExhibitionCard/MainExhibitionCard";
import * as S from "./ExhibitionCardList.styles";
import { PostDetailInfo } from "@/__generate__/post";

interface Props {
  fixedExhibition: PostDetailInfo | undefined;
  exhibitionList: Array<PostDetailInfo>;
  onTogglePin?: (e: React.MouseEvent, item: PostDetailInfo) => void;
}

export const ExhibitionCardList = (props: Props) => {
  const { fixedExhibition, exhibitionList, onTogglePin } = props;

  const handleTogglePin = useCallback(
    (item: PostDetailInfo) => {
      return (e: React.MouseEvent) => {
        onTogglePin?.(e, item);
      };
    },
    [onTogglePin]
  );

  return (
    <S.Wrapper>
      {fixedExhibition && <MainExhibitionCard {...fixedExhibition} onTogglePin={handleTogglePin(fixedExhibition)} />}
      <S.Content>
        {exhibitionList.map(
          (exhibition) =>
            !exhibition.pinned && (
              <ExhibitionCard key={exhibition.id} {...exhibition} onTogglePin={handleTogglePin(exhibition)} />
            )
        )}
      </S.Content>
    </S.Wrapper>
  );
};
