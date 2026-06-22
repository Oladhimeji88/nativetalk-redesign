import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Mosaic from "@/components/Mosaic";
import PageImage from "@/components/PageImage";
import { ArrowRight, Check } from "@/components/icons";
import { PAGE_IMAGES } from "@/lib/pageImages";

export const metadata: Metadata = {
  title: "NativeTalk Business — One number to power and grow your business",
  description:
    "Separate business and personal calls, provide self-service options, and drive sales with the NativeTalk Business phone system.",
};

const BENEFITS = [
  {
    title: "Organise your communications",
    body: "Generate a business number in minutes to separate work from personal — no SIM, no new phone.",
  },
  {
    title: "Build customer relationships",
    body: "Personalise every call and message, and keep your whole team aligned on each conversation.",
  },
  {
    title: "Grow without the overhead",
    body: "Add extensions as you scale and keep costs low with a cloud phone system that grows with you.",
  },
  {
    title: "Serve customers faster",
    body: "Offer self-service options and route calls to the right person so nothing slips through the cracks.",
  },
];

const FEATURES = [
  "Virtual business number",
  "Shared team inbox",
  "Call routing & queuing",
  "Number masking & privacy",
  "Auto receptionist (IVR)",
  "Call analytics & recording",
  "WhatsApp, Instagram & Facebook",
  "AI call summaries (add-on)",
];

export default function BusinessPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="px-2 pb-[64px] pt-3 sm:px-4">
          <Reveal className="relative overflow-hidden rounded-[26px] bg-ink px-6 py-14 text-white sm:px-12 md:py-20">
            <Mosaic pattern="b" className="absolute -right-[30px] -top-[30px] !w-[240px] opacity-40" />
            <div className="relative z-[2] max-w-[760px]">
              <span className="mb-6 inline-flex items-center gap-[9px] rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-[7px] text-[13px] font-semibold text-green-300">
                <span className="h-[7px] w-[7px] rounded-full bg-green" />
                NativeTalk Business
              </span>
              <h1 className="text-[clamp(36px,5.4vw,68px)] font-extrabold leading-[0.98] tracking-[-0.045em]">
                One phone number to <em className="not-italic">power and grow</em> your business.
              </h1>
              <p className="my-6 max-w-[540px] text-[18px] leading-[1.6] text-muted-dark">
                We help small business owners improve customer service and grow with
                the NativeTalk Business phone system. Separate business and personal
                calls, provide self-service options, and drive sales.
              </p>
              <div className="flex flex-wrap gap-[13px]">
                <Link href="/business-app" className="btn btn-green">
                  Reserve a Number
                  <ArrowRight />
                </Link>
                <Link href="/business-app#pricing" className="btn btn-outline-light">
                  See pricing
                </Link>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="pb-[92px]">
          <div className="wrap">
            <Reveal>
              <PageImage
                image={PAGE_IMAGES.business}
                eyebrow="Business communication"
                className="min-h-[440px]"
              />
            </Reveal>
          </div>
        </section>

        {/* Benefits */}
        <section className="pb-[92px] pt-5">
          <div className="wrap">
            <Reveal className="mb-9 max-w-[640px]">
              <div className="eyebrow">Benefits</div>
              <h2 className="text-[clamp(30px,4vw,50px)] font-extrabold tracking-[-0.04em]">
                A phone number that grows your business.
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
              {BENEFITS.map((b, i) => (
                <Reveal
                  key={b.title}
                  delay={i * 0.07}
                  className="flex min-h-[230px] flex-col justify-between rounded-[16px] border border-line bg-paper p-7"
                >
                  <span className="grid h-[46px] w-[46px] place-items-center rounded-[13px] bg-green-100 text-green-700">
                    <Check className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="mb-2 text-[19px] font-bold tracking-[-0.03em]">{b.title}</h3>
                    <p className="text-[14.5px] leading-[1.5] text-muted">{b.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* What's included */}
        <section className="pb-[92px] pt-5">
          <div className="wrap">
            <Reveal className="grid items-center gap-12 rounded-[20px] bg-cream-2 p-9 md:p-14 lg:grid-cols-[1fr_1fr]">
              <div>
                <div className="eyebrow">What&apos;s included</div>
                <h2 className="text-[clamp(28px,3.6vw,44px)] font-extrabold tracking-[-0.04em]">
                  Everything you need to run customer conversations.
                </h2>
                <p className="mt-4 max-w-[440px] text-[16px] text-muted">
                  One app for calls and messages across every channel, with the tools
                  to route, track and improve every interaction.
                </p>
                <Link href="/business-app" className="btn btn-green mt-7">
                  Explore the Business App
                  <ArrowRight />
                </Link>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {FEATURES.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-[15px] text-text">
                    <span className="grid h-6 w-6 flex-none place-items-center rounded-[7px] bg-green-100 text-green-700">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-[92px] pt-5">
          <div className="wrap">
            <Reveal className="relative overflow-hidden rounded-[20px] bg-green px-7 py-14 text-center text-ink md:px-14 md:py-16">
              <Mosaic pattern="c" className="absolute -bottom-[30px] -right-[30px] !w-[180px] opacity-20" />
              <h2 className="relative z-[2] mx-auto max-w-[620px] text-[clamp(28px,4vw,48px)] font-extrabold tracking-[-0.045em]">
                Reserve your business number today.
              </h2>
              <div className="relative z-[2] mt-7 flex flex-wrap justify-center gap-[13px]">
                <Link href="/business-app" className="btn btn-ink">
                  Get started
                  <ArrowRight className="text-white" />
                </Link>
                <a href="mailto:sales@nativetalk.io" className="btn btn-outline">
                  Talk to sales
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
