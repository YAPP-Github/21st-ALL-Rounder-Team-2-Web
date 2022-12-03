import React, { useCallback } from "react";
import { CategoryList } from "../components/CategoryList/CategoryList";
import { Divider } from "../components/Divider/Divider";
import { Select } from "../components/Select/Select";
import { useSelectCategory } from "../hooks/useSelectCategory";
import * as S from "../styles/home.styles";

export default function Home() {
  const categoryItems = [{ text: "전체 기록", active: false }, { text: "졸업전시", active: false }];
  const { selectedIndex, selectCategoryByIndex: handleSelectCategory } = useSelectCategory()

  const handleRegisterCategory = useCallback(() => {}, []);

  return (
    <S.Wrapper>
      <S.CategoryListStyled activeIndex={selectedIndex} items={categoryItems} onSelected={handleSelectCategory} onRegister={handleRegisterCategory} />
      <Divider />
      <S.Filter>
        <Select />
      </S.Filter>
      <S.Content>
      </S.Content>
    </S.Wrapper>
  );
}
