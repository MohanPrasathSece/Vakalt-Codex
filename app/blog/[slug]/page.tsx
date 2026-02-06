import Link from "next/link";
import { notFound } from "next/navigation";
import { fallbackPosts } from "../../../lib/blog-data";
import { sanityClient, hasSanityConfig } from "../../../lib/sanity.client";
import { postBySlugQuery, relatedPostsQuery } from "../../../lib/sanity.queries";

export const revalidate = 60;

type Props = {
  params: { slug: string };
};

type RelatedPost = {
  _id: string;
  title: string;
  slug: string;
  category?: string;
};

async function getPost(slug: string) {
  if (!hasSanityConfig) {
    return fallbackPosts.find((post) => post.slug === slug) ?? null;
  }

  try {
    return await sanityClient.fetch(postBySlugQuery, { slug });
  } catch (error) {
    return null;
  }
}

async function getRelated(slug: string) {
  if (!hasSanityConfig) {
    return fallbackPosts.filter((post) => post.slug !== slug).slice(0, 2);
  }

  try {
    return await sanityClient.fetch(relatedPostsQuery, { slug });
  } catch (error) {
    return fallbackPosts.filter((post) => post.slug !== slug).slice(0, 2);
  }
}

export default async function BlogArticlePage({ params }: Props) {
  const post = await getPost(params.slug);
  const related = (await getRelated(params.slug)) as RelatedPost[];

  if (!post) {
    notFound();
  }

  return (
    <section className="mx-auto w-full max-w-4xl px-6 py-20">
      <div className="space-y-6">
        <p className="text-xs uppercase tracking-[0.3em] text-charcoal">
          {post.category ?? "Litigation"}
        </p>
        <h1 className="font-serif text-4xl leading-tight md:text-5xl">
          {post.title}
        </h1>
        <div className="flex flex-wrap gap-6 text-xs uppercase tracking-wide text-charcoal">
          <span>{new Date(post.publishedAt).toDateString()}</span>
          <span>{post.readingTime ?? "5 min read"}</span>
        </div>
      </div>

      <div className="prose prose-lg mt-10 max-w-none text-charcoal">
        <p>
          {post.excerpt ??
            "VAKALT delivers legal clarity that empowers decisive outcomes. This insight explores the discipline, communication, and strategic alignment required to navigate litigation with confidence."}
        </p>
        <p>
          Our legal teams prioritize narrative clarity, evidence alignment, and
          stakeholder readiness. Every recommendation is designed to minimize
          uncertainty while strengthening courtroom posture.
        </p>
        <blockquote>
          Modern Legal Intelligence means every legal move is measured against
          client outcomes, not tradition.
        </blockquote>
        <p>
          When you partner with VAKALT, you gain access to a strategic litigation
          framework that is modern, calm, and performance-driven.
        </p>
      </div>

      <div className="mt-16 rounded-3xl border border-line bg-mist px-8 py-12 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-charcoal">
          Consultation
        </p>
        <h2 className="mt-4 font-serif text-3xl md:text-4xl">
          Ready for strategic legal guidance?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-charcoal">
          Schedule a consultation with VAKALT and receive a tailored legal action
          plan.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-flex bg-ink px-8 py-3 text-xs uppercase tracking-wide text-white transition hover:bg-charcoal"
        >
          Schedule Consultation
        </Link>
      </div>

      <div className="mt-20 border-t border-line pt-10">
        <h3 className="font-serif text-2xl">Related insights</h3>
        <div className="mt-6 grid gap-6">
          {related.map((item) => (
            <Link
              key={item._id}
              href={`/blog/${item.slug}`}
              className="flex items-center justify-between border-b border-line pb-4 text-lg"
            >
              <span>{item.title}</span>
              <span className="text-xs uppercase tracking-wide text-charcoal">
                {item.category}
              </span>
            </Link>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            datePublished: post.publishedAt,
            description: post.excerpt,
            author: {
              "@type": "Organization",
              name: "VAKALT",
            },
          }),
        }}
      />
    </section>
  );
}
