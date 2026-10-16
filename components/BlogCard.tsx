"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Mosaic from "./Mosaic";
import { ArrowUpRight } from "./icons";
import type { Post } from "@/lib/posts";

const HEADER_STYLES: Record<Post["variant"], { bg: string; pill: string }> = {
  green: { bg: "bg-green", pill: "bg-ink text-green-300" },
  ink: { bg: "bg-ink", pill: "bg-green text-[#06270a]" },
  lime: { bg: "bg-green-100", pill: "bg-white text-green-700" },
  cream: { bg: "bg-cream-2", pill: "bg-ink text-white" },
};

export default function BlogCard({
  post,
  index = 0,
}: {
  post: Post;
  index?: number;
}) {
  const s = HEADER_STYLES[post.variant];
  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.6,
        ease: [0.2, 0.8, 0.2, 1],
        delay: index * 0.07,
      }}
      whileHover={{ y: -7 }}
      className="group overflow-hidden rounded-[10px] border border-line bg-paper"
    >
      <Link href={`/blog/${post.slug}`} className="flex h-full flex-col">
        {post.coverImage ? (
          <div className="relative h-[150px] overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.coverImage}
              alt=""
              className="h-full w-full object-cover"
            />
            <span
              className={`absolute left-5 top-5 z-[2] inline-block rounded-full px-3 py-1 text-xs font-bold ${s.pill}`}
            >
              {post.category}
            </span>
          </div>
        ) : (
          <div className={`relative h-[150px] overflow-hidden p-5 ${s.bg}`}>
            <Mosaic
              pattern="a"
              className="absolute -bottom-[40%] -right-[8%] !w-[52%] opacity-70"
            />
            <span
              className={`relative z-[2] inline-block rounded-full px-3 py-1 text-xs font-bold ${s.pill}`}
            >
              {post.category}
            </span>
          </div>
        )}
        <div className="flex flex-1 flex-col p-6">
          <div className="mb-2.5 text-[13px] font-medium text-muted">
            {post.date} · {post.readTime}
          </div>
          <h3 className="mb-2.5 text-[21px] font-bold leading-[1.15] tracking-[-0.03em]">
            {post.title}
          </h3>
          <p className="mb-5 flex-1 text-[14.5px] leading-[1.5] text-muted">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 flex-none place-items-center rounded-[8px] bg-green-50 text-[11px] font-extrabold text-green-700">
              {post.author.initials}
            </span>
            <span className="text-[13.5px] font-medium text-text">
              {post.author.name}
            </span>
            <span className="ml-auto grid h-[34px] w-[34px] place-items-center rounded-full bg-ink text-white transition-transform duration-200 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
