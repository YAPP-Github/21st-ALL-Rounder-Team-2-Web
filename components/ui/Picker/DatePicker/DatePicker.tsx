import React, { useCallback } from "react";
import { DatePicker as AntdDatePicker } from "antd-mobile";
import { PickerDate } from "antd-mobile/es/components/date-picker/util";

import * as S from "./DatePicker.styles";

export interface Props {
  className?: string;
  defaultValue?: PickerDate | null | undefined
  open: boolean;
  onClose: () => void;
  onConfirm: (val: PickerDate) => void;
}

export const DatePicker = (props: Props) => {
  const { className, defaultValue, open, onClose, onConfirm } = props;

  const labelRenderer = useCallback((type: string, data: number) => {
    switch (type) {
      case 'year':
        return data + '년'
      case 'month':
        return data + '월'
      default:
        return data
    }
  }, [])

  return (
    <S.Wrapper className={className}>
      <AntdDatePicker
        defaultValue={defaultValue}
        title=""
        visible={open}
        onClose={onClose}
        onConfirm={onConfirm}
        precision="month"
        confirmText="확인"
        cancelText="취소"
        renderLabel={labelRenderer}
      />
    </S.Wrapper>
  );
};

export default DatePicker;
