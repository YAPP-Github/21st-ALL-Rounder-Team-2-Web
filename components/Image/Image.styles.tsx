import styled from "styled-components";

export const Fade = styled.div<{ isLoaded?: boolean }>`
  opacity: ${({ isLoaded }) => (isLoaded ? 1 : 0)};
  transition: opacity 0.3s;
`;
