import styled, { css } from "styled-components";

export const Wrapper = styled.div<{ $active: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  gap: 10px;

  border-radius: 71px;

  ${({ $active }) =>
    $active
      ? css`
          color: #fff;
          background: #373737;
        `
      : css`
          color: #333333;
          background: rgba(178, 178, 178, 0.24);
        `}
`;
