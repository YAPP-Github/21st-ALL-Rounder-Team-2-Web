import styled from "styled-components";
import {
  Bold14CSS,
  Bold24CSS,
  Normal14CSS,
  Normal16CSS,
} from "../../../components/ui/Typographies";
import { colors } from "../../../styles/colors";

export const Header = styled.header`
  position: relative;
`;

export const GradientOverlay = styled.div`
  position: relative;
  padding-top: 30px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, #161616 97.31%);
`;

export const Category = styled.div`
  position: relative;

  & > span {
    position: absolute;
    top: 8px;
    left: 20px;

    ${Bold14CSS}
    color: ${colors.gray900}
  }
`;

export const Exhibition = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 16px 23px;
`;

export const ExhibitionWorkAddButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  ${Normal14CSS}
  color: white;
`;

export const ExhibitionInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  & > h2 {
    margin: 0;
    ${Bold24CSS}
    color: white;
  }

  & > span {
    ${Normal16CSS}
    color: ${colors.gray500};
  }
`;
