// Client-safe types and helpers (no fs). Safe to import from anywhere.

export const VARIANTS = ["green", "ink", "lime", "cream"] as const;
export type Variant = (typeof VARIANTS)[number];

export type Author = { name: string; role: string; initials: string };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: Author;
  variant: Variant;
  coverImage?: string;
  html: string; // rich text content as HTML
};

// Shape the editor submits; server fills in slug/date/readTime/initials.
export type PostInput = {
  title: string;
  excerpt: string;
  category: string;
  variant: Variant;
  authorName: string;
  authorRole: string;
  date?: string;
  coverImage?: string;
  html: string;
};

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/['']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

export function initialsFrom(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "NT";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

// Strip tags for word counts / plain-text needs.
export function htmlToText(html: string): string {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}

export function estimateReadTime(html: string): string {
  const words = htmlToText(html).split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

// Treat an HTML body as "empty" when it has no text and no media.
export function isHtmlEmpty(html: string): boolean {
  const stripped = html.replace(/<(p|br)[^>]*>|<\/p>/g, "").trim();
  return htmlToText(html) === "" && !/<img|<iframe|<hr/.test(stripped);
}

export function formatToday(): string {
  return new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
