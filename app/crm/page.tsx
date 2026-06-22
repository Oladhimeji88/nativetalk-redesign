import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Mosaic from "@/components/Mosaic";
import PricingSection from "@/components/PricingSection";
import AddOns from "@/components/AddOns";
import PageImage from "@/components/PageImage";
import { ArrowRight } from "@/components/icons";
import type { Plan } from "@/lib/pricing";
import { PAGE_IMAGES } from "@/lib/pageImages";

export const metadata: Metadata = {
  title: "NativeTalk CRM — Built for How Large Businesses Actually Run",
  description:
    "Manage your team's work, your customers' tickets and your business's growth from one command center — with AI reporting that tells you what's actually happening.",
};

const PLAY_STORE =
  "https://play.google.com/store/apps/details?id=nativetalk.app.business";

// PRD §5.4 Pricing Tier Structure. Basic confirmed at ₦15,000/user/month;
// Standard per-user rate not yet confirmed (defaults to the Basic rate, §8).
const PLANS: Plan[] = [
  {
    name: "Basic",
    users: "1 user",
    baseMonthly: 15000,
    blurb: "The full CRM workspace for a single operator.",
    features: ["Task management", "Ticketing queue", "Lead tracking", "Standard reports"],
    cta: { label: "Download App", href: PLAY_STORE, style: "btn-outline" },
  },
  {
    name: "Standard",
    users: "2–20 users",
    baseMonthly: 15000,
    blurb: "Bring your whole team into one operating system.",
    features: [
      "Everything in Basic",
      "Team task assignment",
      "Shared ticket ownership",
      "AI business reports",
      "Lead pipeline & conversion",
    ],
    cta: { label: "Start Free Trial", href: "mailto:sales@nativetalk.io", style: "btn-green" },
    featured: true,
  },
  {
    name: "Enterprise",
    users: "20+ users",
    baseMonthly: null,
    customLabel: "Custom",
    blurb: "Custom scope per account, negotiated directly with Sales.",
    features: [
      "Everything in Standard",
      "Custom user volumes",
      "White-label & API access",
      "Dedicated account manager",
    ],
    cta: { label: "Contact Sales", href: "mailto:sales@nativetalk.io", style: "btn-ink" },
  },
];

// PRD §5.3 Capability Pillars — capability before price for the executive buyer.
const PILLARS = [
  {
    title: "Task Management",
    body: "Assign, track and follow through on work across your whole team, so nothing falls through the cracks as the business scales.",
  },
  {
    title: "Ticketing",
    body: "Centralize customer issues into a single queue with ownership and status tracking, so service quality doesn't degrade as volume grows.",
  },
  {
    title: "AI Reports",
    body: "Get AI-generated reports on business performance and team activity, surfacing what needs attention without digging through dashboards.",
  },
  {
    title: "Lead Management",
    body: "Capture, track and convert leads inside the same system your team already uses for tasks and tickets — not a disconnected sales tool.",
  },
];

export default function CrmPage() {
  return (
    <>
      <Nav />
      <main>
        {/* 5.2 Hero */}
        <section className="pb-[64px] pt-[72px]">
          <div className="wrap">
            <Reveal className="relative overflow-hidden rounded-[16px] bg-ink p-10 text-white md:p-16">
              <Mosaic pattern="b" className="absolute -right-[40px] -top-[40px] !w-[260px] opacity-55" />
              <span className="relative z-[2] mb-6 inline-flex items-center gap-[9px] rounded-full bg-green/[0.15] px-3.5 py-[7px] text-[13.5px] font-semibold text-green-300">
                <span className="h-[7px] w-[7px] rounded-full bg-green" />
                NativeTalk CRM
              </span>
              <h1 className="relative z-[2] max-w-[860px] text-[clamp(34px,5vw,64px)] font-extrabold tracking-[-0.045em]">
                The CRM Built for How Large Businesses Actually Run.
              </h1>
              <p className="relative z-[2] my-6 max-w-[620px] text-xl text-muted-dark">
                Manage your team&apos;s work, your customers&apos; tickets, and
                your business&apos;s growth from one command center — with AI
                reporting that tells you what&apos;s actually happening, not just
                what happened.
              </p>
              <div className="relative z-[2] flex flex-wrap gap-[13px]">
                <a href="mailto:sales@nativetalk.io" className="btn btn-green">
                  Talk to Sales
                  <ArrowRight className="text-white" />
                </a>
                <a href="#pricing" className="btn btn-outline-light">
                  Start Free Trial
                </a>
              </div>
              <PageImage
                image={PAGE_IMAGES.crm}
                eyebrow="Customer operations"
                className="relative z-[2] mt-10 min-h-[360px]"
              />
            </Reveal>
          </div>
        </section>

        {/* 5.3 Capability Pillars */}
        <section className="pb-[92px] pt-5">
          <div className="wrap">
            <Reveal className="mb-9 max-w-[680px]">
              <div className="eyebrow">What you can do</div>
              <h2 className="text-[clamp(30px,4vw,50px)] font-extrabold tracking-[-0.04em]">
                Four capabilities that run the whole business.
              </h2>
              <p className="mt-4 text-[17px] text-muted">
                Not a generic CRM feature list — the concrete jobs a large business
                owner gets done with NativeTalk, in one connected system.
              </p>
            </Reveal>
            <div className="grid gap-[18px] md:grid-cols-2">
              {PILLARS.map((p, i) => (
                <Reveal
                  key={p.title}
                  delay={(i % 2) * 0.08}
                  className="flex flex-col rounded-[16px] border border-line bg-paper p-8"
                >
                  <span className="mb-5 grid h-12 w-12 place-items-center rounded-[13px] bg-green text-[18px] font-extrabold text-[#06270a]">
                    {i + 1}
                  </span>
                  <h3 className="mb-2.5 text-[23px] font-bold tracking-[-0.03em]">{p.title}</h3>
                  <p className="text-[15.5px] leading-[1.6] text-muted">{p.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 5.4–5.6 Pricing */}
        <PricingSection
          heading="CRM pricing, fully visible."
          subhead="Compare all three plans on load, and choose the billing frequency that fits your commitment."
          plans={PLANS}
        />

        {/* 5.7 Add-ons */}
        <AddOns note="Lean further into the AI Reports your team already relies on. The AI Executive Summary & Analytics add-on extends them across every conversation." />
      </main>
      <Footer />
    </>
  );
}
