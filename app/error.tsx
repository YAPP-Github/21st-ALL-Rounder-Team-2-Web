"use client";

import { UnauthorizedError } from "@/components/ErrorFallback/UnauthorizedError";
import { UnknownError } from "@/components/ErrorFallback/UnknownError";
import { isAxiosError } from "axios";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  if (isAxiosError(error) && error?.response?.status === 401) return <UnauthorizedError />;

  return <UnknownError reset={reset} />;
}
