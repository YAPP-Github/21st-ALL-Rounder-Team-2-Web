"use client";

import React, { Suspense, useCallback, useMemo, useState } from "react";
import * as S from "./page.styles";
import Calendar from "./components/Calendar/Calendar";
import "antd-mobile/bundle/style.css";
import { getDateByYearAndMonth, today, toYYYYMMDD } from "@/utils/datetime";
import { getPostsByMonthly } from "@/apis/calendar";
import { useQuery } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "qs";
import { sendMessage } from "@/libs/message/message";
import { ExhibitSelectModal } from "./components/ExhibitSelectModal/ExhibitSelectModal";
import useOverlay from "@/hooks/useOverlay";

export default function PageWrapper() {
  return (
    <Suspense fallback={null}>
      <Page />
    </Suspense>
  );
}

function Page() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const year = searchParams.get("year") ?? today().getFullYear();
  const yearNum = Number(year);
  const month = searchParams.get("month") ?? today().getMonth();
  const monthNum = Number(month) - 1;
  const [value, setValue] = useState(new Date());
  const { isOpen, open, close } = useOverlay();

  const { data: postsByMontly } = useQuery({
    queryKey: ["postsByMontly", { yearNum, monthNum }],
    queryFn: () =>
      getPostsByMonthly({
        year: yearNum,
        month: monthNum + 1,
      }),
    select: (data) => ({
      ...data?.reduce((acc: { [postDate: string]: { postId: number; imageURL?: string; postNum?: number } }, cur) => {
        const { postDate } = cur;
        acc[postDate] = { ...cur };
        return acc;
      }, {}),
    }),
    suspense: true,
  });

  const handleGoBackClick = useCallback(() => {
    sendMessage(["GO_BACK"]);
  }, []);

  const handleYearMonth = useCallback(
    (date: Date) => {
      const queryParams = qs.stringify({
        year: date.getFullYear(),
        month: date.getMonth() + 1,
      });
      router.replace(`/calendar?${queryParams}`);
    },
    [router]
  );

  const handleSelectedDate = useCallback(
    (date: Date | null) => {
      if (date && postsByMontly?.[toYYYYMMDD(date)]) {
        setValue(date);
        const { postId, postNum = 1 } = postsByMontly[toYYYYMMDD(date)];
        postNum > 1 ? open() : router.push(`exhibition/${postId}`);
      }
    },
    [postsByMontly, open, router]
  );

  return (
    <>
      <S.Wrapper>
        <S.CalendarNavigationBar goBack={{ name: "ArrowLeftIcon", size: 24 }} onGoBackClick={handleGoBackClick} />
        <S.Content>
          <Calendar
            value={value}
            yearMonth={getDateByYearAndMonth(yearNum, monthNum)}
            postsByMontly={postsByMontly}
            onYearMonth={handleYearMonth}
            onSelectedDate={handleSelectedDate}
          />
        </S.Content>
      </S.Wrapper>
      {isOpen && <ExhibitSelectModal selectedDate={value} onClose={close} />}
    </>
  );
}
