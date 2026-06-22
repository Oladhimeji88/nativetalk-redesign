import Reveal from "./Reveal";
import Mosaic from "./Mosaic";
import { ArrowRight, Check } from "./icons";

// PRD §3.4 Personal, §3.5 Business, §3.6 Enterprise.
// Routing per §2.2: Personal → /personal, Business → /business-app, Enterprise → /crm.

const PERSONAL_FEATURES = [
  "Virtual phone numbers",
  "Disposable phone numbers",
  "Customized incoming call rates",
  "Unique extensions for family, colleagues & friends",
];

export default function AudienceSections() {
  return (
    <div className="pt-2">
      {/* Personal — For You */}
      <section id="personal" className="scroll-mt-24 pb-[92px] pt-5">
        <div className="wrap grid items-center gap-14 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <div className="eyebrow">For You</div>
            <h2 className="text-[clamp(30px,4.2vw,52px)] font-extrabold tracking-[-0.04em]">
              Stay connected
              <br />
              on your terms.
            </h2>
            <p className="my-6 max-w-[480px] text-[17px] text-muted">
              Stay in control of your phone calls and connect on your terms with
              NativeTalk. Make and receive calls from your NativeTalk mobile app —
              no SIM card needed.
            </p>
            <ul className="mb-8 grid gap-3 sm:grid-cols-2">
              {PERSONAL_FEATURES.map((f) => (
                <li key={f} className="flex gap-2.5 text-[15px] text-text">
                  <span className="grid h-6 w-6 flex-none place-items-center rounded-[7px] bg-green-50 text-green-700">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <a href="/personal" className="btn btn-outline">
              Learn more
              <ArrowRight />
            </a>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative grid aspect-[1/0.9] place-items-center overflow-hidden rounded-[16px] border border-line bg-green-100">
              <Mosaic pattern="a" className="absolute -bottom-[8%] -right-[6%] !w-[52%] opacity-40" />
              <div className="relative z-[2] w-[74%] rounded-[12px] border border-line bg-paper p-5 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)]">
                <div className="mb-3 text-[12px] font-semibold uppercase tracking-[0.08em] text-green-700">
                  Your number · No SIM
                </div>
                <b className="block text-[22px] font-extrabold tracking-[-0.03em]">
                  +234 (0) 815 020 1188
                </b>
                <span className="text-[13px] text-muted">Personal extension · Active</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Business — NativeTalk Business */}
      <section id="business" className="scroll-mt-24 pb-[92px] pt-5">
        <div className="wrap">
          <Reveal className="relative grid items-center gap-14 overflow-hidden rounded-[16px] bg-ink p-10 text-white md:p-16 lg:grid-cols-[1fr_0.85fr]">
            <Mosaic pattern="b" className="absolute -right-[40px] -top-[40px] !w-[240px] opacity-50" />
            <div className="relative z-[2]">
              <div className="mb-4 text-sm font-semibold uppercase tracking-[0.06em] text-green-300">
                NativeTalk Business
              </div>
              <h2 className="text-[clamp(30px,4vw,50px)] font-extrabold tracking-[-0.04em]">
                One phone number to power and grow your business.
              </h2>
              <p className="my-6 max-w-[520px] text-[17px] text-muted-dark">
                We help small business owners improve customer service and grow
                their business with the NativeTalk Business phone system. Separate
                business and personal calls, provide self-service options, and
                drive sales.
              </p>
              <a href="/business" className="btn btn-green">
                Reserve a Number
                <ArrowRight className="text-white" />
              </a>
            </div>
            <div className="relative z-[2] rounded-[12px] border border-line-dark bg-white/[0.05] p-6">
              {[
                { b: "30 sec", s: "to a business line" },
                { b: "All-in-one", s: "calls + WhatsApp + Instagram" },
                { b: "Shared", s: "team inbox & call routing" },
              ].map((stat) => (
                <div
                  key={stat.s}
                  className="mb-2.5 flex items-center gap-3 rounded-[12px] border border-line-dark bg-white/[0.04] px-4 py-3.5 last:mb-0"
                >
                  <b className="text-[20px] font-extrabold tracking-[-0.03em] text-green-300">
                    {stat.b}
                  </b>
                  <span className="text-[14px] text-muted-dark">{stat.s}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Enterprise — NativeTalk Enterprise */}
      <section id="enterprise" className="scroll-mt-24 pb-[92px] pt-5">
        <div className="wrap grid items-center gap-14 lg:grid-cols-[1fr_1fr]">
          <Reveal delay={0.1} className="order-2 lg:order-1">
            <div className="relative grid aspect-[1/0.82] place-items-center overflow-hidden rounded-[16px] border border-line bg-cream-2">
              <Mosaic pattern="c" className="absolute -bottom-[8%] -left-[6%] !w-[52%] opacity-40" />
              <div className="relative z-[2] grid w-[78%] gap-2.5">
                {[
                  { k: "Call center", v: "Live in 24 hours" },
                  { k: "White-label", v: "Your brand, our rails" },
                  { k: "API / CRM", v: "Wired into your stack" },
                ].map((row) => (
                  <div
                    key={row.k}
                    className="flex items-center justify-between rounded-[12px] border border-line bg-paper px-4 py-3.5"
                  >
                    <span className="text-[13px] font-semibold uppercase tracking-[0.06em] text-green-700">
                      {row.k}
                    </span>
                    <b className="text-[15px] font-semibold">{row.v}</b>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal className="order-1 lg:order-2">
            <div className="eyebrow">NativeTalk Enterprise</div>
            <h2 className="text-[clamp(30px,4.2vw,52px)] font-extrabold tracking-[-0.04em]">
              Team of 1 or 50+, we&apos;ve got a solution for you.
            </h2>
            <p className="my-6 max-w-[480px] text-[17px] text-muted">
              Set up a call centre in 24 hours. White-label options and APIs
              integrate with your CRM to streamline sales and customer service.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="/enterprise" className="btn btn-ink">
                Learn more
                <ArrowRight className="text-white" />
              </a>
              <a href="/voip" className="btn btn-outline">
                Explore VoIP
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
