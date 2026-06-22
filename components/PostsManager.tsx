"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Post, Variant } from "@/lib/posts";

const SWATCH: Record<Variant, string> = {
  green: "bg-green",
  ink: "bg-ink",
  lime: "bg-green-100",
  cream: "bg-cream-2 border border-line",
};

export default function PostsManager() {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [busy, setBusy] = useState<string | null>(null);

  async function load() {
    const res = await fetch("/api/posts", { cache: "no-store" });
    setPosts(await res.json());
  }

  useEffect(() => {
    load();
  }, []);

  async function remove(slug: string, title: string) {
    if (!window.confirm(`Delete "${title}"? This cannot be undone.`)) return;
    setBusy(slug);
    await fetch(`/api/posts/${slug}`, { method: "DELETE" });
    await load();
    setBusy(null);
  }

  if (posts === null) {
    return <p className="py-16 text-center text-muted">Loading posts…</p>;
  }

  if (posts.length === 0) {
    return (
      <div className="rounded-[12px] border border-dashed border-line bg-paper py-16 text-center">
        <p className="mb-4 text-muted">No posts yet.</p>
        <Link href="/nativeblog/new" className="btn btn-green">
          Write your first post
        </Link>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-[12px] border border-line bg-paper">
      {posts.map((p, i) => (
        <div
          key={p.slug}
          className={`flex flex-wrap items-center gap-4 p-4 sm:px-6 ${
            i !== 0 ? "border-t border-line" : ""
          }`}
        >
          <span
            className={`grid h-11 w-11 flex-none place-items-center rounded-[8px] text-[12px] font-bold ${SWATCH[p.variant]} ${
              p.variant === "ink" ? "text-white" : "text-[#06270a]"
            }`}
            title={`${p.variant} header`}
          >
            {p.author.initials}
          </span>
          <div className="min-w-0 flex-1">
            <h3 className="truncate text-[16px] font-semibold">{p.title}</h3>
            <p className="truncate text-[13px] text-muted">
              {p.category} · {p.date} · {p.readTime} · {p.author.name}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href={`/blog/${p.slug}`}
              target="_blank"
              className="rounded-[8px] border border-line px-3 py-2 text-[13px] font-medium text-muted transition hover:border-ink hover:text-ink"
            >
              View
            </Link>
            <Link
              href={`/nativeblog/edit/${p.slug}`}
              className="rounded-[8px] border border-line px-3 py-2 text-[13px] font-medium transition hover:border-green hover:text-green-700"
            >
              Edit
            </Link>
            <button
              type="button"
              onClick={() => remove(p.slug, p.title)}
              disabled={busy === p.slug}
              className="rounded-[8px] border border-line px-3 py-2 text-[13px] font-medium text-red-600 transition hover:border-red-400 hover:bg-red-50 disabled:opacity-50"
            >
              {busy === p.slug ? "…" : "Delete"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
