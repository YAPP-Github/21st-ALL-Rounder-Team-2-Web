import Image from "next/image";
import { Artwork } from "@/interfaces/artwork";
import { IconButton } from "@/components/ui/Button/IconButton/IconButton";
import * as S from "./ArtworkCard.styles";

interface Props extends Artwork {
  onMoreBtnClick?: (e: React.MouseEvent) => void;
}

const ArtworkCard = ({ imageUrl, title, artist, onMoreBtnClick }: Props) => {
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
          <IconButton
            iconProps={{ name: "MoreVerticalIcon" }}
            onClick={onMoreBtnClick}
          />
        </S.IconWrapper>
      </S.ImageWrapper>
      <S.InfoWrapper>
        <S.Title>{title}</S.Title>
        <S.Artist>{artist} 작가</S.Artist>
      </S.InfoWrapper>
    </S.Wrapper>
  );
};

export default ArtworkCard;
