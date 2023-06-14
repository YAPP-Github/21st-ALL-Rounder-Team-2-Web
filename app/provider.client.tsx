"use client";

import { PropsWithChildren } from "react";
import QueryClientWrapper from "@/libs/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import StyledComponentsRegistry from "@/libs/styled-components";
import { GlobalStyle } from "@/styles/globals";
import AntdMobileProvider from "@/libs/antd-mobile-provider";
import { ToastProvider } from "@/components/Toast/Toast.provider";

export const ClientProvider = ({ children }: PropsWithChildren) => {
  return (
    <AntdMobileProvider>
      <QueryClientWrapper>
        <StyledComponentsRegistry>
          <ToastProvider>
            <GlobalStyle />
            {children}
          </ToastProvider>
        </StyledComponentsRegistry>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientWrapper>
    </AntdMobileProvider>
  );
};
