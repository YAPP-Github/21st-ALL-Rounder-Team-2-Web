"use client";

import Icon from "@/components/Icon/Icon/Icon";
import React, { useRef, useCallback, useEffect, useState } from "react";
import DatePicker from "@/components/Picker/DatePicker/DatePicker";
import * as S from "./Calendar.styles";
import { PickerDate } from "antd-mobile/es/components/date-picker/util";
import { CalendarRef } from "antd-mobile";
import { toYYYYMMDD } from "@/utils/datetime";

export interface Props {
  className?: string;
  value?: Date | null;
  yearMonth?: Date;
  postsByMontly?: Record<string, { postId: number; imageURL?: string; postNum?: number }>;
  onYearMonth?: (date: Date) => void;
  onSelectedDate?: (date: Date | null) => void;
}

export const Calendar = (props: Props) => {
  const { className, value = new Date(), yearMonth = new Date(), postsByMontly, onYearMonth, onSelectedDate } = props;
  const calendarRef = useRef<CalendarRef | null>(null);
  const [showPicker, setShowPicker] = useState(false);
  const yearMonthKey = `${yearMonth.getFullYear()}${yearMonth.getMonth()}`;

  useEffect(() => {
    if (!yearMonth) {
      return;
    }
    calendarRef?.current?.jumpTo?.({
      year: yearMonth.getFullYear(),
      month: yearMonth.getMonth() + 1,
    });
  }, [yearMonthKey]);

  const handleOpenPicker = useCallback(() => {
    setShowPicker(true);
  }, []);

  const handleClosePicker = useCallback(() => {
    setShowPicker(false);
  }, []);

  const handleConfirmPicker = useCallback(
    (val: PickerDate) => {
      onYearMonth?.(val);
    },
    [onYearMonth]
  );

  return (
    <>
      <S.Wrapper>
        <S.YearMonthButton onClick={handleOpenPicker}>
          <S.YearLabel>{yearMonth.getFullYear()}년</S.YearLabel>
          <S.CalendarLabel>
            <S.CalendarHighlightLabel>{yearMonth.getMonth() + 1}월</S.CalendarHighlightLabel>의 전시 기록장
            <S.ArrowDownIcon>
              <Icon name="ArrowDown2Icon" size={24} color={"#fff"} />
            </S.ArrowDownIcon>
          </S.CalendarLabel>
        </S.YearMonthButton>
        <S.Calendar
          ref={calendarRef}
          className={className}
          selectionMode="single"
          allowClear={false}
          shouldDisableDate={(date) => date.getMonth() !== yearMonth.getMonth()}
          value={value}
          renderDate={(date) => {
            const post = postsByMontly?.[toYYYYMMDD(date)];
            const postNum = post?.postNum ?? 0;
            return (
              <>
                <S.DateLabel>{date.getDate()}</S.DateLabel>
                {post && (
                  <>
                    <S.DateBackgroundLabel src={post.imageURL} />
                    {postNum > 1 && (
                      <S.ExhibitCount>
                        <span>+{postNum - 1}</span>
                      </S.ExhibitCount>
                    )}
                  </>
                )}
              </>
            );
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
