export type BlogPost = {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  category: string;
  readingTime: string;
  excerpt: string;
  mainImage?: unknown;
};

export const fallbackPosts: BlogPost[] = [
  {
    _id: "1",
    title: "Decoding litigation timelines for business leaders",
    slug: "decoding-litigation-timelines",
    publishedAt: "2025-01-15",
    category: "Litigation",
    readingTime: "5 min read",
    excerpt:
      "A clear framework for anticipating litigation stages without operational disruption.",
  },
  {
    _id: "2",
    title: "Modern legal strategy for cross-border disputes",
    slug: "modern-legal-strategy",
    publishedAt: "2024-12-20",
    category: "Corporate",
    readingTime: "6 min read",
    excerpt:
      "How global businesses can align counsel, evidence, and risk communications.",
  },
  {
    _id: "3",
    title: "Property conflict resolution with clarity and speed",
    slug: "property-conflict-resolution",
    publishedAt: "2024-12-02",
    category: "Real Estate",
    readingTime: "4 min read",
    excerpt:
      "Minimizing exposure while protecting long-term asset value.",
  },
];

export const categories = [
  "All",
  "Litigation",
  "Corporate",
  "Real Estate",
  "Family Law",
  "Criminal Law",
];
