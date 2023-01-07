import styled from "styled-components";

export const Wrapper = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 31px 8px;
  padding: 0;

  & > li {
    list-style: none;
    width: calc(50% - 8px);
  }
`;
