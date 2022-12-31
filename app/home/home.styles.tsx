import styled from "styled-components";
import { CategoryList } from "../../components/pages/Home/CategoryList/CategoryList";
import { colors } from "../../styles/colors";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.bgColor};
`;

export const CategoryListStyled = styled(CategoryList)`
  padding: 0px 16px;
`;

export const Filter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-top: 29px;
  padding: 0px 16px;
`;

export const Content = styled.div``;
