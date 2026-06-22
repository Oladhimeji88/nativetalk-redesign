"use client";

/* eslint-disable @next/next/no-img-element */
import { useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  VARIANTS,
  type Post,
  type Variant,
  estimateReadTime,
  initialsFrom,
  isHtmlEmpty,
} from "@/lib/posts";
import RichTextEditor from "./RichTextEditor";

const VARIANT_SWATCH: Record<Variant, string> = {
  green: "bg-green",
  ink: "bg-ink",
  lime: "bg-green-100",
  cream: "bg-cream-2",
};

async function uploadImage(file: File): Promise<string> {
  const fd = new FormData();
  fd.append("file", file);
  const res = await fetch("/api/upload", { method: "POST", body: fd });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error ?? "Upload failed.");
  return data.url as string;
}

type Props = {
  mode: "new" | "edit";
  post?: Post;
};

export default function BlogEditor({ mode, post }: Props) {
  const router = useRouter();

  const [title, setTitle] = useState(post?.title ?? "");
  const [excerpt, setExcerpt] = useState(post?.excerpt ?? "");
  const [category, setCategory] = useState(post?.category ?? "Guide");
  const [variant, setVariant] = useState<Variant>(post?.variant ?? "green");
  const [authorName, setAuthorName] = useState(post?.author.name ?? "");
  const [authorRole, setAuthorRole] = useState(post?.author.role ?? "");
  const [date, setDate] = useState(post?.date ?? "");
  const [coverImage, setCoverImage] = useState(post?.coverImage ?? "");
  const [html, setHtml] = useState(post?.html ?? "");

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [coverBusy, setCoverBusy] = useState(false);

  const coverInputRef = useRef<HTMLInputElement>(null);

  const readTime = useMemo(() => estimateReadTime(html), [html]);
  const initials = useMemo(
    () => initialsFrom(authorName || "NativeTalk Team"),
    [authorName]
  );

  async function handleCoverPick(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    setError(null);
    setCoverBusy(true);
    try {
      setCoverImage(await uploadImage(file));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed.");
    } finally {
      setCoverBusy(false);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!title.trim() || isHtmlEmpty(html)) {
      setError("Title and content are required.");
      return;
    }
    setSaving(true);
    const payload = {
      title,
      excerpt,
      category,
      variant,
      authorName,
      authorRole,
      date,
      coverImage,
      html,
    };
    try {
      const res = await fetch(
        mode === "new" ? "/api/posts" : `/api/posts/${post!.slug}`,
        {
          method: mode === "new" ? "POST" : "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Something went wrong.");
      }
      router.push("/nativeblog");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setSaving(false);
    }
  }

  const inputCls =
    "w-full rounded-[8px] border border-line bg-paper px-4 py-2.5 text-[15px] outline-none transition focus:border-green";
  const labelCls = "mb-1.5 block text-[13px] font-semibold text-text";

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      {/* Form */}
      <form onSubmit={handleSubmit} className="grid gap-5">
        <div>
          <label className={labelCls} htmlFor="title">
            Title
          </label>
          <input
            id="title"
            className={inputCls}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="How to launch a call center in 24 hours"
          />
        </div>

        {/* Cover image */}
        <div>
          <label className={labelCls}>Cover image</label>
          <input
            ref={coverInputRef}
            type="file"
            accept="image/*"
            aria-label="Upload cover image"
            className="hidden"
            onChange={handleCoverPick}
          />
          {coverImage ? (
            <div className="relative overflow-hidden rounded-[8px] border border-line">
              <img
                src={coverImage}
                alt="Cover preview"
                className="h-[180px] w-full object-cover"
              />
              <div className="absolute right-2 top-2 flex gap-2">
                <button
                  type="button"
                  onClick={() => coverInputRef.current?.click()}
                  className="rounded-[6px] bg-white/90 px-2.5 py-1 text-[12px] font-semibold text-ink shadow hover:bg-white"
                >
                  Replace
                </button>
                <button
                  type="button"
                  onClick={() => setCoverImage("")}
                  className="rounded-[6px] bg-white/90 px-2.5 py-1 text-[12px] font-semibold text-red-600 shadow hover:bg-white"
                >
                  Remove
                </button>
              </div>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => coverInputRef.current?.click()}
              disabled={coverBusy}
              className="flex h-[120px] w-full flex-col items-center justify-center gap-1 rounded-[8px] border-2 border-dashed border-line text-muted transition hover:border-green hover:text-green-700 disabled:opacity-60"
            >
              <span className="text-[22px]">＋</span>
              <span className="text-[13px] font-medium">
                {coverBusy ? "Uploading…" : "Upload cover image"}
              </span>
              <span className="text-[11px]">PNG, JPG, WEBP, GIF · max 6 MB</span>
            </button>
          )}
          <p className="mt-1.5 text-[12px] text-muted">
            Optional. If set, it replaces the colored header on cards and the
            post page.
          </p>
        </div>

        <div>
          <label className={labelCls} htmlFor="excerpt">
            Excerpt
          </label>
          <textarea
            id="excerpt"
            className={`${inputCls} min-h-[72px] resize-y`}
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            placeholder="A short summary shown on the blog cards."
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className={labelCls} htmlFor="category">
              Category
            </label>
            <input
              id="category"
              className={inputCls}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Guide"
            />
          </div>
          <div>
            <label className={labelCls} htmlFor="date">
              Date <span className="font-normal text-muted">(optional)</span>
            </label>
            <input
              id="date"
              className={inputCls}
              value={date}
              onChange={(e) => setDate(e.target.value)}
              placeholder="Auto-set to today if blank"
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className={labelCls} htmlFor="authorName">
              Author name
            </label>
            <input
              id="authorName"
              className={inputCls}
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              placeholder="Amara Bello"
            />
          </div>
          <div>
            <label className={labelCls} htmlFor="authorRole">
              Author role
            </label>
            <input
              id="authorRole"
              className={inputCls}
              value={authorRole}
              onChange={(e) => setAuthorRole(e.target.value)}
              placeholder="Head of Customer Success"
            />
          </div>
        </div>

        <div>
          <label className={labelCls}>Header color</label>
          <div className="flex gap-2.5">
            {VARIANTS.map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => setVariant(v)}
                className={`flex items-center gap-2 rounded-[8px] border px-3 py-2 text-[13px] font-medium capitalize transition ${
                  variant === v
                    ? "border-green bg-green-50 text-green-700"
                    : "border-line text-muted hover:border-ink"
                }`}
              >
                <span
                  className={`h-4 w-4 rounded border border-black/10 ${VARIANT_SWATCH[v]}`}
                />
                {v}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className={labelCls}>Content</label>
          <RichTextEditor value={html} onChange={setHtml} onError={setError} />
          <p className="mt-1.5 text-[12px] text-muted">
            Select text for the formatting toolbar. Use the{" "}
            <span className="font-semibold">+</span> on an empty line, the
            toolbar, or just paste / drag-and-drop to add images.
          </p>
        </div>

        {error && (
          <div className="rounded-[8px] border border-red-200 bg-red-50 px-4 py-3 text-[14px] text-red-700">
            {error}
          </div>
        )}

        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={saving}
            className="btn btn-green disabled:opacity-60"
          >
            {saving
              ? "Saving…"
              : mode === "new"
                ? "Publish post"
                : "Save changes"}
          </button>
          <button
            type="button"
            onClick={() => router.push("/nativeblog")}
            className="btn btn-outline"
          >
            Cancel
          </button>
        </div>
      </form>

      {/* Live preview */}
      <div className="lg:sticky lg:top-[90px] lg:self-start">
        <div className="mb-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-muted">
          Live preview
        </div>
        <div className="overflow-hidden rounded-[8px] border border-line bg-paper">
          {coverImage ? (
            <div className="relative h-[120px]">
              <img
                src={coverImage}
                alt=""
                className="h-full w-full object-cover"
              />
              <span
                className={`absolute left-4 top-4 inline-block rounded-full px-3 py-1 text-xs font-bold ${
                  variant === "ink" ? "bg-green text-ink" : "bg-ink text-white"
                }`}
              >
                {category || "Article"}
              </span>
            </div>
          ) : (
            <div className={`h-[120px] p-5 ${VARIANT_SWATCH[variant]}`}>
              <span
                className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${
                  variant === "ink" ? "bg-green text-ink" : "bg-ink text-white"
                }`}
              >
                {category || "Article"}
              </span>
            </div>
          )}
          <div className="p-6">
            <div className="mb-2.5 text-[13px] font-medium text-muted">
              {date || "Today"} · {readTime}
            </div>
            <h3 className="mb-2.5 text-[21px] font-bold leading-[1.15] tracking-[-0.03em]">
              {title || "Your post title"}
            </h3>
            <p className="mb-5 text-[14.5px] leading-[1.5] text-muted">
              {excerpt || "Your excerpt will appear here."}
            </p>
            <div className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 flex-none place-items-center rounded-lg bg-green-50 text-[11px] font-extrabold text-green-700">
                {initials}
              </span>
              <span className="text-[13.5px] font-medium text-text">
                {authorName || "NativeTalk Team"}
              </span>
            </div>
          </div>
        </div>
        <p className="mt-3 text-[13px] text-muted">{readTime}</p>
      </div>
    </div>
  );
}
