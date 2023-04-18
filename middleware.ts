import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const authorization = request.headers.get("authorization");
  const accessToken = request.cookies.get("accessToken")?.value;

  if (authorization) {
    const response = NextResponse.next();
    response.cookies.set("accessToken", authorization);
    return response;
  }

  if (!accessToken) {
    // unauthorized
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
