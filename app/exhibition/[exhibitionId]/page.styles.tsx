import styled from "styled-components";
import { colors } from "@/styles/colors";
import { Normal16CSS } from "@/components/ui/Typographies";

export const Wrapper = styled.div`
  height: 100%;
  min-height: 100vh;
  background: ${colors.bgColor};
`;

export const Content = styled.div`
  padding: 21px 16px;
`;

export const Empty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 142px;
  ${Normal16CSS}
  color: #929191;
  text-align: center;

  & > button {
    padding: 12px 24px;
    border: 1px solid ${colors.green900};
    border-radius: 71px;
    color: ${colors.green900};
  }
`;
