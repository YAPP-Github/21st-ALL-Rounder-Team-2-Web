"use client";

import { IconButton } from "@/components/Button/IconButton/IconButton";
import { colors } from "@/styles/colors";
import { sendMessage } from "@/libs/message/message";
import * as S from "./PostFloatingButton.styles";

export interface Props {
  className?: string;
}

export const PostFloatingButton = (props: Props) => {
  const { className } = props;

  const handleEditButton = (e: React.MouseEvent) => {
    sendMessage(["NAVIGATE_TO_EDIT"]);
  };

  return (
    <S.Wrapper className={className}>
      <IconButton
        iconProps={{
          name: "PlusIcon",
          color: colors.black2,
          size: 36,
        }}
        onClick={handleEditButton}
      />
    </S.Wrapper>
  );
};

export default PostFloatingButton;
