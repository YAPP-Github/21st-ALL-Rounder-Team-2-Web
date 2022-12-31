import Image from "next/image";
import React from "react";
import { Exhibition } from "../../../../interfaces/exhibition";
import IconButton from "../../../ui/Button/IconButton/IconButton";

import * as S from "./MainExhibitionCard.styles";

interface Props extends Exhibition {
  isPin?: boolean;
  onTogglePin?: (e: React.MouseEvent) => void;
}

export const MainExhibitionCard = (props: Props) => {
  const { isPin, onTogglePin, imageUrl, title, date } = props;
  return (
    <S.Wrapper>
      <Image
        alt="thumbnail"
        src={imageUrl}
        fill
        style={{ objectFit: "cover", borderRadius: "8px" }}
      />
      <S.InfoContainer>
        <S.TitleTextSpan>{title}</S.TitleTextSpan>
        <S.DateTextSpan>{date}</S.DateTextSpan>
      </S.InfoContainer>
      <S.PinButton>
        <IconButton
          iconProps={{
            name: isPin ? "PinIcon" : "InActivePinIcon",
            size: 32,
          }}
        />
      </S.PinButton>
    </S.Wrapper>
  );
};
