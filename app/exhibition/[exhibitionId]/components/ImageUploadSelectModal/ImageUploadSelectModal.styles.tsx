import styled from "styled-components";
import { colors } from "@/styles/colors";
import { Normal16CSS } from "@/components/Typographies";

export const SelectList = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
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
