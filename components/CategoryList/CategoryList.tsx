import React from "react";
import { Category } from "../Category/Category";
import * as S from "./CategoryList.styles";
import { ReactComponent as PlusIcon } from "../Icon/plus.svg"

interface Props {
  items: Array<{ text: string; active: boolean; }>;
  onAdd: () => void
}


export const CategoryList = (props: Props) => {
  const { items = [], onAdd } = props;

  return (
    <S.Wrapper>
      {items.map((item) => {
        const { text, active } = item
        return <Category key={text} active={active} text={text} />;
      })}
      <S.PlusButton onClick={onAdd}>
        <PlusIcon />
      </S.PlusButton>
    </S.Wrapper>
  );
};
