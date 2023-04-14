"use client";

import { sendMessage } from "@/libs/message/message";
import * as S from "./ExhibitionListEmpty.styles";

export interface Props {
  className?: string;
}

export const ExhibitionListEmpty = (props: Props) => {
  const { className } = props;

  const handleSubmit = () => {
    sendMessage(["NAVIGATE_TO_EDIT"]);
  };

  return (
    <S.Wrapper className={className}>
      <S.Description>
        {`아직 남겨진 전시 기록이 없어요!
    하단 버튼을 통해 자유롭게 전시를 기록해보아요`}
      </S.Description>
      <S.SubmitButton type="default" onClick={handleSubmit}>
        전시기록 하러가기
      </S.SubmitButton>
    </S.Wrapper>
  );
};

export default ExhibitionListEmpty;
