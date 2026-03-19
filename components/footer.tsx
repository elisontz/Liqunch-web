import Link from "next/link";

import type { Locale } from "@/lib/site";

type FooterProps = {
  locale: Locale;
  releaseLabel: string;
  releaseHref: string;
  releaseText: string;
  privacyText: string;
  termsText: string;
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
  supportEmail,
  currentVersion,
  releaseDate
}: FooterProps) {
  return (
    <footer className="site-footer">
      <div>
        <p className="eyebrow">oLauncher</p>
        <p>
          {releaseLabel}: {releaseDate}
        </p>
        <p>Version {currentVersion}</p>
      </div>
      <div className="footer-links">
        <Link href={releaseHref}>{releaseText}</Link>
        <Link href={`/${locale}/privacy`}>{privacyText}</Link>
        <Link href={`/${locale}/terms`}>{termsText}</Link>
        <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
      </div>
    </footer>
  );
}
