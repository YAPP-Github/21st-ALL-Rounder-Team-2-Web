"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Loading } from "@/components/Loading/Loading";
import { useTimeout } from "@/hooks/useTimeout";
import { sendMessage } from "@/libs/message/message";
import * as S from "./Fallback.styles";

export const UnauthorizedErrorFallback = () => {
  const [isTimeout, setIsTimeout] = useState(false);
  const router = useRouter();

  useEffect(() => {
    sendMessage(["REQUEST_REFRESH_TOKEN"]);
  }, []);

  useTimeout(() => {
    setIsTimeout(true);
  }, 10000);

  return isTimeout ? (
    <S.Wrapper>
      <S.Description>재로그인에 실패했습니다</S.Description>
      <S.RetryButton onClick={() => router.refresh()}>다시 시도하기</S.RetryButton>
    </S.Wrapper>
  ) : (
    <S.Wrapper>
      <Loading />
    </S.Wrapper>
  );
};
