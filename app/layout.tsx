
import QueryClientWrapper from "./QueryClientWrapper";
import StyledComponentsRegistry from "../libs/styled-components";
import AntdMobileProvider from "@/libs/antd-mobile-provider";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-prefers-color-scheme="dark">
      <body>
        <AntdMobileProvider>
          <StyledComponentsRegistry>
            <QueryClientWrapper>{children}</QueryClientWrapper>
          </StyledComponentsRegistry>
          <div id="overlay-root" />
        </AntdMobileProvider>
      </body>
    </html>
  );
}
