import Link from "next/link";
import ExhibitionWorkCard from "../ExhibitionWorkCard/ExhibitionWorkCard";
import { Artwork } from "../../../interfaces/artwork";
import * as S from "./ExhibitionWorkCardList.styles";

interface Props {
  artworkList: Array<Artwork>;
}

const ExhibitionWorkCardList = ({ artworkList }: Props) => {
  return (
    <S.Wrapper>
      {artworkList.map((artworkList) => (
        <li key={artworkList.id}>
          <Link href={`/exhibition-work/${artworkList.id}`}>
            <ExhibitionWorkCard {...artworkList} />
          </Link>
        </li>
      ))}
    </S.Wrapper>
  );
};

export default ExhibitionWorkCardList;
