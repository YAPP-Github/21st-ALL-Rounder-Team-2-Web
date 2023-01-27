import styled from "styled-components";
import { colors } from "@/styles/colors";
import { Bold18CSS, Medium16CSS } from "../../Typographies";

export const Default = styled.button`
  ${Medium16CSS}
  color: ${colors.gray400};
`;

export const Primary = styled.button`
  ${Bold18CSS}
  color: ${colors.black2};
  padding: 8px 16px;
  background: ${colors.green900};
  border-radius: 6px;
`;
