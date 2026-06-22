import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

// Shared scaffold for Terms and Privacy. PRD §4.18 / §3.11 require the final,
// legally-reviewed documents before launch — that approved copy is owned by
// Legal and tracked in §8. This page is an honest, clearly-labelled placeholder
// so footer links are never dead (§7.2), to be replaced with approved copy.
export default function LegalPage({
  title,
  intro,
}: {
  title: string;
  intro: string;
}) {
  return (
    <>
      <Nav />
      <main>
        <section className="pb-[92px] pt-[72px]">
          <div className="wrap max-w-[820px]">
            <Reveal>
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-cream px-3.5 py-[7px] text-[13px] font-semibold text-muted">
                Pending legal review
              </span>
              <h1 className="text-[clamp(34px,5vw,60px)] font-extrabold tracking-[-0.045em]">
                {title}
              </h1>
              <p className="mt-6 text-[18px] leading-[1.7] text-muted">{intro}</p>
              <p className="mt-5 text-[16px] leading-[1.7] text-muted">
                The full, approved {title.toLowerCase()} is being finalized with
                our legal team and will be published here before launch. For any
                questions in the meantime, contact{" "}
                <a
                  href="mailto:support@nativetalk.io"
                  className="font-semibold text-green-700 underline underline-offset-2"
                >
                  support@nativetalk.io
                </a>
                .
              </p>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
