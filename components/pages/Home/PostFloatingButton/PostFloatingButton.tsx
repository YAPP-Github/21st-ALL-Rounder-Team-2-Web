import React from "react";
import { IconButton } from "../../../ui/Button/IconButton/IconButton";
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
        }}
      />
    </S.Wrapper>
  );
};

export default PostFloatingButton;
