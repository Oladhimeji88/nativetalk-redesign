import Reveal from "./Reveal";
import { ArrowRight, Check } from "./icons";

const CHECKS = [
  "Skills‑based routing & live queues",
  "Call recording, whisper & barge‑in",
  "Real‑time wallboards and SLA alerts",
];

const AGENTS = [
  { initials: "JD", name: "Jordan Diaz", meta: "On call · Sales queue", tag: "Live" },
  { initials: "MK", name: "Mariam Konaté", meta: "Available · Support", tag: "Ready" },
  { initials: "RO", name: "Rita Okafor", meta: "Wrap‑up · 0:18", tag: "Busy" },
];

export default function FeatureBand() {
  return (
    <section id="platform" className="pb-[92px] pt-5">
      <div className="wrap">
        <Reveal className="relative grid items-center gap-[54px] overflow-hidden rounded-[16px] bg-ink p-11 text-white md:p-16 lg:grid-cols-2">
          <div>
            <div className="mb-4 text-sm font-semibold uppercase tracking-[0.06em] text-green-300">
              Call center, reimagined
            </div>
            <h2 className="mb-[18px] text-[clamp(30px,3.6vw,46px)] font-extrabold tracking-[-0.035em]">
              Launch a full call center in 24 hours.
            </h2>
            <p className="mb-[26px] max-w-[440px] text-[17px] text-muted-dark">
              Route, queue and measure every call. Give agents a browser tab
              instead of a desk phone and watch performance live — no hardware,
              no installers.
            </p>
            <ul className="mb-[30px] grid gap-3.5">
              {CHECKS.map((c) => (
                <li key={c} className="flex gap-3 text-base text-[#e9efe9]">
                  <span className="grid h-6 w-6 flex-none place-items-center rounded-[7px] bg-green/[0.18] text-green-300">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {c}
                </li>
              ))}
            </ul>
            <a href="#cta" className="btn btn-green">
              Build your call center
              <ArrowRight className="text-white" />
            </a>
          </div>

          <div className="rounded-[10px] border border-line-dark bg-ink-2 p-6">
            <div className="mb-4 flex gap-3.5">
              {[
                { b: "412", s: "Calls today" },
                { b: "0:42", s: "Avg wait" },
                { b: "98%", s: "Answered" },
              ].map((stat) => (
                <div
                  key={stat.s}
                  className="flex-1 rounded-[14px] border border-line-dark bg-white/[0.04] p-4"
                >
                  <b className="text-[26px] font-extrabold tracking-[-0.03em] text-white">
                    {stat.b}
                  </b>
                  <span className="block text-xs text-muted-dark">{stat.s}</span>
                </div>
              ))}
            </div>
            {AGENTS.map((a) => (
              <div
                key={a.initials}
                className="mb-[11px] flex items-center gap-3 rounded-[14px] border border-line-dark bg-white/[0.04] px-[15px] py-[13px]"
              >
                <span className="grid h-[38px] w-[38px] flex-none place-items-center rounded-[10px] bg-green text-[13px] font-extrabold text-[#06270a]">
                  {a.initials}
                </span>
                <div>
                  <b className="block text-sm text-white">{a.name}</b>
                  <span className="text-xs text-muted-dark">{a.meta}</span>
                </div>
                <span className="ml-auto rounded-full bg-green/[0.18] px-2.5 py-1 text-[11px] font-bold text-green-300">
                  {a.tag}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
