import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

const partners = [
  { name: "telebirr", src: "/logos/telebirr-clean.png" },
  { name: "Chapa", src: "/logos/chapa-clean.png" },
  { name: "ArifPay", src: "/logos/arifpay-clean.png" },
  { name: "Chanoly Noodles", src: "/logos/Chanoly.png" },
  { name: "Amrogn Chicken", src: "/logos/Amrogn.png" },
  {
    name: "Ministry of Innovation & Technology",
    src: "/logos/ministry-innovation-clean.png",
  },
  { name: "Ministry of Tourism", src: "/logos/ministry-tourism-clean.png" },
];

const tickerItems = [
  "Websites",
  "Mobile apps",
  "Gereb Delivery",
  "Network infrastructure",
  "Branding",
  "UI/UX design",
];

const portfolio = [
  {
    tag: "Product",
    title: "Gereb Delivery — User App",
    desc: "Food delivery for Ethiopia: browse restaurants, order in seconds, track your rider in real time.",
    accent: "bg-green",
  },
  {
    tag: "Product",
    title: "Gereb Admin Dashboard",
    desc: "The control room behind the fleet — live orders, driver dispatch, revenue analytics.",
    accent: "bg-night",
  },
  {
    tag: "Client",
    title: "YIP — Young Innovators Platform",
    desc: "Brand identity and web presence for a youth innovation program.",
    accent: "bg-sage",
  },
  {
    tag: "Client",
    title: "STEM for Girls",
    desc: "A campaign site that helps get more girls into science and technology education.",
    accent: "bg-green-2",
  },
];

