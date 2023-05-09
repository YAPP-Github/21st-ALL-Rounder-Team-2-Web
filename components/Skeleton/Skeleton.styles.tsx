import styled, { css } from "styled-components";
import { colors } from "@/styles/colors";
import { Props } from "./Skeleton";
import "@/styles/keyframes.css";

export const Skeleton = styled.div<Props>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ borderRadius }) => borderRadius};
  background: ${colors.overlay};

  ${({ animation }) =>
    animation === "wave" &&
    css`
      position: relative;
      overflow: hidden;

      &::after {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: linear-gradient(90deg, transparent, ${colors.gray900} 60%, transparent);
        opacity: 0.3;
        transform: translateX(-100%);
        animation: wave 1.6s linear 0.8s infinite;
      }
    `}
  ${({ animation }) =>
    animation === "purse" &&
    css`
      animation: pulse 1.5s ease-in-out 0.5s infinite;
    `};
`;
