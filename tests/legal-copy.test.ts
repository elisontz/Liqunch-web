import { describe, expect, it } from "vitest";

import { getContent } from "@/content";

describe("legal copy", () => {
  it("mentions oLauncher clearly in both locale terms", () => {
    expect(getContent("zh").legal.termsBody).toContain("oLauncher");
    expect(getContent("en").legal.termsBody).toContain("oLauncher");
  });

  it("provides Paddle-aligned refund policy windows in both locales", () => {
    expect(getContent("zh").legal.refundTitle).toBeTruthy();
    expect(getContent("zh").legal.refundBody).toContain("Paddle");
    expect(getContent("zh").legal.refundBody).toMatch(/14/);
    expect(getContent("zh").legal.refundBody).toMatch(/7/);
    expect(getContent("zh").legal.refundBody).toMatch(/5/);
    expect(getContent("zh").legal.refundBody).not.toMatch(/按实际情况|审核与处理|酌情|case[- ]by[- ]case/i);
    expect(getContent("en").legal.refundTitle).toBeTruthy();
    expect(getContent("en").legal.refundBody).toContain("Paddle");
    expect(getContent("en").legal.refundBody).toMatch(/14/);
    expect(getContent("en").legal.refundBody).toMatch(/7/);
    expect(getContent("en").legal.refundBody).toMatch(/5/);
    expect(getContent("en").legal.refundBody).not.toMatch(
      /case[- ]by[- ]case|discretionary|we can review|we will review/i
    );
  });

  it("keeps refund FAQ answers aligned with the legal policy", () => {
    const zhRefundFaq = getContent("zh").faqs.find((faq) => faq.question.includes("退款"));
    const enRefundFaq = getContent("en").faqs.find((faq) => faq.question.includes("refund"));

    expect(zhRefundFaq?.answer).toContain("Paddle");
    expect(zhRefundFaq?.answer).toMatch(/7/);
    expect(enRefundFaq?.answer).toContain("Paddle");
    expect(enRefundFaq?.answer).toMatch(/7/);
  });
});
