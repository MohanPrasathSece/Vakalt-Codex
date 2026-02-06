import BlogClient from "./BlogClient";
import { fallbackPosts } from "../../lib/blog-data";
import { sanityClient, hasSanityConfig } from "../../lib/sanity.client";
import { postsQuery } from "../../lib/sanity.queries";

export const revalidate = 60;

async function getPosts() {
  if (!hasSanityConfig) {
    return fallbackPosts;
  }

  try {
    const posts = await sanityClient.fetch(postsQuery);
    return posts.length ? posts : fallbackPosts;
  } catch (error) {
    return fallbackPosts;
  }
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20">
      <div className="space-y-6">
        <p className="text-xs uppercase tracking-[0.3em] text-charcoal">
          Insights
        </p>
        <h1 className="font-serif text-5xl md:text-6xl">
          Editorial legal intelligence.
        </h1>
        <p className="max-w-2xl text-lg text-charcoal">
          A premium knowledge hub that translates legal complexity into strategic
          clarity for founders, executives, and individuals.
        </p>
      </div>

      <div className="mt-16 grid gap-8 rounded-3xl border border-line bg-mist p-10 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-charcoal">
            Featured Insight
          </p>
          <h2 className="font-serif text-3xl md:text-4xl">
            {posts[0]?.title ?? "Litigation clarity for decisive leadership"}
          </h2>
          <p className="text-charcoal">
            {posts[0]?.excerpt ??
              "The frameworks VAKALT uses to align legal strategy with business outcomes."}
          </p>
        </div>
        <div className="border-l border-line pl-8 text-sm uppercase tracking-wide text-charcoal">
          <p className="mb-4">Category</p>
          <p>{posts[0]?.category ?? "Litigation"}</p>
          <p className="mt-4">Reading time</p>
          <p>{posts[0]?.readingTime ?? "6 min read"}</p>
        </div>
      </div>

      <div className="mt-16">
        <BlogClient posts={posts} />
      </div>
    </section>
  );
}
