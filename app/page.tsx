import { redirect } from "next/navigation";

// Fallback: middleware handles the language-based redirect,
// but if it doesn't run (e.g. in some edge cases), we redirect to /zh
export default function RootPage() {
  redirect("/zh");
}
