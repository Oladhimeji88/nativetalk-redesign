"use client";

import { motion } from "framer-motion";
import type { ComponentType, SVGProps } from "react";
import Reveal from "./Reveal";
import {
  ArrowUpRight,
  CallCenterIcon,
  ChatIcon,
  CodeIcon,
  NumberIcon,
} from "./icons";

type Variant = "green" | "ink" | "lime" | "cream";

type Card = {
  href: string;
  title: string;
  body: string;
  variant: Variant;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

const CARDS: Card[] = [
  {
    href: "/personal",
    title: "Virtual Numbers",
    body: "Local & toll‑free numbers in 190+ countries. No SIM, no hardware — live in minutes.",
    variant: "green",
    Icon: NumberIcon,
  },
  {
    href: "/enterprise",
    title: "Call Center",
    body: "IVR, queues, agents and live analytics. Stand up a full contact center in 24 hours.",
    variant: "ink",
    Icon: CallCenterIcon,
  },
  {
    href: "/business",
    title: "Business App",
    body: "Keep work calls, texts and voicemail clearly split from personal — on every device.",
    variant: "lime",
    Icon: ChatIcon,
  },
  {
    href: "/enterprise",
    title: "Developer API",
    body: "Clean REST APIs, webhooks and CRM connectors to wire calling into your stack.",
    variant: "cream",
    Icon: CodeIcon,
  },
];

const STYLES: Record<
  Variant,
  { card: string; ic: string; body: string; arrow: string }
> = {
  green: {
    card: "bg-green text-[#06270a]",
    ic: "bg-black/[0.12]",
    body: "text-[#0c3a10]",
    arrow: "bg-[#06270a] text-green",
  },
  ink: {
    card: "bg-ink text-white",
    ic: "bg-white/10 text-green-300",
    body: "text-muted-dark",
    arrow: "bg-green text-[#06270a]",
  },
  lime: {
    card: "bg-green-100 text-[#143a0a]",
    ic: "bg-white text-green-700",
    body: "text-[#2c5a18]",
    arrow: "bg-green text-[#06270a]",
  },
  cream: {
    card: "bg-paper text-text border border-line",
    ic: "bg-green-50 text-green-700",
    body: "text-muted",
    arrow: "bg-ink text-white",
  },
};

export default function ProductCards() {
  return (
    <section id="products" className="pb-[92px] pt-[30px]">
      <div className="wrap">
        <Reveal className="mb-11 flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="eyebrow">The platform</div>
            <h2 className="max-w-[640px] text-[clamp(32px,4.4vw,54px)] font-extrabold tracking-[-0.04em]">
              One platform.
              <br />
              Every channel.
            </h2>
          </div>
          <p className="max-w-[380px] text-[17px] text-muted">
            From a solo founder to a 200‑seat support floor, NativeTalk scales
            with the way you talk to customers.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((c, i) => {
            const s = STYLES[c.variant];
            return (
              <motion.a
                key={c.title}
                href={c.href}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  ease: [0.2, 0.8, 0.2, 1],
                  delay: i * 0.07,
                }}
                whileHover={{ y: -7 }}
                className={`group relative flex min-h-[300px] flex-col justify-between overflow-hidden rounded-[12px] p-7 ${s.card}`}
              >
                <div className={`grid h-[50px] w-[50px] place-items-center rounded-[14px] ${s.ic}`}>
                  <c.Icon className="h-[26px] w-[26px]" />
                </div>
                <div>
                  <h3 className="mb-2 text-[23px] font-bold tracking-[-0.03em]">
                    {c.title}
                  </h3>
                  <p className={`text-[14.5px] leading-[1.45] ${s.body}`}>
                    {c.body}
                  </p>
                </div>
                <div
                  className={`mt-[18px] grid h-[38px] w-[38px] place-items-center rounded-full transition-transform duration-200 group-hover:translate-x-[3px] group-hover:-translate-y-[3px] ${s.arrow}`}
                >
                  <ArrowUpRight className="h-[18px] w-[18px]" />
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
