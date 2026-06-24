"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "./icons";

const PLAY_STORE =
  "https://play.google.com/store/apps/details?id=nativetalk.app.business";

const PRODUCTS = [
  {
    href: "/business-app",
    label: "NativeTalk Business",
    image: "/assets/Nativetalk business.svg",
  },
  {
    href: "/crm",
    label: "NativeTalk CRM",
    image: "/assets/Nativetalkcrm.svg",
  },
  {
    href: "/voip",
    label: "NativeTalk VoIP",
    image: "/assets/nativetalk voip.svg",
  },
];

const LINKS = [
  { href: "/about", label: "About us" },
  { href: "/blog", label: "Blog" },
  { href: "/business-app#contact", label: "Contact us" },
  { href: "/business-app#pricing", label: "Pricing" },
  { href: "/business-app#faq", label: "FAQ" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [prodOpen, setProdOpen] = useState(false);
  const [mobProdOpen, setMobProdOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openProducts = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setProdOpen(true);
  };

  const closeProducts = () => {
    closeTimer.current = setTimeout(() => setProdOpen(false), 120);
  };

  const closeMobile = () => {
    setOpen(false);
    setMobProdOpen(false);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-[70] border-b bg-ink/95 text-[#f7f9f2] backdrop-blur-[16px] transition-colors duration-300 ${
          scrolled ? "border-white/10 shadow-[0_18px_45px_-32px_rgba(0,0,0,.8)]" : "border-transparent"
        }`}
      >
        <div className="wrap flex h-[78px] items-center gap-8">
          <Link href="/" className="flex items-center" onClick={closeMobile}>
            <Image
              src="/assets/NativeTalkSvgLogoWhite.svg"
              alt="NativeTalk"
              width={132}
              height={38}
              priority
              className="h-[38px] w-auto"
            />
          </Link>

          <nav className="ml-1 hidden items-center gap-1 lg:flex">
            <div
              className="relative"
              onMouseEnter={openProducts}
              onMouseLeave={closeProducts}
            >
              <button
                type="button"
                onClick={() => setProdOpen((v) => !v)}
                className={`flex items-center gap-1.5 rounded-full px-4 py-2.5 text-[13.5px] font-medium transition hover:bg-white/10 ${
                  prodOpen ? "bg-white/10" : ""
                }`}
              >
                Products
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    prodOpen ? "rotate-180" : ""
                  }`}
                >
                  <path
                    d="M6 9l6 6 6-6"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.2"
                  />
                </svg>
              </button>

              <AnimatePresence>
                {prodOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18, ease: [0.2, 0.8, 0.2, 1] }}
                    className="absolute left-0 top-[calc(100%+12px)] w-[820px] rounded-[16px] border border-black/[0.06] bg-[#ececec] p-7 text-ink shadow-[0_30px_70px_-28px_rgba(0,0,0,0.45)]"
                  >
                    <div className="mb-5 text-[15px] font-medium text-[#5b5f5c]">
                      Our Products
                    </div>
                    <div className="grid grid-cols-3 gap-5">
                      {PRODUCTS.map((p) => (
                        <Link
                          key={p.href}
                          href={p.href}
                          onClick={() => setProdOpen(false)}
                          className="group block"
                        >
                          <span className="block overflow-hidden rounded-[12px] transition-transform duration-200 group-hover:-translate-y-1 group-hover:shadow-[0_18px_40px_-22px_rgba(0,0,0,0.5)]">
                            <Image
                              src={p.image}
                              alt={p.label}
                              width={371}
                              height={210}
                              className="h-auto w-full"
                            />
                          </span>
                          <span className="mt-3 block text-[15px] font-medium text-ink">
                            {p.label}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-full px-4 py-2.5 text-[13.5px] font-medium transition hover:bg-white/10"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-3">
            <a
              href={PLAY_STORE}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-green hidden sm:inline-flex"
            >
              Download App
              <ArrowRight className="text-white" />
            </a>
            <button
              type="button"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 lg:hidden"
              aria-expanded={open}
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="flex flex-col gap-[5px]">
                <span className="h-0.5 w-5 rounded bg-white" />
                <span className="h-0.5 w-5 rounded bg-white" />
                <span className="h-0.5 w-5 rounded bg-white" />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[78px] z-[65] border-b border-white/10 bg-ink p-4 text-white shadow-[0_30px_70px_-45px_rgba(0,0,0,.85)] lg:hidden"
          >
            <button
              type="button"
              onClick={() => setMobProdOpen((v) => !v)}
              className="flex w-full items-center justify-between rounded-[8px] px-3.5 py-[13px] text-base font-medium hover:bg-white/10"
            >
              Products
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className={`h-4 w-4 transition-transform duration-200 ${
                  mobProdOpen ? "rotate-180" : ""
                }`}
              >
                <path
                  d="M6 9l6 6 6-6"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.2"
                />
              </svg>
            </button>

            {mobProdOpen && (
              <div className="grid gap-3 px-2 pb-2 pt-1">
                {PRODUCTS.map((p) => (
                  <Link
                    key={p.href}
                    href={p.href}
                    onClick={closeMobile}
                    className="block"
                  >
                    <span className="block overflow-hidden rounded-[12px]">
                      <Image
                        src={p.image}
                        alt={p.label}
                        width={371}
                        height={210}
                        className="h-auto w-full"
                      />
                    </span>
                    <span className="mt-2 block text-[15px] font-medium text-white">
                      {p.label}
                    </span>
                  </Link>
                ))}
              </div>
            )}

            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={closeMobile}
                className="block rounded-[8px] px-3.5 py-[13px] text-base font-medium hover:bg-white/10"
              >
                {l.label}
              </Link>
            ))}

            <a
              href={PLAY_STORE}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobile}
              className="btn btn-green mt-3 w-full justify-center"
            >
              Download App
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
