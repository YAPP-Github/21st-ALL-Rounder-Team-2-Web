import styled from "styled-components";

export const Fade = styled.div<{ isLoaded?: boolean }>`
  opacity: ${({ isLoaded }) => (isLoaded ? 1 : 0)};
  transition: opacity 0.3s;
`;

export const ErrorFallbackWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.2);
`;
