import { Image } from "@/components/Image/Image";
import { Skeleton } from "@/components/Skeleton/Skeleton";
import { IconButton } from "@/components/Button/IconButton/IconButton";
import { PostDetailInfo } from "@/__generate__/post";
import { DEFAULT_IMAGE } from "@/utils/image";
import * as S from "./MainExhibitionCard.styles";

interface Props extends PostDetailInfo {
  isPin?: boolean;
  onTogglePin?: (e: React.MouseEvent) => void;
  onClickItem: (e: React.MouseEvent) => void;
}

export const MainExhibitionCard = (props: Props) => {
  const { isPin, onTogglePin, mainImage, name, postDate, onClickItem } = props;
  return (
    <S.Wrapper onClick={onClickItem}>
      <Image
        alt="thumbnail"
        src={mainImage ?? DEFAULT_IMAGE}
        fill
        sizes="100vw"
        style={{ objectFit: "cover", borderRadius: "0 240px 0 0" }}
        priority
        loadingFallback={<Skeleton borderRadius="0 240px 0 0" />}
      />
      <S.Information>
        <S.Title>{name}</S.Title>
        <S.Date>{postDate}</S.Date>
      </S.Information>
      <S.PinButton>
        <IconButton
          iconProps={{
            name: isPin ? "PinIcon" : "InActivePinIcon",
            size: 32,
          }}
          onClick={onTogglePin}
          ariaLabel="전시 고정 해제하기"
        />
      </S.PinButton>
    </S.Wrapper>
  );
};
