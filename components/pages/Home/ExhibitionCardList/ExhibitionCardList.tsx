import { ExhibitionCard } from "../ExhibitionCard/ExhibitionCard";
import { Exhibition } from "../../../../interfaces/exhibition";

import * as S from "./ExhibitionCardList.styles";
import { MainExhibitionCard } from "../MainExhibitionCard/MainExhibitionCard";
import React, { useCallback } from "react";

interface Props {
  fixedExhibition: Exhibition;
  exhibitionList: Array<Exhibition>;
  onTogglePin?: (e: React.MouseEvent, item: Exhibition) => void;
}

export const ExhibitionCardList = (props: Props) => {
  const { fixedExhibition, exhibitionList, onTogglePin } = props;

  const handleTogglePin = useCallback(
    (item: Exhibition) => {
      return (e: React.MouseEvent) => {
        onTogglePin?.(e, item);
      };
    },
    [onTogglePin]
  );

  return (
    <S.Wrapper>
      {fixedExhibition && (
        <MainExhibitionCard
          {...fixedExhibition}
          onTogglePin={handleTogglePin(fixedExhibition)}
        />
      )}
      <S.Content>
        {exhibitionList.map((exhibition) => (
          <ExhibitionCard
            key={exhibition.id}
            {...exhibition}
            onTogglePin={handleTogglePin(exhibition)}
          />
        ))}
      </S.Content>
    </S.Wrapper>
  );
};
