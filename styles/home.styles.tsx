import styled from "styled-components";
import { CategoryList } from "../components/CategoryList/CategoryList";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CategoryListStyled = styled(CategoryList)`
    margin-top: 16px;
    margin-bottom: 16px;
    padding: 0px 16px;
`;

export const Filter = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    margin-top: 26px;
    padding: 0px 16px;
`;

export const Content = styled.div`
    margin-top: 13px;
`;