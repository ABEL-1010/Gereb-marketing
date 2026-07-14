"use client";

import { useState } from "react";

const inputStyles =
  "w-full rounded-xl border border-[var(--hairline-light)] bg-mist px-4 py-3 text-night placeholder:text-smoke/50 outline-none transition-all focus:border-green focus:ring-2 focus:ring-green/20";

export default function ProjectForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="rounded-3xl bg-night p-10 text-center text-paper">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-mint text-2xl text-night">
          ✓
        </span>
        <h3 className="mt-5 font-display text-3xl font-bold">
          Message received!
        </h3>
        <p className="mx-auto mt-3 max-w-sm text-fog">
          Thanks for reaching out — we&apos;ll get back to you within one
          working day with next steps.
        </p>
        <button
          onClick={() => setSent(false)}
          className="mt-7 rounded-full border border-[var(--hairline-dark)] px-6 py-2.5 text-sm font-bold transition-colors hover:border-mint hover:text-mint"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: send to your backend / email service
        setSent(true);
      }}
      className="rounded-3xl border border-[var(--hairline-light)] bg-paper p-7 text-night sm:p-9"
    >
      <h2 className="font-display text-3xl font-bold">Start a project</h2>
      <p className="mt-2 text-sm text-smoke">
        Tell us what you&apos;re building — we&apos;ll reply with honest advice
        and a clear quote.
      </p>

      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-bold">Name</span>
          <input required name="name" placeholder="Abel Demoz" className={inputStyles} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-bold">Phone</span>
          <input
            type="tel"
            name="phone"
            placeholder="+251 9XX XXX XXX"
            className={inputStyles}
          />
        </label>
      </div>

      <label className="mt-4 block">
        <span className="mb-1.5 block text-sm font-bold">Email</span>
        <input
          required
          type="email"
          name="email"
          placeholder="you@company.com"
          className={inputStyles}
        />
      </label>

      <label className="mt-4 block">
        <span className="mb-1.5 block text-sm font-bold">
          What do you need?
        </span>
        <select name="service" className={inputStyles} defaultValue="">
          <option value="" disabled>
            Choose a service…
          </option>
          <option>Website development</option>
          <option>Mobile app development</option>
          <option>Network infrastructure</option>
          <option>Branding</option>
          <option>UI/UX design</option>
          <option>Something else</option>
        </select>
      </label>

      <label className="mt-4 block">
        <span className="mb-1.5 block text-sm font-bold">
          Tell us about your project
        </span>
        <textarea
          required
          name="message"
          rows={5}
          placeholder="What are you building? What's the goal? Any deadline or budget in mind?"
          className={inputStyles}
        />
      </label>

      <button
        type="submit"
        className="mt-7 w-full rounded-full bg-green py-4 font-bold text-paper transition-all hover:bg-mint hover:text-night hover:shadow-xl hover:shadow-mint/25"
      >
        Send message
      </button>

      <p className="mt-4 text-center text-xs text-smoke">
        Prefer to talk?{" "}
        <a href="tel:+251939888000" className="font-bold text-green">
          +251 939 888 000
        </a>
      </p>
    </form>
  );
}
