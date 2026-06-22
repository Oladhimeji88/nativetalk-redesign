import { NextResponse } from "next/server";
import crypto from "node:crypto";

export const dynamic = "force-dynamic";

const MAX_BYTES = 6 * 1024 * 1024; // 6 MB
const ALLOWED = new Set([
  "image/png",
  "image/jpeg",
  "image/jpg",
  "image/webp",
  "image/gif",
  "image/svg+xml",
  "image/avif",
]);
const FOLDER = "nativetalk-blog";

export async function POST(req: Request) {
  const cloud = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  if (!cloud || !apiKey || !apiSecret) {
    return NextResponse.json(
      { error: "Image storage is not configured." },
      { status: 500 }
    );
  }

  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json({ error: "Invalid upload." }, { status: 400 });
  }

  const file = form.get("file");
  if (!(file instanceof File)) {
    return NextResponse.json({ error: "No file provided." }, { status: 400 });
  }
  if (!ALLOWED.has(file.type)) {
    return NextResponse.json(
      { error: "Unsupported file type. Use PNG, JPG, WEBP, GIF, SVG or AVIF." },
      { status: 415 }
    );
  }
  if (file.size > MAX_BYTES) {
    return NextResponse.json(
      { error: "File too large. Max 6 MB." },
      { status: 413 }
    );
  }

  // Signed upload — params (except file/api_key) are signed with the secret.
  const timestamp = Math.round(Date.now() / 1000).toString();
  const toSign = `folder=${FOLDER}&timestamp=${timestamp}`;
  const signature = crypto
    .createHash("sha1")
    .update(toSign + apiSecret)
    .digest("hex");

  const upload = new FormData();
  upload.append("file", file);
  upload.append("api_key", apiKey);
  upload.append("timestamp", timestamp);
  upload.append("folder", FOLDER);
  upload.append("signature", signature);

  let data: { secure_url?: string; error?: { message?: string } };
  try {
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${cloud}/image/upload`,
      { method: "POST", body: upload }
    );
    data = await res.json();
    if (!res.ok || !data.secure_url) {
      return NextResponse.json(
        { error: data.error?.message ?? "Upload failed." },
        { status: 502 }
      );
    }
  } catch {
    return NextResponse.json(
      { error: "Could not reach image storage." },
      { status: 502 }
    );
  }

  return NextResponse.json({ url: data.secure_url }, { status: 201 });
}
