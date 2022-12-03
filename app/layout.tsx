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
        <QueryClientWrapper>
          <RootStyleRegistry>{children}</RootStyleRegistry>
        </QueryClientWrapper>
      </body>
    </html>
  );
}
