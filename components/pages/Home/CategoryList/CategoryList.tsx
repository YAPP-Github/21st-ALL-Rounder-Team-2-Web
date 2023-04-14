"use client";

import { Category } from "../Category/Category";
import { useSelect } from "@/hooks/useSelect";
import { useGetCategoryList } from "@/hooks/category";
import * as S from "./CategoryList.styles";

export const CategoryList = () => {
  const { data: categories } = useGetCategoryList();
  const [categoryId, selectCategoryId] = useSelect(0);

  const handleSelectCategoryId = (index: number) => {
    return (e: React.MouseEvent) => {
      selectCategoryId(index);
    };
  };

  return (
    <S.Wrapper>
      {[{ id: 0, name: "전체 기록" }, ...(categories ?? [])].map((item) => {
        const { id, name } = item;
        return <Category key={id} active={categoryId === id} text={name} onClick={handleSelectCategoryId(id ?? 0)} />;
      })}
    </S.Wrapper>
  );
};
