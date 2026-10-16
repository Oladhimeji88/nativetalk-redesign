"use client";

import { useCallback, useEffect, useRef } from "react";
import { useEditor, EditorContent, type Editor } from "@tiptap/react";
import { BubbleMenu, FloatingMenu } from "@tiptap/react/menus";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";

async function uploadImage(file: File): Promise<string> {
  const fd = new FormData();
  fd.append("file", file);
  const res = await fetch("/api/upload", { method: "POST", body: fd });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error ?? "Upload failed.");
  return data.url as string;
}

function Btn({
  active,
  onClick,
  title,
  children,
}: {
  active?: boolean;
  onClick: () => void;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      title={title}
      aria-label={title}
      onMouseDown={(e) => e.preventDefault()}
      onClick={onClick}
      className={`grid h-9 min-w-9 place-items-center rounded-[6px] px-2 text-[14px] font-semibold transition ${
        active
          ? "bg-green text-ink"
          : "text-white/80 hover:bg-white/15 hover:text-white"
      }`}
    >
      {children}
    </button>
  );
}

export default function RichTextEditor({
  value,
  onChange,
  onError,
}: {
  value: string;
  onChange: (html: string) => void;
  onError?: (msg: string) => void;
}) {
  const uploadRef = useRef<(file: File) => void>(() => {});
  const fileInputRef = useRef<HTMLInputElement>(null);

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        heading: { levels: [2, 3] },
        link: {
          openOnClick: false,
          autolink: true,
          HTMLAttributes: { rel: "noopener noreferrer nofollow", target: "_blank" },
        },
      }),
      Image.configure({ inline: false, HTMLAttributes: { class: "post-img" } }),
      Placeholder.configure({
        placeholder: ({ node }) =>
          node.type.name === "heading"
            ? "Heading"
            : "Tell your story… select text to format, or use + to add an image.",
      }),
    ],
    content: value || "",
    editorProps: {
      attributes: { class: "article-editor focus:outline-none" },
      handlePaste(_view, event) {
        const files = Array.from(event.clipboardData?.files ?? []).filter((f) =>
          f.type.startsWith("image/")
        );
        if (files.length) {
          files.forEach((f) => uploadRef.current(f));
          return true;
        }
        return false;
      },
      handleDrop(_view, event) {
        const files = Array.from(
          (event as DragEvent).dataTransfer?.files ?? []
        ).filter((f) => f.type.startsWith("image/"));
        if (files.length) {
          event.preventDefault();
          files.forEach((f) => uploadRef.current(f));
          return true;
        }
        return false;
      },
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });

  const insertImage = useCallback(
    async (file: File) => {
      if (!editor) return;
      try {
        const url = await uploadImage(file);
        editor
          .chain()
          .focus()
          .setImage({ src: url, alt: file.name.replace(/\.[^.]+$/, "") })
          .run();
      } catch (err) {
        onError?.(err instanceof Error ? err.message : "Image upload failed.");
      }
    },
    [editor, onError]
  );

  useEffect(() => {
    uploadRef.current = insertImage;
  }, [insertImage]);

  // Keep editor in sync if the parent resets value (e.g. switching posts).
  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value || "", { emitUpdate: false });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editor]);

  function pickImage() {
    fileInputRef.current?.click();
  }

  async function onFilePicked(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (file) await insertImage(file);
  }

  function setLink(ed: Editor) {
    const prev = ed.getAttributes("link").href as string | undefined;
    const url = window.prompt("Link URL", prev ?? "https://");
    if (url === null) return;
    if (url === "") {
      ed.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }
    ed.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  }

  if (!editor) {
    return (
      <div className="min-h-[320px] rounded-[8px] border border-line bg-paper px-5 py-4 text-muted">
        Loading editor…
      </div>
    );
  }

  return (
    <div className="rounded-[8px] border border-line bg-paper">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        aria-label="Insert image"
        className="hidden"
        onChange={onFilePicked}
      />

      {/* Bubble toolbar — appears on text selection */}
      <BubbleMenu
        editor={editor}
        options={{ placement: "top" }}
        shouldShow={({ editor, from, to }) =>
          from !== to && !editor.isActive("image")
        }
      >
        <div className="flex items-center gap-0.5 rounded-[10px] bg-ink px-1.5 py-1 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]">
          <Btn
            title="Bold"
            active={editor.isActive("bold")}
            onClick={() => editor.chain().focus().toggleBold().run()}
          >
            <b>B</b>
          </Btn>
          <Btn
            title="Italic"
            active={editor.isActive("italic")}
            onClick={() => editor.chain().focus().toggleItalic().run()}
          >
            <i>i</i>
          </Btn>
          <Btn
            title="Link"
            active={editor.isActive("link")}
            onClick={() => setLink(editor)}
          >
            🔗
          </Btn>
          <span className="mx-1 h-5 w-px bg-white/20" />
          <Btn
            title="Heading"
            active={editor.isActive("heading", { level: 2 })}
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
          >
            H2
          </Btn>
          <Btn
            title="Subheading"
            active={editor.isActive("heading", { level: 3 })}
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 3 }).run()
            }
          >
            H3
          </Btn>
          <Btn
            title="Quote"
            active={editor.isActive("blockquote")}
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
          >
            ”
          </Btn>
          <Btn
            title="Bullet list"
            active={editor.isActive("bulletList")}
            onClick={() => editor.chain().focus().toggleBulletList().run()}
          >
            •
          </Btn>
        </div>
      </BubbleMenu>

      {/* Floating "+" insert menu — appears on empty lines */}
      <FloatingMenu editor={editor} options={{ placement: "left-start" }}>
        <div className="flex items-center gap-1 rounded-[10px] border border-line bg-paper px-1.5 py-1 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.3)]">
          <button
            type="button"
            title="Insert image"
            onMouseDown={(e) => e.preventDefault()}
            onClick={pickImage}
            className="grid h-8 place-items-center rounded-[6px] px-2.5 text-[13px] font-semibold text-green-700 transition hover:bg-green-50"
          >
            🖼 Image
          </button>
          <button
            type="button"
            title="Divider"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => editor.chain().focus().setHorizontalRule().run()}
            className="grid h-8 place-items-center rounded-[6px] px-2.5 text-[13px] font-semibold text-muted transition hover:bg-black/5"
          >
            — Divider
          </button>
        </div>
      </FloatingMenu>

      {/* Sticky mini-toolbar (always available) */}
      <div className="flex flex-wrap items-center gap-1 border-b border-line px-3 py-2">
        <MiniBtn
          active={editor.isActive("heading", { level: 2 })}
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        >
          H2
        </MiniBtn>
        <MiniBtn
          active={editor.isActive("heading", { level: 3 })}
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        >
          H3
        </MiniBtn>
        <MiniBtn
          active={editor.isActive("bold")}
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          <b>B</b>
        </MiniBtn>
        <MiniBtn
          active={editor.isActive("italic")}
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          <i>i</i>
        </MiniBtn>
        <MiniBtn active={editor.isActive("link")} onClick={() => setLink(editor)}>
          🔗
        </MiniBtn>
        <MiniBtn
          active={editor.isActive("blockquote")}
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
        >
          ”
        </MiniBtn>
        <MiniBtn
          active={editor.isActive("bulletList")}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        >
          • List
        </MiniBtn>
        <MiniBtn
          active={editor.isActive("orderedList")}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
        >
          1. List
        </MiniBtn>
        <span className="mx-1 h-5 w-px bg-line" />
        <MiniBtn onClick={pickImage}>🖼 Image</MiniBtn>
        <MiniBtn onClick={() => editor.chain().focus().setHorizontalRule().run()}>
          — Divider
        </MiniBtn>
      </div>

      <EditorContent editor={editor} />
    </div>
  );
}

function MiniBtn({
  active,
  onClick,
  children,
}: {
  active?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onMouseDown={(e) => e.preventDefault()}
      onClick={onClick}
      className={`grid h-8 min-w-8 place-items-center rounded-[6px] px-2 text-[13px] font-semibold transition ${
        active
          ? "bg-green-50 text-green-700"
          : "text-muted hover:bg-black/5 hover:text-ink"
      }`}
    >
      {children}
    </button>
  );
}
