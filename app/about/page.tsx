import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Mosaic from "@/components/Mosaic";
import Cta from "@/components/Cta";
import PageImage from "@/components/PageImage";
import { PAGE_IMAGES } from "@/lib/pageImages";

export const metadata: Metadata = {
  title: "About Us — NativeTalk",
  description:
    "NativeTalk provides solutions designed to power communication at every level — equipping businesses and individuals with the tools they need to connect, collaborate and succeed.",
};

const COUNTRIES = [
  "Nigeria",
  "Ghana",
  "Kenya",
  "South Africa",
  "Ivory Coast",
  "Tanzania",
];

const IMPACT = [
  { b: "10M+", s: "Minutes of calls made on NativeTalk" },
  { b: "3000+", s: "Businesses" },
  { b: "10,000", s: "Call agents" },
  { b: "60+", s: "Countries connected" },
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="pb-16 pt-[72px]">
          <div className="wrap grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <div className="eyebrow">About NativeTalk</div>
              <h1 className="max-w-[860px] text-[clamp(38px,5.2vw,68px)] font-extrabold tracking-[-0.045em]">
                Powering communication
                <br />
                <em className="not-italic text-green-700">at every level.</em>
              </h1>
              <p className="mt-6 max-w-[640px] text-xl text-muted">
                NativeTalk provides solutions designed to power communication
                at every level — equipping businesses and individuals with the
                tools and technologies they need to connect, collaborate, and
                succeed in today&apos;s fast-paced digital world.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <PageImage
                image={PAGE_IMAGES.about}
                eyebrow="Built for real teams"
                className="min-h-[420px]"
              />
            </Reveal>
          </div>
        </section>

        {/* Why we exist */}
        <section className="pb-[92px]">
          <div className="wrap">
            <Reveal className="relative overflow-hidden rounded-[16px] bg-ink p-11 text-white md:p-16">
              <Mosaic
                pattern="c"
                className="absolute -bottom-[30px] -right-[30px] !w-[220px] opacity-50"
              />
              <div className="relative z-[2] mb-4 text-sm font-semibold uppercase tracking-[0.06em] text-green-300">
                Why we built NativeTalk
              </div>
              <blockquote className="relative z-[2] max-w-[760px] text-[clamp(22px,2.8vw,32px)] font-bold leading-[1.3] tracking-[-0.02em]">
                &ldquo;Getting a new SIM is often the first step when starting
                a business. Due to the hassle, some entrepreneurs rely on their
                personal phone numbers. What if you could get a phone number
                specially designed for businesses like yours? That&apos;s why
                we built NativeTalk.&rdquo;
              </blockquote>
            </Reveal>
          </div>
        </section>

        {/* Countries */}
        <section className="pb-[92px]">
          <div className="wrap">
            <Reveal className="mb-10 text-center">
              <div className="eyebrow">Where we operate</div>
              <h2 className="text-[clamp(28px,3.8vw,46px)] font-extrabold tracking-[-0.04em]">
                Connecting conversations across Africa &amp; beyond.
              </h2>
            </Reveal>
            <Reveal className="flex flex-wrap justify-center gap-3">
              {COUNTRIES.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-line bg-paper px-6 py-3 text-[16px] font-semibold"
                >
                  {c}
                </span>
              ))}
              <span className="rounded-full bg-green px-6 py-3 text-[16px] font-semibold text-[#06270a]">
                + 60 more countries
              </span>
            </Reveal>
          </div>
        </section>

        {/* Impact */}
        <section className="pb-[92px]">
          <div className="wrap">
            <Reveal className="grid grid-cols-2 gap-[30px] rounded-[14px] bg-green p-10 text-center lg:grid-cols-4 lg:p-[54px]">
              {IMPACT.map((st) => (
                <div key={st.s}>
                  <b className="block text-[clamp(34px,4.2vw,54px)] font-extrabold tracking-[-0.04em] text-white">
                    {st.b}
                  </b>
                  <span className="text-[15px] font-medium text-white/85">
                    {st.s}
                  </span>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* Commitment */}
        <section className="pb-[92px]">
          <div className="wrap grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="eyebrow">Our commitment</div>
              <h2 className="mb-5 text-[clamp(28px,3.8vw,46px)] font-extrabold tracking-[-0.04em]">
                Communication tools that work for you.
              </h2>
              <p className="mb-4 max-w-[480px] text-[17px] text-muted">
                From a solo entrepreneur generating their first business number
                to enterprises running thousand-agent call centres, we are
                committed to making professional communication accessible,
                affordable and reliable.
              </p>
              <p className="max-w-[480px] text-[17px] text-muted">
                No SIM cards. No hardware. No barriers — just better
                conversations between you and the people who matter to your
                business.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative grid aspect-[1/0.85] place-items-center overflow-hidden rounded-[14px] border border-line bg-cream-2">
                <Mosaic
                  pattern="a"
                  className="absolute -bottom-[10%] -left-[6%] !w-[55%] opacity-50"
                />
                <div className="relative z-[2] grid h-[118px] w-[118px] place-items-center rounded-[14px] bg-green shadow-[0_26px_50px_-18px_rgba(62,191,15,0.6)]">
                  <span className="text-[40px] font-extrabold text-[#06270a]">
                    NT
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <Cta />
      </main>
      <Footer />
    </>
  );
}
