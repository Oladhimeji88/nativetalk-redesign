import type { Metadata } from "next";
import Link from "next/link";
import AdminBar from "@/components/AdminBar";
import PostsManager from "@/components/PostsManager";

export const metadata: Metadata = {
  title: "Blog Studio — NativeTalk",
  robots: { index: false, follow: false },
};

export default function NativeBlogPage() {
  return (
    <>
      <AdminBar />
      <main className="min-h-screen pb-24 pt-10">
        <div className="wrap">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h1 className="text-[clamp(28px,4vw,40px)] font-extrabold tracking-[-0.04em]">
                Blog Studio
              </h1>
              <p className="mt-1.5 text-muted">
                Create, edit and manage posts that appear on the live blog.
              </p>
            </div>
            <Link href="/nativeblog/new" className="btn btn-green">
              + New post
            </Link>
          </div>
          <PostsManager />
        </div>
      </main>
    </>
  );
}
