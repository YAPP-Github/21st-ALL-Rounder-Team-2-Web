import React, { useCallback } from "react";
import { PickerDate } from "antd-mobile/es/components/date-picker/util";

import * as S from "./DatePicker.styles";

export interface Props {
  className?: string;
  defaultValue?: PickerDate | null | undefined;
  open: boolean;
  onClose: () => void;
  onConfirm: (val: PickerDate) => void;
}

export const DatePicker = (props: Props) => {
  const { className, defaultValue, open, onClose, onConfirm } = props;

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

  return (
    <S.Wrapper
      className={className}
      defaultValue={defaultValue}
      title=""
      visible={open}
      onClose={onClose}
      onConfirm={onConfirm}
      precision="month"
      confirmText={<S.ConfirmButton>확인</S.ConfirmButton>}
      cancelText=""
      renderLabel={labelRenderer}
    />
  );
};

export default DatePicker;
