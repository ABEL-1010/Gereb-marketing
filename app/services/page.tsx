import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Services — Gereb Technologies",
  description:
    "Digital Solutions and Infrastructure & Security from Gereb Technologies: delivery, apps, websites, marketing, networks, CCTV and data centers — from the cloud to the ground.",
};

/* ---------------- divisions ---------------- */

const divisions = [
  {
    n: "01",
    name: "Digital Solutions",
    tagline:
      "We propel your digital transformation with innovative software and reliable support.",
    items: [
      {
        title: "Gereb Delivery Platform",
        desc: "A multi-service logistics ecosystem operating in Addis Ababa, Mekelle, Hawassa and Adama — food, pharmacy, grocery and parcel delivery.",
      },
      {
        title: "Digital Product Development",
        desc: "Custom mobile and web applications, plus strategic digital branding and full social media management that builds your audience and keeps it engaged.",
      },
      {
        title: "Managed IT Services",
        desc: "End-to-end support: hardware & software installation, system maintenance, technical helpdesk and full infrastructure setup.",
      },
    ],
  },
  {
    n: "02",
    name: "Infrastructure & Security",
    tagline:
      "We construct the resilient, high-performance physical foundation essential for modern operations.",
    items: [
      {
        title: "Network Infrastructure",
        desc: "Professional design, structured cabling and enterprise wireless solutions — reliable connectivity, optimized performance.",
      },
      {
        title: "Security & Surveillance",
        desc: "Complete CCTV system design, installation and monitoring, plus comprehensive security upgrades.",
      },
      {
        title: "Data Center Solutions",
        desc: "Full-scale planning, setup, power & cooling management, and server/rack optimization.",
      },
    ],
  },
];

/* ---------------- 9 service cards ---------------- */

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const services = [
  {
    title: "Delivery Service",
    desc: "Tap into Gereb Delivery — our own logistics network across four cities — and get your products to customers' doors, fast.",
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <circle cx="6" cy="17" r="3" />
        <circle cx="18" cy="17" r="3" />
        <path d="M6 17h6l3-8h4M9 9h4l2.5 5.5" />
      </svg>
    ),
  },
  {
    title: "Mobile App Design & Development",
    desc: "iOS and Android apps with seamless functionality and interfaces your customers will love to use.",
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
        <path d="M11 18.5h2" />
      </svg>
    ),
  },
  {
    title: "Website Design & Development",
    desc: "Stunning, responsive websites engineered for speed, search and sales — built to win customers.",
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <rect x="2.5" y="4" width="19" height="16" rx="2.5" />
        <path d="M2.5 9h19M6 6.5h.01M9 6.5h.01" />
      </svg>
    ),
  },
  {
    title: "Google Ads Management",
    desc: "Campaigns tuned to put you in front of the right customers at the exact moment they're searching.",
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="12" cy="12" r="0.5" />
      </svg>
    ),
  },
  {
    title: "Branding Service",
    desc: "Logos, identities and guidelines that make your business unmistakable in a crowded market.",
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <path d="M12 3l2.4 5.4L20 9.2l-4.2 3.9 1.2 5.9L12 16l-5 3 1.2-5.9L4 9.2l5.6-.8L12 3z" />
      </svg>
    ),
  },
  {
    title: "Social Media Marketing",
    desc: "Strategy, content and community management that build an audience — and keep it engaged.",
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5c-1.6 0-3.1-.4-4.4-1.2L3 20l1.2-5.1A8.5 8.5 0 1 1 21 11.5z" />
        <path d="M8.5 11.5h.01M12.5 11.5h.01M16.5 11.5h.01" />
      </svg>
    ),
  },
  {
    title: "Search Engine Optimization",
    desc: "Climb the rankings and stay there — technical SEO, content and authority that compound over time.",
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <circle cx="10.5" cy="10.5" r="7" />
        <path d="M20.5 20.5l-5-5M7.5 12.5v-2M10.5 12.5v-4M13.5 12.5v-6" />
      </svg>
    ),
  },
  {
    title: "Film & Video Production",
    desc: "Story-driven film and video that stops the scroll, moves people and sells your vision.",
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <rect x="2.5" y="6" width="13" height="12" rx="2.5" />
        <path d="M15.5 10.5l6-3.5v10l-6-3.5" />
      </svg>
    ),
  },
  {
    title: "Email Marketing",
    desc: "Campaigns and automations that land in inboxes, get opened, and bring customers back.",
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
        <path d="M3 6.5l9 6.5 9-6.5" />
      </svg>
    ),
  },
];

