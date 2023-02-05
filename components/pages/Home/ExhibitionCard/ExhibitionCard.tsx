import Image from "next/image";
import { IconButton } from "@/components/ui/Button/IconButton/IconButton";
import { PostDetailInfo } from "@/__generate__/post";
import { DEFAULT_IMAGE } from "@/utils/image";

import * as S from "./ExhibitionCard.styles";

interface Props extends PostDetailInfo {
  isPin?: boolean;
  onTogglePin?: (e: React.MouseEvent) => void;
}

export const ExhibitionCard = (props: Props) => {
  const { isPin, onTogglePin, mainImage, name, postDate } = props;
  return (
    <S.Wrapper>
      <Image
        alt="thumbnail"
        src={mainImage ?? DEFAULT_IMAGE}
        fill
        style={{ objectFit: "cover", borderRadius: "32px" }}
      />
      <S.InfoContainer>
        <S.TitleTextSpan>{name}</S.TitleTextSpan>
        <S.DateTextSpan>{postDate}</S.DateTextSpan>
      </S.InfoContainer>
      <S.PinButton>
        <IconButton
          iconProps={{
            name: isPin ? "PinIcon" : "InActivePinIcon",
            size: 24,
          }}
          onClick={onTogglePin}
        />
      </S.PinButton>
    </S.Wrapper>
  );
};
