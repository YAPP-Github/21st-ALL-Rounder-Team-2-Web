import styled from "styled-components";
import { colors } from "../../../styles/colors";
import { Normal16CSS } from "../../ui/Typographies";

export const SelectList = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0;
  margin: 0;
`;

export const SelectItem = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;

  list-style: none;
  cursor: pointer;

  & > span {
    ${Normal16CSS}
    color: ${colors.gray400};
  }
`;
