import styled from "styled-components";
import { Bold18CSS, Normal14CSS } from "../../ui/Typographies";
import { colors } from "../../../styles/colors";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: calc(50% - 8px);
`;

export const ImageWrapper = styled.div`
  position: relative;
  aspect-ratio: 175 / 200;
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 14px;
  right: 8px;
`;

export const Title = styled.span`
  ${Bold18CSS}
  color: white;
`;

export const Artist = styled.span`
  ${Normal14CSS}
  color: ${colors.gray500};
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
