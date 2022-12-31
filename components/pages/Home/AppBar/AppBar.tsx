import React from 'react'
import * as S from "./AppBar.styles"
import { ReactComponent as ARTIEIcon } from "../../../ui/Icon/ARTIE.svg"
import { ReactComponent as BellIcon } from "../../../ui/Icon/bell.svg"
import { ReactComponent as CalendarIcon } from "../../../ui/Icon/calendar.svg"
import { ReactComponent as UserIcon } from "../../../ui/Icon/user.svg"

interface Props {
  className?: string;
}

export const HomeAppBar = (props: Props) => {
  return (
    <S.Wrapper>
      <S.LogoGroup>
        <ARTIEIcon />
      </S.LogoGroup>
      <S.MenuGroup>
        <BellIcon />
        <CalendarIcon />
        <UserIcon />
      </S.MenuGroup>
    </S.Wrapper>
  )
}
