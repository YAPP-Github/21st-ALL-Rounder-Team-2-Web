"use client";

import styled from "styled-components";
import { Normal14CSS } from "@/components/Typographies";
import { colors } from "@/styles/colors";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px 16px;
`;

export const ArtworkCount = styled.span`
  ${Normal14CSS}
  color: ${colors.gray700};
  text-align: end;
`;

export const LinkPreviewCardWrapper = styled.div`
  margin-bottom: 16px;
`;
