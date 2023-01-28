import Icon from "@/components/ui/Icon/Icon/Icon";
import React, { useRef, useCallback, useState } from "react";
import DatePicker from "@/components/ui/Picker/DatePicker/DatePicker";
import * as S from "./Calendar.styles";
import { PickerDate } from "antd-mobile/es/components/date-picker/util";
import { CalendarRef } from "antd-mobile";

export interface Props {
  className?: string;
  defaultValue?: Date;
  value?: Date;
  onYearMonth?: (date: Date) => void;
  onSelectedDate?: (date: Date | null) => void;
}

export const Calendar = (props: Props) => {
  const {
    className,
    defaultValue = new Date(),
    value,
    onYearMonth,
    onSelectedDate,
  } = props;
  const calendarRef = useRef<CalendarRef | null>(null);
  const [showPicker, setShowPicker] = useState(false);
  const [yearMonth, setYearMonth] = useState(defaultValue);

  const handleOpenPicker = useCallback(() => {
    setShowPicker(true);
  }, []);

  const handleClosePicker = useCallback(() => {
    setShowPicker(false);
  }, []);

  const handleConfirmPicker = useCallback(
    (val: PickerDate) => {
      const date = new Date(val.getTime());
      setYearMonth(date);
      calendarRef?.current?.jumpTo?.({
        year: date.getFullYear(),
        month: date.getMonth(),
      });
      onYearMonth?.(date);
    },
    [onYearMonth]
  );

  return (
    <>
      <S.Wrapper>
        <S.YearMonthButton onClick={handleOpenPicker}>
          <S.YearLabel>{yearMonth.getFullYear()}년</S.YearLabel>
          <S.CalendarLabel>
            <S.CalendarHighlightLabel>
              {yearMonth.getMonth() + 1}월
            </S.CalendarHighlightLabel>
            의 전시 기록장
            <S.ArrowDownIcon>
              <Icon name="ArrowDown2Icon" size={24} color={"#fff"} />
            </S.ArrowDownIcon>
          </S.CalendarLabel>
        </S.YearMonthButton>
        <S.Calendar
          ref={calendarRef}
          className={className}
          selectionMode="single"
          defaultValue={defaultValue}
          value={value}
          renderDate={(date) => {
            return <S.DateLabel>{date.getDate()}</S.DateLabel>;
          }}
          onChange={onSelectedDate}
        ></S.Calendar>
      </S.Wrapper>
      <DatePicker
        defaultValue={yearMonth}
        open={showPicker}
        onClose={handleClosePicker}
        onConfirm={handleConfirmPicker}
      />
    </>
  );
};

export default Calendar;
