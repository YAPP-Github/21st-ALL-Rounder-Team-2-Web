import { AuthProvider } from "@/components/AuthProvider/AuthProvider";
import { ClientProvider } from "./provider.client";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-prefers-color-scheme="dark">
      <head>
        <link
          rel="stylesheet"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard-dynamic-subset.css"
        />
      </head>
      <body>
        <AuthProvider>
          <ClientProvider>{children}</ClientProvider>
        </AuthProvider>
        <div id="overlay-root" />
      </body>
    </html>
  );
}
