import { NextResponse, type NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const acceptLanguage = request.headers.get("accept-language") || "";

  // Parse Accept-Language header with q-values
  const langs = acceptLanguage
    .split(",")
    .map((lang) => {
      const [code, q] = lang.trim().split(";q=");
      return { code: code.trim().toLowerCase(), q: q ? parseFloat(q) : 1.0 };
    })
    .sort((a, b) => b.q - a.q);

  let locale = "zh"; // default
  for (const { code } of langs) {
    if (code.startsWith("zh")) { locale = "zh"; break; }
    if (code.startsWith("en")) { locale = "en"; break; }
  }

  return NextResponse.redirect(new URL(`/${locale}`, request.url));
}
