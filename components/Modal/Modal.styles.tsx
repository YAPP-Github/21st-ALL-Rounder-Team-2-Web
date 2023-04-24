import styled from "styled-components";
import { Bold18CSS, Normal14CSS } from "@/components/Typographies";
import { IconButton } from "@/components/Button/IconButton/IconButton";
import { colors } from "@/styles/colors";

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% - 72px);
  padding: 16px;
  background: ${colors.overlay};
  box-shadow: 0px 2px 18px rgba(0, 0, 0, 0.35);
  border-radius: 12px;
  color: ${colors.white};
  z-index: 1000;
`;

export const CloseButton = styled(IconButton)`
  margin-left: auto;
`;

export const Title = styled.div`
  ${Bold18CSS};
  text-align: center;
`;

export const Description = styled.div`
  ${Normal14CSS};
  color: ${colors.gray600};
  text-align: center;
`;
