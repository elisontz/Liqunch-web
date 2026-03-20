import Link from "next/link";

import type { Locale } from "@/lib/site";

type FooterProps = {
  locale: Locale;
  privacyText: string;
  termsText: string;
  refundText: string;
  contactText: string;
  supportEmail: string;
};

export function Footer({
  locale,
  privacyText,
  termsText,
  refundText,
  contactText,
  supportEmail
}: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <p className="eyebrow">oLauncher</p>
      </div>
      <div className="footer-links">
        <Link href={`/${locale}/privacy`}>{privacyText}</Link>
        <Link href={`/${locale}/terms`}>{termsText}</Link>
        <Link href={`/${locale}/refund`}>{refundText}</Link>
        <a href={`mailto:${supportEmail}`}>{contactText}</a>
      </div>
    </footer>
  );
}
