import styled, { css } from "styled-components";
import { Medium14CSS } from "@/components/ui/Typographies";
import { colors } from "@/styles/colors";

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  margin-bottom: 10px;
`;

export const SelectTrigger = styled.button`
  display: flex;
  align-items: center;
  ${Medium14CSS}
  color: ${colors.gray400};
`;

export const SelectList = styled.ul<{ $align: "start" | "center" | "end" }>`
  position: absolute;
  ${(props) => {
    switch (props.$align) {
      case "start":
        return css`
          left: 0;
        `;
      case "end":
        return css`
          right: 0;
        `;
      default:
        return css`
          left: 50%;
          transform: translateX(-50%);
        `;
    }
  }}
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 4px 0;
  background: ${colors.overlay};
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.12);
  border-radius: 12px;
`;

export const SelectItem = styled.li`
  width: 100%;
  padding: 12px 16px;
  ${Medium14CSS}
  border-bottom: 0.4px solid ${colors.gray700};
  color: ${colors.gray400};

  &:nth-last-child(1) {
    border-bottom: none;
  }
`;
