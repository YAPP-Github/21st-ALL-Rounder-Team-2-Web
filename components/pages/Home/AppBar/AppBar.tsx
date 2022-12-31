import React, { useCallback } from "react";
import * as S from "./AppBar.styles";
import IconButton from "../../../ui/Button/IconButton/IconButton";
import { sendMessage } from "../../../../libs/message/message";

interface Props {
  className?: string;
}

export const AppBar = (props: Props) => {
  const handleBell = useCallback(() => {
    sendMessage(["NAVIGATE_TO_BELL"]);
  }, []);

  const handleCalendar = useCallback(() => {
    sendMessage(["NAVIGATE_TO_CALENDAR"]);
  }, []);

  const handleMy = useCallback(() => {
    sendMessage(["NAVIGATE_TO_MY", { userId: "1" }]);
  }, []);

  return (
    <S.Wrapper>
      <S.LogoGroup>
        <IconButton
          iconProps={{
            name: "ARTIEIcon",
          }}
        />
      </S.LogoGroup>
      <S.MenuGroup>
        <IconButton
          iconProps={{
            name: "BellIcon",
          }}
          onClick={handleBell}
        />
        <IconButton
          iconProps={{
            name: "CalendarIcon",
          }}
          onClick={handleCalendar}
        />
        <IconButton
          iconProps={{
            name: "UserIcon",
          }}
          onClick={handleMy}
        />
      </S.MenuGroup>
    </S.Wrapper>
  );
};
