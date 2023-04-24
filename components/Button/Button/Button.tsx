"use client";

import React from "react";
import * as S from "./Button.styles";

export interface Props {
  className?: string;
  type: "primary" | "default";
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
}

export const Button = (props: Props) => {
  const { className, type, children, onClick } = props;

  switch (type) {
    case "primary":
      return (
        <S.Primary className={className} onClick={onClick}>
          {children}
        </S.Primary>
      );
    case "default":
    default:
      return (
        <S.Default className={className} onClick={onClick}>
          {children}
        </S.Default>
      );
  }
};

export default Button;
