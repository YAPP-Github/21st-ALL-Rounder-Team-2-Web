import Icon from "@/components/Icon/Icon/Icon";
import { Medium16CSS } from "@/components/Typographies";
import { colors } from "@/styles/colors";
import styled, { css } from "styled-components";
import { ToastPosition } from "@/components/Toast/Toast.type";

export const ANIMATION_DURATION = 300;

export const IconStyled = styled(Icon)`
  margin-right: 8px;
`;

export const Toast = styled.div<{ position: ToastPosition; isOpen?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 20px;
  right: 20px;
  ${({ position }) =>
    position === "bottom"
      ? css`
          bottom: 30px;
        `
      : css`
          top: 30px;
        `}
  padding: 18px;
  background: ${colors.overlay};
  box-shadow: 0px 2px 30px rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  ${Medium16CSS};
  color: ${colors.gray300};
  z-index: 1200;
  animation: ${({ isOpen }) => (isOpen ? "slideup" : "slidedown")} ${ANIMATION_DURATION}ms forwards;
`;
