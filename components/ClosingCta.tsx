import Reveal from "./Reveal";
import Mosaic from "./Mosaic";
import { ArrowRight } from "./icons";

// PRD §3.10 Closing CTA — final value-driven push before the footer.
export default function ClosingCta() {
  return (
    <section className="pb-[92px] pt-5">
      <div className="wrap">
        <Reveal className="relative overflow-hidden rounded-[16px] bg-green px-7 py-14 text-center text-[#06270a] md:px-14 md:py-20">
          <Mosaic pattern="b" className="absolute -left-[30px] -top-[30px] !w-[200px] opacity-25" />
          <Mosaic pattern="c" className="absolute -bottom-[30px] -right-[30px] !w-[200px] opacity-25" />
          <h2 className="relative z-[2] mx-auto max-w-[760px] text-[clamp(32px,5vw,60px)] font-extrabold tracking-[-0.045em]">
            You value your customers.
            <br />
            Let&apos;s help you prove it.
          </h2>
          <div className="relative z-[2] mt-8 flex flex-wrap justify-center gap-[13px]">
            <a href="/business-app" className="btn btn-ink">
              Get started
              <ArrowRight className="text-white" />
            </a>
            <a href="mailto:sales@nativetalk.io" className="btn btn-outline">
              Talk to sales
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
