"use client";

import { useQueryClient } from "@tanstack/react-query";
import { sendMessage } from "@/libs/message/message";
import { PostDetailInfo } from "@/__generate__/post";
import * as S from "./NavigationBar.styles";

type Props = {
  exhibitionId: number;
};

export const NavigationBar = ({ exhibitionId }: Props) => {
  const handleGoBackClick = () => {
    sendMessage(["GO_BACK"]);
  };

  const queryClient = useQueryClient();
  const handleEditClick = () => {
    const postInfo = queryClient.getQueryData<PostDetailInfo>(["postInfo", exhibitionId]);
    if (!postInfo) return;
    sendMessage(["NAVIGATE_TO_EXHIBIT_EDIT", postInfo]);
  };

  return <S.NavigationBarStyled onGoBackClick={handleGoBackClick} onEditClick={handleEditClick} />;
};
