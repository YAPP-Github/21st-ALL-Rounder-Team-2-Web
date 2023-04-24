import styled from "styled-components";
import { DatePicker as AntdDatePicker } from "antd-mobile";
import { Bold18CSS, Medium16CSS } from "../../Typographies";
import { colors } from "@/styles/colors";

export const Wrapper = styled(AntdDatePicker)`
  & .adm-picker-view-column-item[data-selected="true"] {
    color: ${colors.green900};
  }
`;

export const ConfirmButton = styled.span`
  ${Medium16CSS}
  color: ${colors.white};
`;

export const DateLabel = styled.span`
  ${Bold18CSS}
`;
