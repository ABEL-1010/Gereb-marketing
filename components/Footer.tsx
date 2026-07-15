import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--hairline-dark)] bg-night">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="font-display text-3xl font-bold">
              gereb<span className="text-mint">*</span>
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-fog">
              Addis Ababa&apos;s technology studio. We build the software — and
              deliver the goods.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-mint">
              Visit
            </p>
            <address className="mt-4 text-sm not-italic leading-7 text-fog">
              Awe Bane Building, 5th floor
              <br />
              Bulgaria, Tanzania St
              <br />
              Addis Ababa, Ethiopia
            </address>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-mint">
              Talk
            </p>
            <ul className="mt-4 space-y-2 text-sm text-fog">
              <li>
                <a href="tel:+251939888000" className="hover:text-mint">
                  +251 939 888 000
                </a>
              </li>
              <li>
                <a
                  href="mailto:gereb.technologies@gmail.com"
                  className="hover:text-mint"
                >
                  gereb.technologies@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-mint">
              Pages
            </p>
            <ul className="mt-4 space-y-2 text-sm text-fog">
              <li>
                <Link href="/" className="hover:text-mint">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-mint">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-mint">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-mint">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-[var(--hairline-dark)] pt-6 text-xs text-fog/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Gereb Technologies. All rights reserved.</p>
          <p>Designed & developed in Addis Ababa 🇪🇹</p>
        </div>
      </div>
    </footer>
  );
}