/* ---------------- process ---------------- */

const process = [
  ["Listen", "We start with your business goal, not the tech stack."],
  ["Scope & quote", "A fixed written proposal — no surprise bills, ever."],
  ["Build & show", "Weekly demos so you see progress, not promises."],
  ["Ship & support", "Launch is day one. We stay for maintenance and growth."],
];

export default function Services() {
  return (
    <>
      {/* ---------- hero ---------- */}
      <section className="map-grid relative overflow-hidden">
        <div aria-hidden className="glow absolute -top-24 left-[15%] h-80 w-80" />
        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-6 md:pt-24">
          <p className="anim anim-1 text-xs font-bold uppercase tracking-[0.2em] text-mint">
            Our Services
          </p>
          <h1 className="anim anim-2 mt-4 max-w-3xl font-display text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
            Game-changing services,
            <br />
            from the <span className="text-mint">cloud</span> to the{" "}
            <span className="text-mint">ground</span>.
          </h1>
          <p className="anim anim-3 mt-8 max-w-2xl text-lg leading-relaxed text-fog">
            We engineer success by first understanding your business objectives,
            operations and market — then delivering precisely customized
            strategies that fit your requirements and budget. Cost-effective,
            time-efficient, and built to maximize your return on investment.
          </p>
        </div>
      </section>

      {/* ---------- two divisions ---------- */}
      <section className="relative border-t border-[var(--hairline-dark)]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-mint">
              Two integrated divisions
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
              The complete technological backbone your enterprise needs
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {divisions.map((d, i) => (
              <Reveal key={d.n} delay={i * 120}>
                <article className="group relative h-full overflow-hidden rounded-3xl border border-[var(--hairline-dark)] bg-night/70 p-8 backdrop-blur-sm transition-all duration-300 hover:border-mint/40 sm:p-10">
                  <div
                    aria-hidden
                    className="glow absolute -right-20 -top-20 h-56 w-56 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <div className="relative">
                    <span className="font-display text-sm font-bold tracking-[0.25em] text-mint">
                      DIVISION {d.n}
                    </span>
                    <h3 className="mt-3 font-display text-3xl font-extrabold tracking-tight">
                      {d.name}
                    </h3>
                    <p className="mt-3 leading-relaxed text-fog">{d.tagline}</p>

                    <ul className="mt-8 space-y-6">
                      {d.items.map((item) => (
                        <li
                          key={item.title}
                          className="border-l-2 border-green pl-5 transition-colors group-hover:border-mint"
                        >
                          <h4 className="font-display text-lg font-bold">
                            {item.title}
                          </h4>
                          <p className="mt-1.5 text-sm leading-relaxed text-fog">
                            {item.desc}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mx-auto mt-12 max-w-2xl text-center text-fog">
              Together, our synergistic divisions ensure your business is powered
              by seamless, secure and scalable technology —{" "}
              <span className="font-bold text-paper">
                from the cloud to the ground.
              </span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- 9 service cards ---------- */}
      <section className="bg-mist text-night">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-green">
              What we do
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
              A variety of game-changing services for your business
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 90}>
                <article className="group flex h-full flex-col rounded-3xl border border-[var(--hairline-light)] bg-paper p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-green/40 hover:shadow-xl hover:shadow-night/8">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-mint/15 text-green transition-all duration-300 group-hover:bg-green group-hover:text-mint [&>svg]:h-6 [&>svg]:w-6">
                    {s.icon}
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold leading-snug">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-smoke">
                    {s.desc}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-green transition-all group-hover:gap-3"
                  >
                    Get a quote <span aria-hidden>→</span>
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- process ---------- */}
      <section className="map-grid relative">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-mint">
              How we work
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              From first call to launch
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {process.map(([title, desc], i) => (
              <Reveal key={title} delay={i * 90}>
                <div className="relative h-full rounded-3xl border border-[var(--hairline-dark)] bg-night/70 p-7 backdrop-blur-sm">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-green font-display text-sm font-bold text-mint">
                    {i + 1}
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold">
                    {title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-fog">
                    {desc}
                  </p>
                  {i < process.length - 1 && (
                    <span
                      aria-hidden
                      className="absolute -right-4 top-1/2 hidden -translate-y-1/2 text-mint lg:block"
                    >
                      →
                    </span>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-16 text-center">
              <Link
                href="/contact"
                className="inline-block rounded-full bg-mint px-8 py-4 font-bold text-night transition-all hover:shadow-xl hover:shadow-mint/40"
              >
                Tell us about your project
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
