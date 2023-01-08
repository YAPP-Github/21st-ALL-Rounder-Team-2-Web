import styled from "styled-components";

export const Wrapper = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 31px 8px;

  & > li {
    width: calc(50% - 8px);
  }
`;
