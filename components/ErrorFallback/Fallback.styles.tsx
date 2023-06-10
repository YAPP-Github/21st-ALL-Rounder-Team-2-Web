"use client";

import styled from "styled-components";
import { Medium16CSS, Normal16CSS } from "@/components/Typographies";
import { colors } from "@/styles/colors";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 100vh;
`;

export const Description = styled.div`
  ${Normal16CSS}
  color: ${colors.gray600}
`;

export const RetryButton = styled.div`
  ${Medium16CSS}
  padding: 12px 24px;
  gap: 10px;
  border: 1px solid ${colors.green900};
  border-radius: 71px;
  color: ${colors.green900};
  cursor: pointer;
`;
