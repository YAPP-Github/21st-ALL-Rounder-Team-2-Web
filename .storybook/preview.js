// .storybook/preview.js
import React from "react";
import * as NextImage from "next/image";
import { ConfigProvider } from "antd-mobile";
import koKR from "antd-mobile/es/locales/ko-KR";
import { initialize, mswDecorator } from "msw-storybook-addon";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { handlers } from "@/mocks/handlers";
import { GlobalStyle } from "@/styles/globals";
import { ToastProvider } from "../components/Toast/Toast.provider";

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

initialize({ onUnhandledRequest: "bypass" });

const queryClient = new QueryClient();

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    nextjs: {
      appDirectory: true,
    },
    msw: {
      handlers: [...handlers],
    },
  },
  decorators: [
    mswDecorator,
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <ConfigProvider locale={koKR}>
          <ToastProvider>
            <GlobalStyle />
            <Story />
          </ToastProvider>
        </ConfigProvider>
      </QueryClientProvider>
    ),
  ],
};

export default preview;
