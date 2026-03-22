import { NextRequest, NextResponse } from "next/server";

// Define constants locally to avoid importing from lib/site, which might cause 
// issues in the Edge Runtime on certain platforms if the file is too complex.
const locales = ["zh", "en"];
const defaultLocale = "zh";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the current path already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Root path redirection with language detection
  if (pathname === "/") {
    const acceptLanguage = request.headers.get("accept-language");
    let preferredLocale: string = defaultLocale;

    if (acceptLanguage) {
      // Simple language detection logic
      const languages = acceptLanguage.toLowerCase();
      if (languages.includes("en")) {
        if (languages.includes("zh")) {
          const zhIndex = languages.indexOf("zh");
          const enIndex = languages.indexOf("en");
          preferredLocale = zhIndex < enIndex ? "zh" : "en";
        } else {
          preferredLocale = "en";
        }
      } else if (languages.includes("zh")) {
        preferredLocale = "zh";
      }
    }

    return NextResponse.redirect(new URL(`/${preferredLocale}`, request.url));
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, static, images, etc.)
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.png|.*\\.jpg|.*\\.svg|.*\\.dmg|.*\\.html).*)",
  ],
};
