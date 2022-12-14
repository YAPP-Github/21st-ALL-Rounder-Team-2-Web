import styled from "styled-components";
import { Bold18CSS } from "../Typographies";

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 318px;
  padding: 16px;
  background: #1f1f1f;
  box-shadow: 0px 2px 18px rgba(0, 0, 0, 0.35);
  border-radius: 12px;
  color: white;
  z-index: 1000;
`;

export const Headline = styled.div`
  width: 100%;
  text-align: center;

  & > div {
    text-align: end;
  }

  & > span {
    ${Bold18CSS};
  }
`;

export const Body = styled.div`
  text-align: center;
`;
