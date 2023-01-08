import React from "react";
import { IconButton } from "../../../ui/Button/IconButton/IconButton";
import { colors } from "../../../../styles/colors";
import * as S from "./PostFloatingButton.styles";

export interface Props {
  className?: string;
  onClick: (e: React.MouseEvent) => void
}

export const PostFloatingButton = (props: Props) => {
  const { className, onClick } = props
  return (
    <S.Wrapper className={className}>
      <IconButton
        iconProps={{
          name: "PlusIcon",
          color: colors.black2,
          size: 36,
        }}
        onClick={onClick}
      />
    </S.Wrapper>
  );
};

export default PostFloatingButton;
