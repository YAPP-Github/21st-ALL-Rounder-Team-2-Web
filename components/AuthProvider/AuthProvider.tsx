import { cookies } from "next/headers";
import { PropsWithChildren } from "react";
import { axiosInstance } from "@/libs/axios";
import { UnauthorizedErrorFallback } from "@/components/ErrorFallback/UnauthorizedError";

export const AuthProvider = async ({ children }: PropsWithChildren) => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

  if (!accessToken) return <UnauthorizedErrorFallback />;

  return <>{children}</>;
};
