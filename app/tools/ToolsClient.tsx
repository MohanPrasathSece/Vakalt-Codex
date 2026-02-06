"use client";

import { useState } from "react";

export default function ToolsClient() {
  const [claimValue, setClaimValue] = useState(50000);

  const baseFee = 250;
  const variableFee = Math.min(claimValue * 0.015, 5000);
  const total = baseFee + variableFee;

  return (
    <div className="grid gap-10 rounded-3xl border border-line bg-white p-10 shadow-soft md:grid-cols-[1.2fr_1fr]">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-charcoal">
          Court Fee Calculator
        </p>
        <h2 className="mt-4 font-serif text-3xl md:text-4xl">
          Estimate filing fees with precision.
        </h2>
        <p className="mt-4 text-charcoal">
          Enter the total claim value to estimate preliminary court fees. This
          tool provides directional clarity and should be validated with counsel.
        </p>
        <div className="mt-8">
          <label className="text-xs uppercase tracking-wide text-charcoal">
            Claim value (USD)
          </label>
          <input
            type="range"
            min={1000}
            max={500000}
            step={1000}
            value={claimValue}
            onChange={(event) => setClaimValue(Number(event.target.value))}
            className="mt-4 w-full accent-black"
          />
          <div className="mt-2 text-sm text-charcoal">
            ${claimValue.toLocaleString()}
          </div>
        </div>
      </div>
      <div className="border-l border-line pl-8">
        <p className="text-xs uppercase tracking-[0.3em] text-charcoal">
          Estimated Fees
        </p>
        <div className="mt-6 space-y-4 text-charcoal">
          <div className="flex items-center justify-between">
            <span>Base filing fee</span>
            <span>${baseFee.toLocaleString()}</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Variable fee</span>
            <span>${variableFee.toLocaleString()}</span>
          </div>
          <div className="border-t border-line pt-4 text-lg font-semibold text-ink">
            <div className="flex items-center justify-between">
              <span>Total estimate</span>
              <span>${total.toLocaleString()}</span>
            </div>
          </div>
        </div>
        <p className="mt-6 text-xs uppercase tracking-wide text-charcoal">
          Figures are illustrative.
        </p>
      </div>
    </div>
  );
}
