import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Mosaic from "@/components/Mosaic";
import PageImage from "@/components/PageImage";
import { ArrowRight, ArrowUpRight, Check } from "@/components/icons";
import { PAGE_IMAGES } from "@/lib/pageImages";

export const metadata: Metadata = {
  title: "NativeTalk Enterprise — A solution for teams of 1 or 50+",
  description:
    "Set up a call centre in 24 hours. White-label options and APIs integrate with your CRM to streamline sales and customer service.",
};

const PRODUCTS = [
  {
    href: "/crm",
    title: "NativeTalk CRM",
    body: "Manage your team's work, customer tickets and growth from one command center — with AI reporting built in.",
    points: ["Task management", "Ticketing", "AI reports", "Lead management"],
  },
  {
    href: "/voip",
    title: "NativeTalk VoIP",
    body: "Enterprise-grade voice infrastructure — Cloud PBX, Cloud Call Center and SIP, scoped with our sales team.",
    points: ["Cloud PBX", "Cloud Call Center", "SIP integration", "Call monitoring"],
  },
];

const CAPABILITIES = [
  { title: "Live in 24 hours", body: "Stand up a full call centre for thousands of users in a single day." },
  { title: "White-label & APIs", body: "Match your brand and wire calling into your existing stack." },
  { title: "Scale with ease", body: "Handle high call volumes without losing customer experience quality." },
  { title: "Dedicated support", body: "24/7 support with your own dedicated account manager." },
];

export default function EnterprisePage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="px-2 pb-[64px] pt-3 sm:px-4">
          <Reveal className="relative overflow-hidden rounded-[26px] bg-ink px-6 py-14 text-white sm:px-12 md:py-20">
            <Mosaic pattern="b" className="absolute -right-[30px] -top-[30px] !w-[240px] opacity-40" />
            <div className="relative z-[2] max-w-[800px]">
              <span className="mb-6 inline-flex items-center gap-[9px] rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-[7px] text-[13px] font-semibold text-green-300">
                <span className="h-[7px] w-[7px] rounded-full bg-green" />
                NativeTalk Enterprise
              </span>
              <h1 className="text-[clamp(36px,5.4vw,68px)] font-extrabold leading-[0.98] tracking-[-0.045em]">
                Team of 1 or 50+, we&apos;ve got a <em className="not-italic">solution</em> for you.
              </h1>
              <p className="my-6 max-w-[560px] text-[18px] leading-[1.6] text-muted-dark">
                Set up a call centre in 24 hours. White-label options and APIs
                integrate with your CRM to streamline sales and customer service.
              </p>
              <div className="flex flex-wrap gap-[13px]">
                <a href="mailto:sales@nativetalk.io" className="btn btn-green">
                  Talk to sales
                  <ArrowRight />
                </a>
                <Link href="/crm" className="btn btn-outline-light">
                  Explore the CRM
                </Link>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="pb-[92px]">
          <div className="wrap">
            <Reveal>
              <PageImage
                image={PAGE_IMAGES.crm}
                eyebrow="Enterprise teams"
                className="min-h-[440px]"
              />
            </Reveal>
          </div>
        </section>

        {/* Product split */}
        <section className="pb-[92px] pt-5">
          <div className="wrap">
            <Reveal className="mb-9 max-w-[640px]">
              <div className="eyebrow">Two ways to go enterprise</div>
              <h2 className="text-[clamp(30px,4vw,50px)] font-extrabold tracking-[-0.04em]">
                Pick the platform your team runs on.
              </h2>
            </Reveal>
            <div className="grid gap-[18px] lg:grid-cols-2">
              {PRODUCTS.map((p, i) => (
                <Reveal key={p.href} delay={i * 0.08}>
                  <Link
                    href={p.href}
                    className="group flex h-full flex-col justify-between rounded-[20px] border border-line bg-paper p-9 transition hover:border-ink"
                  >
                    <div>
                      <div className="mb-5 flex items-center justify-between">
                        <h3 className="text-[26px] font-bold tracking-[-0.03em]">{p.title}</h3>
                        <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-white transition-transform group-hover:translate-x-[3px] group-hover:-translate-y-[3px]">
                          <ArrowUpRight className="h-[18px] w-[18px]" />
                        </span>
                      </div>
                      <p className="max-w-[440px] text-[15.5px] leading-[1.6] text-muted">{p.body}</p>
                    </div>
                    <ul className="mt-7 flex flex-wrap gap-2.5">
                      {p.points.map((pt) => (
                        <li
                          key={pt}
                          className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3.5 py-2 text-[13.5px] font-semibold text-green-700"
                        >
                          <Check className="h-3.5 w-3.5" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="pb-[92px] pt-5">
          <div className="wrap">
            <Reveal className="rounded-[20px] bg-ink p-9 text-white md:p-14">
              <div className="mb-9 text-sm font-semibold uppercase tracking-[0.06em] text-green-300">
                Why enterprise teams choose NativeTalk
              </div>
              <div className="grid gap-[18px] md:grid-cols-2 lg:grid-cols-4">
                {CAPABILITIES.map((c) => (
                  <div key={c.title} className="rounded-[14px] border border-line-dark bg-white/[0.04] p-6">
                    <span className="mb-4 grid h-10 w-10 place-items-center rounded-[11px] bg-green/[0.18] text-green-300">
                      <Check className="h-5 w-5" />
                    </span>
                    <h3 className="mb-2 text-[18px] font-bold text-white">{c.title}</h3>
                    <p className="text-[14px] leading-[1.5] text-muted-dark">{c.body}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-[92px] pt-5">
          <div className="wrap">
            <Reveal className="relative overflow-hidden rounded-[20px] bg-green px-7 py-14 text-center text-ink md:px-14 md:py-16">
              <Mosaic pattern="c" className="absolute -bottom-[30px] -right-[30px] !w-[180px] opacity-20" />
              <h2 className="relative z-[2] mx-auto max-w-[640px] text-[clamp(28px,4vw,48px)] font-extrabold tracking-[-0.045em]">
                Let&apos;s build your enterprise setup.
              </h2>
              <a href="mailto:sales@nativetalk.io" className="btn btn-ink relative z-[2] mx-auto mt-7 w-fit">
                Contact sales
                <ArrowRight className="text-white" />
              </a>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
