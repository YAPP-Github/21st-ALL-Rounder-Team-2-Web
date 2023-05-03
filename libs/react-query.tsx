"use client";

import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useVisibilityChange } from "@/hooks/useVisibilityChange";

export default function QueryClientWrapper({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 0,
            refetchOnWindowFocus: false,
            staleTime: 20 * 1000,
          },
        },
      })
  );

  const invalidateAllQueries = () => {
    queryClient.invalidateQueries();
  };

  useVisibilityChange({ onVisible: invalidateAllQueries });

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
