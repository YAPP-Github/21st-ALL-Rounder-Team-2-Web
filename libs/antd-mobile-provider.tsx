"use client";

import React from "react";
import { ConfigProvider } from "antd-mobile";
import koKR from "antd-mobile/es/locales/ko-KR";

export default function AntdMobileProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ConfigProvider locale={koKR}>{children}</ConfigProvider>;
}
