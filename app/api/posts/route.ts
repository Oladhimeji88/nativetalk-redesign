import { NextResponse } from "next/server";
import { getAllPosts, createPost } from "@/lib/postsStore";
import type { PostInput } from "@/lib/posts";

export const dynamic = "force-dynamic";

export function GET() {
  return NextResponse.json(getAllPosts());
}

export async function POST(req: Request) {
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

  const post = createPost({
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

  return NextResponse.json(post, { status: 201 });
}
