import Image from "next/image";
import React from "react";
import { IconButton } from "@/components/ui/Button/IconButton/IconButton";

import * as S from "./MainExhibitionCard.styles";
import { PostDetailInfo } from "@/__generate__/post";
import { DEFAULT_IMAGE } from "@/utils/image";

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
        style={{ objectFit: "cover", borderRadius: "0 240px 0 0" }}
      />
      <S.InfoContainer>
        <S.TitleTextSpan>{name}</S.TitleTextSpan>
        <S.DateTextSpan>{postDate}</S.DateTextSpan>
      </S.InfoContainer>
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
