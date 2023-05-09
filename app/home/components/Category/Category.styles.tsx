import styled, { css } from "styled-components";
import { colors } from "@/styles/colors";
import { Bold14CSS } from "@/components/Typographies";

export const Wrapper = styled.div<{ $active: boolean }>`
  ${Bold14CSS}
  display: inline-block;
  text-align: center;
  padding: 10px 20px;
  background-color: ${colors.green900};
  color: #000000;
  ${({ $active }) =>
    $active
      ? css`
          border-radius: 71px;
          background-color: ${colors.green900};
        `
      : css`
          border-radius: 4px 30px 30px 4px;
          background-color: ${colors.blue};
        `}
  transition: all .3s ease;
`;
