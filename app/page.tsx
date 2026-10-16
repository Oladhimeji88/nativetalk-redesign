import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HomeHero from "@/components/HomeHero";
import Logos from "@/components/Logos";
import ProductCards from "@/components/ProductCards";
import ProductSelector from "@/components/ProductSelector";
import ExploreProducts from "@/components/ExploreProducts";
import AudienceSections from "@/components/AudienceSections";
import Stats from "@/components/Stats";
import BlogSection from "@/components/BlogSection";
import Faq from "@/components/Faq";
import Newsletter from "@/components/Newsletter";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="overflow-x-hidden bg-cream text-foreground">
        <HomeHero />
        <Logos />
        <ProductCards />
        <ProductSelector />
        <ExploreProducts />
        <AudienceSections />
        <Stats />
        <BlogSection />
        <Faq />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
