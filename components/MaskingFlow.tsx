"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";
import { Check } from "./icons";

// PRD §4.6 Start Receiving Calls Flow. Demonstrates number masking from three
// perspectives (Admin / Staff / Customer). Each view surfaces the four
// differentiators: Virtual Number, Masked Numbers, Privacy Protection, Call Routing.

type View = {
  key: string;
  tab: string;
  caption: string;
  rows: { label: string; value: string; masked?: boolean }[];
  points: string[];
};

const VIEWS: View[] = [
  {
    key: "admin",
    tab: "Admin View",
    caption: "You see the full picture and decide how calls route.",
    rows: [
      { label: "Virtual number", value: "+234 815 020 1188" },
      { label: "Routing rule", value: "Sales queue → first available" },
      { label: "Customer", value: "+234 803 •••  ••55", masked: true },
      { label: "Agent", value: "Ada (Ext. 102)" },
    ],
    points: ["Virtual Number", "Call Routing", "Privacy Protection"],
  },
  {
    key: "staff",
    tab: "Staff View",
    caption: "Your team talks to customers — without exposing personal numbers.",
    rows: [
      { label: "Incoming on", value: "+234 815 020 1188" },
      { label: "Customer shows as", value: "Masked · NT-4471", masked: true },
      { label: "Your real number", value: "Never shared", masked: true },
      { label: "Call notes", value: "Synced to inbox" },
    ],
    points: ["Masked Numbers", "Privacy Protection", "Call Routing"],
  },
  {
    key: "customer",
    tab: "Customer View",
    caption: "Customers reach one trusted business line, every time.",
    rows: [
      { label: "Calling", value: "NativeTalk Business" },
      { label: "Number dialled", value: "+234 815 020 1188" },
      { label: "Agent's number", value: "Hidden", masked: true },
      { label: "Experience", value: "One consistent line" },
    ],
    points: ["Virtual Number", "Masked Numbers", "Privacy Protection"],
  },
];

export default function MaskingFlow() {
  const [active, setActive] = useState(0);
  const v = VIEWS[active];

  return (
    <section className="pb-[92px] pt-5">
      <div className="wrap">
        <Reveal className="mb-9 max-w-[680px]">
          <div className="eyebrow">Number masking</div>
          <h2 className="text-[clamp(30px,4vw,50px)] font-extrabold tracking-[-0.04em]">
            Start receiving calls — without giving up your privacy.
          </h2>
          <p className="mt-4 text-[17px] text-muted">
            Every call runs through your virtual number. Personal numbers stay
            hidden on every side of the conversation. See how it looks for each
            person on the call.
          </p>
        </Reveal>

        <Reveal className="mb-7 flex w-fit flex-wrap gap-1.5 rounded-full border border-line bg-paper p-1.5">
          {VIEWS.map((view, i) => (
            <button
              key={view.key}
              type="button"
              onClick={() => setActive(i)}
              aria-selected={active === i}
              className={`rounded-full px-5 py-2.5 text-[14.5px] font-semibold transition ${
                active === i ? "bg-ink text-white" : "text-[#2c322e] hover:bg-black/5"
              }`}
            >
              {view.tab}
            </button>
          ))}
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={v.key}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
            className="grid gap-[18px] lg:grid-cols-[1fr_0.9fr]"
          >
            <div className="rounded-[16px] border border-line bg-paper p-8">
              <p className="mb-6 text-[15px] font-medium text-muted">{v.caption}</p>
              <div className="grid gap-2.5">
                {v.rows.map((r) => (
                  <div
                    key={r.label}
                    className="flex items-center justify-between rounded-[12px] border border-line bg-cream px-4 py-3.5"
                  >
                    <span className="text-[13px] font-semibold uppercase tracking-[0.05em] text-muted">
                      {r.label}
                    </span>
                    <b
                      className={`text-[15px] font-semibold ${
                        r.masked ? "text-green-700" : "text-text"
                      }`}
                    >
                      {r.value}
                    </b>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-center rounded-[16px] bg-ink p-8 text-white">
              <span className="mb-5 text-[13px] font-semibold uppercase tracking-[0.06em] text-green-300">
                What&apos;s protected here
              </span>
              <ul className="grid gap-3.5">
                {v.points.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-[16px] text-[#e9efe9]">
                    <span className="grid h-7 w-7 flex-none place-items-center rounded-[9px] bg-green/[0.18] text-green-300">
                      <Check className="h-4 w-4" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
