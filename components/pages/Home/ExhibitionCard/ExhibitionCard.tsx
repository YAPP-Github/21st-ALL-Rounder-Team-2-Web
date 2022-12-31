import Image from "next/image";
import { Exhibition } from "../../../../interfaces/exhibition";
import { IconButton } from "../../../ui/Button/IconButton/IconButton";

import * as S from "./ExhibitionCard.styles";

interface Props extends Exhibition {
  isPin?: boolean;
  onTogglePin?: (e: React.MouseEvent) => void;
}

export const ExhibitionCard = (props: Props) => {
  const { isPin, onTogglePin, imageUrl, title, date } = props;
  return (
    <S.Wrapper>
      <Image
        alt="thumbnail"
        src={imageUrl}
        fill
        style={{ objectFit: "cover", borderRadius: "32px" }}
      />
      <S.InfoContainer>
        <S.TitleTextSpan>{title}</S.TitleTextSpan>
        <S.DateTextSpan>{date}</S.DateTextSpan>
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
