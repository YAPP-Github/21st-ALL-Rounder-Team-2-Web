import styled from "styled-components";
import { DatePickerView as AntdDatePickerView } from "antd-mobile";
import { Bold18CSS, Medium16CSS, Normal18CSS } from "../../Typographies";
import { colors } from "@/styles/colors";

export const Wrapper = styled.div<{ isOpen?: boolean }>`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${colors.overlay};
  box-shadow: 0px 2px 80px rgba(0, 0, 0, 0.5);
  border-radius: 24px 24px 0px 0px;
  z-index: 1000;
  animation: ${({ isOpen }) => (isOpen ? "slideup" : "slidedown")} 250ms forwards;
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const DatePicker = styled(AntdDatePickerView)`
  height: 200px !important;
  background: ${colors.overlay} !important;
  color: ${colors.gray700};
  ${Normal18CSS};

  & .adm-picker-view-column-item[data-selected="true"] {
    ${Bold18CSS}
    color: ${colors.green900};
  }

  & .adm-picker-view-mask-top,
  .adm-picker-view-mask-bottom {
    background: transparent;
    -webkit-mask: none;
  }

  & .adm-picker-view-mask-middle {
    border: none;
  }

  & > .adm-picker-view-column {
    position: relative;
  }

  & > .adm-picker-view-column-item {
    height: 27px !important;
  }

  & > .adm-picker-view-column:first-child::after {
    content: "";
    position: absolute;
    right: 0;
    bottom: 90px;
    width: 0;
    height: 60px;
    border: 0.8px solid ${colors.gray900};
  }
`;

export const ConfirmButton = styled.span`
  ${Medium16CSS}
  color: ${colors.white};
  padding: 24px 20px;
`;

export const DateLabel = styled.span`
  ${Normal18CSS}
`;
