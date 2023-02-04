"use client";

import React, { Suspense, useCallback, useMemo, useState } from "react";
import * as S from "./page.styles";
import NavigationBar from "@/components/ui/NavigationBar/NavigationBar";
import Calendar from "@/components/pages/Calendar/Calendar/Calendar";
import "antd-mobile/bundle/style.css";
import { today, toYYYYMMDD } from "@/utils/datetime";
import { useRouter } from "next/router";
import { getPostByMonthly } from "@/apis/calendar";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

export default function PageWrapper() {
  return (
    <Suspense fallback={null}>
      <Page />
    </Suspense>
  );
}

function Page() {
  const searchParams = useSearchParams();
  const year = searchParams.get('year') ?? today().getFullYear();
  const month = searchParams.get('month') ?? today().getMonth();
  const bgImages = {
    [toYYYYMMDD()]: { imageURL: "https://picsum.photos/358" },
  };

  const { data: postByMontly } = useQuery({
    queryKey: ["postByMonthly"],
    queryFn: () =>
      getPostByMonthly({
        year: Number(year),
        month: Number(month),
      }),
    suspense: true,
  });

  console.log(postByMontly);

  const handleGoBackClick = () => {};

  return (
    <S.Wrapper>
      <NavigationBar
        goBack={{ name: "ArrowLeftIcon", size: 24 }}
        onGoBackClick={handleGoBackClick}
      />
      <S.Content>
        <Calendar bgImages={bgImages} />
      </S.Content>
    </S.Wrapper>
  );
}
