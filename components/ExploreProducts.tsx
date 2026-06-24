import Link from "next/link";
import Image from "next/image";
import Reveal from "./Reveal";

const PRODUCTS = [
  {
    href: "/business-app",
    label: "NativeTalk Business",
    image: "/assets/Nativetalk business.svg",
  },
  {
    href: "/crm",
    label: "NativeTalk CRM",
    image: "/assets/Nativetalkcrm.svg",
  },
  {
    href: "/voip",
    label: "NativeTalk VoIP",
    image: "/assets/nativetalk voip.svg",
  },
];

export default function ExploreProducts() {
  return (
    <section className="pb-[92px] pt-5">
      <div className="wrap">
        <Reveal className="overflow-hidden rounded-[20px] bg-ink px-6 py-12 text-white sm:px-10 md:py-16">
          <div className="mx-auto mb-10 max-w-[640px] text-center md:mb-12">
            <div className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-green-300">
              NativeTalk Product
            </div>
            <h2 className="text-[clamp(30px,4.4vw,52px)] font-extrabold tracking-[-0.04em]">
              Want to have more control?
              <br />
              Explore our other <em className="not-italic">Products.</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((p) => (
              <Link key={p.href} href={p.href} className="group block">
                <span className="block overflow-hidden rounded-[14px] border border-white/10">
                  <Image
                    src={p.image}
                    alt={p.label}
                    width={371}
                    height={210}
                    className="h-auto w-full transition-transform duration-[400ms] ease-out group-hover:scale-[1.06]"
                  />
                </span>
                <span className="mt-4 block text-[16px] font-semibold tracking-[-0.01em] text-white">
                  {p.label}
                </span>
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
