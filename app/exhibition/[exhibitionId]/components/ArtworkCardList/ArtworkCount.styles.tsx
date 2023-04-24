import styled from "styled-components";
import { Normal14CSS } from "@/components/Typographies";
import { colors } from "@/styles/colors";

export const Count = styled.span`
  ${Normal14CSS}
  letter-spacing: -0.3px;
  color: ${colors.gray700};
  text-align: end;
`;
