import Link from "next/link";

import type { Locale } from "@/lib/site";

type FooterProps = {
  locale: Locale;
  releaseLabel: string;
  releaseHref: string;
  releaseText: string;
  privacyText: string;
  termsText: string;
  refundText: string;
  supportEmail: string;
  currentVersion: string;
  releaseDate: string;
};

export function Footer({
  locale,
  releaseLabel,
  releaseHref,
  releaseText,
  privacyText,
  termsText,
  refundText,
  supportEmail,
  currentVersion,
  releaseDate
}: FooterProps) {
  const summary =
    locale === "zh"
      ? `${releaseLabel}: ${releaseDate} · 版本 ${currentVersion}`
      : `${releaseLabel}: ${releaseDate} · Version ${currentVersion}`;

  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <p className="eyebrow">oLauncher</p>
        <p>{summary}</p>
      </div>
      <div className="footer-links">
        <Link href={releaseHref}>{releaseText}</Link>
        <Link href={`/${locale}/privacy`}>{privacyText}</Link>
        <Link href={`/${locale}/terms`}>{termsText}</Link>
        <Link href={`/${locale}/refund`}>{refundText}</Link>
        <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
      </div>
    </footer>
  );
}
