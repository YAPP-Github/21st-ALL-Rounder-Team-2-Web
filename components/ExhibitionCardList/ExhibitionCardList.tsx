import ExhibitionCard from "../ExhibitionCard/ExhibitionCard";
import { Exhibition } from "../../types/exhibition";

import * as S from "./ExhibitionCardList.styles";

interface Props {
  fixedExhibition: Exhibition;
  exhibitionList: Array<Exhibition>;
}

const ExhibitionCardList = ({ fixedExhibition, exhibitionList }: Props) => {
  return (
    <S.Container>
      {fixedExhibition && <ExhibitionCard.Large {...fixedExhibition} />}
      {exhibitionList.map((props) => (
        <ExhibitionCard key={props.id} {...props} />
      ))}
    </S.Container>
  );
};

export default ExhibitionCardList;
