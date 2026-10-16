"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Mosaic from "./Mosaic";
import { ArrowRight } from "./icons";

export default function Hero() {
  return (
    <section className="pb-[88px] pt-[72px]">
      <div className="wrap grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <span className="mb-[26px] inline-flex items-center gap-[9px] rounded-full border border-green-100 bg-green-50 px-3.5 py-[7px] text-[13.5px] font-semibold text-green-700">
            <span className="h-[7px] w-[7px] rounded-full bg-green" />
            Virtual numbers in 190+ countries
          </span>
          <h1 className="text-[clamp(46px,6.4vw,84px)] font-extrabold tracking-[-0.045em]">
            Cloud calling.
            <br />
            <em className="not-italic text-green-700">In your hands.</em>
          </h1>
          <p className="my-[26px] mb-[34px] max-w-[500px] text-xl font-normal text-muted">
            The cloud phone system for modern business. Spin up virtual numbers
            without a SIM and run your whole call center from any device.
          </p>
          <div className="flex flex-wrap gap-[13px]">
            <a href="#cta" className="btn btn-green">
              Start free
              <ArrowRight className="text-white" />
            </a>
            <a href="#products" className="btn btn-outline">
              Book a demo
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1], delay: 0.1 }}
          className="relative flex aspect-auto min-h-[420px] flex-col justify-between overflow-hidden rounded-[14px] bg-ink p-[30px] lg:aspect-[1/1.04]"
        >
          <Mosaic
            pattern="a"
            className="absolute right-[30px] top-[30px] !w-[46%] opacity-95"
          />
          <div className="relative z-[2] grid h-16 w-16 place-items-center rounded-2xl bg-green">
            <Image
              src="/assets/favicon.png"
              alt=""
              width={38}
              height={38}
              className="h-[38px] w-[38px]"
            />
          </div>
          <div className="relative z-[2]">
            <div className="mb-2.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-green-300">
              Live · Business line
            </div>
            <h3 className="text-[30px] font-bold leading-[1.05] tracking-[-0.03em] text-white">
              Every conversation,
              <br />
              one app.
            </h3>
            <p className="mt-2.5 max-w-[300px] text-[15px] text-muted-dark">
              Make and take business calls from phone, desktop or web — same
              number, everywhere.
            </p>
            <div className="relative z-[2] mt-4 flex items-center gap-[11px] rounded-[14px] border border-line-dark bg-white/[0.06] px-3.5 py-3">
              <span className="grid h-9 w-9 flex-none place-items-center rounded-[10px] bg-green text-[13px] font-extrabold text-[#06270a]">
                AB
              </span>
              <div>
                <b className="block text-sm font-semibold text-white">
                  Amara Bello
                </b>
                <span className="text-[12.5px] text-muted-dark">
                  +1 (415) 555‑0119 · Connected
                </span>
              </div>
              <span className="ml-auto flex items-center gap-1.5 text-xs font-semibold text-green-300">
                <i className="h-[7px] w-[7px] rounded-full bg-green animate-live-pulse" />
                02:14
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
