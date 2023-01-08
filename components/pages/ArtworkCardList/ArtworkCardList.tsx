import Link from "next/link";
import ArtworkCard from "../ArtworkCard/ArtworkCard";
import { Artwork } from "../../../interfaces/artwork";
import * as S from "./ArtworkCardList.styles";

interface Props {
  artworkList: Array<Artwork>;
}

const ArtworkCardList = ({ artworkList }: Props) => {
  return (
    <S.Wrapper>
      {artworkList.map((artworkList) => (
        <li key={artworkList.id}>
          <Link href={`/exhibition-work/${artworkList.id}`}>
            <ArtworkCard {...artworkList} />
          </Link>
        </li>
      ))}
    </S.Wrapper>
  );
};

export default ArtworkCardList;
