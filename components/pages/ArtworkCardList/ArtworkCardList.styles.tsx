import styled from "styled-components";
import { slideup, slidedown } from "@/styles/keyframes";

export const Wrapper = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 31px 8px;

  & > li {
    width: calc(50% - 4px);
  }
`;

export const ActionSheetWrapper = styled.div<{ isShow: boolean }>`
  position: fixed;
  bottom: 0;
  left: 18px;
  right: 18px;
  bottom: 53px;
  z-index: 1000;

  animation: ${(props) => (props.isShow ? slideup : slidedown)} 250ms forwards;
`;
