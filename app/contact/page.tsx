import type { Metadata } from "next";
import ProjectForm from "@/components/ProjectForm";

export const metadata: Metadata = {
  title: "Contact — Gereb Technologies",
  description:
    "Start a project with Gereb Technologies. Find our Addis Ababa office, phone and email.",
};

export default function Contact() {
  return (
    <section className="map-grid relative overflow-hidden">
      <div aria-hidden className="glow absolute -top-24 right-[10%] h-80 w-80" />

      <div className="relative mx-auto max-w-6xl px-5 pb-24 pt-16 sm:px-8 md:pt-24">
        <p className="anim anim-1 text-xs font-bold uppercase tracking-[0.2em] text-mint">
          Contact
        </p>
        <h1 className="anim anim-2 mt-4 max-w-2xl font-display text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
          Let&apos;s talk about
          <br />
          your <span className="text-mint">next move</span>.
        </h1>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.25fr]">
          {/* ---------- info column ---------- */}
          <div className="anim anim-3 space-y-5">
            <div className="rounded-3xl border border-[var(--hairline-dark)] bg-night/70 p-8 backdrop-blur-sm">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-mint">
                Office
              </p>
              <address className="mt-4 font-display text-2xl font-bold not-italic leading-snug">
                Awe Bane Building
                <br />
                5th floor, Office 501
              </address>
              <p className="mt-3 text-sm leading-relaxed text-fog">
                Bulgaria, Tanzania St
                <br />
                Addis Ababa, Ethiopia
              </p>
            </div>

            <div className="rounded-3xl border border-[var(--hairline-dark)] bg-night/70 p-8 backdrop-blur-sm">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-mint">
                Direct lines
              </p>
              <div className="mt-4 space-y-3">
                <a
                  href="tel:+251939888000"
                  className="block font-display text-2xl font-bold transition-colors hover:text-mint"
                >
                  +251 939 888 000
                </a>
                <a
                  href="mailto:gereb.technologies@gmail.com"
                  className="block text-sm font-bold text-mint hover:underline"
                >
                  gereb.technologies@gmail.com
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-[var(--hairline-dark)] bg-night/70 p-8 backdrop-blur-sm">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-mint">
                What happens next
              </p>
              <ol className="mt-4 space-y-3 text-sm text-fog">
                <li className="flex gap-3">
                  <span className="font-display font-bold text-mint">1.</span>
                  We reply within one working day.
                </li>
                <li className="flex gap-3">
                  <span className="font-display font-bold text-mint">2.</span>
                  A short call to understand your goal.
                </li>
                <li className="flex gap-3">
                  <span className="font-display font-bold text-mint">3.</span>
                  Fixed written quote — no surprises.
                </li>
              </ol>
            </div>
          </div>

          {/* ---------- form column ---------- */}
          <div className="anim anim-4">
            <ProjectForm />
          </div>
        </div>
      </div>
    </section>
  );
}
