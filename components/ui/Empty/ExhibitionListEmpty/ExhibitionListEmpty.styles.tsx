import { colors } from "@/styles/colors";
import styled from "styled-components";
import Button from "../../Button/Button/Button";
import { Medium16CSS, Normal16CSS } from "../../Typographies";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 183px;
  padding-bottom: 341px;
`;

export const Description = styled.pre`
  ${Normal16CSS}
  text-align: center;
  color: #929191;
`;

export const SubmitButton = styled(Button)`
  ${Medium16CSS}
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 24px;
  gap: 10px;
  border: 1px solid ${colors.green900};
  border-radius: 71px;
  color: ${colors.green900};
  margin-top: 20px;
`;
