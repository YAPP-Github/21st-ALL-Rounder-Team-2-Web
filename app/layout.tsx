import QueryClientWrapper from "./QueryClientWrapper";
import StyledComponentsRegistry from "../libs/styled-components";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <QueryClientWrapper>{children}</QueryClientWrapper>
        </StyledComponentsRegistry>
        <div id="overlay-root" />
      </body>
    </html>
  );
}
