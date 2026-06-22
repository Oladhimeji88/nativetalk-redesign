"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";
import { Plus } from "./icons";

type QAItem = {
  q: string;
  a: string;
  href?: string;
  hrefLabel?: string;
};

const QA: QAItem[] = [
  {
    q: "What is a virtual phone system?",
    a: "A virtual phone system is a cloud-based phone system (VoIP) that lets you make and receive calls over the internet instead of through a SIM card. Your number lives in the cloud, so you can use it from your phone, laptop or any VoIP device.",
  },
  {
    q: "How does NativeTalk work?",
    a: "NativeTalk generates virtual phone numbers that aren't tied to a SIM card. Download the app, pick your number and start making and receiving calls right away — no new SIM, no new phone, no hardware.",
  },
  {
    q: "How does NativeTalk help businesses?",
    a: "Separate your business and personal calls. Make missed calls and unreachable numbers old news. Enhance your personal brand with customised numbers and business lines that are hard to forget. Save labour costs with our virtual receptionists and provide self-service options to your customers — and access more exciting features.",
  },
  {
    q: "Can I get international numbers on NativeTalk?",
    a: "Yes, you can. Connect with customers in over 60 countries with your NativeTalk virtual phone number.",
  },
  {
    q: "How much does it cost to use NativeTalk?",
    a: 'Plans start from ₦2,500/user/month for the Business App, with quarterly, biannual (save 10%) and annual (save 20%) billing options. CRM starts from ₦15,000/user/month, and VoIP services are quoted by our sales team. See full, transparent pricing on each product page — start with the Business App pricing.',
    href: "/business-app#pricing",
    hrefLabel: "View Business App pricing",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="pb-[92px] pt-5">
      <div className="wrap">
        <Reveal className="mb-9 flex flex-col items-center text-center">
          <div className="eyebrow">FAQ</div>
          <h2 className="text-[clamp(32px,4.4vw,54px)] font-extrabold">
            Questions, answered.
          </h2>
        </Reveal>

        <Reveal className="mx-auto max-w-[820px]">
          {QA.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b border-line bg-transparent">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-5 px-0.5 py-6 text-left font-display text-[19px] font-semibold text-ink"
                  aria-expanded={isOpen}
                >
                  {item.q}
                  <span
                    className={`grid h-8 w-8 flex-none place-items-center rounded-full border-[1.5px] transition-all duration-300 ${
                      isOpen
                        ? "rotate-45 border-green bg-green text-[#06270a]"
                        : "border-line text-green-700"
                    }`}
                  >
                    <Plus className="h-3.5 w-3.5" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-0.5 pb-6 text-base text-muted">
                        {item.a}
                        {item.href && (
                          <a
                            href={item.href}
                            className="ml-1.5 font-semibold text-green-700 underline underline-offset-2"
                          >
                            {item.hrefLabel}
                          </a>
                        )}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
