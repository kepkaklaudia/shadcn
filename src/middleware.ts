import createIntlMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { locales, defaultLocale, pathnames } from "@/libs/i18n/navigation";

export default async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  console.log(pathname);
  // HANDLING ADMIN PANEL ROUTES
  if (pathname.startsWith("/admin/")) {
    // admin should be authorized and redirrected to login page if was not
    return NextResponse.next();
  }

  // HANDLING LOCALIZED ROUTES
  const handleI18nRouting = createIntlMiddleware({
    locales,
    defaultLocale,
    pathnames,
  });
  const response = handleI18nRouting(request);

  return response;
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
