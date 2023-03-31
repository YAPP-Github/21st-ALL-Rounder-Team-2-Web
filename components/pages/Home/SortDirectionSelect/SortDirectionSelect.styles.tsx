import styled from "styled-components";
import Select from "@/components/ui/Select/Select";
import Icon from "@/components/ui/Icon/Icon/Icon";

export const SelectValue = styled.span`
  margin-right: 4px;
`;

export const SelectList = styled(Select.List)`
  top: 40px;
  right: 8px;
  width: 126px;
`;

export const IconStyled = styled(Icon)<{ $isOpen: boolean }>`
  transition: transform 0.2s;
  transform: ${(props) => (props.$isOpen ? "rotate(180deg)" : "none")};
`;
