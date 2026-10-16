"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { ArrowRight, Check } from "./icons";

// PRD §4.16 Contact Us — adds business email, support email, phone and a
// contact form so users aren't forced through social channels.
const DETAILS = [
  { label: "Business", value: "hello@nativetalk.io", href: "mailto:hello@nativetalk.io" },
  { label: "Support", value: "support@nativetalk.io", href: "mailto:support@nativetalk.io" },
  { label: "Phone", value: "+234 815 020 1188", href: "tel:+2348150201188" },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Website enquiry from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(`From: ${form.name} <${form.email}>\n\n${form.message}`);
    window.location.href = `mailto:hello@nativetalk.io?subject=${subject}&body=${body}`;
    setDone(true);
  };

  return (
    <section id="contact" className="scroll-mt-24 pb-[92px] pt-5">
      <div className="wrap">
        <Reveal className="mb-9 max-w-[640px]">
          <div className="eyebrow">Contact us</div>
          <h2 className="text-[clamp(30px,4vw,50px)] font-extrabold tracking-[-0.04em]">
            Talk to a human, not just a handle.
          </h2>
          <p className="mt-4 text-[17px] text-muted">
            Reach us directly by email or phone, or send a message and we&apos;ll
            get back to you.
          </p>
        </Reveal>

        <div className="grid gap-[18px] lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="grid content-start gap-3">
            {DETAILS.map((d) => (
              <a
                key={d.label}
                href={d.href}
                className="flex items-center justify-between rounded-[12px] border border-line bg-paper px-5 py-5 transition hover:border-green"
              >
                <span className="text-[13px] font-semibold uppercase tracking-[0.06em] text-green-700">
                  {d.label}
                </span>
                <b className="text-[15.5px] font-semibold">{d.value}</b>
              </a>
            ))}
          </Reveal>

          <Reveal delay={0.08}>
            {done ? (
              <div className="flex h-full items-center gap-3 rounded-[16px] border border-green-300 bg-green-50 p-8">
                <span className="grid h-11 w-11 flex-none place-items-center rounded-full bg-green text-[#06270a]">
                  <Check className="h-5 w-5" />
                </span>
                <p className="text-[16px] font-medium text-text">
                  Thanks for reaching out — your mail app will open to send the
                  message.
                </p>
              </div>
            ) : (
              <form
                onSubmit={submit}
                className="grid gap-3 rounded-[16px] border border-line bg-paper p-8"
              >
                <div className="grid gap-3 sm:grid-cols-2">
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-[12px] border border-line bg-cream px-4 py-3.5 text-[15px] outline-none focus:border-green"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email address"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-[12px] border border-line bg-cream px-4 py-3.5 text-[15px] outline-none focus:border-green"
                  />
                </div>
                <textarea
                  required
                  rows={5}
                  placeholder="How can we help?"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full resize-none rounded-[12px] border border-line bg-cream px-4 py-3.5 text-[15px] outline-none focus:border-green"
                />
                <button type="submit" className="btn btn-green w-fit">
                  Send message
                  <ArrowRight className="text-white" />
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
