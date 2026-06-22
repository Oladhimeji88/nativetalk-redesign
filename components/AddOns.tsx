import Reveal from "./Reveal";
import { Check } from "./icons";
import { AI_ADDON } from "@/lib/pricing";

/**
 * Add-ons section (PRD §4.3 / §5.7). Premium dark treatment distinguishes paid
 * add-ons from core features (§4.4 / §7.5). Repeatable card pattern so more
 * add-ons can be appended without layout rework (req. 36–37).
 */
export default function AddOns({
  id = "addons",
  note,
}: {
  id?: string;
  note?: string;
}) {
  return (
    <section id={id} className="scroll-mt-24 pb-[92px] pt-5">
      <div className="wrap">
        <Reveal className="mb-9">
          <div className="eyebrow">Add-ons</div>
          <h2 className="max-w-[640px] text-[clamp(28px,3.6vw,46px)] font-extrabold">
            Power up any plan.
          </h2>
          {note && <p className="mt-3 max-w-[560px] text-[17px] text-muted">{note}</p>}
        </Reveal>

        <Reveal className="grid gap-[18px] lg:grid-cols-[1.1fr_0.9fr]">
          {/* Premium add-on card — dark background, distinct styling (§4.4) */}
          <div className="relative overflow-hidden rounded-[10px] border border-green/30 bg-ink p-9 text-white">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-green/[0.15] px-3.5 py-[7px] text-[13px] font-bold text-green-300">
              <span className="h-[7px] w-[7px] rounded-full bg-green" />
              Premium add-on
            </span>
            <h3 className="text-[26px] font-bold">{AI_ADDON.name}</h3>
            <div className="mt-3 flex items-end gap-2">
              <b className="font-display text-[40px] font-extrabold text-green-300">
                {AI_ADDON.price}
              </b>
              <span className="mb-2 text-[15px] text-muted-dark">/ {AI_ADDON.cadence}</span>
            </div>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {AI_ADDON.features.map((f) => (
                <li key={f} className="flex gap-2.5 text-[15px] text-[#e9efe9]">
                  <span className="grid h-6 w-6 flex-none place-items-center rounded-[7px] bg-green/[0.18] text-green-300">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <a href="#pricing" className="btn btn-green mt-7 w-fit">
              Add to your plan
            </a>
          </div>

          {/* "More to come" placeholder for future add-ons (repeatable pattern) */}
          <div className="flex flex-col justify-center rounded-[10px] border border-dashed border-line bg-paper p-9">
            <h3 className="text-[22px] font-bold">More add-ons on the way</h3>
            <p className="mt-3 text-[15px] leading-[1.6] text-muted">
              The add-ons marketplace is built to grow. Expect more ways to extend
              your workspace — automation, deeper integrations and richer
              reporting — without changing your core plan.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
