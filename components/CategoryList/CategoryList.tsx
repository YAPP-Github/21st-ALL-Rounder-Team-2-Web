import React from "react";
import { Category } from "../Category/Category";
import * as S from "./CategoryList.styles";

interface Props {
  items: Array<{ text: string; active: boolean; }>;
}


export const CategoryList = (props: Props) => {
  const { items = [] } = props;

  return (
    <S.Wrapper>
      {items.map((item) => {
        const { text, active } = item
        return <Category key={text} active={active} text={text} />;
      })}
    </S.Wrapper>
  );
};
