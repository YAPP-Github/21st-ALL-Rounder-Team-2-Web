"use client";

import React, { useCallback } from "react";
import * as S from "./AppBar.styles";
import Icon from "@/components/Icon/Icon/Icon";
import { IconButton } from "@/components/Button/IconButton/IconButton";
import { sendMessage } from "@/libs/message/message";

interface Props {
  className?: string;
}

export const AppBar = (props: Props) => {
  const { className } = props;

  const handleMy = useCallback(() => {
    sendMessage(["NAVIGATE_TO_MY", { userId: "1" }]);
  }, []);

  return (
    <S.Wrapper className={className}>
      <S.LogoGroup>
        <IconButton
          iconProps={{
            name: "ARTIEIcon",
          }}
        />
      </S.LogoGroup>
      <S.MenuGroup>
        <S.IconLink href="/calendar">
          <Icon name="CalendarIcon" />
        </S.IconLink>
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
