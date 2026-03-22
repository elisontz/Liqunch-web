import { NextRequest, NextResponse } from "next/server";

const locales = ["zh", "en"];
const defaultLocale = "zh";

function getPreferredLocale(acceptLanguage: string | null): string {
  if (!acceptLanguage) return defaultLocale;
  
  // Parse the Accept-Language header to extract language priorities
  // e.g. "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
  const langs = acceptLanguage
    .split(",")
    .map((lang) => {
      const [code, q] = lang.trim().split(";q=");
      return { code: code.trim().toLowerCase(), q: q ? parseFloat(q) : 1.0 };
    })
    .sort((a, b) => b.q - a.q);

  for (const { code } of langs) {
    if (code.startsWith("zh")) return "zh";
    if (code.startsWith("en")) return "en";
  }

  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only handle the root path - let everything else pass through normally
  if (pathname !== "/") {
    return NextResponse.next();
  }

  const acceptLanguage = request.headers.get("accept-language");
  const preferredLocale = getPreferredLocale(acceptLanguage);

  return NextResponse.redirect(new URL(`/${preferredLocale}`, request.url));
}

export const config = {
  // Only match the exact root path
  matcher: ["/"],
};
