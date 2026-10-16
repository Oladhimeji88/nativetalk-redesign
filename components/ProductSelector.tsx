"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";
import { ArrowRight, Check } from "./icons";

// PRD §3.9 Final CTA (Product Selector). Tabs let visitors self-select Personal
// or Business framing without leaving the section (req. 23). Enterprise is
// intentionally excluded — it's sales-led, not self-serve (req. 24).

type TabContent = {
  key: string;
  tab: string;
  heading: string;
  body: string;
  bullets: string[];
  cta: { label: string; href: string };
};

const TABS: TabContent[] = [
  {
    key: "personal",
    tab: "For Personal Use",
    heading: "Your own number, on your terms.",
    body: "Make and receive calls from the NativeTalk app — no SIM, no second phone. Set your own incoming-call rates and spin up disposable numbers whenever you need them.",
    bullets: ["No SIM card needed", "Disposable & virtual numbers", "Cheaper local & international calls"],
    cta: { label: "Get the app", href: "/personal" },
  },
  {
    key: "business",
    tab: "For Business",
    heading: "One line to run every conversation.",
    body: "Separate business from personal, route calls to your team, and manage calls, WhatsApp and Instagram from one shared inbox — with AI summaries on every conversation.",
    bullets: ["Shared team inbox", "Call routing & masking", "AI call summaries"],
    cta: { label: "Reserve a Number", href: "/business-app" },
  },
];

export default function ProductSelector() {
  const [active, setActive] = useState(0);
  const t = TABS[active];

  return (
    <section id="product-selector" className="scroll-mt-24 pb-[92px] pt-5">
      <div className="wrap">
        <Reveal className="mb-9 flex flex-col items-center text-center">
          <div className="eyebrow">Find your fit</div>
          <h2 className="max-w-[640px] text-[clamp(32px,4.4vw,54px)] font-extrabold tracking-[-0.04em]">
            Smart phone number for better conversations.
          </h2>
        </Reveal>

        <Reveal className="mx-auto mb-8 flex w-fit gap-1.5 rounded-full border border-line bg-paper p-1.5">
          {TABS.map((tab, i) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActive(i)}
              aria-selected={active === i}
              className={`rounded-full px-6 py-2.5 text-[15px] font-semibold transition ${
                active === i ? "bg-ink text-white" : "text-[#2c322e] hover:bg-black/5"
              }`}
            >
              {tab.tab}
            </button>
          ))}
        </Reveal>

        <div className="mx-auto max-w-[820px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={t.key}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
              className="rounded-[16px] border border-line bg-paper p-9 text-center md:p-12"
            >
              <h3 className="text-[clamp(24px,3vw,36px)] font-extrabold tracking-[-0.035em]">
                {t.heading}
              </h3>
              <p className="mx-auto mt-4 max-w-[540px] text-[17px] text-muted">{t.body}</p>
              <ul className="mx-auto mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2.5">
                {t.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-[14.5px] font-medium">
                    <span className="grid h-5 w-5 flex-none place-items-center rounded-md bg-green-50 text-green-700">
                      <Check className="h-3 w-3" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
              <a href={t.cta.href} className="btn btn-green mx-auto mt-8 w-fit">
                {t.cta.label}
                <ArrowRight className="text-white" />
              </a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
