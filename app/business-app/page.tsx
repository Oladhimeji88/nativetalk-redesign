import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Mosaic from "@/components/Mosaic";
import PricingSection from "@/components/PricingSection";
import AddOns from "@/components/AddOns";
import MaskingFlow from "@/components/MaskingFlow";
import Newsletter from "@/components/Newsletter";
import ContactSection from "@/components/ContactSection";
import Faq from "@/components/Faq";
import PageImage from "@/components/PageImage";
import { ArrowRight, ArrowUpRight, Check } from "@/components/icons";
import type { Plan } from "@/lib/pricing";
import { PAGE_IMAGES } from "@/lib/pageImages";

export const metadata: Metadata = {
  title: "NativeTalk Business App — One App for Every Customer Conversation",
  description:
    "The smarter way to run your business communication. Calls, WhatsApp, Instagram and Facebook in one shared inbox, with AI summaries on every conversation.",
};

const PLAY_STORE =
  "https://play.google.com/store/apps/details?id=nativetalk.app.business";

// PRD §4.2.3 Pricing Tier Structure. Basic confirmed at ₦2,500/user/month;
// Standard per-user rate not yet confirmed (defaults to the Basic rate, §8).
const PLANS: Plan[] = [
  {
    name: "Basic",
    users: "1 user",
    baseMonthly: 2500,
    blurb: "Everything a solo owner needs to run a professional business line.",
    features: ["Virtual business number", "Auto receptionist", "Call forwarding", "Call analytics"],
    cta: { label: "Download App", href: PLAY_STORE, style: "btn-outline" },
  },
  {
    name: "Standard",
    users: "2–20 users",
    baseMonthly: 2500,
    blurb: "Add your team, share an inbox and route calls as you grow.",
    features: [
      "Everything in Basic",
      "Shared team inbox",
      "Call routing & queuing",
      "CRM integration",
      "International & special numbers",
    ],
    cta: { label: "Start Free Trial", href: PLAY_STORE, style: "btn-green" },
    featured: true,
  },
  {
    name: "Enterprise",
    users: "20+ users",
    baseMonthly: null,
    customLabel: "Custom",
    blurb: "Custom scope per account, negotiated directly with our sales team.",
    features: [
      "Everything in Standard",
      "Custom user volumes",
      "White-label options & APIs",
      "Dedicated account manager",
    ],
    cta: { label: "Contact Sales", href: "mailto:sales@nativetalk.io", style: "btn-ink" },
  },
];

// PRD §4.4 Call Benefits — the AI card gets premium treatment and is clickable.
const BENEFITS = [
  { title: "Business hotline", body: "A dedicated number your customers can always reach, on every device." },
  { title: "Shared team inbox", body: "Calls, WhatsApp, Instagram and Facebook in one place your whole team can see." },
  { title: "Call routing & masking", body: "Send calls to the right person while keeping personal numbers private." },
  { title: "Self-service IVR", body: "Let customers help themselves and free your team for the calls that matter." },
];

// PRD §4.5 How It Works — concrete steps, no empty placeholders (§7.3).
const STEPS = [
  { n: "01", title: "Download the app", body: "Get NativeTalk on mobile, desktop or web — no SIM, no hardware." },
  { n: "02", title: "Reserve your number", body: "Pick a business number and set up extensions for your team in minutes." },
  { n: "03", title: "Connect your channels", body: "Link WhatsApp, Instagram and Facebook to one shared inbox." },
  { n: "04", title: "Start every conversation", body: "Take calls and messages, route them, and let AI summarise the rest." },
];

// PRD §4.7 Social Media Integration — inactive channels must show "Coming Soon" (§7.3).
const SOCIAL_CHANNELS = [
  { name: "WhatsApp", live: true },
  { name: "Instagram", live: true },
  { name: "Facebook", live: true },
  { name: "Twitter / X", live: false },
  { name: "Telegram", live: false },
];

// PRD §4.8 Messaging Inbox — communicate a scalable channel set.
const INBOX_CHANNELS = ["WhatsApp", "Instagram", "Facebook Messenger", "Website Chat"];

// PRD §4.9 Demo Library — multiple demos so the product reads as more than calling.
const DEMOS = [
  "Hotline Demo",
  "Messaging Inbox Demo",
  "Call Routing Demo",
  "Masking Demo",
  "Team Collaboration Demo",
  "AI Summary Demo",
];

