import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VAKALT — Litigation Simplified",
  description:
    "VAKALT delivers modern legal clarity through strategic litigation, insightful counsel, and premium client experience.",
  metadataBase: new URL("https://vakalt.com"),
  openGraph: {
    title: "VAKALT — Litigation Simplified",
    description:
      "Premium legal strategy and modern litigation guidance for individuals and businesses.",
    url: "https://vakalt.com",
    siteName: "VAKALT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VAKALT — Litigation Simplified",
    description:
      "Premium legal strategy and modern litigation guidance for individuals and businesses.",
  },
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Insights" },
  { href: "/tools", label: "Tools" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <div className="min-h-screen bg-white">
          <header className="sticky top-0 z-40 border-b border-line bg-white/90 backdrop-blur">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
              <Link href="/" className="flex items-center gap-3">
                <Image
                  src="/vakalt-logo.svg"
                  alt="VAKALT"
                  width={120}
                  height={28}
                  priority
                />
              </Link>
              <nav className="hidden items-center gap-10 text-sm uppercase tracking-wide md:flex">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="transition-colors hover:text-charcoal"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <Link
                href="/contact"
                className="hidden border border-ink px-5 py-2 text-xs uppercase tracking-wide transition hover:bg-ink hover:text-white md:inline-flex"
              >
                Schedule Consultation
              </Link>
            </div>
          </header>
          <main>{children}</main>
          <footer className="border-t border-line bg-white">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-12 text-sm md:flex-row md:items-start md:justify-between">
              <div className="space-y-4">
                <Image
                  src="/vakalt-logo.svg"
                  alt="VAKALT"
                  width={120}
                  height={28}
                />
                <p className="max-w-xs text-charcoal">
                  Strategic Law for Real Outcomes. Litigation Simplified.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-10 text-charcoal md:grid-cols-3">
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-wide text-ink">Navigate</p>
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="block">
                      {link.label}
                    </Link>
                  ))}
                </div>
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-wide text-ink">Contact</p>
                  <p>+971 000 000 000</p>
                  <p>consult@vakalt.com</p>
                  <p>International Offices</p>
                </div>
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-wide text-ink">Legal</p>
                  <p>Confidentiality & Privacy</p>
                  <p>Professional Disclaimer</p>
                  <p>© 2025 VAKALT</p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
