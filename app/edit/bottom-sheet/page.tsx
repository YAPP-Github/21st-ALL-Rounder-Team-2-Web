"use client";

import React, { Suspense, useCallback, useMemo, useState } from "react";
import {
  EditBottomSheet,
  FormData,
} from "../../../components/pages/EditBottomSheet/EditBottomSheet/EditBottomSheet";
import { sendMessage } from "../../../libs/message/message";
import * as S from "./page.styles";

export default function EditBottomSheetWrapper() {
  return (
    <Suspense fallback={null}>
      <Page />
    </Suspense>
  );
}

function Page() {
  const handleSave = useCallback((e: React.MouseEvent, form: FormData) => {
    sendMessage(["EDIT_BOTTOM_SHEET_SAVE", form]);
  }, []);

  const handleContinue = useCallback((e: React.MouseEvent, form: FormData) => {
    sendMessage(["EDIT_BOTTOM_SHEET_CONTINUE", form]);
  }, []);

  return (
    <S.Wrapper>
      <EditBottomSheet onSave={handleSave} onContinue={handleContinue} />
    </S.Wrapper>
  );
}
