import QueryClientWrapper from "./QueryClientWrapper";
import RootStyleRegistry from "./RootStyleRegistry";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <RootStyleRegistry>
          <QueryClientWrapper>{children}</QueryClientWrapper>
        </RootStyleRegistry>
      </body>
    </html>
  );
}
