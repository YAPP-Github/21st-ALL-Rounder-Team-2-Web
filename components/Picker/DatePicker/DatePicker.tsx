import React, { useCallback, useState } from "react";
import Dimmed from "@/components/Dimmed/Dimmed";
import { AnimatePresence } from "@/components/AnimatePresence/AnimatePresence";

import * as S from "./DatePicker.styles";

export interface Props {
  className?: string;
  defaultValue?: Date | undefined;
  open: boolean;
  onClose: () => void;
  onConfirm: (val: Date) => void;
}

export const DatePicker = (props: Props) => {
  const { className, defaultValue = new Date(), open, onClose, onConfirm } = props;
  const [selectedDate, setSelectedDate] = useState(defaultValue);

  const labelRenderer = useCallback((type: string, data: number) => {
    switch (type) {
      case "year":
        return <S.DateLabel>{data + "년"}</S.DateLabel>;
      case "month":
        return <S.DateLabel>{data + "월"}</S.DateLabel>;
      default:
        return data;
    }
  }, []);

  const handleChangeDate = (date: Date) => {
    setSelectedDate(date);
  };

  const handleConfirm = () => {
    onConfirm(selectedDate);
  };

  return (
    <>
      {open && <Dimmed onClick={onClose} />}
      <AnimatePresence isOpen={open}>
        <S.Wrapper>
          <S.Header>
            <S.ConfirmButton onClick={handleConfirm}>완료</S.ConfirmButton>
          </S.Header>
          <S.DatePicker
            className={className}
            defaultValue={defaultValue}
            onChange={handleChangeDate}
            precision="month"
            renderLabel={labelRenderer}
            max={new Date()}
            min={new Date(2022, 0)}
          />
        </S.Wrapper>
      </AnimatePresence>
    </>
  );
};

export default DatePicker;
