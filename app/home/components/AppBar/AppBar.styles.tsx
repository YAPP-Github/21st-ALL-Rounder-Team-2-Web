import styled from "styled-components";
import { colors } from "@/styles/colors";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: ${colors.bgColor};
`;

export const LogoGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const MenuGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;
