import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import Reveal from "@/components/Reveal";
import PageImage from "@/components/PageImage";
import { getAllPosts } from "@/lib/postsStore";
import { PAGE_IMAGES } from "@/lib/pageImages";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog — NativeTalk",
  description:
    "Playbooks, guides and engineering notes on cloud calling, virtual numbers and running modern call centers.",
};

export default function BlogPage() {
  const POSTS = getAllPosts();
  return (
    <>
      <Nav />
      <main>
        <section className="pb-12 pt-[72px]">
          <div className="wrap grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <span className="mb-[26px] inline-flex items-center gap-[9px] rounded-full border border-green-100 bg-green-50 px-3.5 py-[7px] text-[13.5px] font-semibold text-green-700">
                <span className="h-[7px] w-[7px] rounded-full bg-green" />
                The NativeTalk blog
              </span>
              <h1 className="max-w-[760px] text-[clamp(40px,5.6vw,72px)] font-extrabold tracking-[-0.045em]">
                Notes on talking
                <br />
                <em className="not-italic text-green-700">business.</em>
              </h1>
              <p className="mt-6 max-w-[520px] text-xl text-muted">
                Playbooks, guides and engineering notes on cloud calling,
                virtual numbers and running modern call centers.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <PageImage
                image={PAGE_IMAGES.blog}
                eyebrow="Stories from the field"
                className="min-h-[380px]"
              />
            </Reveal>
          </div>
        </section>

        <section className="pb-[92px]">
          <div className="wrap">
            <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2 lg:grid-cols-3">
              {POSTS.map((post, i) => (
                <BlogCard key={post.slug} post={post} index={i} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
