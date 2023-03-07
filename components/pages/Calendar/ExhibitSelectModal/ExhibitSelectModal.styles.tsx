import styled from "styled-components";
import { colors } from "@/styles/colors";
import { Medium16CSS, Normal12CSS } from "@/components/ui/Typographies";

export const SelectList = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 24px;
`;

export const SelectItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px;
  cursor: pointer;
`;

export const Name = styled.span`
  ${Medium16CSS}
  color: ${colors.gray400};
`;

export const Date = styled.span`
  ${Normal12CSS}
  color: ${colors.gray700};
`;
