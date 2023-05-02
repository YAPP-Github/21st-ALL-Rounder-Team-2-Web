import styled from "styled-components";
import { Bold14CSS, Bold24CSS, Normal14CSS } from "@/components/Typographies";
import { colors } from "@/styles/colors";

export const Header = styled.header`
  position: relative;
`;

export const GradientOverlay = styled.div`
  position: relative;
  padding-top: 100px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, #161616 97.31%);
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 20px;
`;

export const ArtworkAddButton = styled.button`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5.5px;
  border: 1px solid ${colors.green900};
  border-radius: 71px;
  padding: 8.5px 14px;
  color: ${colors.green900};
  ${Bold14CSS}
`;

export const ExhibitionInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  & > div {
    display: flex;
    justify-content: space-between;
  }

  & > span {
    ${Normal14CSS}
    letter-spacing: -0.3px;
  }
`;

export const Category = styled.span`
  color: ${colors.gray400};
  letter-spacing: -0.3px;
`;

export const Title = styled.h2`
  color: white;
  margin: 0;
  line-height: 130%;
  ${Bold24CSS}
  letter-spacing: -0.3px;
`;

export const Date = styled.span`
  color: ${colors.gray700};
  letter-spacing: -0.3px;
`;
