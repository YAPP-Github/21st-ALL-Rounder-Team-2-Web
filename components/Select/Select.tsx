import React from "react";
import * as S from "./Select.styles";
import { ReactComponent as ArrowDownIcon } from "../Icon/arrow_down.svg";

interface Props {}

export const Select = (props: Props) => {
  return (
    <S.Wrapper>
      <S.Text>최신순</S.Text>
      <ArrowDownIcon />
    </S.Wrapper>
  );
};
