// Server-only file-backed store. Never import this from a client component.
import "server-only";
import fs from "node:fs";
import path from "node:path";
import {
  type Post,
  type PostInput,
  type Variant,
  VARIANTS,
  slugify,
  initialsFrom,
  estimateReadTime,
  formatToday,
} from "./posts";

const FILE = path.join(process.cwd(), "data", "posts.json");

function readAll(): Post[] {
  try {
    const raw = fs.readFileSync(FILE, "utf8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as Post[]) : [];
  } catch {
    return [];
  }
}

function writeAll(posts: Post[]): void {
  fs.mkdirSync(path.dirname(FILE), { recursive: true });
  fs.writeFileSync(FILE, JSON.stringify(posts, null, 2) + "\n", "utf8");
}

export function getAllPosts(): Post[] {
  return readAll();
}

export function getPost(slug: string): Post | undefined {
  return readAll().find((p) => p.slug === slug);
}

function normalizeVariant(v: unknown): Variant {
  return VARIANTS.includes(v as Variant) ? (v as Variant) : "green";
}

function uniqueSlug(base: string, posts: Post[], ignore?: string): string {
  let slug = base || "post";
  let n = 2;
  while (posts.some((p) => p.slug === slug && p.slug !== ignore)) {
    slug = `${base}-${n++}`;
  }
  return slug;
}

function buildPost(input: PostInput, existing?: Post): Post {
  const posts = readAll();
  const html = input.html.trim();
  return {
    slug: existing?.slug ?? uniqueSlug(slugify(input.title), posts),
    title: input.title.trim(),
    excerpt: input.excerpt.trim(),
    category: input.category.trim() || "Article",
    date: input.date?.trim() || existing?.date || formatToday(),
    readTime: estimateReadTime(html),
    author: {
      name: input.authorName.trim() || "NativeTalk Team",
      role: input.authorRole.trim() || "NativeTalk",
      initials: initialsFrom(input.authorName || "NativeTalk Team"),
    },
    variant: normalizeVariant(input.variant),
    ...(input.coverImage?.trim()
      ? { coverImage: input.coverImage.trim() }
      : {}),
    html,
  };
}

export function createPost(input: PostInput): Post {
  const posts = readAll();
  const post = buildPost(input);
  posts.unshift(post);
  writeAll(posts);
  return post;
}

export function updatePost(slug: string, input: PostInput): Post | null {
  const posts = readAll();
  const idx = posts.findIndex((p) => p.slug === slug);
  if (idx === -1) return null;
  const updated = buildPost(input, posts[idx]);
  posts[idx] = updated;
  writeAll(posts);
  return updated;
}

export function deletePost(slug: string): boolean {
  const posts = readAll();
  const next = posts.filter((p) => p.slug !== slug);
  if (next.length === posts.length) return false;
  writeAll(next);
  return true;
}
