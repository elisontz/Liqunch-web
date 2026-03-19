"use client";

import { siteConfig } from "@/lib/site";

declare global {
  interface Window {
    Paddle?: {
      Environment?: {
        set: (value: string) => void;
      };
      Initialize?: (options: { token: string }) => void;
      Checkout?: {
        open: (options: {
          items: Array<{ priceId: string; quantity: number }>;
          customData?: Record<string, string>;
        }) => void;
      };
    };
  }
}

let initialized = false;

export function initializePaddle(): boolean {
  if (initialized) {
    return true;
  }

  if (typeof window === "undefined" || !window.Paddle || !siteConfig.paddleClientToken) {
    return false;
  }

  if (siteConfig.paddleEnv !== "production") {
    window.Paddle.Environment?.set(siteConfig.paddleEnv);
  }

  window.Paddle.Initialize?.({
    token: siteConfig.paddleClientToken
  });

  initialized = true;
  return true;
}

export function openCheckout(priceId: string): boolean {
  if (!initializePaddle()) {
    return false;
  }

  window.Paddle?.Checkout?.open({
    items: [{ priceId, quantity: 1 }],
    customData: {
      source: "olauncher-site"
    }
  });

  return true;
}
