import Image from "next/image";
import { Exhibition } from "../../types/exhibition";

import * as S from "./ExhibitionCard.styles";

const ExhibitionCard = ({ imageUrl, title, date }: Exhibition) => {
  return (
    <S.Container>
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
    </S.Container>
  );
};

const ExhibitionCardLarge = ({ imageUrl, title, date }: Exhibition) => {
  return (
    <S.LargeContainer>
      <Image
        alt="thumbnail"
        src={imageUrl}
        fill
        style={{ objectFit: "cover", borderRadius: "8px" }}
      />
      <S.InfoContainer>
        <S.LargeTitleTextSpan>{title}</S.LargeTitleTextSpan>
        <S.DateTextSpan>{date}</S.DateTextSpan>
      </S.InfoContainer>
    </S.LargeContainer>
  );
};

export default Object.assign(ExhibitionCard, {
  Large: ExhibitionCardLarge,
});
