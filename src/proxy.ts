import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function runs on every request
export function proxy(request: NextRequest) {
  // Example: simple security header
  const response = NextResponse.next();
  response.headers.set("X-Frame-Options", "DENY");
  return response;
}

// Optional: configure which paths proxy applies to
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
