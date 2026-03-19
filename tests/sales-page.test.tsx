import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { SalesPage } from "@/components/sales-page";

describe("SalesPage", () => {
  it("renders the redesigned Chinese landing page structure", () => {
    render(<SalesPage locale="zh" />);

    expect(screen.getByRole("heading", { name: /找回 Launchpad/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /免费下载/i })).toHaveAttribute("href");
    expect(screen.getAllByRole("button", { name: /解锁 PRO/i })).toHaveLength(3);
    expect(screen.getByTestId("hero-visual")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /为什么很多人还是想要 Launchpad/i })).toBeInTheDocument();
    expect(screen.getByText(/不是为了多一种启动方式/i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /该有的能力，直接排开/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /双档终身授权/i })).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: /常见问题/i })).not.toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: /三步切回熟悉节奏/i })).not.toBeInTheDocument();
    expect(screen.getByRole("link", { name: /退款政策/i })).toHaveAttribute("href", "/zh/refund");
  });

  it("renders the redesigned English landing page structure", () => {
    render(<SalesPage locale="en" />);

    expect(screen.getByRole("heading", { name: /Bring Back Launchpad/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Download Free/i })).toHaveAttribute("href");
    expect(screen.getAllByRole("button", { name: /Unlock PRO/i })).toHaveLength(3);
    expect(screen.getByTestId("hero-visual")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Why People Still Want Launchpad/i })).toBeInTheDocument();
    expect(screen.getByText(/not because they need one more launcher/i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Everything you actually need, laid out cleanly/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Two lifetime plans/i })).toBeInTheDocument();
    expect(screen.getAllByText("$5.99").length).toBeGreaterThan(0);
    expect(screen.getAllByText("$9.99").length).toBeGreaterThan(0);
    expect(screen.queryByRole("heading", { name: /FAQ/i })).not.toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: /Back in Flow in Three Moves/i })).not.toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Refund Policy/i })).toHaveAttribute("href", "/en/refund");
  });
});
