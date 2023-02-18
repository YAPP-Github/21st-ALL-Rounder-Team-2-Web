import styled from "styled-components";
import { Medium16CSS, Normal16CSS } from "../../Typographies";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Description = styled.pre`
  ${Normal16CSS}
`;

export const Button = styled.p`
  ${Medium16CSS}
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 24px;
  gap: 10px;
  border: 1px solid #e1fcad;
  border-radius: 71px;
  color: #e1fcad;
  margin-top: 20px;
`;
