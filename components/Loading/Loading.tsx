import { colors } from "@/styles/colors";
import styled from "styled-components";

export const Loading = () => {
  return (
    <Spinner>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </Spinner>
  );
};

const Spinner = styled.div`
  width: 36px;
  height: 36px;
  border: 5px solid ${colors.gray500};
  border-bottom-color: transparent;
  border-radius: 50%;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
