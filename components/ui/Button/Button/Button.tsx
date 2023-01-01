import React from "react";
import * as S from "./Button.styles";

export interface Props {
  className?: string;
  type: "primary";
  children: React.ReactNode;
}

export const Button = (props: Props) => {
  const { className, type, children } = props;

  switch (type) {
    case "primary":
      return <S.Primary className={className}>{children}</S.Primary>;
    default:
      return <S.Wrapper className={className}>{children}</S.Wrapper>;
  }
};

export default Button;
