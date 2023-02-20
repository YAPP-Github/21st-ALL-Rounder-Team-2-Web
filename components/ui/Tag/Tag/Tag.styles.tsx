import styled from "styled-components";
import { colors } from "@/styles/colors";
import { Medium14CSS } from "../../Typographies";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 12px 8px 14px;
  color: ${colors.green900};
  border: 1px solid ${colors.green900};
  border-radius: 4px 24px 24px 4px;
`;

export const TagName = styled.div`
  ${Medium14CSS}
  margin-right: 7px;
`;
