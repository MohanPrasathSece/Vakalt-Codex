import ToolsClient from "./ToolsClient";
import Link from "next/link";

export const metadata = {
  title: "VAKALT Tools — Litigation Simplified",
  description: "Premium legal tools designed to clarify litigation readiness.",
};

export default function ToolsPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20">
      <div className="space-y-6">
        <p className="text-xs uppercase tracking-[0.3em] text-charcoal">Tools</p>
        <h1 className="font-serif text-5xl md:text-6xl">
          Legal tools built for clarity.
        </h1>
        <p className="max-w-2xl text-lg text-charcoal">
          VAKALT develops practical, high-performance legal utilities that help
          clients move decisively.
        </p>
      </div>

      <div className="mt-16">
        <ToolsClient />
      </div>

      <div className="mt-16 border-t border-line pt-10">
        <h2 className="font-serif text-3xl">Future tools roadmap</h2>
        <div className="mt-6 grid gap-4 text-charcoal">
          <p>Legal Document Checklists</p>
          <p>Case Preparation Tools</p>
          <p>Litigation Timeline Planner</p>
        </div>
        <Link href="/contact" className="editorial-link mt-8 inline-flex">
          Request a tool <span />
        </Link>
      </div>
    </section>
  );
}
