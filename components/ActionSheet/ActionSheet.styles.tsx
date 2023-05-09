import styled from "styled-components";
import { colors } from "@/styles/colors";
import { Normal18CSS, Bold18CSS } from "@/components/Typographies";
import "@/styles/keyframes.css";

export const Wrapper = styled.div<{ isOpen?: boolean }>`
  position: fixed;
  left: 18px;
  right: 18px;
  bottom: 53px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 12px;

  animation: ${(props) => (props.isOpen ? "slideup" : "slidedown")} 250ms forwards;
`;

export const ActionList = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: ${colors.overlay};
  border-radius: 6px;
  box-shadow: 0px 2px 80px rgba(0, 0, 0, 0.5);

  & > button {
    border-top: 0.4px solid ${colors.gray900};
  }

  & > button:first-child {
    border-top: none;
  }
`;

export const ActionItem = styled.button`
  width: 100%;
  padding: 20px 0;
  border-radius: 6px;
  ${Normal18CSS};
  color: ${colors.gray400};
`;

export const CloseButton = styled(ActionItem)`
  background: ${colors.overlay};
  box-shadow: 0px 2px 80px rgba(0, 0, 0, 0.5);
  ${Bold18CSS};
  color: white;
`;
