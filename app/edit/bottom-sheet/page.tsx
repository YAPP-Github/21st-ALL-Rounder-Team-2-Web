"use client";

import React, { Suspense, useCallback, useMemo, useState } from "react";
import * as S from "./page.styles";

export default function EditBottomSheetWrapper() {
  return (
    <Suspense fallback={null}>
      <EditBottomSheet />
    </Suspense>
  );
}

function EditBottomSheet() {
  return <S.Wrapper>EditBottomSheet</S.Wrapper>;
}
