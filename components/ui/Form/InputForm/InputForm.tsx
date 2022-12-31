import React from "react";
import * as S from "./InputForm.styles";

export interface Props {
  className?: string;
  label: React.ReactNode;
  children: React.ReactNode;
}

export const InputForm = (props: Props) => {
  const { label, children } = props;
  return (
    <S.Wrapper>
      <S.Label>{label}</S.Label>
      <S.Content>{children}</S.Content>
    </S.Wrapper>
  );
};

export default InputForm;
