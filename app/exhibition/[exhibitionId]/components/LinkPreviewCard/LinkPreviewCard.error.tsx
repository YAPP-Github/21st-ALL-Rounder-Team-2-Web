"use client";

import { IconButton } from "@/components/Button/IconButton/IconButton";
import { sendMessage } from "@/libs/message/message";
import * as S from "./LinkPreviewCard.styles";

type Props = {
  link: string;
};

export const LinkPreviewCardError = ({ link }: Props) => {
  const handleClickLink = () => {
    sendMessage(["OPEN_NEW_WINDOW", { url: link }]);
  };

  return (
    <S.Wrapper>
      <S.Info>
        <S.Url>{link}</S.Url>
      </S.Info>
      <IconButton iconProps={{ name: "ChevronRightIcon", size: 24 }} onClick={handleClickLink} />
    </S.Wrapper>
  );
};
