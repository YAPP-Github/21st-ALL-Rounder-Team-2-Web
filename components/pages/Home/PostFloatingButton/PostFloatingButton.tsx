import React from "react";
import { IconButton } from "../../../ui/Button/IconButton/IconButton";
import { colors } from "../../../../styles/colors";
import * as S from "./PostFloatingButton.styles";

export interface Props {
  className?: string;
}

export const PostFloatingButton = (props: Props) => {
  return (
    <S.Wrapper>
      <IconButton
        iconProps={{
          name: "PlusIcon",
          color: colors.black2,
          size: 36,
        }}
      />
    </S.Wrapper>
  );
};

export default PostFloatingButton;
