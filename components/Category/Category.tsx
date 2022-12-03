import React from "react";
import styled, { css } from "styled-components";

interface Props {
  text?: string;
  active: boolean;
}

const Wrapper = styled.div<{ $active: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  gap: 10px;

  border-radius: 71px;
  box-sizing: border-box;
  
  ${({ $active }) => $active ? css`
    color: #fff;
    background: #373737;
  ` : css`
    color: #333333;
    background: rgba(178, 178, 178, 0.24);
  `}
`;

export const Category = (props: Props) => {
  const { text, active } = props;
  return <Wrapper $active={active}>{text}</Wrapper>;
};
