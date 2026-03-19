import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { SalesPage } from "@/components/sales-page";

describe("SalesPage", () => {
  it("renders the Chinese purchase flow sections in order", () => {
    render(<SalesPage locale="zh" />);

    expect(
      screen.getByRole("heading", { name: /恢复 macOS 26 上熟悉的 Launchpad 风格体验/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /免费下载/i })).toHaveAttribute("href");
    expect(screen.getAllByRole("button", { name: /解锁 PRO/i }).length).toBeGreaterThan(0);
    expect(screen.getByRole("heading", { name: /双档终身授权/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /常见问题/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /安装与激活/i })).toBeInTheDocument();
  });

  it("renders the English mirror page with both lifetime tiers", () => {
    render(<SalesPage locale="en" />);

    expect(
      screen.getByRole("heading", { name: /Bring back the familiar Launchpad experience on macOS 26/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Two lifetime plans/i })).toBeInTheDocument();
    expect(screen.getAllByText("$5.99").length).toBeGreaterThan(0);
    expect(screen.getAllByText("$9.99").length).toBeGreaterThan(0);
    expect(screen.getAllByRole("button", { name: /Unlock PRO|Buy PRO/i })).toHaveLength(3);
  });
});
