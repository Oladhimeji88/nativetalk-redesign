import type { Metadata } from "next";
import Link from "next/link";
import AdminBar from "@/components/AdminBar";
import BlogEditor from "@/components/BlogEditor";

export const metadata: Metadata = {
  title: "New post — Blog Studio",
  robots: { index: false, follow: false },
};

export default function NewPostPage() {
  return (
    <>
      <AdminBar />
      <main className="min-h-screen pb-24 pt-10">
        <div className="wrap">
          <Link
            href="/nativeblog"
            className="mb-6 inline-block text-[14px] font-semibold text-green-700 hover:text-green"
          >
            ← Back to Blog Studio
          </Link>
          <h1 className="mb-8 text-[clamp(26px,3.6vw,38px)] font-extrabold tracking-[-0.04em]">
            Write a new post
          </h1>
          <BlogEditor mode="new" />
        </div>
      </main>
    </>
  );
}
