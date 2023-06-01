import { headers, cookies } from "next/headers";
import { PropsWithChildren } from "react";
import { axiosInstance } from "@/libs/axios";

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const headerInstance = headers();
  const cookieStore = cookies();
  const accessToken = headerInstance.get("authorization") ?? cookieStore.get("accessToken")?.value;
  axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

  if (!accessToken) {
    // unauthorized
  }

  return <>{children}</>;
};
