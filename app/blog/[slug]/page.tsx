import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import Reveal from "@/components/Reveal";
import Mosaic from "@/components/Mosaic";
import { ArrowRight } from "@/components/icons";
import { getPost, getAllPosts } from "@/lib/postsStore";

export const dynamic = "force-dynamic";

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} — NativeTalk Blog`,
    description: post.excerpt,
  };
}

const HEADER_BG: Record<string, string> = {
  green: "bg-green",
  ink: "bg-ink",
  lime: "bg-green-100",
  cream: "bg-cream-2",
};

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const related = getAllPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      <Nav />
      <main>
        <article className="pb-[92px] pt-12">
          <div className="wrap">
            <Reveal className="mx-auto max-w-[760px]">
              <Link
                href="/blog"
                className="mb-8 inline-flex items-center gap-2 text-[14.5px] font-semibold text-green-700 hover:text-green"
              >
                <ArrowRight className="h-4 w-4 rotate-180" />
                All posts
              </Link>

              {post.coverImage ? (
                <div className="relative mb-10 h-[220px] overflow-hidden rounded-[12px] md:h-[320px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute left-6 top-6 z-[2] inline-block rounded-full bg-ink px-3 py-1 text-xs font-bold text-white">
                    {post.category}
                  </span>
                </div>
              ) : (
                <div
                  className={`relative mb-10 h-[180px] overflow-hidden rounded-[12px] p-6 md:h-[220px] ${HEADER_BG[post.variant]}`}
                >
                  <Mosaic
                    pattern="a"
                    className="absolute -bottom-[30%] -right-[5%] !w-[38%] opacity-70"
                  />
                  <span
                    className={`relative z-[2] inline-block rounded-full px-3 py-1 text-xs font-bold ${
                      post.variant === "ink"
                        ? "bg-green text-[#06270a]"
                        : "bg-ink text-white"
                    }`}
                  >
                    {post.category}
                  </span>
                </div>
              )}

              <div className="mb-4 text-sm font-medium text-muted">
                {post.date} · {post.readTime}
              </div>
              <h1 className="mb-8 text-[clamp(32px,4.6vw,56px)] font-extrabold leading-[1.05] tracking-[-0.04em]">
                {post.title}
              </h1>

              <div className="mb-10 flex items-center gap-3 border-b border-line pb-8">
                <span className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-green text-[14px] font-extrabold text-[#06270a]">
                  {post.author.initials}
                </span>
                <div>
                  <b className="block text-[15px] font-semibold text-text">
                    {post.author.name}
                  </b>
                  <span className="text-[13.5px] text-muted">
                    {post.author.role}
                  </span>
                </div>
              </div>

              <div
                className="article-content"
                dangerouslySetInnerHTML={{ __html: post.html }}
              />

              <div className="mt-12 flex flex-wrap items-center justify-between gap-5 rounded-[12px] bg-ink p-8 text-white">
                <div>
                  <h3 className="text-[22px] font-bold tracking-[-0.03em]">
                    Ready to try NativeTalk?
                  </h3>
                  <p className="mt-1 text-[15px] text-muted-dark">
                    Free for your first 2 users — live in minutes.
                  </p>
                </div>
                <Link href="/business-app" className="btn btn-green">
                  Start free
                  <ArrowRight className="text-white" />
                </Link>
              </div>
            </Reveal>
          </div>
        </article>

        <section className="pb-[92px]">
          <div className="wrap">
            <Reveal className="mb-9">
              <div className="eyebrow">Keep reading</div>
              <h2 className="text-[clamp(28px,3.6vw,42px)] font-extrabold tracking-[-0.04em]">
                More from the blog
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <BlogCard key={p.slug} post={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
