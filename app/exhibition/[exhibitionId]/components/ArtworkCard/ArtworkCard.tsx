import { Image } from "@/components/Image/Image";
import { Skeleton } from "@/components/Skeleton/Skeleton";
import { ArtworkThumbnailDto } from "@/__generate__/artwork";
import { IconButton } from "@/components/Button/IconButton/IconButton";
import * as S from "./ArtworkCard.styles";

interface Props extends ArtworkThumbnailDto {
  onMoreBtnClick?: (e: React.MouseEvent) => void;
}

const ArtworkCard = ({ imageURL, name, artist, onMoreBtnClick }: Props) => {
  return (
    <S.Wrapper>
      <S.ImageWrapper>
        <Image
          alt=""
          src={imageURL}
          fill
          sizes="50vw"
          style={{ objectFit: "cover", borderRadius: "12px" }}
          loadingFallback={<Skeleton borderRadius="12px" />}
        />
        <S.IconWrapper>
          <IconButton iconProps={{ name: "MoreVerticalIcon" }} onClick={onMoreBtnClick} ariaLabel="더보기" />
        </S.IconWrapper>
      </S.ImageWrapper>
      <S.InfoWrapper>
        <S.Title>{name}</S.Title>
        <S.Artist>{artist} 작가</S.Artist>
      </S.InfoWrapper>
    </S.Wrapper>
  );
};

export default ArtworkCard;
