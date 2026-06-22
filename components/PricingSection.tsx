"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "./Reveal";
import { Check } from "./icons";
import {
  FREQUENCIES,
  formatNaira,
  termTotal,
  type Frequency,
  type Plan,
} from "@/lib/pricing";

type Props = {
  id?: string;
  eyebrow?: string;
  heading: string;
  subhead: string;
  plans: Plan[];
};

/**
 * Shared pricing block (PRD §4.2 / §5.4–§5.6 / §7.4).
 * - Billing frequency selector at the top, above the cards (req. 27).
 * - All plans render simultaneously on load — no toggle to reveal (req. §4.2.4/§5.5/§7.4).
 * - Switching frequency updates every per-user plan's running total (req. 28).
 * - Enterprise/Custom is exempt from the selector and never shows a calculated price (req. 31, 35).
 */
export default function PricingSection({
  id = "pricing",
  eyebrow = "Pricing",
  heading,
  subhead,
  plans,
}: Props) {
  const [freq, setFreq] = useState<Frequency>(FREQUENCIES[0]);

  return (
    <section id={id} className="scroll-mt-24 pb-[92px] pt-5">
      <div className="wrap">
        <Reveal className="mb-9 flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="eyebrow">{eyebrow}</div>
            <h2 className="max-w-[640px] text-[clamp(32px,4.4vw,54px)] font-extrabold">
              {heading}
            </h2>
          </div>
          <p className="max-w-[380px] text-[17px] text-muted">{subhead}</p>
        </Reveal>

        {/* Billing frequency selector */}
        <Reveal className="mb-8">
          <div
            role="tablist"
            aria-label="Billing frequency"
            className="inline-flex flex-wrap gap-1.5 rounded-full border border-line bg-paper p-1.5"
          >
            {FREQUENCIES.map((f) => {
              const active = f.key === freq.key;
              return (
                <button
                  key={f.key}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFreq(f)}
                  className={`flex items-center gap-2 rounded-full px-4 py-2 text-[14.5px] font-semibold transition ${
                    active
                      ? "bg-ink text-white"
                      : "text-[#2c322e] hover:bg-black/5"
                  }`}
                >
                  {f.label}
                  {f.badge && (
                    <span
                      className={`rounded-full px-2 py-0.5 text-[11px] font-bold ${
                        active ? "bg-green text-[#06270a]" : "bg-green-50 text-green-700"
                      }`}
                    >
                      {f.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </Reveal>

        <Reveal className="grid items-stretch gap-[18px] lg:grid-cols-3">
          {plans.map((p) => {
            const isCustom = p.baseMonthly === null;
            const total = isCustom ? null : termTotal(p.baseMonthly as number, freq);
            return (
              <div
                key={p.name}
                className={`flex flex-col rounded-[10px] border p-8 ${
                  p.featured ? "border-green/30 bg-ink text-white" : "border-line bg-paper"
                }`}
              >
                {p.featured && (
                  <span className="mb-3.5 w-fit rounded-full bg-green px-3 py-1 text-xs font-bold text-[#06270a]">
                    Most popular
                  </span>
                )}
                <h3 className="mb-[5px] text-xl font-bold">{p.name}</h3>
                <span className={`text-sm ${p.featured ? "text-muted-dark" : "text-muted"}`}>
                  {p.users}
                </span>

                <div className="mb-1 mt-5">
                  {isCustom ? (
                    <b className="font-display text-[40px] font-extrabold">
                      {p.customLabel ?? "Custom"}
                    </b>
                  ) : (
                    <>
                      <b className="font-display text-[40px] font-extrabold">
                        {formatNaira(total as number)}
                      </b>
                      <span
                        className={`text-[15px] ${
                          p.featured ? "text-muted-dark" : "text-muted"
                        }`}
                      >
                        {" "}
                        / user · {freq.totalLabel.toLowerCase()}
                      </span>
                    </>
                  )}
                </div>
                {!isCustom && freq.discount > 0 && (
                  <span className="mb-1 inline-block text-[13px] font-semibold text-green-700">
                    {formatNaira(p.baseMonthly as number)}/user/mo billed{" "}
                    {freq.label.toLowerCase()}
                  </span>
                )}

                <p className={`mb-[22px] mt-2 text-sm ${p.featured ? "text-muted-dark" : "text-muted"}`}>
                  {p.blurb}
                </p>

                <ul className="mb-6 grid flex-1 content-start gap-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2.5 text-[14.5px]">
                      <span
                        className={`grid h-[21px] w-[21px] flex-none place-items-center rounded-md ${
                          p.featured
                            ? "bg-green/20 text-green-300"
                            : "bg-green-50 text-green-700"
                        }`}
                      >
                        <Check className="h-[13px] w-[13px]" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href={p.cta.href}
                  className={`btn w-full justify-center ${p.cta.style} ${
                    p.featured && p.cta.style === "btn-outline" ? "btn-outline-light" : ""
                  }`}
                >
                  {p.cta.label}
                </Link>
              </div>
            );
          })}
        </Reveal>

        <p className="mt-5 text-[13.5px] text-muted">
          Biannual saves 10%, Annual saves 20%. Enterprise pricing is negotiated
          directly with Sales and is exempt from the billing selector.
        </p>
      </div>
    </section>
  );
}
