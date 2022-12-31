import React from "react";
import * as S from "./TextInput.styles";

export interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  className?: string;
}

export const TextInput = (props: Props) => {
  const { className, ...restProps } = props;
  return (
    <S.Wrapper className={className}>
      <S.Input {...restProps} />
    </S.Wrapper>
  );
};

export default TextInput;
