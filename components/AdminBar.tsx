import Image from "next/image";
import Link from "next/link";

export default function AdminBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/95 text-white backdrop-blur-[14px]">
      <div className="wrap flex h-[68px] items-center gap-4">
        <Link href="/nativeblog" className="flex items-center gap-2.5">
          <Image
            src="/assets/NativeTalkSvgLogoWhite.svg"
            alt="NativeTalk"
            width={118}
            height={34}
            priority
            className="h-[32px] w-auto"
          />
          <span className="rounded-full bg-green px-2.5 py-1 font-display text-[12px] font-bold text-ink">
            Blog Studio
          </span>
        </Link>
        <Link
          href="/blog"
          target="_blank"
          className="ml-auto text-[14px] font-medium text-muted-dark transition hover:text-green-300"
        >
          View live blog
        </Link>
      </div>
    </header>
  );
}
