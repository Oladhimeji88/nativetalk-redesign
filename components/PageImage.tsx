import type { PageImage } from "@/lib/pageImages";

type Props = {
  image: PageImage;
  eyebrow?: string;
  className?: string;
};

export default function PageImage({ image, eyebrow = "NativeTalk", className = "" }: Props) {
  return (
    <figure
      className={`relative min-h-[320px] overflow-hidden rounded-[10px] bg-ink ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image.src}
        alt={image.alt}
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
      <figcaption className="absolute bottom-5 left-5 right-5">
        <span className="inline-flex rounded-full bg-green px-3 py-1 font-display text-[12px] font-bold text-ink">
          {eyebrow}
        </span>
      </figcaption>
    </figure>
  );
}
