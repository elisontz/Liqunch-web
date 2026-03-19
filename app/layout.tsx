import type { Metadata } from "next";

import "@/app/globals.css";

export const metadata: Metadata = {
  title: "oLauncher",
  description: "A lightweight launchpad-style launcher for macOS 26 and later."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
