import styled from "styled-components";
import { Normal14CSS, Bold18CSS } from "@/components/Typographies";
import { colors } from "@/styles/colors";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  margin-bottom: 16px;
`;

export const Title = styled.div`
  margin-bottom: 8px;
  ${Bold18CSS};
`;

export const Description = styled.div`
  margin-bottom: 32px;
  color: ${colors.gray600};
  ${Normal14CSS};
`;

export const Options = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;

  & > button {
    padding: 12px 30px;
    border-radius: 50px;
    ${Bold18CSS};
  }

  & > button:nth-child(1) {
    background-color: ${colors.gray600};
  }

  & > button:nth-child(2) {
    background-color: ${colors.green900};
  }
`;
