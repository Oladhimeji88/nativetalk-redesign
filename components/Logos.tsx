const COUNTRIES = [
  "Nigeria",
  "Ghana",
  "Kenya",
  "South Africa",
  "Ivory Coast",
  "Tanzania",
];

export default function Logos() {
  // List rendered twice so the marquee loops seamlessly at -50%.
  const loop = [...COUNTRIES, ...COUNTRIES];
  return (
    <div className="pb-16 pt-6">
      <div className="wrap">
        <p className="mb-6 text-center text-[13px] font-semibold uppercase tracking-[0.1em] text-muted">
          Powering communication across
        </p>
      </div>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-marquee items-center opacity-60">
          {loop.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="mx-[35px] whitespace-nowrap text-[21px] font-extrabold tracking-[-0.03em] text-[#3a423b]"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
