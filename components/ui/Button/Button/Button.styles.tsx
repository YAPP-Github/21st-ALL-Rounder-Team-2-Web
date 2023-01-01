import styled from "styled-components";
import { colors } from "../../../../styles/colors";
import { Bold18CSS } from "../../Typographies";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Primary = styled.button`
  ${Bold18CSS}
  color: ${colors.black2};
  padding: 8px 16px;
  background: ${colors.green900};
  border-radius: 6px;
`;
