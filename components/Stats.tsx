import Reveal from "./Reveal";

// PRD §3.7 Impact / Statistics. Figures pending verification by Growth/Analytics (§8).
const STATS = [
  { b: "10,000,000+", s: "Minutes of calls made" },
  { b: "3,000+", s: "Businesses" },
  { b: "10,000", s: "Call agents" },
];

export default function Stats() {
  return (
    <section className="pb-[92px] pt-5">
      <div className="wrap">
        <Reveal className="grid grid-cols-1 gap-[30px] rounded-[14px] bg-ink p-10 text-center sm:grid-cols-3 lg:p-[54px]">
          {STATS.map((st) => (
            <div key={st.s}>
              <b className="block text-[clamp(38px,4.6vw,60px)] font-extrabold tracking-[-0.04em] text-white">
                {st.b}
              </b>
              <span className="text-[15px] font-medium text-white/85">
                {st.s}
              </span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
