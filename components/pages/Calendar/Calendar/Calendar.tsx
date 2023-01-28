import UICalendar from "@/components/ui/Calendar/Calendar/Calendar";
import NavigationBar from "@/components/ui/NavigationBar/NavigationBar";
import React from "react";
import * as S from "./Calendar.styles";

export interface Props {
  className?: string;
}

export const Calendar = (props: Props) => {
  const { className } = props;

  const handleGoBackClick = () => {};

  return (
    <S.Wrapper className={className}>
      <NavigationBar
        goBack={{ name: "ArrowLeftIcon", size: 24 }}
        onGoBackClick={handleGoBackClick}
      />
      <S.Content>
        <UICalendar />
      </S.Content>
    </S.Wrapper>
  );
};

export default Calendar;