export default function BusinessAppPage() {
  return (
    <>
      <Nav />
      <main>
        {/* 4.1 Hero */}
        <section className="pb-[64px] pt-[72px]">
          <div className="wrap grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <span className="mb-6 inline-flex items-center gap-[9px] rounded-full border border-green-100 bg-green-50 px-3.5 py-[7px] text-[13.5px] font-semibold text-green-700">
                <span className="h-[7px] w-[7px] rounded-full bg-green" />
                NativeTalk Business App
              </span>
              <h1 className="text-[clamp(38px,5.2vw,66px)] font-extrabold tracking-[-0.045em]">
                One App for Every
                <br />
                <em className="not-italic text-green-700">Customer Conversation.</em>
              </h1>
              <p className="my-6 max-w-[520px] text-xl text-muted">
                The Smarter Way to Run Your Business Communication. Calls,
                WhatsApp, Instagram and Facebook — one shared inbox, one number,
                AI on every conversation.
              </p>
              <div className="flex flex-wrap gap-[13px]">
                <a href={PLAY_STORE} target="_blank" rel="noopener noreferrer" className="btn btn-green">
                  Download App
                  <ArrowRight className="text-white" />
                </a>
                <a href="#pricing" className="btn btn-outline">
                  See pricing
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <PageImage
                image={PAGE_IMAGES.businessApp}
                eyebrow="One inbox / every channel"
                className="aspect-[1/0.92]"
              />
            </Reveal>
          </div>
        </section>

        {/* 4.2 Pricing */}
        <PricingSection
          heading="Pricing that grows with your team."
          subhead="Pick a billing frequency and compare all three plans side by side. Switch any time."
          plans={PLANS}
        />

        {/* 4.3 Add-ons */}
        <AddOns note="Extend any plan with premium capabilities. The AI Executive Summary & Analytics add-on turns every conversation into insight." />

        {/* 4.4 Call Benefits */}
        <section className="pb-[92px] pt-5">
          <div className="wrap">
            <Reveal className="mb-9 max-w-[640px]">
              <div className="eyebrow">What you get</div>
              <h2 className="text-[clamp(30px,4vw,50px)] font-extrabold tracking-[-0.04em]">
                Every tool to run customer conversations well.
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
              {/* Premium clickable AI card — dark, distinct, scrolls to add-on pricing (§4.4) */}
              <Link
                href="#addons"
                className="group relative flex min-h-[230px] flex-col justify-between overflow-hidden rounded-[14px] border border-green/30 bg-ink p-7 text-white sm:col-span-2 lg:col-span-1 lg:row-span-1"
              >
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-green/[0.15] px-3 py-[6px] text-[12px] font-bold text-green-300">
                  <span className="h-[6px] w-[6px] rounded-full bg-green" />
                  Premium add-on
                </span>
                <div>
                  <h3 className="mb-2 text-[21px] font-bold tracking-[-0.03em]">
                    AI Executive Summary
                  </h3>
                  <p className="text-[14.5px] leading-[1.5] text-muted-dark">
                    AI call summaries, conversation insights and a full analytics
                    dashboard. <span className="text-green-300">See pricing →</span>
                  </p>
                </div>
                <span className="mt-4 grid h-9 w-9 place-items-center rounded-full bg-green text-[#06270a] transition-transform duration-200 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]">
                  <ArrowUpRight className="h-[18px] w-[18px]" />
                </span>
              </Link>

              {BENEFITS.map((b) => (
                <div key={b.title} className="rounded-[14px] border border-line bg-paper p-7">
                  <span className="mb-5 grid h-[42px] w-[42px] place-items-center rounded-xl bg-green-50 text-green-700">
                    <Check className="h-5 w-5" />
                  </span>
                  <h3 className="mb-2 text-[19px] font-bold tracking-[-0.03em]">{b.title}</h3>
                  <p className="text-[14.5px] leading-[1.5] text-muted">{b.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4.5 How It Works */}
        <section className="pb-[92px] pt-5">
          <div className="wrap">
            <Reveal className="rounded-[16px] bg-cream-2 p-9 md:p-14">
              <div className="eyebrow">How it works</div>
              <h2 className="mb-10 max-w-[640px] text-[clamp(28px,3.8vw,46px)] font-extrabold tracking-[-0.04em]">
                Live in four steps.
              </h2>
              <div className="grid gap-[18px] md:grid-cols-2 lg:grid-cols-4">
                {STEPS.map((s) => (
                  <div key={s.n} className="rounded-[12px] border border-line bg-paper p-6">
                    <div className="mb-4 text-[26px] font-extrabold text-green-700">{s.n}</div>
                    <h3 className="mb-2 text-[18px] font-bold tracking-[-0.03em]">{s.title}</h3>
                    <p className="text-[14px] leading-[1.5] text-muted">{s.body}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* 4.6 Start Receiving Calls Flow (number masking, 3 views) */}
        <MaskingFlow />

        {/* 4.7 + 4.8 Channels */}
        <section className="pb-[92px] pt-5">
          <div className="wrap grid gap-[18px] lg:grid-cols-2">
            {/* Messaging inbox channels */}
            <Reveal className="rounded-[16px] border border-line bg-paper p-9">
              <div className="eyebrow">Messaging inbox</div>
              <h2 className="mb-6 text-[clamp(24px,2.8vw,34px)] font-extrabold tracking-[-0.035em]">
                Every message, one inbox.
              </h2>
              <div className="grid gap-2.5">
                {INBOX_CHANNELS.map((c) => (
                  <div
                    key={c}
                    className="flex items-center gap-3 rounded-[12px] border border-line bg-cream px-4 py-3.5"
                  >
                    <span className="grid h-9 w-9 flex-none place-items-center rounded-[10px] bg-green-50 text-green-700">
                      <Check className="h-4 w-4" />
                    </span>
                    <b className="text-[15px] font-semibold">{c}</b>
                    <span className="ml-auto text-[12px] font-semibold text-green-700">Connected</span>
                  </div>
                ))}
                <div className="flex items-center gap-3 rounded-[12px] border border-dashed border-line px-4 py-3.5 text-muted">
                  <b className="text-[15px] font-semibold">+ More Channels Coming</b>
                </div>
              </div>
            </Reveal>

            {/* Social integration with honest statuses */}
            <Reveal delay={0.08} className="rounded-[16px] border border-line bg-paper p-9">
              <div className="eyebrow">Social integration</div>
              <h2 className="mb-6 text-[clamp(24px,2.8vw,34px)] font-extrabold tracking-[-0.035em]">
                Meet customers where they are.
              </h2>
              <div className="flex flex-wrap gap-2.5">
                {SOCIAL_CHANNELS.map((c) => (
                  <span
                    key={c.name}
                    className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-[14.5px] font-semibold ${
                      c.live
                        ? "border-green-100 bg-green-50 text-green-700"
                        : "border-line bg-cream text-muted"
                    }`}
                  >
                    {c.name}
                    {!c.live && (
                      <span className="rounded-full bg-line px-2 py-0.5 text-[11px] font-bold text-[#5c6560]">
                        Coming Soon
                      </span>
                    )}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-[14px] text-muted">
                We only show channels that actually work today. Others light up as
                we ship them.
              </p>
            </Reveal>
          </div>
        </section>

        {/* 4.9 Demo Library */}
        <section className="pb-[92px] pt-5">
          <div className="wrap">
            <Reveal className="mb-9 max-w-[640px]">
              <div className="eyebrow">See it in action</div>
              <h2 className="text-[clamp(30px,4vw,50px)] font-extrabold tracking-[-0.04em]">
                A demo for every feature.
              </h2>
              <p className="mt-4 text-[17px] text-muted">
                NativeTalk does far more than calling. Watch each part of the
                platform in a short walkthrough.
              </p>
            </Reveal>
            <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
              {DEMOS.map((d) => (
                <a
                  key={d}
                  href="https://www.youtube.com/@nativetalk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-[180px] flex-col justify-between rounded-[14px] border border-line bg-paper p-6 transition hover:border-green"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-green text-[#06270a] transition-transform group-hover:scale-105">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  <h3 className="text-[18px] font-bold tracking-[-0.03em]">{d}</h3>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* 4.10 Download & Upgrade CTA — both buttons active (§7.2) */}
        <section className="pb-[92px] pt-5">
          <div className="wrap">
            <Reveal className="relative overflow-hidden rounded-[16px] bg-ink px-7 py-12 text-center text-white md:px-14 md:py-16">
              <Mosaic pattern="b" className="absolute -left-[30px] -top-[30px] !w-[180px] opacity-50" />
              <h2 className="relative z-[2] mx-auto max-w-[620px] text-[clamp(28px,4vw,48px)] font-extrabold tracking-[-0.045em]">
                Get the app, then grow into a team.
              </h2>
              <div className="relative z-[2] mt-7 flex flex-wrap justify-center gap-[13px]">
                <a href={PLAY_STORE} target="_blank" rel="noopener noreferrer" className="btn btn-green">
                  Download App
                  <ArrowRight className="text-white" />
                </a>
                <a href="#pricing" className="btn btn-outline-light">
                  Upgrade to Team
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 4.12 About + 4.14 Our Commitment */}
        <section className="pb-[92px] pt-5">
          <div className="wrap grid gap-[18px] lg:grid-cols-2">
            <Reveal className="rounded-[16px] border border-line bg-paper p-9 md:p-11">
              <div className="eyebrow">About NativeTalk</div>
              <p className="text-[18px] leading-[1.6] text-text">
                NativeTalk is an omnichannel business communication platform that
                helps businesses manage every customer conversation — calls,
                WhatsApp, Instagram, Facebook, email — from one place. The platform
                exists for businesses tired of scattered messages and untracked
                calls, who want their team aligned and their customers heard. From a
                dedicated business hotline to shared team inboxes and AI-powered
                conversation summaries, NativeTalk equips businesses to communicate
                professionally at any stage of growth.
              </p>
            </Reveal>
            <Reveal delay={0.08} className="rounded-[16px] bg-green-100 p-9 md:p-11">
              <div className="eyebrow">Our commitment</div>
              <p className="text-[16px] leading-[1.65] text-[#1d3d12]">
                Business growth is increasingly determined by the quality, speed and
                consistency of customer communication. Yet across Africa, many
                businesses still rely on fragmented systems for calls, messaging,
                support and team collaboration — resulting in slower responses, poor
                visibility and lost revenue. NativeTalk is building communication
                infrastructure as accessible as any other business tool, combining
                calling, messaging, virtual numbers, routing and team collaboration
                into one unified environment — so businesses can manage
                conversations at scale without the cost and complexity of
                traditional systems.
              </p>
            </Reveal>
          </div>
        </section>

        {/* 4.16 Contact */}
        <ContactSection />

        <Faq />

        {/* 4.11 Newsletter (directly before footer) */}
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
