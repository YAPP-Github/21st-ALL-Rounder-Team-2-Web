import styled from "styled-components";
import { Normal12CSS, Normal14CSS } from "@/components/Typographies";
import { colors } from "@/styles/colors";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  padding: 12px;
  background: rgba(63, 63, 63, 0.5);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

export const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Url = styled.div`
  ${Normal12CSS}
  color: ${colors.gray600};
`;

export const Title = styled.div`
  ${Normal14CSS}
  line-height: 150%;
  color: ${colors.white};
`;

export const ImageSkeleton = styled.div`
  width: 62px;
  height: 62px;
  border-radius: 8px;
  background: ${colors.gray900};
`;
