import styled from "styled-components";
import { colors } from "@/styles/colors";
import { Normal16CSS } from "../../Typographies";

export const Wrapper = styled.div`
  padding-bottom: 8px;
  border-bottom: 0.8px solid ${colors.gray400};
`;

export const Input = styled.input`
  ${Normal16CSS}
  width: 100%;
  color: ${colors.white};
  ::placeholder {
    color: ${colors.gray700};
  }
`;
