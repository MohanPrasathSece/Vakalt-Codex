import ContactClient from "./ContactClient";

export const metadata = {
  title: "Contact VAKALT — Litigation Simplified",
  description: "Request premium legal counsel from VAKALT.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20">
      <div className="space-y-6">
        <p className="text-xs uppercase tracking-[0.3em] text-charcoal">
          Contact
        </p>
        <h1 className="font-serif text-5xl md:text-6xl">
          Confidential counsel, delivered with clarity.
        </h1>
        <p className="max-w-2xl text-lg text-charcoal">
          Speak with VAKALT to align on the right legal strategy and next steps.
        </p>
      </div>

      <div className="mt-16">
        <ContactClient />
      </div>
    </section>
  );
}
