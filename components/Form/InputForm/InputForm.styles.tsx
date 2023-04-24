import styled from "styled-components";
import { colors } from "@/styles/colors";
import { Bold18CSS } from "../../Typographies";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.div`
  ${Bold18CSS}
  color: ${colors.white};
  margin-bottom: 15px;
`;

export const Content = styled.div``;
