import { NextRequest, NextResponse } from "next/server";
import { setCookieLocaleFromBrowser } from "@/i18n/utils";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const cookieLocale = request.cookies.get("locale")?.value;
  if (!cookieLocale) {
    setCookieLocaleFromBrowser(request, response);
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
