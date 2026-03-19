import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";

vi.mock("next/script", () => ({
  default: () => null
}));

vi.mock("next/navigation", () => ({
  usePathname: () => "/zh",
  useRouter: () => ({
    push: vi.fn()
  })
}));

afterEach(() => {
  cleanup();
});
