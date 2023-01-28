import QueryClientWrapper from "./QueryClientWrapper";
import StyledComponentsRegistry from "../libs/styled-components";
import { ConfigProvider } from "antd-mobile";
import koKR from "antd-mobile/es/locales/ko-KR";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-prefers-color-scheme="dark">
      <body>
        <ConfigProvider locale={koKR}>
          <StyledComponentsRegistry>
            <QueryClientWrapper>{children}</QueryClientWrapper>
          </StyledComponentsRegistry>
          <div id="overlay-root" />
        </ConfigProvider>
      </body>
    </html>
  );
}
