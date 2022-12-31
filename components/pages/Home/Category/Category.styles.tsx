import styled, { css } from "styled-components";
import { colors } from "../../../../styles/colors";
import { Bold16CSS } from "../../../ui/Typographies";

export const Wrapper = styled.div<{ $active: boolean }>`
  display: inline-block;
  text-align: center;
  padding: 10px 20px;
  background-color: ${colors.green900};
  ${Bold16CSS}

  ${({ $active }) =>
    $active
      ? css`
          border-radius: 71px;
          background-color: ${colors.green900};
        `
      : css`
          border-radius: 4px 35px 35px 4px;
          background-color: ${colors.blue};
        `}
`;
