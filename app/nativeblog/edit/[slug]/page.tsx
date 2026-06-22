import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AdminBar from "@/components/AdminBar";
import BlogEditor from "@/components/BlogEditor";
import { getPost } from "@/lib/postsStore";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Edit post — Blog Studio",
  robots: { index: false, follow: false },
};

export default function EditPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPost(params.slug);
  if (!post) notFound();

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
          <h1 className="mb-2 text-[clamp(26px,3.6vw,38px)] font-extrabold tracking-[-0.04em]">
            Edit post
          </h1>
          <p className="mb-8 text-muted">
            Editing <span className="font-semibold text-text">{post.title}</span>{" "}
            · <code className="text-[13px]">/blog/{post.slug}</code>
          </p>
          <BlogEditor mode="edit" post={post} />
        </div>
      </main>
    </>
  );
}
