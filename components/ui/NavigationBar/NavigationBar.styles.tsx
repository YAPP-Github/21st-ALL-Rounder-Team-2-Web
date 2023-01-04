import styled from "styled-components";
import { Bold16CSS, Bold18CSS } from "../Typographies";

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

export const Button = styled.button`
  width: 44px;
  height: 44px;
  color: white;
  ${Bold16CSS}
`;
