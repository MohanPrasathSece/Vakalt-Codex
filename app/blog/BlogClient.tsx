"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { BlogPost } from "../../lib/blog-data";
import { categories } from "../../lib/blog-data";

type Props = {
  posts: BlogPost[];
};

export default function BlogClient({ posts }: Props) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        activeCategory === "All" || post.category === activeCategory;
      const matchesQuery = post.title
        .toLowerCase()
        .includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [posts, activeCategory, query]);

  return (
    <div className="space-y-12">
      <div className="flex flex-col gap-6 border-b border-line pb-10 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`border px-4 py-2 text-xs uppercase tracking-wide transition ${
                activeCategory === category
                  ? "border-ink bg-ink text-white"
                  : "border-line text-charcoal hover:border-ink"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="w-full max-w-sm">
          <label className="text-xs uppercase tracking-wide text-charcoal">
            Search insights
          </label>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="mt-2 w-full border border-line bg-white px-4 py-2 text-sm focus:border-ink focus:outline-none"
            placeholder="Search by title"
          />
        </div>
      </div>

      <div className="space-y-8">
        {filtered.map((post) => (
          <article key={post._id} className="border-b border-line pb-8">
            <p className="text-xs uppercase tracking-[0.3em] text-charcoal">
              {post.category}
            </p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="mt-3 max-w-2xl text-charcoal">{post.excerpt}</p>
            <div className="mt-4 flex items-center gap-6 text-xs uppercase tracking-wide text-charcoal">
              <span>{new Date(post.publishedAt).toDateString()}</span>
              <span>{post.readingTime}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
