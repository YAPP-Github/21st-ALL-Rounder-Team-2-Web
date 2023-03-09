import styled from "styled-components";
import { Calendar as AntdCalendar } from "antd-mobile";
import { Medium14CSS, Medium15CSS, Normal14CSS, SemiBold24CSS } from "@/components/ui/Typographies";
import { colors } from "@/styles/colors";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.bgColor};
`;

export const YearMonthButton = styled.button`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-right: 20px;
`;

export const YearLabel = styled.div`
  ${Medium15CSS}
  color: ${colors.white};
  margin-bottom: 12px;
`;

export const CalendarLabel = styled.div`
  ${SemiBold24CSS}
  display: flex;
  flex-direction: row;
  color: ${colors.white};
  margin-bottom: 24px;
`;

export const CalendarHighlightLabel = styled.span`
  color: ${colors.green900};
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
    color: ${colors.white};
    padding-left: 0px;
    padding-right: 0px;
  }
  & .adm-calendar-cells {
    padding: 0;
  }
  & .adm-calendar-cell {
    position: relative;
    height: 80px;
    justify-content: flex-start;
    padding-left: 0px;
    padding-right: 0px;
  }
  & .adm-calendar-cell.adm-calendar-cell-selected.adm-calendar-cell.adm-calendar-cell-selected {
    background: transparent;
  }
  & .adm-calendar-cell-disabled {
    visibility: hidden;
  }
`;

export const DateLabel = styled.div`
  position: relative;
  ${Medium14CSS}
  color: ${colors.white};
  z-index: 10;
`;

export const ExhibitCount = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 4px;
  bottom: 5px;
  width: 24px;
  height: 24px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 50%;

  z-index: 10;

  & > span {
    ${Normal14CSS}
    color: ${colors.white};
  }
`;

export const DateBackgroundLabel = styled.img`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 12px;
  object-fit: cover;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
