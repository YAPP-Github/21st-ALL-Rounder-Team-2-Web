import styled from "styled-components";
import { colors } from "../../../styles/colors";
import { Normal18CSS, Bold18CSS } from "../Typographies";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: white;

  & > div {
    background-color: ${colors.overlay};
    border-radius: 6px;
    box-shadow: 0px 2px 80px rgba(0, 0, 0, 0.5);
  }
`;

export const ActionList = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: center;

  & > button {
    border-top: 0.4px solid ${colors.gray900};
  }

  & > button:first-child {
    border-top: none;
  }
`;

export const ActionItem = styled.button`
  width: 100%;
  padding: 20px;
  color: ${colors.gray400};
  ${Normal18CSS};
  letter-spacing: -0.3px;
`;

export const CloseButton = styled(ActionItem)`
  ${Bold18CSS};
  color: white;
`;
