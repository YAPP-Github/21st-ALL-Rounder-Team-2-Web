import { CategoryDto } from "@/__generate__/category";
import React, { useCallback } from "react";
import { Category } from "../Category/Category";
import * as S from "./CategoryList.styles";

interface Props {
  className?: string;
  activeIndex?: number;
  items: CategoryDto[];
  onSelected: (index: number) => void;
  onRegister: () => void;
}

export const CategoryList = (props: Props) => {
  const { className, activeIndex, items = [], onSelected, onRegister } = props;

  const handleSelectCategory = useCallback(
    (index: number) => {
      return () => {
        onSelected(index);
      };
    },
    [onSelected]
  );

  return (
    <S.Wrapper className={className}>
      {items.map((item, index) => {
        const { id, name } = item;
        return (
          <Category
            key={id}
            active={activeIndex === index}
            text={name}
            onClick={handleSelectCategory(index)}
          />
        );
      })}
    </S.Wrapper>
  );
};
