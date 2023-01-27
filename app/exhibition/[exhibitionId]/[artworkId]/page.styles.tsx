import styled from "styled-components";
import { ExtraBold24CSS, Normal16CSS } from "@/components/ui/Typographies";
import { colors } from "@/styles/colors";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

export const Overlay = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Content = styled.div`
  margin-bottom: 4px;
  padding: 75px 24px;
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

export const CategoryListWrapper = styled.ul`
  display: flex;
  gap: 6px;
  margin-top: 14px;
  margin-bottom: 18px;
  list-style: none;
  padding: 0;
`;

export const ThumbnailListWrapper = styled.ul`
  display: flex;
  gap: 10px;
  filter: drop-shadow(0px 4px 30px rgba(0, 0, 0, 0.16));
  list-style: none;
  padding: 0;
  margin-top: 20px;
`;

export const ThumbnailItem = styled.li``;
