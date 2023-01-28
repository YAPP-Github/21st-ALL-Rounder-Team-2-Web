import React from "react";
import { Calendar as AntdCalendar } from 'antd-mobile'
import * as S from "./Calendar.styles";

export interface Props {
  className?: string;
}

export const Calendar = (props: Props) => {
  const { className } = props;
  return (
    <S.Wrapper className={className}>
      <AntdCalendar
        renderDate={(date) => {
          return (
            <div>
              {date.toDateString()}
            </div>
          );
        }}
      />
    </S.Wrapper>
  );
};

export default Calendar;
