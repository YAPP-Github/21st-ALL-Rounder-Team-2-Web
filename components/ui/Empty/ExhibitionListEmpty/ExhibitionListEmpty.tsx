import React from "react";
import * as S from "./ExhibitionListEmpty.styles";

export interface Props {
  className?: string;
}

export const ExhibitionListEmpty = (props: Props) => {
  const { className } = props;
  return <S.Wrapper className={className}>
    <S.Description>
      {`아직 남겨진 전시 기록이 없어요!
하단 버튼을 통해 자유롭게 전시를 기록해보아요`}
    </S.Description>
    <S.Button>
    전시기록 하러가기
    </S.Button>
  </S.Wrapper>;
}

export default ExhibitionListEmpty;
