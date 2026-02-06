import Link from "next/link";

const practiceAreas = [
  "Corporate Law",
  "Civil Litigation",
  "Criminal Law",
  "Property & Real Estate",
  "Family Law",
  "Intellectual Property",
];

const insights = [
  {
    title: "Navigating commercial disputes without disruption",
    category: "Litigation",
    date: "Jan 12, 2025",
  },
  {
    title: "Boardroom risk intelligence for modern founders",
    category: "Corporate",
    date: "Dec 28, 2024",
  },
  {
    title: "The modern approach to property arbitration",
    category: "Real Estate",
    date: "Dec 08, 2024",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#f5f5f3,_transparent_55%)]" />
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-24 md:py-32">
          <div className="flex flex-col gap-8">
            <p className="text-xs uppercase tracking-[0.3em] text-charcoal">
              Litigation Simplified
            </p>
            <h1 className="max-w-3xl font-serif text-5xl leading-tight md:text-7xl">
              Litigation. Simplified.
            </h1>
            <p className="max-w-2xl text-lg text-charcoal md:text-xl">
              Modern legal insight and representation built for individuals and
              businesses navigating complex legal environments.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <Link
                href="/contact"
                className="bg-ink px-7 py-3 text-xs uppercase tracking-wide text-white transition hover:bg-charcoal"
              >
                Ask a Legal Question
              </Link>
              <Link href="/blog" className="editorial-link">
                Explore Legal Insights <span />
              </Link>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              "Legal Clarity in a Complex World",
              "Modern Legal Intelligence",
              "Strategic Law for Real Outcomes",
            ].map((tagline) => (
              <div
                key={tagline}
                className="border-l border-line pl-6 text-sm uppercase tracking-wide text-charcoal"
              >
                {tagline}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-24">
        <div className="flex flex-col gap-12">
          <div className="flex items-end justify-between">
            <h2 className="section-title">Practice Areas</h2>
            <Link href="/contact" className="editorial-link">
              Engage Counsel <span />
            </Link>
          </div>
          <div className="grid gap-6 border-t border-line pt-10 md:grid-cols-2">
            {practiceAreas.map((area) => (
              <button
                key={area}
                className="group flex items-center justify-between border-b border-line py-4 text-left text-2xl font-serif transition hover:text-charcoal"
              >
                <span>{area}</span>
                <span className="text-sm uppercase tracking-wide text-charcoal transition group-hover:translate-x-2">
                  View
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist">
        <div className="mx-auto w-full max-w-6xl px-6 py-24">
          <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.3em] text-charcoal">
                Authority
              </p>
              <h2 className="section-title">Litigation simplified by design.</h2>
              <p className="text-lg text-charcoal">
                VAKALT is built to simplify litigation and legal awareness through
                clarity, strategy, and modern legal knowledge. We believe law
                should empower clients, not confuse them.
              </p>
            </div>
            <div className="border-l border-line pl-8 text-sm uppercase tracking-wide text-charcoal">
              <p className="mb-6">Premium counsel with global rigor.</p>
              <p>Dedicated litigation teams.</p>
              <p>Disciplined courtroom strategy.</p>
              <p>Client-first communication.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-24">
        <div className="flex flex-col gap-12">
          <div className="flex items-end justify-between">
            <h2 className="section-title">Legal Insights</h2>
            <Link href="/blog" className="editorial-link">
              Explore the Journal <span />
            </Link>
          </div>
          <div className="border-t border-line">
            {insights.map((article) => (
              <div
                key={article.title}
                className="flex flex-col gap-3 border-b border-line py-8 md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-charcoal">
                    {article.category}
                  </p>
                  <h3 className="mt-2 text-2xl font-serif">
                    {article.title}
                  </h3>
                </div>
                <div className="flex items-center gap-6 text-sm uppercase tracking-wide text-charcoal">
                  <span>{article.date}</span>
                  <Link href="/blog" className="editorial-link">
                    Read <span />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-[1.3fr_1fr]">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.3em] text-mist">
                Legal Tools
              </p>
              <h2 className="section-title text-white">
                Practical intelligence for litigation readiness.
              </h2>
              <p className="text-lg text-mist">
                Access premium legal tools designed to clarify next steps, reduce
                uncertainty, and prepare your case with confidence.
              </p>
            </div>
            <div className="space-y-6 border-l border-white/20 pl-8 text-sm uppercase tracking-wide text-mist">
              <p>Court Fee Calculator</p>
              <p>Legal Document Checklists</p>
              <p>Case Preparation Tools (future)</p>
              <Link href="/tools" className="editorial-link text-white">
                View Tools <span className="bg-white" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-24">
        <div className="rounded-3xl border border-line bg-white px-10 py-16 text-center shadow-soft">
          <p className="text-xs uppercase tracking-[0.3em] text-charcoal">
            Consultation
          </p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl">
            Need Legal Guidance?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-charcoal">
            Speak with a VAKALT strategist for tailored counsel and confident
            next steps.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex bg-ink px-8 py-3 text-xs uppercase tracking-wide text-white transition hover:bg-charcoal"
          >
            Schedule Consultation
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: "VAKALT",
            slogan: "Litigation Simplified",
            description:
              "Modern legal insight and representation built for individuals and businesses navigating complex legal environments.",
            url: "https://vakalt.com",
            areaServed: "Global",
          }),
        }}
      />
    </>
  );
}
