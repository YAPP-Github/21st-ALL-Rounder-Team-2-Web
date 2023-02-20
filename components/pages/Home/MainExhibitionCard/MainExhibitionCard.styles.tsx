import styled from "styled-components";
import { colors } from "@/styles/colors";
import { Bold20CSS, Normal14CSS } from "@/components/ui/Typographies";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: auto;
  aspect-ratio: 390/372;
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

export const TitleTextSpan = styled.span`
  ${Bold20CSS}
  color: ${colors.white};
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 4px;
`;

export const DateTextSpan = styled.span`
  ${Normal14CSS}
  color: ${colors.gray400};
  opacity: 0.8;
`;

export const PinButton = styled.div`
  position: absolute;
  right: 15px;
  top: 20px;
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
`;
