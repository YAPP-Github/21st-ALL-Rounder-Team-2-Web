import React from "react";
import * as S from "./DatePicker.styles";

export interface Props {
  className?: string;
}

export const DatePicker = (props: Props) => {
  const { className } = props;
  return <S.Wrapper className={className}>hello world</S.Wrapper>;
}

export default DatePicker;
