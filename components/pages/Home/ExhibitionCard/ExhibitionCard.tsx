import Image from "next/image";
import { Exhibition } from "../../../../interfaces/exhibition";

import * as S from "./ExhibitionCard.styles";

interface Props extends Exhibition {
  isPin?: boolean;
}

export const ExhibitionCard = (props: Props) => {
  const { isPin, imageUrl, title, date } = props;
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
    </S.Wrapper>
  );
};