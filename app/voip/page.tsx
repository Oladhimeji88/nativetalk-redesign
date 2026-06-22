import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Mosaic from "@/components/Mosaic";
import PageImage from "@/components/PageImage";
import { ArrowRight, Check } from "@/components/icons";
import { PAGE_IMAGES } from "@/lib/pageImages";

export const metadata: Metadata = {
  title: "NativeTalk VoIP — Cloud PBX, Call Center & SIP",
  description:
    "Confirmed VoIP service lines: Cloud PBX, Cloud Call Center and SIP. Sales-routed pricing with one-time setup (NRC) and monthly (MRC) charges.",
};

// PRD §6.2 Confirmed Service Lines. Each carries a one-time setup charge (NRC)
// and a recurring monthly charge (MRC). All sales-routed (§6.3 req. 48).
const SERVICES = [
  {
    name: "Cloud PBX",
    desc: "Direct Inward Dialing (DID): unique numbers routed directly to specific extensions or departments.",
    nrc: "₦150,000",
    mrc: "₦3,000",
    mrcUnit: "/ user / extension / month",
    variable: [],
  },
  {
    name: "Cloud Call Center",
    desc: "Call monitoring: supervise live calls for training, quality control or escalation support.",
    nrc: "₦250,000",
    mrc: "₦15,000",
    mrcUnit: "/ user / month",
    variable: [],
  },
  {
    name: "SIP (Phone Line)",
    desc: "Seamless integration with your existing call center or PBX systems.",
    nrc: "₦250,000",
    mrc: "₦20,000",
    mrcUnit: "/ month",
    // Usage-based charges, clearly labelled as variable (§6.3 req. 49).
    variable: ["₦2,500 / DID per month", "₦12 / min for local calls"],
  },
];

export default function VoipPage() {
  return (
    <>
      <Nav />
      <main>
        {/* 6.1 Overview / Hero */}
        <section className="pb-[56px] pt-[72px]">
          <div className="wrap grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal className="max-w-[760px]">
              <span className="mb-6 inline-flex items-center gap-[9px] rounded-full border border-green-100 bg-green-50 px-3.5 py-[7px] text-[13.5px] font-semibold text-green-700">
                <span className="h-[7px] w-[7px] rounded-full bg-green" />
                NativeTalk VoIP
              </span>
              <h1 className="text-[clamp(36px,5vw,64px)] font-extrabold tracking-[-0.045em]">
                Enterprise-grade voice, <em className="not-italic text-green-700">your way.</em>
              </h1>
              <p className="my-6 text-xl text-muted">
                Independently selectable services for serious call infrastructure —
                Cloud PBX, Cloud Call Center and SIP. Each carries a one-time setup
                charge and a recurring monthly charge, scoped with our sales team.
              </p>
              <a href="mailto:sales@nativetalk.io" className="btn btn-green">
                Contact Sales
                <ArrowRight className="text-white" />
              </a>
            </Reveal>
            <Reveal delay={0.08}>
              <PageImage
                image={PAGE_IMAGES.voip}
                eyebrow="Cloud voice infrastructure"
                className="min-h-[420px]"
              />
            </Reveal>
          </div>
        </section>

        {/* 6.2 Service lines */}
        <section className="pb-[40px] pt-5">
          <div className="wrap grid gap-[18px] lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal
                key={s.name}
                delay={i * 0.07}
                className="flex flex-col rounded-[16px] border border-line bg-paper p-8"
              >
                <h3 className="text-[22px] font-bold tracking-[-0.03em]">{s.name}</h3>
                <p className="mt-2.5 min-h-[66px] text-[14.5px] leading-[1.5] text-muted">
                  {s.desc}
                </p>

                <div className="mt-5 grid gap-2.5">
                  <div className="flex items-center justify-between rounded-[12px] border border-line bg-cream px-4 py-3">
                    <span className="text-[13px] font-semibold uppercase tracking-[0.05em] text-muted">
                      Setup (NRC)
                    </span>
                    <b className="text-[17px] font-extrabold tracking-[-0.02em]">{s.nrc}</b>
                  </div>
                  <div className="flex items-center justify-between rounded-[12px] border border-line bg-cream px-4 py-3">
                    <span className="text-[13px] font-semibold uppercase tracking-[0.05em] text-muted">
                      Monthly (MRC)
                    </span>
                    <span className="text-right">
                      <b className="text-[17px] font-extrabold tracking-[-0.02em]">{s.mrc}</b>
                      <span className="block text-[12px] text-muted">{s.mrcUnit}</span>
                    </span>
                  </div>
                </div>

                {s.variable.length > 0 && (
                  <div className="mt-4 rounded-[12px] border border-dashed border-line p-4">
                    <div className="mb-2 text-[12px] font-bold uppercase tracking-[0.06em] text-green-700">
                      Variable usage costs
                    </div>
                    <ul className="grid gap-1.5">
                      {s.variable.map((v) => (
                        <li key={v} className="flex gap-2 text-[13.5px] text-muted">
                          <Check className="mt-0.5 h-3.5 w-3.5 flex-none text-green-700" />
                          {v}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <a
                  href="mailto:sales@nativetalk.io"
                  className="btn btn-ink mt-6 w-full justify-center"
                >
                  Contact Sales
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        {/* 6.3 Billing model note */}
        <section className="pb-[92px] pt-5">
          <div className="wrap">
            <Reveal className="rounded-[16px] bg-cream-2 p-8 md:p-11">
              <h2 className="mb-4 text-[clamp(22px,2.6vw,32px)] font-extrabold tracking-[-0.035em]">
                How VoIP billing works
              </h2>
              <ul className="grid gap-3 md:grid-cols-2">
                {[
                  "NRC is a one-time setup charge, collected at service activation.",
                  "MRC is billed monthly only — no quarterly, biannual or annual discount applies to VoIP.",
                  "Per-minute and per-DID charges are usage-based variable costs, separate from fixed NRC/MRC.",
                  "All VoIP services are sales-routed: pricing is shown for reference, and our team scopes your setup.",
                ].map((t) => (
                  <li key={t} className="flex gap-3 text-[15px] text-text">
                    <span className="grid h-6 w-6 flex-none place-items-center rounded-[7px] bg-green-50 text-green-700">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* Closing */}
        <section className="pb-[92px] pt-5">
          <div className="wrap">
            <Reveal className="relative overflow-hidden rounded-[16px] bg-ink px-7 py-12 text-center text-white md:px-14 md:py-16">
              <Mosaic pattern="c" className="absolute -bottom-[30px] -right-[30px] !w-[180px] opacity-50" />
              <h2 className="relative z-[2] mx-auto max-w-[620px] text-[clamp(28px,4vw,46px)] font-extrabold tracking-[-0.045em]">
                Let&apos;s scope your VoIP setup.
              </h2>
              <p className="relative z-[2] mx-auto mb-7 mt-4 max-w-[500px] text-[18px] text-muted-dark">
                Tell us your call volumes and existing systems, and we&apos;ll put
                together the right combination of PBX, Call Center and SIP.
              </p>
              <a href="mailto:sales@nativetalk.io" className="btn btn-green relative z-[2]">
                Contact Sales
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
