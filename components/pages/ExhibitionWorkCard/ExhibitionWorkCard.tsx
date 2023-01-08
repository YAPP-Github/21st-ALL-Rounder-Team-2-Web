import Image from "next/image";
import { Artwork } from "../../../interfaces/artwork";
import Icon from "../../ui/Icon/Icon/Icon";
import * as S from "./ExhibitionWorkCard.styles";

const ExhibitionWorkCard = ({ imageUrl, title, artist }: Artwork) => {
  return (
    <S.Wrapper>
      <S.ImageWrapper>
        <Image
          alt=""
          src={imageUrl}
          fill
          style={{ objectFit: "cover", borderRadius: "8px" }}
        />
        <S.IconWrapper>
          <Icon name="MoreVerticalIcon" />
        </S.IconWrapper>
      </S.ImageWrapper>
      <S.InfoWrapper>
        <S.Title>{title}</S.Title>
        <S.Artist>{artist} 작가</S.Artist>
      </S.InfoWrapper>
    </S.Wrapper>
  );
};

export default ExhibitionWorkCard;
