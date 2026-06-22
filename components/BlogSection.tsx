import Link from "next/link";
import Reveal from "./Reveal";
import BlogCard from "./BlogCard";
import { ArrowRight } from "./icons";
import { getAllPosts } from "@/lib/postsStore";

export default function BlogSection() {
  const latest = getAllPosts().slice(0, 3);
  return (
    <section id="blog" className="pb-[92px] pt-5">
      <div className="wrap">
        <Reveal className="mb-11 flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="eyebrow">From the blog</div>
            <h2 className="max-w-[640px] text-[clamp(32px,4.4vw,54px)] font-extrabold tracking-[-0.04em]">
              Notes on talking
              <br />
              business.
            </h2>
          </div>
          <Link href="/blog" className="btn btn-outline">
            View all posts
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>

        <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2 lg:grid-cols-3">
          {latest.map((post, i) => (
            <BlogCard key={post.slug} post={post} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
