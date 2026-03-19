"use client";

import { useState } from "react";

import { openCheckout } from "@/lib/paddle";

type BuyButtonProps = {
  label: string;
  priceId: string;
  className?: string;
};

export function BuyButton({ label, priceId, className }: BuyButtonProps) {
  const [showFallback, setShowFallback] = useState(false);

  return (
    <>
      <button
        type="button"
        className={className}
        onClick={() => {
          const didOpen = openCheckout(priceId);
          setShowFallback(!didOpen);
        }}
      >
        {label}
      </button>
      {showFallback ? (
        <p className="text-xs text-slate-500">
          Paddle has not been configured yet. Add your public client token and price IDs to enable checkout.
        </p>
      ) : null}
    </>
  );
}
