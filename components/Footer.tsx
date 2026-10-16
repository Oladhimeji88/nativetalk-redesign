import Image from "next/image";
import Link from "next/link";
import { InstagramIcon, XIcon } from "./icons";

const COLS = [
  {
    title: "Products",
    links: [
      { label: "Business App", href: "/business-app" },
      { label: "CRM", href: "/crm" },
      { label: "VoIP", href: "/voip" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Contact", href: "/business-app#contact" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Site",
    links: [
      { label: "Pricing", href: "/business-app#pricing" },
      { label: "FAQ", href: "/business-app#faq" },
      { label: "Q&A Forum", href: "https://qa-forum.nativetalkapp.com" },
      { label: "Terms", href: "/terms" },
      { label: "Privacy", href: "/privacy" },
    ],
  },
];

const SOCIALS = [
  { label: "X", Icon: XIcon, href: "https://www.twitter.com/nativetalk_io" },
  {
    label: "Instagram",
    Icon: InstagramIcon,
    href: "https://www.instagram.com/nativetalk.io/",
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink pb-9 pt-20 text-[#cdd6cd]">
      <div className="wrap">
        <div className="grid grid-cols-1 gap-10 border-b border-line-dark pb-[50px] sm:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_1fr]">
          <div>
            <Link
              href="/"
              aria-label="NativeTalk home"
              className="mb-4 inline-flex items-center"
            >
              <Image
                src="/assets/NativeTalkSvgLogoWhite.svg"
                alt="NativeTalk"
                width={132}
                height={38}
                className="h-[38px] w-auto"
              />
            </Link>
            <p className="mb-5 max-w-[280px] text-[14.5px] leading-[1.55] text-muted-dark">
              The cloud phone system for modern business. Virtual numbers,
              smart calling, and a full call center - no SIM required.
            </p>
            <div className="flex gap-2.5">
              {SOCIALS.map(({ label, Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-[38px] w-[38px] place-items-center rounded-[10px] border border-line-dark text-[#cdd6cd] transition hover:border-green hover:bg-green hover:text-ink"
                >
                  <Icon className="h-[17px] w-[17px]" />
                </a>
              ))}
            </div>
          </div>

          {COLS.map((col) => (
            <div key={col.title}>
              <h5 className="mb-[15px] font-display text-[15px] font-semibold text-white">
                {col.title}
              </h5>
              {col.links.map((l) => {
                const external = l.href.startsWith("http");
                return external ? (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-1.5 text-[14.5px] text-muted-dark transition hover:text-green-300"
                  >
                    {l.label}
                  </a>
                ) : (
                  <Link
                    key={l.label}
                    href={l.href}
                    className="block py-1.5 text-[14.5px] text-muted-dark transition hover:text-green-300"
                  >
                    {l.label}
                  </Link>
                );
              })}
            </div>
          ))}
        </div>

        <div className="select-none pt-10 text-center font-display text-[clamp(60px,14vw,170px)] font-extrabold leading-[0.9] text-white/5">
          NativeTalk
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-[26px] text-[13.5px] text-muted-dark">
          <span>(c) 2026 NativeTalk. All rights reserved.</span>
          <span>Privacy / Terms / Cookies</span>
        </div>
      </div>
    </footer>
  );
}
