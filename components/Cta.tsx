import Reveal from "./Reveal";
import Mosaic from "./Mosaic";
import { ArrowRight } from "./icons";

export default function Cta() {
  return (
    <section id="cta" className="pb-[92px] pt-5">
      <div className="wrap">
        <Reveal className="relative overflow-hidden rounded-[16px] bg-ink px-7 py-11 text-center text-white md:px-14 md:py-20">
          <Mosaic
            pattern="b"
            className="absolute -left-[30px] -top-[30px] !w-[200px] opacity-50"
          />
          <Mosaic
            pattern="c"
            className="absolute -bottom-[30px] -right-[30px] !w-[200px] opacity-50"
          />
          <h2 className="relative z-[2] text-[clamp(34px,5vw,66px)] font-extrabold tracking-[-0.045em]">
            Ready to talk
            <br />
            <em className="not-italic text-green-300">business?</em>
          </h2>
          <p className="relative z-[2] mx-auto mb-8 mt-[18px] max-w-[520px] text-[19px] text-muted-dark">
            Join thousands of teams making smarter calls with NativeTalk. Start
            free in minutes, or book a demo and we&apos;ll set it up with you.
          </p>
          <div className="relative z-[2] flex flex-wrap justify-center gap-[13px]">
            <a
              href="https://play.google.com/store/apps/details?id=nativetalk.app.business"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-green"
            >
              Download app
              <ArrowRight className="text-white" />
            </a>
            <a
              href="mailto:support@nativetalk.io"
              className="btn btn-outline-light"
            >
              Book a demo
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
