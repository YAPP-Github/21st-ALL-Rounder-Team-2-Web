import React from "react";
import * as S from "./TextInput.styles";

export interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

const TextInput = (
  props: Props,
  ref: React.ForwardedRef<HTMLInputElement>
) => {
  const { className, ...restProps } = props;
  return (
    <S.Wrapper className={className}>
      <S.Input ref={ref} {...restProps} />
    </S.Wrapper>
  );
};

export default React.forwardRef(TextInput);
