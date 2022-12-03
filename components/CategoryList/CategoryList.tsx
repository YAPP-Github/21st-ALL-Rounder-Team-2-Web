import React from "react";
import styled from "styled-components";
import { Category } from "../Category/Category";

interface Props {
  items: Array<{ text: string; active: boolean; }>;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CategoryList = (props: Props) => {
  const { items = [] } = props;

  return (
    <Wrapper>
      {items.map((item) => {
        const { text, active } = item
        return <Category key={text} active={active} text={text} />;
      })}
    </Wrapper>
  );
};
