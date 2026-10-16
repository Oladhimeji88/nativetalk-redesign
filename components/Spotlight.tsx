import Image from "next/image";
import Reveal from "./Reveal";
import Mosaic from "./Mosaic";
import { Check } from "./icons";

const CHECKS = [
  "One‑click CRM sync & screen‑pops",
  "Webhooks for every call event",
  "Sandbox keys & friendly docs",
];

export default function Spotlight() {
  return (
    <section id="developers" className="pb-[92px] pt-5">
      <Reveal className="wrap grid items-center gap-14 lg:grid-cols-2">
        <div className="relative grid aspect-[1/0.92] place-items-center overflow-hidden rounded-[14px] border border-line bg-cream-2">
          <Mosaic
            pattern="a"
            className="absolute bottom-[-10%] right-[-6%] !w-[55%] opacity-50"
          />
          <div className="relative z-[2] grid h-[118px] w-[118px] place-items-center rounded-[14px] bg-green shadow-[0_26px_50px_-18px_rgba(62,191,15,0.6)]">
            <Image
              src="/assets/favicon.png"
              alt="NativeTalk"
              width={70}
              height={70}
              className="h-[70px] w-[70px]"
            />
          </div>
        </div>

        <div>
          <div className="eyebrow">Built for developers</div>
          <h2 className="mb-[18px] text-[clamp(30px,3.8vw,50px)] font-extrabold tracking-[-0.04em]">
            Calling that plugs into everything.
          </h2>
          <p className="mb-6 max-w-[440px] text-[17px] text-muted">
            Clean REST APIs and native CRM connectors push every call, recording
            and contact straight into your workflow — with screen‑pops,
            click‑to‑call and automatic logging. No copy‑paste, no silos.
          </p>
          <ul className="mb-7 grid gap-3.5">
            {CHECKS.map((c) => (
              <li key={c} className="flex gap-3 text-base text-text">
                <span className="grid h-6 w-6 flex-none place-items-center rounded-[7px] bg-green-50 text-green-700">
                  <Check className="h-3.5 w-3.5" />
                </span>
                {c}
              </li>
            ))}
          </ul>
          <a href="#developers" className="btn btn-ink">
            Read the docs
          </a>
        </div>
      </Reveal>
    </section>
  );
}
