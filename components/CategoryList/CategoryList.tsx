import React, { useCallback } from "react";
import { Category } from "../Category/Category";
import * as S from "./CategoryList.styles";
import { ReactComponent as PlusIcon } from "../Icon/plus.svg"

interface Props {
  className?: string;
  activeIndex?: number;
  items: Array<{ text: string; active: boolean; }>;
  onSelected: (index: number) => void;
  onRegister: () => void;
}

export const CategoryList = (props: Props) => {
  const { className, activeIndex, items = [], onSelected, onRegister } = props;

  const handleSelectCategory = useCallback((index: number) => {
    return () => {
      onSelected(index)
    }
  }, [onSelected])

  return (
    <S.Wrapper className={className}>
      {items.map((item, index) => {
        const { text } = item
        return <Category key={text} active={activeIndex === index} text={text} onClick={handleSelectCategory(index)} />;
      })}
      <S.PlusButton onClick={onRegister}>
        <PlusIcon />
      </S.PlusButton>
    </S.Wrapper>
  );
};
