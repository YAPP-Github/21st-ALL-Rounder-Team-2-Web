import styled from "styled-components";
import { ExtraBold24CSS, Normal16CSS } from "@/components/ui/Typographies";
import { colors } from "@/styles/colors";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: ${colors.bgColor};
`;

export const ArtworkInfoWrapper = styled.div`
  position: absolute;
  left: 24px;
  bottom: 170px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  ${ExtraBold24CSS};
  color: white;
  margin-bottom: 4px;
`;

export const Artist = styled.span`
  ${Normal16CSS};
  color: ${colors.gray300};
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 14px;
  margin-bottom: 18px;
  padding: 0;
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  z-index: 1000;
`;

export const ThumbnailList = styled.ul`
  position: absolute;
  left: 16px;
  right: 16px;
  bottom: 75px;
  display: flex;
  gap: 10px;
  padding: 20px 8px;
  border-top: 1px solid ${colors.gray400};
  z-index: 1000;
  overflow-x: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ThumbnailItem = styled.li<{ isActive: boolean }>`
  flex-shrink: 0;
  position: relative;
  width: 52px;
  height: 52px;
  border: ${(props) =>
    props.isActive ? `2px solid ${colors.green900}` : "none"};
  box-shadow: 0 0 0 2px transparent;
  filter: drop-shadow(0px 4px 30px rgba(0, 0, 0, 0.16));
  border-radius: 2px;
`;

export const BottomSheetWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
`;
