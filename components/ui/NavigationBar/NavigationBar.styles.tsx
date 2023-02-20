import styled from "styled-components";
import { Normal16CSS, Bold18CSS } from "../Typographies";
import { colors } from "@/styles/colors";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  padding-top: 50px;
`;

export const Title = styled.span`
  color: white;
  ${Bold18CSS}
`;

export const Button = styled.button`
  padding: 20px;
  color: ${colors.gray400};
  ${Normal16CSS}
`;
