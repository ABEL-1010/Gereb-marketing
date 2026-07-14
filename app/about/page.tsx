import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About — Gereb Technologies",
  description:
    "Gereb Technologies PLC: the strategic partner for businesses ready to excel in the digital age — vision, mission and the values that drive us.",
};

/* ---------------- vision / mission / value ---------------- */

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const pillars = [
  {
    label: "Vision",
    desc: "To lead Ethiopia's technological future through innovation and excellence.",
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    label: "Mission",
    desc: "We empower businesses with optimal, cost-effective solutions that drive measurable growth and productivity.",
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="12" cy="12" r="0.5" />
      </svg>
    ),
  },
  {
    label: "Value",
    desc: "We believe in acting ethically in our practices and providing innovative business solutions that foster trust and commitment.",
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <path d="M12 21s-7.5-4.6-9.3-9.6C1.6 8.2 3.6 5 6.9 5c2 0 3.6 1.1 5.1 3 1.5-1.9 3.1-3 5.1-3 3.3 0 5.3 3.2 4.2 6.4C19.5 16.4 12 21 12 21z" />
      </svg>
    ),
  },
];

/* ---------------- six core values ---------------- */

const coreValues = [
  {
    title: "People focus",
    desc: "Our people are our engine. We invest in the team that delivers for you.",
  },
  {
    title: "Customer focus",
    desc: "Every decision starts with one question: what moves your business forward?",
  },
  {
    title: "Entrepreneurship",
    desc: "We think and act like owners — because we build and run our own products too.",
  },
  {
    title: "Innovation",
    desc: "We turn cutting-edge technology into practical, everyday advantage.",
  },
  {
    title: "Performance",
    desc: "We measure ourselves by outcomes — speed, quality and results you can see.",
  },
  {
    title: "Professionalism",
    desc: "Clear communication, honest timelines and standards without compromise.",
  },
];

export default function About() {
  return (
    <>
      {/* ---------- hero ---------- */}
      <section className="map-grid relative overflow-hidden">
        <div aria-hidden className="glow absolute -top-24 right-[10%] h-80 w-80" />
        <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-16 sm:px-8 md:pt-24">
          <p className="anim anim-1 text-xs font-bold uppercase tracking-[0.2em] text-mint">
            About us
          </p>
          <h1 className="anim anim-2 mt-4 max-w-3xl font-display text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
            Your strategic partner
            <br />
            for the <span className="text-mint">digital age</span>.
          </h1>
          <p className="anim anim-3 mt-8 max-w-2xl text-lg leading-relaxed text-fog">
            At Gereb Technologies, we specialize in transforming complex
            technological challenges into streamlined opportunities for growth.
            Our mission is to bridge the gap between cutting-edge innovation and
            tangible business results — ensuring your organization operates with
            greater efficiency, resilience and competitive advantage.
          </p>
        </div>
      </section>

      {/* ---------- who we are ---------- */}
      <section className="bg-mist text-night">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 py-24 sm:px-8 md:grid-cols-2">
          <Reveal>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-green">
                Who we are
              </p>
              <h2 className="mt-3 font-display text-4xl font-bold tracking-tight">
                More than a service provider —
                <br />
                your <span className="text-green">catalyst</span> for
                transformation
              </h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="space-y-5 leading-relaxed text-smoke">
              <p>
                Our expertise is built on a unique, integrated model that
                connects visionary software development with robust physical
                infrastructure. From crafting intuitive mobile applications and
                securing enterprise networks to managing mission-critical
                delivery logistics and building powerful brands, we provide a
                comprehensive suite of services — each solution
                custom-engineered by our dedicated team of experts, working
                collaboratively to align advanced technology with your specific
                operational goals and market ambitions.
              </p>
              <p>
                By combining deep local insight with a forward-thinking
                approach, we empower you to navigate the future with confidence.
                Let us partner with you to turn visionary ideas into operational
                reality — building the resilient and intelligent foundations
                that drive sustainable success.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- vision / mission / value ---------- */}
      <section className="map-grid relative">
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-mint">
              What drives us
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Vision, mission &amp; value
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.label} delay={i * 100}>
                <article className="group relative h-full overflow-hidden rounded-3xl border border-[var(--hairline-dark)] bg-night/70 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-mint/40">
                  <div
                    aria-hidden
                    className="glow absolute -right-16 -top-16 h-44 w-44 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <div className="relative">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-green/25 text-mint [&>svg]:h-6 [&>svg]:w-6">
                      {p.icon}
                    </span>
                    <h3 className="mt-6 font-display text-2xl font-extrabold tracking-tight">
                      {p.label}
                    </h3>
                    <p className="mt-3 leading-relaxed text-fog">{p.desc}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- six core values ---------- */}
      <section className="bg-mist text-night">
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-green">
                  Core values
                </p>
                <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                  Six principles we work by
                </h2>
              </div>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 font-bold text-green"
              >
                Work with us
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((v, i) => (
              <Reveal key={v.title} delay={(i % 3) * 90}>
                <article className="group flex h-full gap-6 rounded-3xl border border-[var(--hairline-light)] bg-paper p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-green/40 hover:shadow-xl hover:shadow-night/8">
                  <span className="font-display text-5xl font-extrabold leading-none text-green/25 transition-colors group-hover:text-green">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold">
                      {v.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-smoke">
                      {v.desc}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="map-grid relative overflow-hidden px-5 py-24 text-center sm:px-8">
        <div
          aria-hidden
          className="glow absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2"
        />
        <Reveal>
          <div className="relative">
            <h2 className="mx-auto max-w-2xl font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
              Let&apos;s turn visionary ideas into
              <span className="text-mint"> operational reality</span>.
            </h2>
            <div className="mt-9">
              <Link
                href="/contact"
                className="inline-block rounded-full bg-mint px-8 py-4 font-bold text-night transition-all hover:shadow-xl hover:shadow-mint/40"
              >
                Start a project
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
