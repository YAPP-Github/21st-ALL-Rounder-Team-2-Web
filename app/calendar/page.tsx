"use client";

import React, { Suspense, useCallback, useMemo, useState } from "react";
import * as S from "./page.styles";
import NavigationBar from "@/components/ui/NavigationBar/NavigationBar";
import Calendar from "@/components/pages/Calendar/Calendar/Calendar";
import "antd-mobile/bundle/style.css";
import { toYYYYMMDD } from "@/utils/datetime";

export default function PageWrapper() {
  return (
    <Suspense fallback={null}>
      <Page />
    </Suspense>
  );
}

function Page() {
  const bgImages = {
    [toYYYYMMDD()]: "https://picsum.photos/358"
  }
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
