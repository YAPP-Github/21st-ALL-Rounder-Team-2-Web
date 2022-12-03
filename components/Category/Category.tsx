import React from "react";
import * as S from "./Category.styles";
// import { Wrapper } from "./Category.styles";

interface Props {
  text?: string;
  active: boolean;
}

export const Category = (props: Props) => {
  const { text, active } = props;
  return <S.Wrapper $active={active}>{text}</S.Wrapper>;
};
