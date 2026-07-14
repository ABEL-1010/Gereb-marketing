import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About — Gereb Technologies",
  description:
    "The team behind Gereb Technologies: Addis Ababa's technology studio building software, networks and Gereb Delivery.",
};

const values = [
  {
    title: "Ship things that work",
    desc: "We run our own product in production. Nothing teaches quality like real users at dinner time.",
  },
  {
    title: "Local roots, world standards",
    desc: "Built in Addis Ababa for Ethiopian businesses — engineered to global standards.",
  },
  {
    title: "Straight talk",
    desc: "Clear quotes, honest timelines, and advice you can act on — even when it's 'you don't need this yet'.",
  },
  {
    title: "Grow together",
    desc: "Your success is our portfolio. We win when the businesses we build for win.",
  },
];

const team = [
  {
    initials: "BT",
    name: "Brook Tewabe",
    role: "Backend Developer",
    bio: "Crafts robust, scalable systems. Keeps Gereb Delivery's engine running through every lunch rush.",
  },
  {
    initials: "NT",
    name: "Nuhamin Tesfaye",
    role: "Data Specialist",
    bio: "Manages and organizes data with meticulous attention to detail, powering smarter decisions.",
  },
  {
    initials: "GT",
    name: "Operations Team",
    role: "Office & Finance",
    bio: "The people who keep projects on schedule, budgets on track and clients in the loop.",
  },
  {
    initials: "DF",
    name: "Delivery Fleet",
    role: "15+ Riders",
    bio: "The fastest team in the business — the human engine behind every on-time order.",
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
            A tech studio that
            <br />
            eats its own <span className="text-mint">cooking</span>.
          </h1>
          <p className="anim anim-3 mt-8 max-w-xl text-lg leading-relaxed text-fog">
            Most agencies build software and hand it over. We build software
            and <em>live with it</em> — our own delivery platform runs on the
            same code quality, design thinking and infrastructure we sell.
            That&apos;s the Gereb difference.
          </p>
        </div>
      </section>

      {/* ---------- story ---------- */}
      <section className="bg-mist text-night">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 py-24 sm:px-8 md:grid-cols-2">
          <Reveal>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-green">
                Our story
              </p>
              <h2 className="mt-3 font-display text-4xl font-bold tracking-tight">
                From one app
                <br />
                to a full studio
              </h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="space-y-5 leading-relaxed text-smoke">
              <p>
                Gereb Technologies started with a simple frustration: getting
                good food delivered in Addis Ababa was harder than it should
                be. So we built Gereb Delivery — and learned everything about
                shipping real software along the way.
              </p>
              <p>
                Word spread. Businesses asked who built our app, then asked us
                to build theirs. Today we&apos;re a full technology studio:
                websites, mobile apps, network infrastructure, branding and
                UI/UX — with our delivery platform still running at the heart
                of it all, keeping us honest.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- values ---------- */}
      <section className="map-grid relative">
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-mint">
              What we believe
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Four rules we work by
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 2) * 90}>
                <div className="flex h-full gap-6 rounded-3xl border border-[var(--hairline-dark)] bg-night/70 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-mint/40">
                  <span className="font-display text-5xl font-extrabold leading-none text-green">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold">
                      {v.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-fog">
                      {v.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- team ---------- */}
      <section className="bg-mist text-night">
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-green">
                  The team
                </p>
                <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                  People who deliver
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

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={(i % 4) * 80}>
                <article className="flex h-full flex-col rounded-3xl border border-[var(--hairline-light)] bg-paper p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-night/10">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-night font-display text-lg font-bold text-mint">
                    {m.initials}
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold">
                    {m.name}
                  </h3>
                  <p className="mt-1 text-sm font-bold text-green">{m.role}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-smoke">
                    {m.bio}
                  </p>
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
              Let&apos;s build something
              <span className="text-mint"> worth shipping</span>.
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
