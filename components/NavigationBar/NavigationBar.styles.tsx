import styled from "styled-components";
import { Normal16CSS, Bold18CSS } from "@/components/Typographies";
import { colors } from "@/styles/colors";
import { IconButton } from "@/components/Button/IconButton/IconButton";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
`;

export const Title = styled.span`
  color: white;
  ${Bold18CSS}
`;

export const GoBackButton = styled(IconButton)`
  padding: 13px 16px;
`;

export const Button = styled.button`
  padding: 15px 20px;
  color: ${colors.gray400};
  ${Normal16CSS}
`;
