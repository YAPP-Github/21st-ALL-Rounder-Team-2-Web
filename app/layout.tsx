"use client";

import QueryClientWrapper from "@/libs/react-query";
import StyledComponentsRegistry from "@/libs/styled-components";
import { GlobalStyle } from "@/styles/globals";
import AntdMobileProvider from "@/libs/antd-mobile-provider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-prefers-color-scheme="dark">
      <head>
        <link
          rel="stylesheet"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard.css"
        />
      </head>
      <body>
        <AntdMobileProvider>
          <QueryClientWrapper>
            <StyledComponentsRegistry>
              <>
                <GlobalStyle />
                {children}
              </>
            </StyledComponentsRegistry>
          </QueryClientWrapper>
          <div id="overlay-root" />
        </AntdMobileProvider>
      </body>
    </html>
  );
}
