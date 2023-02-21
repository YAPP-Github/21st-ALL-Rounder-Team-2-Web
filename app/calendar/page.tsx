"use client";

import React, { Suspense, useCallback, useMemo, useState } from "react";
import * as S from "./page.styles";
import NavigationBar from "@/components/ui/NavigationBar/NavigationBar";
import Calendar from "@/components/pages/Calendar/Calendar/Calendar";
import "antd-mobile/bundle/style.css";
import { getDateByYearAndMonth, today, toYYYYMMDD } from "@/utils/datetime";
import { getPostsByMonthly } from "@/apis/calendar";
import { useQuery } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "qs";
import { sendMessage } from "@/libs/message/message";

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
  const [value, setValue] = useState<Date | null>(new Date());

  const { data: postsByMontly } = useQuery({
    queryKey: ["postsByMontly"],
    queryFn: () =>
      getPostsByMonthly({
        year: yearNum,
        month: monthNum + 1,
      }),
    suspense: true,
  });

  const bgImages = {
    [toYYYYMMDD()]: { imageURL: "https://picsum.photos/358" },
    ...postsByMontly?.reduce?.((res, item) => {
      const { year, month, day } = item;
      return {
        ...res,
        [`${year}${month}${day}`]: {
          imageURL: item.imageURL,
        },
      };
    }, {}),
  };

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

  const handleSelectedDate = useCallback((date: Date | null) => {
    setValue(date);
    date && handleYearMonth(date)
  }, [handleYearMonth]);

  return (
    <S.Wrapper>
      <S.CalendarNavigationBar
        goBack={{ name: "ArrowLeftIcon", size: 24 }}
        onGoBackClick={handleGoBackClick}
      />
      <S.Content>
        <Calendar
          value={value}
          yearMonth={getDateByYearAndMonth(yearNum, monthNum)}
          bgImages={bgImages}
          onYearMonth={handleYearMonth}
          onSelectedDate={handleSelectedDate}
        />
      </S.Content>
    </S.Wrapper>
  );
}
