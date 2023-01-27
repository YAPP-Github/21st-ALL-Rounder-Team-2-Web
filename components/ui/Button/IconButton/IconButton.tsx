import React from "react";
import * as S from "./IconButton.styles";
import Icon, { Props as IconProps } from "../../Icon/Icon/Icon";

export interface Props {
  className?: string;
  iconProps: IconProps;
  onClick?: (e: React.MouseEvent) => void;
}

export const IconButton = (props: Props) => {
  const { className, iconProps, onClick } = props;
  return (
    <S.Wrapper className={className} onClick={onClick}>
      <Icon {...iconProps} />
    </S.Wrapper>
  );
};
