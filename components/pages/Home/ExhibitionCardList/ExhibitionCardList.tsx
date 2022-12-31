import { ExhibitionCard } from "../ExhibitionCard/ExhibitionCard";
import { Exhibition } from "../../../../interfaces/exhibition";

import * as S from "./ExhibitionCardList.styles";
import { MainExhibitionCard } from "../MainExhibitionCard/MainExhibitionCard";

interface Props {
  fixedExhibition: Exhibition;
  exhibitionList: Array<Exhibition>;
}

export const ExhibitionCardList = ({
  fixedExhibition,
  exhibitionList,
}: Props) => {
  return (
    <S.Wrapper>
      {fixedExhibition && <MainExhibitionCard {...fixedExhibition} />}
      <S.Content>
        {exhibitionList.map((props) => (
          <ExhibitionCard key={props.id} {...props} />
        ))}
      </S.Content>
    </S.Wrapper>
  );
};
