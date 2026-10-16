import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Mosaic from "@/components/Mosaic";
import Cta from "@/components/Cta";
import PageImage from "@/components/PageImage";
import { ArrowRight, Check } from "@/components/icons";
import { PAGE_IMAGES } from "@/lib/pageImages";

export const metadata: Metadata = {
  title: "Nativetalk Personal — Look forward to phone calls",
  description:
    "Stay in control with NativeTalk. Get a virtual phone, make and receive calls, experience cheaper call rates and more.",
};

const FEATURES = [
  {
    title: "Virtual phone numbers at your fingertips",
    body: "Generate virtual phone numbers at your convenience for making calls or creating another WhatsApp account 😄",
  },
  {
    title: "Temporary numbers",
    body: "Create phone numbers for specific purposes like weddings or birthdays and delete when done.",
  },
  {
    title: "Customizable inbound call rates",
    body: "Get paid when people call you at your personalized rates.",
  },
  {
    title: "Make unlimited local and international calls",
    body: "Make local and international calls at the cheapest call rates and via your internet.",
  },
];

const CONTROL = [
  "Virtual phone numbers",
  "Disposable phone numbers",
  "Set customized rates for incoming calls",
  "Generate unique extensions for specific people like your family, colleagues and friends",
];

const STEPS = [
  {
    n: "01",
    title: "Download the app",
    body: "Get NativeTalk on mobile, desktop or web — no SIM card needed.",
  },
  {
    n: "02",
    title: "Generate your number",
    body: "Pick a virtual number in seconds, right from the app.",
  },
  {
    n: "03",
    title: "Start calling",
    body: "Make and receive calls on your terms, at cheaper rates.",
  },
];

export default function PersonalPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="pb-[72px] pt-[72px]">
          <div className="wrap grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <span className="mb-[26px] inline-flex items-center gap-[9px] rounded-full border border-green-100 bg-green-50 px-3.5 py-[7px] text-[13.5px] font-semibold text-green-700">
                <span className="h-[7px] w-[7px] rounded-full bg-green" />
                Nativetalk Personal
              </span>
              <h1 className="text-[clamp(40px,5.6vw,72px)] font-extrabold tracking-[-0.045em]">
                Look forward to
                <br />
                <em className="not-italic text-green-700">phone calls.</em>
              </h1>
              <p className="my-[26px] max-w-[500px] text-xl text-muted">
                Stay in control with NativeTalk. Get a virtual phone, make and
                receive calls, experience cheaper call rates and more.
              </p>
              <div className="flex flex-wrap gap-[13px]">
                <a
                  href="https://play.google.com/store/apps/details?id=nativetalk.app.business"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-green"
                >
                  Download app
                  <ArrowRight className="text-white" />
                </a>
                <a href="#cta" className="btn btn-outline">
                  Get started
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-[14px] bg-ink p-[30px]">
                <Mosaic
                  pattern="a"
                  className="absolute right-[20px] top-[20px] !w-[40%] opacity-90"
                />
                <div className="relative z-[2] mt-24">
                  <div className="mb-2.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-green-300">
                    Stay connected on your terms
                  </div>
                  <h3 className="mb-5 text-[26px] font-bold tracking-[-0.03em] text-white">
                    Make and receive calls from the NativeTalk app — no SIM
                    card needed.
                  </h3>
                  <ul className="grid gap-3">
                    {CONTROL.map((c) => (
                      <li
                        key={c}
                        className="flex gap-3 text-[15px] text-[#e9efe9]"
                      >
                        <span className="grid h-6 w-6 flex-none place-items-center rounded-[7px] bg-green/[0.18] text-green-300">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="pb-[92px]">
          <div className="wrap">
            <Reveal>
              <PageImage
                image={PAGE_IMAGES.personal}
                eyebrow="Calls on your terms"
                className="min-h-[440px]"
              />
            </Reveal>
          </div>
        </section>

        {/* Why */}
        <section className="pb-[92px]">
          <div className="wrap">
            <Reveal className="rounded-[16px] bg-green-100 p-11 md:p-16">
              <div className="eyebrow">Why we built it</div>
              <h2 className="mb-4 max-w-[660px] text-[clamp(28px,3.8vw,46px)] font-extrabold tracking-[-0.04em] text-[#143a0a]">
                Calls are more exciting with NativeTalk.
              </h2>
              <p className="max-w-[620px] text-[17px] text-[#2c5a18]">
                Do you feel overwhelmed by phone calls? What if you could
                control when and how people can call you? We built NativeTalk
                to make your calls something to look forward to.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Features */}
        <section className="pb-[92px]">
          <div className="wrap">
            <Reveal className="mb-11">
              <div className="eyebrow">Features</div>
              <h2 className="max-w-[640px] text-[clamp(32px,4.4vw,54px)] font-extrabold tracking-[-0.04em]">
                What you can do
                <br />
                with NativeTalk.
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
              {FEATURES.map((f, i) => (
                <Reveal
                  key={f.title}
                  delay={i * 0.07}
                  className="flex min-h-[260px] flex-col justify-between rounded-[12px] border border-line bg-paper p-7"
                >
                  <span className="grid h-[46px] w-[46px] place-items-center rounded-[13px] bg-green-50 text-green-700">
                    <Check className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="mb-2 text-[20px] font-bold tracking-[-0.03em]">
                      {f.title}
                    </h3>
                    <p className="text-[14.5px] leading-[1.5] text-muted">
                      {f.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 3 steps */}
        <section className="pb-[92px]">
          <div className="wrap">
            <Reveal className="rounded-[16px] bg-ink p-11 text-white md:p-16">
              <div className="mb-4 text-sm font-semibold uppercase tracking-[0.06em] text-green-300">
                Easy setup
              </div>
              <h2 className="mb-10 text-[clamp(28px,3.8vw,46px)] font-extrabold tracking-[-0.04em]">
                Get started in 3 steps.
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                {STEPS.map((s) => (
                  <div
                    key={s.n}
                    className="rounded-[10px] border border-line-dark bg-white/[0.04] p-6"
                  >
                    <div className="mb-4 text-[28px] font-extrabold text-green">
                      {s.n}
                    </div>
                    <h3 className="mb-2 text-[19px] font-bold text-white">
                      {s.title}
                    </h3>
                    <p className="text-[14.5px] text-muted-dark">{s.body}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <Cta />
      </main>
      <Footer />
    </>
  );
}
