import styled from "styled-components";
import { Calendar as AntdCalendar } from "antd-mobile";
import { Medium14CSS, Medium15CSS, Normal14CSS, SemiBold24CSS } from "@/components/ui/Typographies";
import Icon from "@/components/ui/Icon/Icon/Icon";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #1F1F1F;
`;

export const YearMonthButton = styled.button`
  display: flex;
  flex-direction: column;
`;

export const YearLabel = styled.div`
  ${Medium15CSS}
  color: #FFFFFF;
  margin-bottom: 12px;
`;

export const CalendarLabel = styled.div`
  ${SemiBold24CSS}
  display: flex;
  flex-direction: row;
  color: #FFFFFF;
  margin-bottom: 24px;
`;

export const CalendarHighlightLabel = styled.span`
  color: #E1FCAD;
`;

export const ArrowDownIcon = styled.span`
  margin-left: 8px;
`;

export const Calendar = styled(AntdCalendar)`
  & .adm-calendar-header {
    display: none;
  }
  & .adm-calendar-mark {
    padding: 0;
    border-bottom: 0;
  }
  & .adm-calendar-mark-cell {
    ${Normal14CSS}
    color: #fff;
    padding-left: 0px;
    padding-right: 0px;
  }
  & .adm-calendar-cells {
    padding: 0;
  }
  & .adm-calendar-cell {
    height: 80px;
    justify-content: flex-start;
    padding-left: 0px;
    padding-right: 0px;
  }
`;

export const DateLabel = styled.div`
  ${Medium14CSS}
  position: relative;
  color: #FFFFFF;
`;


export const DateBackgroundLabel = styled.img`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 12px;
`;