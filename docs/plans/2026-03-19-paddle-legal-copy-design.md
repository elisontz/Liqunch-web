# Paddle Legal Copy Design

**Goal:** Update the public legal copy in `olauncher-web` so Paddle website review can verify the refund window and the business name from the website alone.

**Scope:** Keep the current routes and page structure. Change only localized copy and tests for `terms`, `refund`, and the refund FAQ answer.

**Design:**
- Terms copy should state that the terms apply to `oLauncher`, the `oLauncher` website, and related products and services provided by `oLauncher`.
- Refund copy should stop using case-by-case language and instead summarize Paddle's region-based refund windows with explicit day counts: 14 days, 7 days, and 5 days.
- FAQ refund answers should align with the refund page so the homepage and legal page do not conflict.

**Testing:**
- Add legal-copy assertions for explicit refund windows in both locales.
- Add assertions that the refund copy no longer contains case-by-case or discretionary review wording.
- Add assertions that the FAQ refund answer references Paddle and includes a fixed refund window.
