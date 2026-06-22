import Reveal from "./Reveal";
import { Check } from "./icons";

type Plan = {
  name: string;
  tagline: string;
  price: string;
  priceNote?: string;
  desc: string;
  features: string[];
  cta: { label: string; style: string };
  featured?: boolean;
};

const PLANS: Plan[] = [
  {
    name: "Nativetalk Starter Plan",
    tagline: "Free service valid for 1 year",
    price: "Free",
    priceNote: " / 2 extensions",
    desc: "Get 2 extensions for free — just top up airtime for your calls.",
    features: [
      "Get 2 Extensions for Free",
      "Auto Receptionist",
      "Call Forwarding",
      "Call Analytics",
    ],
    cta: { label: "Get started free", style: "btn-outline" },
  },
  {
    name: "Nativetalk Standard",
    tagline: "For growing teams",
    price: "₦3,000",
    priceNote: " / mo / ext",
    desc: "Add more users as your business grows.",
    features: [
      "Everything in the starter plan plus",
      "Call recording",
      "CRM Integration",
      "International numbers",
      "Special numbers",
    ],
    cta: { label: "Buy now", style: "btn-green" },
    featured: true,
  },
  {
    name: "Nativetalk Enterprise",
    tagline: "For call centres at scale",
    price: "Custom",
    desc: "Cloud contact-centre suite with white-labelling and APIs.",
    features: [
      "Everything in Standard",
      "Call centre for thousands of users in 24hrs",
      "White-labelled solutions & APIs",
      "Dedicated account manager, 24/7 support",
    ],
    cta: { label: "Contact sales", style: "btn-outline" },
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="pb-[92px] pt-5">
      <div className="wrap">
        <Reveal className="mb-11 flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="eyebrow">Pricing</div>
            <h2 className="max-w-[640px] text-[clamp(32px,4.4vw,54px)] font-extrabold tracking-[-0.04em]">
              Simple plans
              <br />
              that scale.
            </h2>
          </div>
          <p className="max-w-[380px] text-[17px] text-muted">
            Start free, then pick the plan that fits. All plans include
            unlimited app‑to‑app calling and pay‑as‑you‑go airtime.
          </p>
        </Reveal>

        <Reveal className="grid items-stretch gap-[18px] lg:grid-cols-3">
          {PLANS.map((p) => (
            <div
              key={p.name}
              className={`flex flex-col rounded-[12px] border p-8 ${
                p.featured
                  ? "border-ink bg-ink text-white"
                  : "border-line bg-paper"
              }`}
            >
              {p.featured && (
                <span className="mb-3.5 w-fit rounded-full bg-green px-3 py-1 text-xs font-bold text-[#06270a]">
                  Most popular
                </span>
              )}
              <h3 className="mb-[5px] text-xl font-bold">{p.name}</h3>
              <span
                className={`text-sm ${p.featured ? "text-muted-dark" : "text-muted"}`}
              >
                {p.tagline}
              </span>
              <div className="mb-1 mt-5">
                <b className="text-[44px] font-extrabold tracking-[-0.04em]">
                  {p.price}
                </b>
                {p.priceNote && (
                  <span
                    className={`text-[15px] ${
                      p.featured ? "text-muted-dark" : "text-muted"
                    }`}
                  >
                    {p.priceNote}
                  </span>
                )}
              </div>
              <p
                className={`mb-[22px] text-sm ${
                  p.featured ? "text-muted-dark" : "text-muted"
                }`}
              >
                {p.desc}
              </p>
              <ul className="mb-6 grid flex-1 content-start gap-3">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2.5 text-[14.5px]">
                    <span
                      className={`grid h-[21px] w-[21px] flex-none place-items-center rounded-md ${
                        p.featured
                          ? "bg-green/20 text-green-300"
                          : "bg-green-50 text-green-700"
                      }`}
                    >
                      <Check className="h-[13px] w-[13px]" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#cta"
                className={`btn w-full justify-center ${p.cta.style} ${
                  p.featured && p.cta.style === "btn-outline"
                    ? "btn-outline-light"
                    : ""
                }`}
              >
                {p.cta.label}
              </a>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
