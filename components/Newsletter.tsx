"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { ArrowRight, Check } from "./icons";

// PRD §4.11 Newsletter Capture — placed directly before the footer.
// Lead nurturing / product updates / remarketing. No backend in scope, so this
// posts to a mailto fallback and confirms inline (no dead CTA, §7.2).
export default function Newsletter() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    const subject = encodeURIComponent("Newsletter signup");
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}`);
    window.location.href = `mailto:hello@nativetalk.io?subject=${subject}&body=${body}`;
    setDone(true);
  };

  return (
    <section id="newsletter" className="scroll-mt-24 pb-[92px] pt-5">
      <div className="wrap">
        <Reveal className="grid items-center gap-10 rounded-[16px] border border-line bg-green-100 p-9 md:p-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-[clamp(26px,3.4vw,42px)] font-extrabold tracking-[-0.04em] text-[#143a0a]">
              Stay Updated with Product Releases and Business Communication
              Insights
            </h2>
            <p className="mt-3 max-w-[460px] text-[16px] text-[#2c5a18]">
              Product updates, new features and practical tips for running better
              customer conversations — straight to your inbox.
            </p>
          </div>

          {done ? (
            <div className="flex items-center gap-3 rounded-[12px] border border-green-300 bg-paper p-6">
              <span className="grid h-10 w-10 flex-none place-items-center rounded-full bg-green text-[#06270a]">
                <Check className="h-5 w-5" />
              </span>
              <p className="text-[15px] font-medium text-text">
                Thanks! Your mail app will open to confirm your subscription.
              </p>
            </div>
          ) : (
            <form onSubmit={submit} className="grid gap-3">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full rounded-[12px] border border-line bg-paper px-4 py-3.5 text-[15px] outline-none focus:border-green"
              />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="w-full rounded-[12px] border border-line bg-paper px-4 py-3.5 text-[15px] outline-none focus:border-green"
              />
              <button type="submit" className="btn btn-green w-full justify-center">
                Subscribe
                <ArrowRight className="text-white" />
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