export default function Home() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="map-grid relative overflow-hidden">
        <div aria-hidden className="glow absolute -top-32 left-1/4 h-96 w-96" />
        <div aria-hidden className="glow absolute right-[-8%] top-1/3 h-80 w-80" />

        <div className="relative mx-auto grid max-w-6xl gap-14 px-5 pb-24 pt-16 sm:px-8 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:pt-24">
          <div>
            <p className="anim anim-1 inline-flex items-center gap-2 rounded-full border border-[var(--hairline-dark)] bg-night/60 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-fog backdrop-blur-sm">
              <span className="relative h-1.5 w-1.5 rounded-full bg-mint text-mint ping" />
              Addis Ababa · est. Gereb Technologies
            </p>

            <h1 className="anim anim-2 mt-6 font-display text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              We build software
              <br />
              that <span className="text-mint">delivers</span>.
            </h1>

            <p className="anim anim-3 mt-6 max-w-md text-lg leading-relaxed text-fog">
              Literally. We run Gereb Delivery across two cities — and we build
              the websites, apps and networks that power businesses like yours.
            </p>

            <div className="anim anim-4 mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-mint px-7 py-3.5 font-bold text-night transition-all hover:shadow-xl hover:shadow-mint/30"
              >
                Start a project
              </Link>
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 font-bold text-paper"
              >
                Explore services
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>

            <dl className="anim anim-5 mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-[var(--hairline-dark)] pt-8">
              {[
                ["1000+", "orders / month"],
                ["25+", "restaurant partners"],
                ["5", "services, one studio"],
              ].map(([num, label]) => (
                <div key={label}>
                  <dt className="sr-only">{label}</dt>
                  <dd className="font-display text-3xl font-bold text-mint">
                    {num}
                  </dd>
                  <dd className="mt-1 text-xs uppercase tracking-wider text-fog">
                    {label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* animated delivery route */}
          <div className="anim anim-4 relative hidden lg:block">
            <svg
              viewBox="0 0 490 240"
              className="w-full overflow-visible"
              aria-hidden
            >
              {/* route */}
              <path
                d="M20 175 C 90 40, 190 220, 290 90 S 420 60, 470 30"
                fill="none"
                stroke="#198450"
                strokeWidth="2.5"
                className="route-path"
              />
              {/* origin + destination pins */}
              <circle cx="20" cy="175" r="7" fill="#22f588" />
              <circle cx="20" cy="175" r="14" fill="#22f588" opacity="0.15" />
              <circle cx="470" cy="30" r="7" fill="#22f588" />
              <circle cx="470" cy="30" r="14" fill="#22f588" opacity="0.15" />
            </svg>
            {/* moving package dot */}
            <div className="route-dot absolute left-0 top-0 h-4 w-4 rounded-full bg-mint shadow-[0_0_18px_rgba(34,245,136,0.9)]" />

            {/* floating status cards */}
            <div className="drift absolute -top-8 right-8 rounded-2xl border border-[var(--hairline-dark)] bg-night/85 px-5 py-4 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-wider text-fog">
                Order #2481
              </p>
              <p className="mt-1 font-display text-sm font-bold text-mint">
                ✓ Delivered in 24 min
              </p>
            </div>
            <div
              className="drift absolute -bottom-10 left-6 rounded-2xl border border-[var(--hairline-dark)] bg-night/85 px-5 py-4 backdrop-blur-sm"
              style={{ animationDelay: "1.4s" }}
            >
              <p className="text-xs uppercase tracking-wider text-fog">
                client-site v2.0
              </p>
              <p className="mt-1 font-display text-sm font-bold text-mint">
                ✓ Deployed to production
              </p>
            </div>
          </div>
        </div>

        {/* ticker */}
        <div className="relative overflow-hidden border-y border-[var(--hairline-dark)] bg-night py-3.5">
          <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
            {[...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems].map(
              (item, i) => (
                <span
                  key={i}
                  className="flex items-center gap-10 font-display text-sm font-bold tracking-wide text-fog"
                >
                  {item} <span className="text-mint">✦</span>
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* ================= SERVICES BENTO ================= */}
      <section className="bg-mist text-night">
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
          {/* ---------- trusted by ---------- */}
          <Reveal>
            <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-smoke">
              Trusted by leading businesses &amp; institutions
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
              <div className="marquee-track flex w-max items-center gap-16">
                {[...partners, ...partners].map((p, i) => (
                  <Image
                    key={i}
                    src={p.src}
                    alt={p.name}
                    title={p.name}
                    width={160}
                    height={64}
                    className="h-12 w-auto shrink-0 object-contain transition-transform duration-300 hover:scale-110 sm:h-14"
                  />
                ))}
              </div>
            </div>
          </Reveal>

          <div className="mt-24" />
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-green">
                  What we do
                </p>
                <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                  One studio.
                  <br />
                  Every digital skill.
                </h2>
              </div>
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 font-bold text-green"
              >
                All services
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {/* featured card */}
            <Reveal className="md:col-span-2 md:row-span-2">
              <article className="group flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-night p-8 text-paper transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-green/20 sm:p-10">
                <div>
                  <span className="rounded-full bg-mint/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-mint">
                    Flagship
                  </span>
                  <h3 className="mt-5 font-display text-3xl font-bold sm:text-4xl">
                    Mobile app development
                  </h3>
                  <p className="mt-4 max-w-md leading-relaxed text-fog">
                    We don&apos;t just build apps — we run one. Gereb Delivery
                    handles 1000+ orders a month, so we know what survives real
                    users, real traffic and real streets.
                  </p>
                </div>
                <div className="mt-10 flex items-center gap-3 text-sm font-bold text-mint">
                  iOS · Android · React Native
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </article>
            </Reveal>

            {[
              [
                "Website development",
                "Fast, responsive, search-friendly websites that actually win customers.",
              ],
              [
                "Network infrastructure",
                "Office and enterprise networking installed, configured and maintained.",
              ],
              [
                "Branding",
                "Logos, guidelines and brand strategy that make you unmistakable.",
              ],
              [
                "UI/UX design",
                "Interfaces designed around your users — tested, not guessed.",
              ],
            ].map(([title, desc], i) => (
              <Reveal key={title} delay={i * 80}>
                <article className="group flex h-full flex-col rounded-3xl border border-[var(--hairline-light)] bg-paper p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-green/40 hover:shadow-xl hover:shadow-night/8">
                  <span className="font-display text-sm font-bold text-green">
                    {String(i + 2).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-bold">
                    {title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-smoke">
                    {desc}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= GEREB DELIVERY SHOWCASE ================= */}
      <section className="map-grid relative overflow-hidden">
        <div aria-hidden className="glow absolute bottom-0 left-[-5%] h-96 w-96" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 py-24 sm:px-8 lg:grid-cols-2">
          <Reveal>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-mint">
                Our product
              </p>
              <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                Gereb Delivery
              </h2>
              <p className="mt-5 max-w-md leading-relaxed text-fog">
                Ethiopia&apos;s homegrown food delivery platform. The best
                restaurants in town, the fastest riders in the business — and
                live tracking the whole way to your door.
              </p>

              <ul className="mt-8 space-y-3.5">
                {[
                  "Wide range of restaurant partners",
                  "Lightning-fast delivery fleet",
                  "Real-time order tracking",
                  "User-friendly mobile app",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-green text-xs font-bold text-mint">
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#"
                  className="rounded-full bg-green px-7 py-3.5 font-bold text-paper transition-all hover:bg-mint hover:text-night hover:shadow-xl hover:shadow-mint/25"
                >
                  Try Gereb Delivery
                </a>
              </div>

              <dl className="mt-12 grid max-w-md grid-cols-4 gap-4 border-t border-[var(--hairline-dark)] pt-7">
                {[
                  ["25+", "partners"],
                  ["1000+", "orders/mo"],
                  ["2", "cities"],
                  ["15+", "drivers"],
                ].map(([num, label]) => (
                  <div key={label}>
                    <dt className="sr-only">{label}</dt>
                    <dd className="font-display text-2xl font-bold text-mint">
                      {num}
                    </dd>
                    <dd className="mt-1 text-[11px] uppercase tracking-wider text-fog">
                      {label}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          {/* CSS phone mockup */}
          <Reveal delay={120} className="justify-self-center">
            <div className="relative w-72 rounded-[2.6rem] border-4 border-night bg-night shadow-2xl shadow-green/20">
              {/* notch */}
              <div className="absolute left-1/2 top-2.5 h-5 w-24 -translate-x-1/2 rounded-full bg-forest" />
              <div className="space-y-3 overflow-hidden rounded-[2.3rem] bg-mist p-4 pt-10 text-night">
                {/* app header */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] text-smoke">Deliver to</p>
                    <p className="text-xs font-bold">Bole, Addis Ababa ▾</p>
                  </div>
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-green font-display text-xs font-bold text-mint">
                    g*
                  </span>
                </div>
                {/* search */}
                <div className="rounded-xl bg-paper px-3 py-2.5 text-[11px] text-smoke shadow-sm">
                  🔍 Burgers, pizza, injera…
                </div>
                {/* restaurant cards */}
                {[
                  ["Efoy Kitchen", "Ethiopian · 1.2 km", "24 min"],
                  ["Burger Bros", "Fast food · 800 m", "18 min"],
                ].map(([name, meta, eta]) => (
                  <div
                    key={name}
                    className="flex items-center gap-3 rounded-xl bg-paper p-3 shadow-sm"
                  >
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-sage/25 text-lg">
                      🍽️
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-xs font-bold">{name}</p>
                      <p className="text-[10px] text-smoke">{meta}</p>
                    </div>
                    <span className="rounded-full bg-mint/20 px-2 py-1 text-[10px] font-bold text-green">
                      {eta}
                    </span>
                  </div>
                ))}
                {/* live tracking card */}
                <div className="rounded-xl bg-night p-3.5 text-paper">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="text-fog">Order #2481 · on the way</span>
                    <span className="relative h-2 w-2 rounded-full bg-mint text-mint ping" />
                  </div>
                  <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-forest">
                    <div className="h-full w-2/3 rounded-full bg-linear-to-r from-green to-mint" />
                  </div>
                  <div className="mt-2 flex justify-between text-[10px] text-fog">
                    <span>Restaurant</span>
                    <span className="font-bold text-mint">12 min away</span>
                    <span>You</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= PORTFOLIO ================= */}
      <section className="bg-mist text-night">
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-green">
              Selected work
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Built by Gereb
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {portfolio.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 90}>
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--hairline-light)] bg-paper transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-night/10">
                  <div
                    className={`relative h-40 ${p.accent} transition-transform duration-500`}
                  >
                    <div className="map-grid absolute inset-0 opacity-40" />
                    <span className="absolute bottom-4 left-6 font-display text-5xl font-extrabold text-paper/25 transition-transform duration-300 group-hover:scale-110">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <span className="self-start rounded-full bg-mint/20 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-green">
                      {p.tag}
                    </span>
                    <h3 className="mt-4 font-display text-2xl font-bold">
                      {p.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-smoke">
                      {p.desc}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="map-grid relative overflow-hidden px-5 py-28 sm:px-8">
        <div
          aria-hidden
          className="glow absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2"
        />
        <Reveal>
          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-6xl">
              Your project,
              <br />
              <span className="text-mint">delivered</span> next.
            </h2>
            <p className="mx-auto mt-6 max-w-md text-lg text-fog">
              Tell us what you&apos;re building. We&apos;ll reply within one
              working day with honest advice and a clear quote.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-mint px-8 py-4 font-bold text-night transition-all hover:shadow-xl hover:shadow-mint/40"
              >
                Start a project
              </Link>
              <a
                href="tel:+251939888000"
                className="rounded-full border border-[var(--hairline-dark)] px-8 py-4 font-bold text-paper transition-colors hover:border-mint hover:text-mint"
              >
                +251 939 888 000
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
