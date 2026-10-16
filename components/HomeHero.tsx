"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Mosaic from "./Mosaic";
import { ArrowRight } from "./icons";

const COUNTRIES = ["Nigeria", "Ghana", "Kenya", "South Africa", "Ivory Coast", "Tanzania"];

const ease = [0.2, 0.8, 0.2, 1] as const;

export default function HomeHero() {
  return (
    <section className="px-2 pb-[18px] pt-3 sm:px-4">
      {/* Dark forest hero panel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease }}
        className="relative overflow-hidden rounded-[26px] bg-ink px-6 pb-7 pt-14 text-white sm:px-10 md:pt-20"
      >
        <Mosaic pattern="b" className="absolute -right-[30px] -top-[30px] !w-[220px] opacity-40" />
        <Mosaic pattern="c" className="absolute -bottom-[40px] -left-[30px] !w-[200px] opacity-25" />

        <div className="relative z-[2] mx-auto max-w-[920px] text-center">
          <span className="mb-6 inline-flex items-center gap-[9px] rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-[7px] text-[13px] font-semibold text-green-300">
            <span className="h-[7px] w-[7px] rounded-full bg-green" />
            Powering communications across Africa
          </span>
          <h1 className="text-[clamp(40px,6.6vw,86px)] font-extrabold leading-[0.98] tracking-[-0.045em]">
            Powering <em className="not-italic">communications</em>
            <br />
            across Africa.
          </h1>
          <p className="mx-auto my-7 max-w-[600px] text-[18px] leading-[1.6] text-muted-dark">
            Solutions designed to power communication at every level — equipping
            businesses and individuals with the tools to connect, collaborate and
            succeed in today&apos;s fast-paced digital world.
          </p>
          <div className="flex flex-wrap justify-center gap-[13px]">
            <Link href="/about" className="btn btn-green">
              See why we built NativeTalk
              <ArrowRight />
            </Link>
            <Link href="#product-selector" className="btn btn-outline-light">
              Explore products
            </Link>
          </div>

          {/* countries strip */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-2">
            <span className="text-[12px] font-semibold uppercase tracking-[0.1em] text-muted-dark">
              Live in
            </span>
            {COUNTRIES.map((c) => (
              <span
                key={c}
                className="rounded-full border border-white/12 bg-white/[0.05] px-3.5 py-1.5 text-[13.5px] font-medium text-[#dfeae2]"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Bento grid of rounded tiles */}
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease, delay: 0.12 }}
        className="mx-auto mt-3 grid max-w-[1240px] grid-cols-2 gap-3 px-3 [grid-auto-rows:184px] md:grid-cols-4 lg:px-5"
      >
        {/* A — big live-call card */}
        <div className="relative col-span-2 row-span-2 flex flex-col justify-between overflow-hidden rounded-[20px] bg-ink-2 p-6 text-white">
          <Mosaic pattern="a" className="absolute right-5 top-5 !w-[34%] opacity-90" />
          <div className="relative z-[2] grid h-14 w-14 place-items-center rounded-[16px] bg-green">
            <Image src="/assets/favicon.png" alt="" width={32} height={32} className="h-8 w-8" />
          </div>
          <div className="relative z-[2]">
            <div className="mb-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-green-300">
              Live · Business line
            </div>
            <h3 className="text-[26px] font-bold leading-[1.05] tracking-[-0.03em]">
              Every conversation,
              <br />
              one app.
            </h3>
            <div className="mt-4 flex items-center gap-3 rounded-[14px] border border-line-dark bg-white/[0.06] px-3.5 py-3">
              <span className="grid h-9 w-9 flex-none place-items-center rounded-[10px] bg-green text-[13px] font-extrabold text-ink">
                AB
              </span>
              <div>
                <b className="block text-sm font-semibold">Amara Bello</b>
                <span className="text-[12.5px] text-muted-dark">+234 815 020 1188 · Connected</span>
              </div>
              <span className="ml-auto flex items-center gap-1.5 text-xs font-semibold text-green-300">
                <i className="h-[7px] w-[7px] rounded-full bg-green animate-live-pulse" />
                02:14
              </span>
            </div>
          </div>
        </div>

        {/* B — lime stat */}
        <div className="flex flex-col justify-between rounded-[20px] bg-green p-6 text-ink">
          <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-ink/70">
            Minutes of calls
          </span>
          <b className="text-[clamp(32px,3.4vw,46px)] font-extrabold tracking-[-0.04em]">10M+</b>
        </div>

        {/* C — brand panel */}
        <div className="flex flex-col justify-between rounded-[20px] bg-brand p-6 text-white">
          <span className="grid h-10 w-10 place-items-center rounded-[12px] bg-white/15">
            <ArrowRight className="h-5 w-5 -rotate-45" />
          </span>
          <b className="text-[19px] font-bold leading-[1.15] tracking-[-0.02em]">
            One number, every channel.
          </b>
        </div>

        {/* D — messaging inbox */}
        <div className="col-span-2 flex flex-col justify-center gap-2 rounded-[20px] border border-line bg-paper p-5">
          <span className="mb-1 text-[12px] font-semibold uppercase tracking-[0.08em] text-green-700">
            One shared inbox
          </span>
          {[
            { c: "WhatsApp", m: "New order — 2 items", t: "now" },
            { c: "Instagram", m: "DM: do you deliver?", t: "1m" },
          ].map((row) => (
            <div
              key={row.c}
              className="flex items-center gap-3 rounded-[12px] border border-line bg-cream px-3.5 py-2.5"
            >
              <span className="grid h-8 w-8 flex-none place-items-center rounded-[9px] bg-green-100 text-[11px] font-extrabold text-green-700">
                {row.c.slice(0, 2)}
              </span>
              <div className="min-w-0">
                <b className="block text-[13.5px] font-semibold">{row.c}</b>
                <span className="block truncate text-[12px] text-muted">{row.m}</span>
              </div>
              <span className="ml-auto text-[11px] text-muted">{row.t}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
