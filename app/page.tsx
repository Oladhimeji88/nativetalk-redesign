import Component1440WDefault from "@/Landing/src/imports/1440WDefault";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="min-h-screen w-full overflow-x-auto bg-[#f7f9f2] text-foreground">
        <style>{`
        @keyframes hero-card-scroll-up {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(0, -246px, 0); }
        }

        @keyframes hero-card-scroll-down {
          0% { transform: translate3d(0, -246px, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }

        [data-name="Mask Group"] > [data-name="Container"] > [data-name="Container"] {
          will-change: transform;
          animation: hero-card-scroll-up 15s linear infinite alternate;
        }

        [data-name="Mask Group"] > [data-name="Container"] > [data-name="Container"]:nth-child(2) {
          animation-name: hero-card-scroll-down;
          animation-duration: 18s;
        }

        [data-name="Mask Group"] > [data-name="Container"] > [data-name="Container"]:nth-child(3) {
          animation-duration: 16.5s;
          animation-delay: -4s;
        }

        [data-name="Mask Group"]:hover > [data-name="Container"] > [data-name="Container"] {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          [data-name="Mask Group"] > [data-name="Container"] > [data-name="Container"] {
            animation: none;
          }
        }

        [data-name="1440w default"] > [data-name="Header"],
        [data-name="1440w default"] > [data-name="Footer"] {
          display: none;
        }
      `}</style>
        <div className="mx-auto min-h-screen w-full min-w-[1440px]">
          <Component1440WDefault />
        </div>
      </main>
      <Footer />
    </>
  );
}
