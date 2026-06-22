import { NextResponse } from "next/server";
import { getPost, updatePost, deletePost } from "@/lib/postsStore";
import type { PostInput } from "@/lib/posts";

export const dynamic = "force-dynamic";

export function GET(
  _req: Request,
  { params }: { params: { slug: string } }
) {
  const post = getPost(params.slug);
  if (!post) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(post);
}

export async function PUT(
  req: Request,
  { params }: { params: { slug: string } }
) {
  let body: Partial<PostInput>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!body.title?.trim() || !body.html?.trim()) {
    return NextResponse.json(
      { error: "Title and content are required." },
      { status: 400 }
    );
  }

  const updated = updatePost(params.slug, {
    title: body.title,
    excerpt: body.excerpt ?? "",
    category: body.category ?? "Article",
    variant: body.variant ?? "green",
    authorName: body.authorName ?? "",
    authorRole: body.authorRole ?? "",
    date: body.date,
    coverImage: body.coverImage,
    html: body.html,
  });

  if (!updated)
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(updated);
}

export function DELETE(
  _req: Request,
  { params }: { params: { slug: string } }
) {
  const ok = deletePost(params.slug);
  if (!ok) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ ok: true });
}
