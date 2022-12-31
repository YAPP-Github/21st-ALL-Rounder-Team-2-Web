import styled from "styled-components";
import { colors } from "../../../../styles/colors";
import IconButton from "../../../ui/Button/IconButton/IconButton";
import { Bold20CSS, Normal14CSS } from "../../../ui/Typographies";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  background-color: #f1f1f1;
  width: 100%;
  height: 100%;
  aspect-ratio: 1/1;
`;

export const InfoContainer = styled.div`
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleTextSpan = styled.div`
  ${Bold20CSS}
  color: ${colors.white};
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 4px;
`;

export const DateTextSpan = styled.div`
  ${Normal14CSS}
  color: ${colors.gray400};
  opacity: 0.8;
`;

export const PinButton = styled.div`
  position: absolute;
  right: 15px;
  top: 20px;
`;