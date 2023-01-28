import styled from "styled-components";
import { DatePicker as AntdDatePicker } from "antd-mobile";
import { Bold18CSS, Medium16CSS } from "../../Typographies";

export const Wrapper = styled(AntdDatePicker)`
  & .adm-picker-view-column-item[data-selected="true"] {
    color: #E1FCAD;
  }
`;

export const ConfirmButton = styled.span`
  ${Medium16CSS}
  color: #FFFFFF;
`;

export const DateLabel = styled.span`
  ${Bold18CSS}
`;
