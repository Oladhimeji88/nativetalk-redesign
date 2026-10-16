// Pixel mosaic motif. Pattern reproduces the signature grid of green/light tiles.
const PATTERNS: Record<string, string[]> = {
  a: [
    "g", "", "g2", "g", "", "g", "", "g2",
    "", "g", "g", "", "g2", "", "g", "",
    "g2", "", "g", "g", "", "g", "g2", "",
  ],
  b: [
    "g", "", "g2", "g", "", "g", "", "g2",
    "", "g", "g", "", "g2", "", "g", "",
  ],
  c: [
    "g2", "", "g", "g", "", "g", "g2", "",
    "", "g", "g2", "", "g", "", "g", "",
  ],
};

const TILE: Record<string, string> = {
  g: "px-g",
  g2: "px-g2",
  "": "",
};

export default function Mosaic({
  pattern = "a",
  className = "",
}: {
  pattern?: keyof typeof PATTERNS;
  className?: string;
}) {
  const tiles = PATTERNS[pattern] ?? PATTERNS.a;
  return (
    <div className={`mosaic ${className}`} aria-hidden>
      {tiles.map((t, i) => (
        <span key={i} className={TILE[t]} />
      ))}
    </div>
  );
}
