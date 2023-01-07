import Link from "next/link";
import ExhibitionWorkCard from "../ExhibitionWorkCard/ExhibitionWorkCard";
import { ExhibitionWork } from "../../../interfaces/exhibition-work";
import * as S from "./ExhibitionWorkCardList.styles";

interface Props {
  exhibitionWorkList: Array<ExhibitionWork>;
}

const ExhibitionWorkCardList = ({ exhibitionWorkList }: Props) => {
  return (
    <S.Wrapper>
      {exhibitionWorkList.map((exhibitionWork) => (
        <li key={exhibitionWork.id}>
          <Link href={`/exhibition-work/${exhibitionWork.id}`}>
            <ExhibitionWorkCard {...exhibitionWork} />
          </Link>
        </li>
      ))}
    </S.Wrapper>
  );
};

export default ExhibitionWorkCardList;
