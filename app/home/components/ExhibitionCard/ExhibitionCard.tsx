import { Image } from "@/components/Image/Image";
import { Skeleton } from "@/components/Skeleton/Skeleton";
import { IconButton } from "@/components/Button/IconButton/IconButton";
import { PostDetailInfo } from "@/__generate__/post";
import { DEFAULT_IMAGE } from "@/utils/image";
import * as S from "./ExhibitionCard.styles";

interface Props extends PostDetailInfo {
  isPin?: boolean;
  onTogglePin?: (e: React.MouseEvent) => void;
  onClickItem: (e: React.MouseEvent) => void;
}

export const ExhibitionCard = (props: Props) => {
  const { isPin, onTogglePin, mainImage, name, postDate, onClickItem } = props;
  return (
    <S.Wrapper onClick={onClickItem}>
      <Image
        alt="thumbnail"
        src={mainImage ?? DEFAULT_IMAGE}
        fill
        sizes="50vw"
        style={{ objectFit: "cover", borderRadius: "32px" }}
        loadingFallback={<Skeleton borderRadius="32px" />}
      />
      <S.Information>
        <S.Title>{name}</S.Title>
        <S.Date>{postDate}</S.Date>
      </S.Information>
      <S.PinButton>
        <IconButton
          iconProps={{
            name: isPin ? "PinIcon" : "InActivePinIcon",
            size: 24,
          }}
          onClick={onTogglePin}
          ariaLabel="전시 고정하기"
        />
      </S.PinButton>
    </S.Wrapper>
  );
};
